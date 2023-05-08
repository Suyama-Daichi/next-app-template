import * as React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { TextField, Typography, Grid, Box } from '@mui/material';
import Link from '@mui/material/Link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { FORM_ERROR_MESSAGE } from '@/common/constants';
import { ValidationError } from '@/components/Errors/Validation';
import AppAppBar from '@/components/shared/AppAppBar';
import AppForm from '@/components/shared/AppForm';
import FormButton from '@/components/ui/FormButton';
import Footer from '@/components/ui/footer/Footer';
import withRoot from '@/modules/withRoot';
const schema = z.object({
  email: z
    .string()
    .min(1, { message: `メールアドレスを${FORM_ERROR_MESSAGE.REQUIRED}` })
    .email({ message: FORM_ERROR_MESSAGE.INVALID_EMAIL }),
  password: z
    .string()
    .min(1, { message: `パスワードを${FORM_ERROR_MESSAGE.REQUIRED}` })
    .regex(new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d\W]{8,}$/), {
      message: FORM_ERROR_MESSAGE.INVALID_PASSWORD,
    }),
});
type SchemaType = z.infer<typeof schema>;

function SignIn() {
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
        <Box mb={2}>
          <Typography variant="h3" gutterBottom align="center">
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {'Not a member yet? '}
            <Link href="/sign-up/" align="center" underline="always">
              Sign Up here
            </Link>
          </Typography>
        </Box>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <TextField
              {...register('email')}
              autoFocus
              autoComplete="email"
              fullWidth
              label={'メールアドレス'}
              InputLabelProps={{ shrink: true }}
            />
            {errors.email?.message && <ValidationError message={errors.email.message} />}
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register('password')}
              autoComplete="password"
              fullWidth
              type="password"
              label={'パスワード'}
              InputLabelProps={{ shrink: true }}
            />
            {errors.password?.message && <ValidationError message={errors.password.message} />}
          </Grid>
        </Grid>
        <FormButton
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSubmit(onSubmit)}
          disabled={submitting}
          size="large"
          color="secondary"
          fullWidth
        >
          {submitting ? 'In progress…' : 'Sign In'}
        </FormButton>
        <Typography align="center">
          <Link underline="always" href="/forgot-password/">
            Forgot password?
          </Link>
        </Typography>
      </AppForm>
      <Footer />
    </React.Fragment>
  );
}

export const SigninContainer = withRoot(SignIn);
