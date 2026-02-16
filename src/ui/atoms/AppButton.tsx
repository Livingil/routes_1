import { Button, type ButtonProps } from "@mantine/core";
import type { ButtonHTMLAttributes, ElementType } from "react";

type AppButtonProps = ButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    component?: ElementType | any;
    to?: string;
  };

export const AppButton = (props: AppButtonProps) => {
  return <Button radius="md" {...props} />;
};
