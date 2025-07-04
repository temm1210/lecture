export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {}

const Button = ({ onClick, children }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
