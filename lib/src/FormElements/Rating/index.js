import React, { useState, useCallback, useEffect } from 'react';
import { Icon, Card, getForm, FORM_RESET } from 'e-ui-react';

export const Rating = ({ name, size, colors, position, value, validation }) => {
 const [isClicked, setClicked] = useState(false);
 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 const [ratingValue, setRatingValue] = useState(
  value !== undefined ? value : 0
 );
 const FormMode = form?.[formName]?.mode;

 useEffect(() => {
  handleValidation(ratingValue);
 }, [ratingValue]);

 useEffect(() => {
  console.log('FormMode', FormMode);
  if (FormMode === FORM_RESET) {
   setRatingValue(value);
  }
 }, [FormMode]);

 const handleValidation = useCallback(
  async (ratingValue) => {
   let result = { value: ratingValue };
   // form Data
   if (formName !== undefined && form?.[formName] !== undefined) {
    formContext?.setForm(formName, { [name]: result });
   }
   console.log('formContext', formContext);
  },
  [form, formName, name, validation]
 );

 const ColorManager = (id) => {
  let color = colors.default[0];
  for (const selectObj of colors.onSelect) {
   for (const key in selectObj) {
    const values = key?.split(',')?.map((s) => s.trim());
    if (values?.includes(id?.toString())) {
     color = selectObj?.[key];
     return color;
    } else if (key?.includes('T')) {
     const [start, end] = key?.split('T')?.map((s) => s.trim());
     if (id >= parseInt(start) && id <= parseInt(end)) {
      color = selectObj?.[key];
      return color;
     }
    } else if (id == key) {
     color = selectObj?.[key];
     return color;
    }
   }
  }
  return color;
 };

 const isStatic =
  position !== undefined && position?.toLowerCase() === 'static';
 return (
  <>
   {Array.from({ length: size }).map((_, index) => {
    const data = index + 1;
    return (
     <Icon
      key={index}
      type="FontAwesome"
      name={data <= ratingValue ? 'fa-star' : 'fa-star-o'}
      size={20}
      style={{ marginRight: '5px', color: ColorManager(ratingValue) }}
      onMouseEnter={() => {
       if (!isStatic) {
        setRatingValue(data);
        setClicked(false);
       }
      }}
      onMouseLeave={() => {
       if (!isStatic && !isClicked) {
        setRatingValue(value);
       }
      }}
      onClick={() => {
       if (!isStatic) {
        setClicked(true);
        setRatingValue(data);
       }
      }}
     />
    );
   })}
  </>
 );
};
