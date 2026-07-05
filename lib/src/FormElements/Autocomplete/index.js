/**
 * Autocomplete supports all modes:
 *
 * Mode-1: Static local array + local filtering
 * Mode-2: Initial API-loaded array + local filtering
 * Mode-3A: Live API search → NO internal filtering
 * Mode-3B: Live API search → WITH internal filtering
 */

import React, { useState, useEffect, useRef } from "react";
import {
  FormInputValidate,
  KeyPressValidate,
  getForm,
  FORM_SUBMITTED,
  FORM_RESET,
} from "e-ui-react";
import "./index.css";
import { InfoIcon } from "@LibFormElements/common.js";

/* ---------------------------------------------------------------
   ⭐ Extract JSX inner text
----------------------------------------------------------------- */
function getTextFromJSX(node) {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);

  if (React.isValidElement(node)) {
    return React.Children.toArray(node.props.children)
      .map((child) => getTextFromJSX(child))
      .join(" ");
  }
  return "";
}

/* ---------------------------------------------------------------
   ⭐ Highlight text (skipping data-no-highlight)
----------------------------------------------------------------- */
function highlightJSX(node, query) {
  if (!query || !node) return node;

  if (typeof node === "string") {
    const regex = new RegExp(`(${query})`, "gi");
    return node.split(regex).map((part, i) =>
      regex.test(part) ? <b key={i}>{part}</b> : part
    );
  }

  if (React.isValidElement(node)) {
    if (node.props?.["data-no-highlight"]) return node;

    const children = React.Children.map(node.props.children, (child) =>
      highlightJSX(child, query)
    );
    return React.cloneElement(node, { ...node.props }, children);
  }
  return node;
}

/* ---------------------------------------------------------------
   ⭐ Convert any item to JSX
----------------------------------------------------------------- */
function getJSXItem(item) {
  if (React.isValidElement(item)) return item;
  return typeof item === "string" ? item : String(item);
}

/* ---------------------------------------------------------------
   ⭐ Main Autocomplete Component
----------------------------------------------------------------- */
export const Autocomplete = ({
  name,
  label,
  placeholder,
  value,
  autoCompleteData = [],
  validation,
  onChange,
  apiFilterMode = "A" // "A" → show API results as is | "B" → filter API results also
}) => {
  const formContext = getForm();
  const formName = formContext?.name;
  const form = formContext?.form;

  const [filteredData, setFilteredData] = useState([]);
  const [show, setShow] = useState(false);
  const [autoCompleteValue, setAutoCompleteValue] = useState(value || "");

  const apiTriggeredRef = useRef(false);
  const lastTypedValueRef = useRef("");

  /* ---------------------------------------------------------------
     ⭐ Detect API updates (Mode-3)
  ----------------------------------------------------------------- */
  useEffect(() => {
    if (apiTriggeredRef.current) {
      if (autoCompleteValue.trim() === "") {
        setFilteredData([]);
        setShow(false);
        return;
      }

      // Mode-3A: Show API results exactly
      if (apiFilterMode === "A") {
        setFilteredData(autoCompleteData);
        setShow(true);
        return;
      }

      // Mode-3B: Re-filter API results
      if (apiFilterMode === "B") {
        const lower = autoCompleteValue.toLowerCase();
        const refined = autoCompleteData.filter((item) => {
          if (typeof item === "string") return item.toLowerCase().includes(lower);
          if (React.isValidElement(item)) {
            const txt = item.props?.label || getTextFromJSX(item);
            return txt.toLowerCase().includes(lower);
          }
          return false;
        });

        setFilteredData(refined);
        setShow(true);
        return;
      }
    }
    // eslint-disable-next-line
  }, [autoCompleteData]);

  /* ---------------------------------------------------------------
     ⭐ Normal local filtering (Mode-1 & Mode-2)
  ----------------------------------------------------------------- */
  const DataFilter = (val, showDropdown) => {
  setAutoCompleteValue(val);

  if (!val.trim()) {
    setFilteredData([]);
    setShow(false);
    apiTriggeredRef.current = false;
    return;
  }

  const lower = val.toLowerCase();

  // Filter from the current autoCompleteData
  const filtered = (autoCompleteData || []).filter((item) => {
    if (typeof item === "string") return item.toLowerCase().includes(lower);
    if (React.isValidElement(item)) {
      const txt = item.props?.label || getTextFromJSX(item);
      return txt.toLowerCase().includes(lower);
    }
    return false;
  });

  setFilteredData(filtered);

  // Show dropdown only if filtered has something
  setShow(filtered.length > 0 && showDropdown);
};


  /* ---------------------------------------------------------------
     ⭐ Handle Input Change
  ----------------------------------------------------------------- */
  const handleInputChange = (val) => {
    lastTypedValueRef.current = val;

    // Always update internal value & filtered dropdown
    DataFilter(val, true);

    // Trigger external onChange if provided
    if (onChange) {
        apiTriggeredRef.current = true;
        setTimeout(() => onChange(val), 0); // async to avoid blocking UI
    } else {
        apiTriggeredRef.current = false;
    }
};


  /* ---------------------------------------------------------------
     ⭐ Validation
  ----------------------------------------------------------------- */
  const autoCompleteValidate = async () => {
    let result = { value: autoCompleteValue };
    if (validation) {
      result = await FormInputValidate(validation, autoCompleteValue);
    }

    if (formName && form?.[formName]) {
      formContext?.setForm(formName, { [name]: result });
    }
  };

  useEffect(() => {
    autoCompleteValidate();
  }, [autoCompleteValue]);

  const FormMode = form?.[formName]?.mode;
  const FormError = form?.[formName]?.[name]?.errorMessage;
  const showValidation = FormMode === FORM_SUBMITTED || autoCompleteValue;

  /* ---------------------------------------------------------------
     ⭐ Render
  ----------------------------------------------------------------- */
  return (
    <>
      {label && (
        <label
          className={
            showValidation
              ? FormError
                ? "form-label form-label-validation-invalid"
                : "form-label form-label-validation-valid"
              : "form-label"
          }
        >
          <b>{label} :</b>
        </label>
      )}

      <div
        className="dropdown"
        tabIndex={1}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setShow(false);
        }}
      >
        <input
          type="text"
          name={name}
          className={
            showValidation
              ? FormError
                ? "form-control dropdown-toggle form-control-validation-invalid"
                : "form-control dropdown-toggle form-control-validation-valid"
              : "form-control dropdown-toggle"
          }
          placeholder={placeholder}
          value={autoCompleteValue}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyPress={(e) => KeyPressValidate(e, validation?.pattern?.value)}
        />

        {show && autoCompleteValue.trim() && filteredData.length > 0 && (
          <ul className="dropdown-menu autocomplete-dropdown show">
            {filteredData.map((item, i) => {
              const jsxItem = getJSXItem(item);
              const highlighted = highlightJSX(jsxItem, autoCompleteValue);

              return (
                <li
                  key={i}
                  onClick={() => {
                    const txt =
                      typeof item === "string"
                        ? item
                        : item.props?.label || getTextFromJSX(item);

                    apiTriggeredRef.current = false;
                    DataFilter(txt, false);
                  }}
                >
                  <a className="dropdown-item">{highlighted}</a>
                </li>
              );
            })}
          </ul>
        )}

        {showValidation && FormError && (
          <div align="right" className="form-feedback-validation-invalid" style={{ fontSize:'11px' }}>
            <InfoIcon /> {FormError}
          </div>
        )}
      </div>
    </>
  );
};
