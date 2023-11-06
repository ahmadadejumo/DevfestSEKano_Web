type MyButtonProps = {
      /** The text to display inside the button */
  title: string;
  /** Whether the button can be interacted with */
  disabled: boolean;

  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({title, disabled, onClick}: MyButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>{title}</button>
  )
}

export default Button