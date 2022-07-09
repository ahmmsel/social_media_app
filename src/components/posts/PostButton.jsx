import React from "react";

function PostButton({
  Icon,
  total,
  onClick,
  disabled,
  onClickIcon,
  onClickTitle,
  title,
  additionalStyle,
}) {
  return (
    <div
      className="group flex items-center space-x-1 hover:text-pink-900 transition-all duration-200"
      onClick={onClick}>
      <Icon
        className={
          "primary-icon rounded-full p-1 group-hover:bg-neutral-800 " +
          additionalStyle
        }
        role="button"
        disabled={disabled}
        onClick={onClickIcon}
      />
      <p className="font-medium">{total > 0 && total}</p>
      <p className="capitalize" role="button" onClick={onClickTitle}>
        {title}
      </p>
    </div>
  );
}

export default PostButton;
