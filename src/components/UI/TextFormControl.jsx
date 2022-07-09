import React from "react";

function TextFormControl({ Icon, textareaProps, defaultValue }) {
  return (
    <label className="flex items-start space-x-2">
      <Icon className="primary-icon" />
      <textarea
        {...textareaProps}
        defaultValue={defaultValue}
        className="w-full h-20 resize-none p-2 hide-scrollbar bg-transparent outline-none  border !border-neutral-800 rounded-2xl"></textarea>
    </label>
  );
}

export default TextFormControl;
