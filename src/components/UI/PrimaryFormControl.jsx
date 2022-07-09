import React from "react";

function PrimaryFormControl({ Icon, inputProps }) {
  return (
    <label className="flex items-center space-x-2">
      <Icon className="primary-icon" />
      <input
        {...inputProps}
        className="flex-grow w-full p-2 text-xl bg-transparent outline-none !border-slate-900 rounded-2xl"
      />
    </label>
  );
}

export default PrimaryFormControl;
