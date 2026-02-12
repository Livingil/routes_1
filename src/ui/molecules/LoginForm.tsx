import { Stack } from "@mantine/core";
import { type FormEvent, useState } from "react";
import { AppButton, AppPasswordInput, AppTextInput } from "../atoms";

interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (values: LoginFormValues) => void;
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <AppTextInput
          label="Email"
          placeholder="name@example.com"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          required
        />
        <AppPasswordInput
          label="Password"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          required
        />
        <AppButton type="submit" fullWidth>
          Login
        </AppButton>
      </Stack>
    </form>
  );
};
