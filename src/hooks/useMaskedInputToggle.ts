import { useEffect, MutableRefObject } from "react";

interface UseMaskedInputToggleOptions {
  showPassword: boolean;
  maskedInputRef: MutableRefObject<{
    destroy: () => void;
    addEvent: () => void;
  } | null>;
}

const useMaskedInputToggle = ({
  showPassword,
  maskedInputRef,
}: UseMaskedInputToggleOptions) => {
  useEffect(() => {
    if (maskedInputRef.current) {
      if (showPassword) {
        maskedInputRef.current.destroy();
      } else {
        maskedInputRef.current.addEvent();
      }
    }
  }, [showPassword, maskedInputRef]);
};

export default useMaskedInputToggle;
