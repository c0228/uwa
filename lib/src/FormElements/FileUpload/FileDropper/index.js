
import React, { useEffect, useState } from 'react';
import {
  ContainerFluid,
  Row,
  Col,
  Icon,
  ProgressBar,
  FormatBytes,
  getForm,
  FormFileValidate,
  FORM_SUBMITTED,
  FORM_RESET,
} from 'e-ui-react';
import axios from 'axios';
import { InfoIcon } from "@LibFormElements/common.js";
import './index.css';

export const FileDropperAndViewer = ({
  label,
  name,
  height,
  autoSubmit,
  backend,
  validation,
  afterUploadSuccess,
}) => {
  const formContext = getForm();
  const formName = formContext?.name;
  const form = formContext?.form;

  const [fileUploaderDetails, setFileUploaderDetails] = useState([]);
  const [formData, setFormData] = useState();
  const [isFileSubmitted, setIsFileSubmitted] = useState(false);
  const [fileNewUploadDetails, setFileNewUploadDetails] = useState([]);
  const [validationResult, setValidationResult] = useState({
    validationSuccess: [],
    value: [],
    errorMessage: '',
  });
  const [isValidationTriggered, setIsValidationTriggered] = useState(false);

  const FormMode = form?.[formName]?.mode;
  const FormErrorMessage = FormMode === FORM_SUBMITTED
    ? form?.[formName]?.[name]?.errorMessage
    : validationResult?.errorMessage;

  const hasError = !!FormErrorMessage;
  const isValid = !hasError && validationResult?.validationSuccess?.includes('required');

  const validateOnSubmit =
    isValidationTriggered ||
    FormMode === FORM_SUBMITTED ||
    fileUploaderDetails.length > 0;

  // Reset field
  useEffect(() => {
    if (FormMode === FORM_RESET) {
      setFileUploaderDetails([]);
      setFormData(undefined);
      setIsFileSubmitted(false);
      setFileNewUploadDetails([]);
      setIsValidationTriggered(false);

      setValidationResult({
        validationSuccess: [],
        value: [],
        errorMessage: '',
      });

      if (document.getElementById(name)) {
        document.getElementById(name).value = '';
      }

      FileUploadValidate([]);
    }
  }, [FormMode]);

  // Register form submit
  useEffect(() => {
    formContext?.afterSubmit(() => onSubmit());
  }, [formData]);

  // Validate files and update form context
  const FileUploadValidate = async (files) => {
    let result = { value: files };

    if (validation !== undefined) {
      result = await FormFileValidate(validation, files);
    }

    setValidationResult(result);

    if (formName !== undefined && form?.[formName] !== undefined) {
      formContext?.setForm(formName, { [name]: result });
    }

    return result;
  };

  // File selection
  const onChangeHandler = async (event) => {
    const input = document.getElementById(name);
    const files = Array.from(input.files || []);

    const fileList = files.map((file) => ({
      name: file.name,
      size: file.size,
    }));

    const uploadData = new FormData();

    uploadData.append('TARGET_FILES_COUNT', files.length);

    files.forEach((file, index) => {
      uploadData.append('TARGET_FILE_' + index, file);
    });

    uploadData.append('TARGET_DIRECTORY', backend?.targetDirectory);

    setFileUploaderDetails(fileList);
    setFileNewUploadDetails(files.map(() => 0));
    setFormData(uploadData);
    setIsFileSubmitted(false);

    // Validate immediately after file selection
    setIsValidationTriggered(true);
    await FileUploadValidate(fileList);
  };

  // Drag and drop
  const dropHandler = (event) => {
    event.preventDefault();

    const input = document.getElementById(name);
    input.files = event.dataTransfer.files;

    onChangeHandler(event);
  };

  const dragOverHandler = (event) => {
    event.preventDefault();
  };

  const onClickHandler = () => {
    document.getElementById(name).click();
  };

  // Upload progress
  const progressCalculator = (loaded, total) => {
    const totalFiles = fileUploaderDetails.length;

    if (!totalFiles) return;

    setFileNewUploadDetails((previous) =>
      previous.map((fillSize, index) => {
        const fileSize = fileUploaderDetails[index].size;
        const newFillSize =
          parseFloat(fillSize) + parseFloat(loaded / totalFiles);

        return Math.min(newFillSize, fileSize);
      })
    );
  };

  // Submit / Upload
  const onSubmit = async () => {
    setIsValidationTriggered(true);

    // Validate before uploading
    const result = await FileUploadValidate(fileUploaderDetails);

    if (result?.errorMessage) {
      return;
    }

    if (!formData || fileUploaderDetails.length === 0) {
      return;
    }

    setIsFileSubmitted(true);

    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;

        if (total) {
          progressCalculator(loaded, total);
        }

        console.log(
          `${FormatBytes(loaded)} of ${FormatBytes(total || loaded)}`
        );
      },
    };

    try {
      const response = await axios.post(
        backend?.apiUrl,
        formData,
        options
      );

      console.log(response?.data);

      setFileNewUploadDetails(
        fileUploaderDetails.map((file) => file.size)
      );

      await FileUploadValidate(fileUploaderDetails);

      if (afterUploadSuccess) {
        afterUploadSuccess(JSON.stringify(fileUploaderDetails));
      }

    } catch (error) {
      console.error(error);
      setIsFileSubmitted(false);
    }
  };

  // Validation CSS
  const validationClass = !validateOnSubmit
    ? ''
    : hasError
      ? 'form-field-validation-invalid'
      : isValid
        ? 'form-field-validation-valid'
        : '';

  return (
    <>
      {label && (
        <label
          className={
            !validateOnSubmit
              ? 'form-label'
              : hasError
                ? 'form-label form-label-validation-invalid'
                : isValid
                  ? 'form-label form-label-validation-valid'
                  : 'form-label'
          }
        >
          <b>{label} :</b>
        </label>
      )}

      <input
        id={name}
        name={name}
        type="file"
        style={{ display: 'none' }}
        multiple
        onChange={onChangeHandler}
      />

      <div
        onClick={onClickHandler}
        onDrop={dropHandler}
        onDragOver={dragOverHandler}
        className={validationClass}
      >
        <div
          className={`drag-area ${validationClass}`}
          style={{ height: height + 'px' }}
        >
          <div className="icon">
            <i className="fa fa-cloud-upload"></i>
          </div>

          <span className="header">Drag & Drop</span>

          <span className="header">
            or <span className="button">browse</span>
          </span>
        </div>
      </div>

      {fileUploaderDetails.length > 0 && (
        <ContainerFluid
          className="mtop15p"
          style={{
            backgroundColor: 'rgb(249 249 249)',
            padding: '15px',
          }}
        >
          {fileUploaderDetails.map((file, index) => {
            const fileName = file.name;
            const fileSize = file.size;
            const fileExtension = fileName.substring(
              fileName.lastIndexOf('.')
            );

            const progressSize = fileNewUploadDetails[index] || 0;
            const progressPercent = fileSize > 0
              ? ((progressSize / fileSize) * 100).toFixed(2)
              : 100;

            return (
              <Row
                key={index}
                className="mbot15p"
                style={{
                  border: '1px solid #ccc',
                  padding: '15px',
                  margin: '5px',
                }}
              >
                <Col align="center" xl={1} md={1}>
                  <Icon
                    type="FontAwesome"
                    name={
                      fileExtension === '.mkv'
                        ? 'fa-file-video-o'
                        : fileExtension === '.mp3'
                          ? 'fa-file-audio-o'
                          : 'fa-file-text-o'
                    }
                    size="36"
                  />
                </Col>

                <Col
                  xl={11}
                  md={11}
                  style={
                    !isFileSubmitted
                      ? { display: 'flex', alignItems: 'center' }
                      : {}
                  }
                >
                  <div>
                    <b>{fileName}</b>
                  </div>

                  {isFileSubmitted && (
                    progressPercent < 100 ? (
                      <>
                        <div>
                          <ProgressBar
                            type="primary"
                            progress={progressPercent}
                            height="8"
                          />
                        </div>

                        <div>
                          {FormatBytes(progressSize)} of{' '}
                          {FormatBytes(fileSize)} | {progressPercent}%
                        </div>
                      </>
                    ) : (
                      <div align="right" style={{ color: '#777' }}>
                        <b>Uploaded File Successfully</b>
                      </div>
                    )
                  )}
                </Col>
              </Row>
            );
          })}
        </ContainerFluid>
      )}

      {/* Error message */}
      {validateOnSubmit && hasError && (
        <div
          align="right"
          className="form-feedback-validation-invalid"
          style={{ fontSize: '11px' }}
        >
          <InfoIcon /> {FormErrorMessage}
        </div>
      )}

      {/* Success message */}
      {validateOnSubmit && isValid && (
        <div
          align="right"
          className="form-feedback-validation-valid"
          style={{ fontSize: '11px' }}
        >
          <i className="fa fa-check-circle"></i> File selected successfully.
        </div>
      )}
    </>
  );
};
