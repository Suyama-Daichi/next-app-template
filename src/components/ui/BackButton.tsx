import { KeyboardReturn } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const BackButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()}>
      <KeyboardReturn sx={{ mr: 1 }} /> 戻る
    </Button>
  );
};
export default BackButton;
