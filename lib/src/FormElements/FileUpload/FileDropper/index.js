import React, { useEffect, useState } from "react";
import { ContainerFluid, Row, Col, Icon, ProgressBar, FormatBytes, getForm, FormFileValidate, FORM_SUBMITTED, FORM_RESET } from 'e-ui-react';
import axios from 'axios';
import './index.css';

export const FileDropperAndViewer = ({ label, name, height, autoSubmit, backend, validation, afterUploadSuccess }) => {
  const formContext = getForm();
  const formName = formContext?.name;
  const form = formContext?.form;

  const [fileUploaderDetails, setFileUploaderDetails] = useState([]);
  const [formData, setFormData] = useState();
  const [isFileSubmitted, setIsFileSubmitted] = useState(false);
  const [fileNewUploadDetails, setFileNewUploadDetails] = useState([]);

  const FormMode =  form?.[formName]?.mode;
  const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;

  useEffect(()=>{
    if( FormMode === FORM_RESET ){
      setFileUploaderDetails([]);
      setFormData([]);
      setIsFileSubmitted(false);
      setFileNewUploadDetails();
      FileUploadValidate([]);
    }
  }, [FormMode]);

  useEffect(()=>{
    FileUploadValidate([]);
  },[]);

  useEffect(() => {
    if (autoSubmit === true && formData !== undefined) {
      onSubmit();
    }
    formContext?.afterSubmit(() => onSubmit());
  }, [formData]);

  const onClickHandler = () => {
    document.getElementById(name).click();
  };

  const onChangeHandler = (event) => {
    const input = document.getElementById(name);
    console.log("onChangeHandler Triggered");
    console.log("input Files", input.files.length);
    let data = new FormData();
    data.append('TARGET_FILES_COUNT', input.files.length);
    let fileList = [];
    let fileUploadBar = [];
    for (let i = 0; i < input.files.length; i++) {
      const file = input.files[i];
      fileUploadBar.push(0);
      fileList.push({ name: file.name, size: file.size });
      data.append('TARGET_FILE_' + i, file);
    }
    data.append('TARGET_DIRECTORY', backend?.targetDirectory);
    setFileUploaderDetails(fileList);
    setFileNewUploadDetails(fileUploadBar);
    setFormData(data);
    console.log("data", data);
  };

  const dropHandler = (event) => {
    event.preventDefault();
    document.getElementById(name).files = event.dataTransfer.files;
    onChangeHandler(event);
  };

  const dragOverHandler = (event) => {
    event.preventDefault();
  };

  const progressCalculator = (loaded, total) => {
    const input = document.getElementById(name);
    const totalFiles = input.files.length;
    let fileUploadBar = [...fileNewUploadDetails];
    fileUploadBar = fileUploadBar.map((fillSize, index) => {
      const fileSize = fileUploaderDetails[index].size;
      const newFillSize = (parseFloat(fillSize) + parseFloat(loaded / totalFiles)).toFixed(2);
      return newFillSize < fileSize ? newFillSize : fileSize;
    });
    setFileNewUploadDetails(fileUploadBar);
  };

  const FileUploadValidate = async(response)=>{
    let result = { value: response };
    console.log("result[FileDropper1V]", result);
    // validations
    if(validation!==undefined){
      result = await FormFileValidate( validation, result?.value );
    }
    // form Data
    if (formName !== undefined && form?.[formName] !== undefined) {
      formContext?.setForm(formName, { [name]: result });
    }
  };

  const onSubmit = async () => {
    setIsFileSubmitted(true);
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        progressCalculator(loaded, total);
        console.log(`${FormatBytes(loaded)} of ${FormatBytes(total)}`);
      }
    };

    try {
      const response = await axios.post(backend?.apiUrl, formData, options);
      console.log(response?.data);
      setFileNewUploadDetails(fileUploaderDetails.map((file) => file.size));
      await FileUploadValidate(response?.data);
      // 
      if(afterUploadSuccess){ afterUploadSuccess(JSON.stringify(fileUploaderDetails)); }
    } catch (error) {
      console.error(error);
    }
  };

  const validateOnSubmit = ( (FormMode === FORM_SUBMITTED) || fileNewUploadDetails?.length > 0);
  const isErrorMessageExist = (FormErrorMessage?.length > 0);

  return (
    <>
     {label && (<label className={(validateOnSubmit ?
      ((isErrorMessageExist > 0) ? "form-label form-label-validation-invalid" :
        "form-label form-label-validation-valid")
      : "form-label")}><b>{label} :</b></label>)}
      <input id={name} name={name} type="file" style={{ display: 'none' }} multiple onChange={(event) => onChangeHandler(event)} />
      <div onClick={onClickHandler} onDrop={(event) => dropHandler(event)} onDragOver={(event) => dragOverHandler(event)}>
        <div className="drag-area" style={{ height: height + 'px' }}>
          <div className="icon">
            <i className="fa fa-cloud-upload"></i>
          </div>
          <span className="header">Drag & Drop</span>
          <span className="header">or <span className="button">browse</span></span>
          {/*<span className="support">Supports: JPEG, JPG, PNG</span>*/}
        </div>
      </div>
      {fileUploaderDetails.length > 0 && (
        <ContainerFluid className="mtop15p" style={{ backgroundColor: 'rgb(249 249 249)', padding: '15px' }}>
          {fileUploaderDetails.map((file, index) => {
            let fileName = file.name;
            let fileSize = file.size;
            let fileExtension = fileName.substring(fileName.lastIndexOf('.'));
            let progressSize = fileNewUploadDetails[index];
            let progressPercent = ((progressSize / fileSize) * 100).toFixed(2);
            return (
              <Row key={index} className="mbot15p" style={{ border: '1px solid #ccc', padding: '15px', margin: '5px' }}>
                <Col align="center" xl={1} md={1}>
                  <Icon type="FontAwesome" name={(fileExtension === '.mkv') ? "fa-file-video-o" :
                    (fileExtension === '.mp3') ? "fa-file-audio-o" :
                      "fa-file-text-o"} size="36" />
                </Col>
                <Col xl={11} md={11} style={!isFileSubmitted ? { display: 'flex', alignItems: 'center' } : {}}>
                  <div><b>{fileName}</b></div>
                  {isFileSubmitted && (
                    (progressPercent < 100) ? (
                      <>
                        <div><ProgressBar type="primary" progress={progressPercent} height="8" /></div>
                        <div>{FormatBytes(progressSize)} of {FormatBytes(fileSize)} | {progressPercent}%</div>
                      </>
                    ) : (
                      <div align="right" style={{ color: '#777' }}><b>Uploaded File Successfully</b></div>
                    )
                  )}
                </Col>
              </Row>
            );
          })}
        </ContainerFluid>
      )}
      {((validateOnSubmit) && isErrorMessageExist) &&
        <div align="right" className="form-feedback-validation-invalid">
          {FormErrorMessage}</div>
      }
    </>
  );
};
