import React, { useEffect, useRef } from "react";
import { applyMaskedInput } from "@krozamdev/masked-password";
import useMaskedInputToggle from "./hooks/useMaskedInputToggle";

interface MaskedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeEvent: (originalValue: string) => void;
  maskCharacter?: string;
  showPassword?: boolean;
}

const InputMaskingPassword: React.FC<MaskedInputProps> = ({
  onChangeEvent,
  maskCharacter = "•",
  showPassword = false,
  ...props
}) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const maskedInputRef = useRef<ReturnType<typeof applyMaskedInput> | null>(
    null
  );

  useEffect(() => {
    if (inputRef.current) {
      maskedInputRef.current = applyMaskedInput(inputRef.current, {
        character: maskCharacter,
        onChange: onChangeEvent,
      });
    }

    return () => {
      if (maskedInputRef.current) {
        maskedInputRef.current.purgeDestroy();
      }
    };
  }, []);

  useMaskedInputToggle({ showPassword, maskedInputRef });

  return <input ref={inputRef} {...props} />;
};

export default InputMaskingPassword;
