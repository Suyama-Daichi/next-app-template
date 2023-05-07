import { Button, ButtonProps } from '@mui/material';

function FormButton(props: ButtonProps) {
  const { disabled, ...others } = props;
  return <Button disabled={!!disabled} type="submit" variant="contained" {...others} />;
}
export default FormButton;
