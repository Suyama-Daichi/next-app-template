import * as React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { FORM_ERROR_MESSAGE } from '@/common/constants';
import { ValidationError } from '@/components/Errors/Validation';
import AppAppBar from '@/components/shared/AppAppBar';
import AppForm from '@/components/shared/AppForm';
import FormButton from '@/components/ui/FormButton';
import { Footer } from '@/components/ui/footer/Footer';
import withRoot from '@/modules/withRoot';

const schema = z.object({
  email: z
    .string()
    .min(1, { message: FORM_ERROR_MESSAGE.REQUIRED })
    .email({ message: FORM_ERROR_MESSAGE.INVALID_EMAIL }),
});
type SchemaType = z.infer<typeof schema>;
function ForgotPassword() {
  const [submitting, setSubmitting] = React.useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });
  const onSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom align="center">
            Forgot your password?
          </Typography>
          <Typography variant="body2" align="center">
            {"Enter your email address below and we'll " + 'send you a link to reset your password.'}
          </Typography>
        </React.Fragment>
        <TextField
          {...register('email')}
          autoFocus
          autoComplete="email"
          fullWidth
          label={'メールアドレス'}
          InputLabelProps={{ shrink: true }}
        />
        {errors.email?.message && <ValidationError message={errors.email.message} />}
        <FormButton
          onClick={handleSubmit(onSubmit)}
          sx={{ mt: 3, mb: 2 }}
          disabled={submitting}
          size="large"
          color="secondary"
          fullWidth
        >
          {submitting ? 'In progress…' : 'Send reset link'}
        </FormButton>
      </AppForm>
      <Footer />
    </React.Fragment>
  );
}

export const ForgotPasswordContainer = withRoot(ForgotPassword);
