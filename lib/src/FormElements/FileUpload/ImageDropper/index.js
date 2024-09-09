import React, { useEffect, useState }  from "react";
import { ContainerFluid, Row, Col, Icon, ProgressBar, FormatBytes, getForm, FormFileValidate, FORM_SUBMITTED, FORM_RESET  } from 'e-ui-react';
import axios from 'axios';
import './index.css';

export const ImageDropperAndViewer = ({ name, label, height, autoSubmit, backend, validation, afterUploadSuccess })=>{
    const formContext = getForm();
    const formName = formContext?.name;
    const form = formContext?.form;

    const [ fileUploaderDetails, setFileUploaderDetails ] = useState([]);
    const [ formData, setFormData ] = useState();
    const [ isFileSubmitted, setIsFileSubmitted ] = useState(false);
    const [ fileNewUploadDetails, setFileNewUploadDetails ] = useState([]); 

    const src=backend?.resultUrl;
    const [images, setImages ] = useState([[],[],[],[]]);

    const FormMode =  form?.[formName]?.mode;
    const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;

    useEffect(()=>{
      if( FormMode === FORM_RESET ){
         setFileUploaderDetails([]);
         setFormData();
         setIsFileSubmitted( false );
         setFileNewUploadDetails([]);
      }
    }, [FormMode]);

    useEffect(()=>{
      FileUploadValidate([]);
    },[]);

    useEffect(()=>{
      if(autoSubmit===true && formData!==undefined){ onSubmit(); }
      formContext?.afterSubmit(()=>onSubmit());
    },[formData]);
   
    useEffect(()=>{
      console.log("images", images);
    },[images]);

    const onClickHandler =()=>{
       document.getElementById(name).click();
    };
   
    const onChangeHandler=(event)=>{
      console.log('Triggered');
      const input = document.getElementById(name);
      let data = new FormData();
       data.append('TARGET_FILES_COUNT', input.files.length);
       let fileList = [];
       let fileUploadBar = [];
       for(let i=0;i<input.files.length;i++){
         const file = input.files[i];
         fileUploadBar.push(0);
         fileList.push({ name: file.name, size: file.size});
        data.append('TARGET_FILE_'+i, file);
       }
       data.append('TARGET_DIRECTORY', backend?.targetDirectory);
       setFileUploaderDetails(fileList);
       setFileNewUploadDetails(fileUploadBar);
       setFormData(data);
    };
   
    const dropHandler=(event)=>{
       event.preventDefault();
       document.getElementById(name).files = event.dataTransfer.files;
       onChangeHandler(event);
    };
     
    const dragOverHandler=(event)=>{
       event.preventDefault();
    };
   
    const progressCalculator = (loaded, total)=>{
      const input = document.getElementById(name);
     const totalFiles = input.files.length;
     let fileUploadBar = [...fileNewUploadDetails];
     fileUploaderDetails.map((file,index)=>{
      let fileSize = file.size;
      const fillSize = fileUploadBar[index];
      const newFillSize = (parseFloat(fillSize)+parseFloat(loaded/totalFiles)).toFixed(2);
      if(newFillSize<fileSize){
         fileUploadBar[index] = newFillSize;
      } else {
         fileUploadBar[index] = fileSize;
      }
      setFileNewUploadDetails(fileUploadBar);
     });
    };
   
    const onSubmit=async()=>{
      setIsFileSubmitted(true);
      const options = {
         onUploadProgress: (progressEvent)=>{
            const { loaded, total } = progressEvent;
            progressCalculator(loaded, total);
            console.log(`${FormatBytes(loaded)} of ${FormatBytes(total)}`);
         }
      };
   
      const response = await axios.post(backend?.apiUrl, formData, options, {
         headers: {
            'content-type': 'multipart/form-data'
         }
       });

       console.log("Upload Response", response);

       loadImages(response?.data[0]?.listFiles);
       setFileNewUploadDetails(fileUploaderDetails.map((file)=>file.size));
       await FileUploadValidate(response?.data); 

       if(afterUploadSuccess){ afterUploadSuccess(JSON.stringify(fileUploaderDetails)); }
    };

    const loadImages = (listFiles)=>{
      let imgList = ImageSetter(listFiles);
      console.log(imgList);
      setImages(imgList);
    };

    const FileUploadValidate = async(response)=>{
      let existValue = form?.[formName]?.[name]?.value;
      let result = { value: response };
      if(existValue!==undefined){
         result = { value: [...existValue, response] };
      } 
      // console.log("result[ImageDropper1V]", result);
      // validations
      if(validation!==undefined){
        result = await FormFileValidate( validation, result?.value );
      }
      // form Data
      if (formName !== undefined && form?.[formName] !== undefined) {
        formContext?.setForm(formName, { [name]: result });
      }
    };
  

   /*const imgList = ['wedding.jpg','underwater.jpg','wedding.jpg','underwater.jpg',
   'rocks.jpg','ocean.jpg','rocks.jpg','ocean.jpg','wedding.jpg','underwater.jpg','wedding.jpg','underwater.jpg',
   'rocks.jpg','ocean.jpg','rocks.jpg','ocean.jpg','wedding.jpg','underwater.jpg','wedding.jpg','underwater.jpg',
   'rocks.jpg','ocean.jpg','rocks.jpg','ocean.jpg']; */
   
   const ImageSetter = (imgList)=>{
     let columnIndex = 4;
     let columnState = 0;
     let columns = [];
     // Initial State
     for(let j=0;j<columnIndex;j++){ columns[j]=[]; }
     // 
     for(let i=0;i<imgList?.length;i++){
      if(columnState===columnIndex){ columnState=0; }
      columns[columnState].push(imgList[i]);
      columnState++;
     }
     return columns;
   };
   // .......

   const validateOnSubmit = ( (FormMode === FORM_SUBMITTED) || fileNewUploadDetails?.length > 0);
   const isErrorMessageExist = (FormErrorMessage?.length > 0);

    return (<>
      {label && (<label className={(validateOnSubmit ?
      ((isErrorMessageExist > 0) ? "form-label form-label-validation-invalid" :
        "form-label form-label-validation-valid")
      : "form-label")}><b>{label}:</b></label>)}
      <input id={name} name={name} type="file" style={{ display:'none' }} multiple onChange={(event)=>onChangeHandler(event)} />
      <div className="img-dropper-row"> 
      <div className="img-dropper-column">
         <div onClick={onClickHandler} onDrop={(event)=>dropHandler(event)} 
            onDragOver={(event)=>dragOverHandler(event)}>
            <div className="drag-area" style={{ width:'100%', height: height+'px'}}>
               <div className="icon">
                  <i className="fa fa-cloud-upload"></i>
               </div>
               <span className="header">Drag & Drop</span>
               <span className="header">or <span className="button">browse</span></span>
               <span className="support">Supports: JPEG, JPG, PNG</span>
            </div>
         </div>
         <div>

         </div>
         {images[3].map(img=><img src={src+img} />)}
      </div>
      <div className="img-dropper-column">
         {images[0].map(img=><img src={src+img} />)}
      </div>  
      <div className="img-dropper-column">
         {images[1].map(img=><img src={src+img} />)}
      </div>
      <div className="img-dropper-column">
         {images[2].map(img=><img src={src+img} />)}
      </div>
   </div>
   {((validateOnSubmit) && isErrorMessageExist) &&
        <div align="right" className="form-feedback-validation-invalid">
          {FormErrorMessage}</div>
   }
    </>);
  };