import { Anchor, type AnchorProps } from "@mantine/core";
import { Link, type LinkProps } from "react-router-dom";

interface AppLinkProps extends Omit<AnchorProps, "component" | "href"> {
  to: LinkProps["to"];
}

export const AppLink = ({ to, ...props }: AppLinkProps) => {
  return <Anchor component={Link} to={to} {...props} />;
};
