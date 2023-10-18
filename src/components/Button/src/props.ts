import { ButtonProps } from "ant-design-vue";

export interface IButtonProps extends ButtonProps {
  preIcon?: string;
  postIcon?: string;
  iconSize?: number;
}
