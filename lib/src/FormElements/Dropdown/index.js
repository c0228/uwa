
import React, { useState, useEffect } from 'react';
import HtmlToReactParser from 'html-to-react';
import { FormInputValidate } from './validation.js';

import {
  Icon,
  Colors,
  getForm,
  FORM_SUBMITTED,
  FORM_RESET,
} from 'e-ui-react';

import { InfoIcon } from "@LibFormElements/common.js";
import './index.css';

export const Dropdown = ({
  width,
  label,
  name,
  type,
  placeholder,
  menu,
  layout,
  value,
  validation,
  onChange,
  valueholder,
  container
}) => {

  /**
   * container: {
   *   height: '',
   *   searchLabel: ''
   * }
   */

  const formContext = getForm();
  const formName = formContext?.name;
  const form = formContext?.form;

  const FormMode = form?.[formName]?.mode;
  const fieldData = form?.[formName]?.[name];

  const [status, setStatus] = useState(false);
  const [menuOptions, setMenuOptions] = useState(menu || []);
  const [searchValue, setSearchValue] = useState('');

  const initialValue = () => {
    if (type === 'multiple') {
      return value === undefined
        ? []
        : Array.isArray(value)
          ? value
          : value?.split(',');
    }

    return value === undefined ? '' : value;
  };

  const [dropDownValue, setDropdownValue] = useState(initialValue());

  const [isTouched, setIsTouched] = useState(false);

  const RegisterToForm = (result) => {
    formContext?.setForm(formName, {
      [name]: result
    });
  };

  // Initialize / update field value
  useEffect(() => {
    const initial = initialValue();

    setDropdownValue(initial);

    RegisterToForm({
      value: initial,
      validationSuccess: [],
      errorMessage: 'NOT_VALIDATED'
    });

    setIsTouched(false);

  }, [value]);

  // Search menu options
  const SearchData = (filterData) => {

    if (!filterData) {
      return menu || [];
    }

    const filteredMenu = menu?.reduce((result, item) => {

      const { header, options } = item;

      const headerMatches = header
        ?.toLowerCase()
        ?.includes(filterData.toLowerCase());

      const filteredOptions = options?.filter((option) =>
        option?.label
          ?.toLowerCase()
          ?.includes(filterData.toLowerCase())
      );

      if (headerMatches || filteredOptions?.length > 0) {
        result.push({
          ...item,
          options: headerMatches ? options : filteredOptions
        });
      } else if (item?.label?.toLowerCase()?.includes(filterData.toLowerCase())) {
        result.push(item);
      }

      return result;

    }, []);

    return filteredMenu || [];
  };

  useEffect(() => {
    setMenuOptions(SearchData(searchValue));
  }, [searchValue, menu]);

  // Validate dropdown value
  const DropdownValidate = async (currentValue = dropDownValue) => {

    let result = {
      value: currentValue,
      validationSuccess: [],
      errorMessage: ''
    };

    if (validation !== undefined) {

      const validationValue = Array.isArray(currentValue)
        ? currentValue
        : currentValue?.toString() || '';

      result = await FormInputValidate(
        validation,
        validationValue
      );
    }

    if (formName !== undefined && form?.[formName] !== undefined) {
      RegisterToForm(result);
    }

    if (onChange !== undefined) {
      onChange(result);
    }

    return result;
  };

  // Validate after user interaction
  useEffect(() => {

    if (isTouched) {
      DropdownValidate();
    }

  }, [dropDownValue]);

  // Reset form
  useEffect(() => {

    if (FormMode === FORM_RESET) {

      const initial = initialValue();

      setDropdownValue(initial);
      setIsTouched(false);
      setStatus(false);
      setSearchValue('');

      RegisterToForm({
        value: initial,
        validationSuccess: [],
        errorMessage: 'NOT_VALIDATED'
      });
    }

  }, [FormMode]);

  // Select an option
  const handleOptionSelect = (selectedValue) => {

    setIsTouched(true);

    if (type === 'multiple') {

      setDropdownValue((prevValue) => {

        const current = Array.isArray(prevValue)
          ? prevValue
          : [];

        if (current.includes(selectedValue)) {
          return current.filter((item) => item !== selectedValue);
        }

        return [...current, selectedValue];
      });

    } else {

      setDropdownValue(selectedValue);
      setStatus(false);
    }
  };

  // Get all available options recursively
  const getAllOptions = (items = []) => {

    return items.reduce((acc, item) => {

      if (item?.label) {
        acc.push(item.label);
      }

      if (item?.options) {
        acc.push(...getAllOptions(item.options));
      }

      return acc;

    }, []);
  };

  // Select all
  const handleSelectAll = () => {
    setIsTouched(true);
    setDropdownValue(getAllOptions(menu || []));
  };

  // Deselect all
  const handleDeselectAll = () => {
    setIsTouched(true);
    setDropdownValue([]);
  };

  // Highlight searched text
  const highlightText = (text) => {

    if (!text) return '';

    if (!searchValue) return text;

    const escapedSearch = searchValue.replace(
      /[.*+?^${}()|[\]\\]/g,
      '\\$&'
    );

    const html = text.replace(
      new RegExp(`(${escapedSearch})`, 'gi'),
      '<b>$1</b>'
    );

    const parser = new HtmlToReactParser.Parser();

    return parser.parse(html);
  };

  // Build menu options
  const buildMenuOptions = (items = []) => {

    return items.map((item, index) => {

      const selected = Array.isArray(dropDownValue)
        ? dropDownValue.includes(item.label)
        : dropDownValue === item.label;

      return (
        <React.Fragment key={`${item.label || item.header}-${index}`}>

          {item?.header && (
            <li>
              <h5 className="dropdown-header">
                {highlightText(item.header)}
              </h5>
            </li>
          )}

          {item?.label && (
            <li
              className={`dropdown-item curpoint ${
                type === 'multiple' && selected
                  ? 'dropdown-test'
                  : ''
              }`}
              onClick={() => handleOptionSelect(item.label)}
            >

              {highlightText(item.label)}

              {type === 'multiple' && selected && (
                <Icon
                  type="FontAwesome"
                  name="fa-check pull-right"
                  size="15"
                  color={Colors.success}
                />
              )}

            </li>
          )}

          {item?.options && buildMenuOptions(item.options)}

        </React.Fragment>
      );
    });
  };

  // Validation status
  const isValidated =
    fieldData?.errorMessage !== undefined &&
    fieldData?.errorMessage !== 'NOT_VALIDATED';

  const isErrorMessageExist =
    isValidated && !!fieldData?.errorMessage;

  const isValidationSuccess =
    isValidated && !isErrorMessageExist;

  const validateOnSubmit =
    FormMode === FORM_SUBMITTED || isTouched || isValidated;

  const displayValueSize =
    valueholder === undefined ? 2 : valueholder;

  const displayValue = () => {

    if (
      Array.isArray(dropDownValue)
        ? dropDownValue.length > 0
        : !!dropDownValue
    ) {

      if (Array.isArray(dropDownValue)) {

        return dropDownValue.length > displayValueSize
          ? dropDownValue.slice(0, displayValueSize).join(', ') +
            ', +' +
            (dropDownValue.length - displayValueSize)
          : dropDownValue.join(', ');
      }

      return dropDownValue;
    }

    return placeholder;
  };

  return (
    <>
      {label && (
        <label
          className={`form-label ${
            validateOnSubmit
              ? isErrorMessageExist
                ? 'form-label-validation-invalid'
                : isValidationSuccess
                  ? 'form-label-validation-valid'
                  : ''
              : ''
          }`}
        >
          <b>{label}:</b>
        </label>
      )}

      <div
        tabIndex={1}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setStatus(false);
          }
        }}
      >

        <div
          className="dropdown"
          style={{ width: width }}
        >

          <button
            type="button"
            className={`btn btn-outline-secondary form-control dropdown-toggle ${
              validateOnSubmit
                ? isErrorMessageExist
                  ? 'form-control-validation-invalid'
                  : isValidationSuccess
                    ? 'form-control-validation-valid'
                    : ''
                : ''
            }`}
            data-bs-toggle="dropdown"
            style={{
              width: '100%',
              textAlign: 'left',
              border: '1px solid #ccc',
              margin: '0px'
            }}
            onClick={() => setStatus(!status)}
          >

            <span style={{ paddingRight: '8px' }}>
              {displayValue()}
            </span>

            <Icon
              type="FontAwesome"
              name="fa-angle-down pull-right"
              size="15"
              color={Colors.dark}
            />

          </button>

          <ul
            className={`dropdown-menu ${
              status ? 'show' : ''
            }${layout === 'top' ? ' dropup-menu' : ''}`}
            data-popper-placement="top-start"
          >

            {/* Search */}
            <div className="input-group mb-0">

              <input
                className="form-control"
                placeholder={container?.searchLabel}
                value={searchValue}
                onChange={(event) => {
                  setSearchValue(event.target.value);
                }}
              />

              <button
                type="button"
                className="btn btn-secondary"
              >
                <Icon
                  type="FontAwesome"
                  name="fa-search"
                  size="12"
                  color={Colors.light}
                />
              </button>

            </div>

            {/* Select All / Deselect All */}
            {type === 'multiple' && (
              <div className="container-fluid">

                <div className="row">

                  <div
                    className="col-xl-6"
                    style={{ paddingRight: '0px' }}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      style={{
                        width: '100%',
                        borderRight: '0px',
                        borderTopRightRadius: '0px',
                        borderBottomRightRadius: '0px'
                      }}
                      onClick={handleSelectAll}
                    >
                      Select All
                    </button>
                  </div>

                  <div
                    className="col-xl-6"
                    style={{ paddingLeft: '0px' }}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      style={{
                        width: '100%',
                        borderTopLeftRadius: '0px',
                        borderBottomLeftRadius: '0px'
                      }}
                      onClick={handleDeselectAll}
                    >
                      Deselect All
                    </button>
                  </div>

                </div>

              </div>
            )}

            {/* Menu Options */}
            <div
              className="dropdown-scroll scroll"
              style={{
                maxHeight:
                  container?.height !== undefined
                    ? container.height
                    : '100px'
              }}
            >
              {buildMenuOptions(menuOptions)}
            </div>

          </ul>

        </div>

      </div>

      {/* Validation Error Message */}
      {validateOnSubmit && isErrorMessageExist && (
        <div
          align="right"
          className="form-feedback-validation-invalid"
          style={{ fontSize: '11px' }}
        >
          <InfoIcon /> {fieldData?.errorMessage}
        </div>
      )}

    </>
  );
};
