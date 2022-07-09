import { useEffect, useState } from "react";

function useModal() {
  const [open, setOpen] = useState(false);

  const handleToggleModal = () => setOpen((prevState) => !prevState);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, [open]);

  return {
    open,
    handleToggleModal,
  };
}

export default useModal;
