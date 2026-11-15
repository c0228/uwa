
import React, { useEffect, useState } from 'react';
import {
  getForm,
  FORM_SUBMITTED,
  FORM_RESET,
} from 'e-ui-react';
import { FormFileValidate } from 'e-ui-react';
import axios from 'axios';
import { InfoIcon } from "@LibFormElements/common.js";
import './index.css';

export const ImageDropperAndViewer = ({
  name,
  label,
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
  const [formData, setFormData] = useState(undefined);
  const [isFileSubmitted, setIsFileSubmitted] = useState(false);
  const [fileNewUploadDetails, setFileNewUploadDetails] = useState([]);
  const [images, setImages] = useState([[], [], [], []]);

  const [validationResult, setValidationResult] = useState({
    validationSuccess: [],
    value: [],
    errorMessage: '',
  });

  const [isValidationTriggered, setIsValidationTriggered] = useState(false);

  const src = backend?.resultUrl;
  const FormMode = form?.[formName]?.mode;

  const FormErrorMessage =
    FormMode === FORM_SUBMITTED
      ? form?.[formName]?.[name]?.errorMessage
      : validationResult?.errorMessage;

  const hasError = !!FormErrorMessage;

  const isValid =
    !hasError &&
    validationResult?.validationSuccess?.includes('required');

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
      setImages([[], [], [], []]);
      setIsValidationTriggered(false);

      setValidationResult({
        validationSuccess: [],
        value: [],
        errorMessage: '',
      });

      const input = document.getElementById(name);

      if (input) {
        input.value = '';
      }

      FileUploadValidate([]);
    }
  }, [FormMode]);

  // Register form submit
  useEffect(() => {
    formContext?.afterSubmit(() => onSubmit());
  }, [formData]);

  // Auto submit after file selection
  useEffect(() => {
    if (autoSubmit === true && formData !== undefined) {
      onSubmit();
    }
  }, [formData]);

  // Validate and update form context
  const FileUploadValidate = async (value) => {
    let result = { value };

    if (validation !== undefined) {
      result = await FormFileValidate(validation, value);
    }

    setValidationResult(result);

    if (formName !== undefined && form?.[formName] !== undefined) {
      formContext?.setForm(formName, {
        [name]: result,
      });
    }

    return result;
  };

  // Select images
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

    // Validate immediately after selection
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

  // Open file selector
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
    // Validate before uploading
    setIsValidationTriggered(true);

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

      console.log('Upload Response', response);

      // Load uploaded images
      loadImages(response?.data?.[0]?.listFiles);

      // Complete upload progress
      setFileNewUploadDetails(
        fileUploaderDetails.map((file) => file.size)
      );

      // Update form context
      await FileUploadValidate(response?.data);

      if (afterUploadSuccess) {
        afterUploadSuccess(JSON.stringify(fileUploaderDetails));
      }

    } catch (error) {
      console.error('Image Upload Error:', error);
      setIsFileSubmitted(false);
    }
  };

  // Load uploaded images
  const loadImages = (listFiles) => {
    const imgList = ImageSetter(listFiles || []);
    setImages(imgList);
  };

  // Arrange images into four columns
  const ImageSetter = (imgList) => {
    const columnIndex = 4;
    let columnState = 0;

    const columns = Array.from(
      { length: columnIndex },
      () => []
    );

    for (let i = 0; i < imgList.length; i++) {
      if (columnState === columnIndex) {
        columnState = 0;
      }

      columns[columnState].push(imgList[i]);
      columnState++;
    }

    return columns;
  };

  // Validation CSS class
  const validationClass = !validateOnSubmit
    ? ''
    : hasError
      ? 'form-field-validation-invalid'
      : isValid
        ? 'form-field-validation-valid'
        : '';

  const labelClass = !validateOnSubmit
    ? 'form-label'
    : hasError
      ? 'form-label form-label-validation-invalid'
      : isValid
        ? 'form-label form-label-validation-valid'
        : 'form-label';

  return (
    <>
      {label && (
        <label className={labelClass}>
          <b>{label} :</b>
        </label>
      )}

      <input
        id={name}
        name={name}
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/webp"
        style={{ display: 'none' }}
        multiple
        onChange={onChangeHandler}
      />

      {/* Image Dropper + Gallery */}
      <div className="img-dropper-row">

        {/* Column 1 */}
        <div className="img-dropper-column">
          <div
            onClick={onClickHandler}
            onDrop={dropHandler}
            onDragOver={dragOverHandler}
          >
            <div
              className={`drag-area ${validationClass}`}
              style={{
                width: '100%',
                height: height + 'px',
              }}
            >
              <div className="icon">
                <i className="fa fa-cloud-upload"></i>
              </div>

              <span className="header">
                Drag & Drop
              </span>

              <span className="header">
                or <span className="button">browse</span>
              </span>

              <span className="support">
                Supports: JPEG, JPG, PNG, WEBP
              </span>
            </div>
          </div>

          {images[3].map((img, index) => (
            <img
              key={`image-column-3-${index}`}
              src={src + img}
              alt={`Uploaded image ${index + 1}`}
            />
          ))}
        </div>

        {/* Column 2 */}
        <div className="img-dropper-column">
          {images[0].map((img, index) => (
            <img
              key={`image-column-0-${index}`}
              src={src + img}
              alt={`Uploaded image ${index + 1}`}
            />
          ))}
        </div>

        {/* Column 3 */}
        <div className="img-dropper-column">
          {images[1].map((img, index) => (
            <img
              key={`image-column-1-${index}`}
              src={src + img}
              alt={`Uploaded image ${index + 1}`}
            />
          ))}
        </div>

        {/* Column 4 */}
        <div className="img-dropper-column">
          {images[2].map((img, index) => (
            <img
              key={`image-column-2-${index}`}
              src={src + img}
              alt={`Uploaded image ${index + 1}`}
            />
          ))}
        </div>

      </div>

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
          <i className="fa fa-check-circle"></i>
          {' '}Images selected successfully.
        </div>
      )}
    </>
  );
};
