import { useState } from "react";
import { Input } from "../Input";

export function Password() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function changePasswordVisibility() {
    setShowPassword((current) => !current);
  }

  return (
    <Input
      prefixIcon="lock"
      suffixIcon={showPassword ? "eye-off" : "eye"}
      onPressSuffix={changePasswordVisibility}
      secureTextEntry={!showPassword}
    />
  );
}
