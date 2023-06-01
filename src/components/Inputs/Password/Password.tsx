import { useState } from "react";
import { Input } from "..";

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
    />
  );
}
