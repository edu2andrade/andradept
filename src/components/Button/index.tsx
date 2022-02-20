import { ButtonStyles } from "./styles";

interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <ButtonStyles>
      <a href="https://wa.me/351911937274">{text}</a>
    </ButtonStyles>
  );
};
