import * as React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Grid, TextField, Typography } from '@mui/material';
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
  firstName: z.string().min(1, { message: `名字を${FORM_ERROR_MESSAGE.REQUIRED}` }),
  lastName: z.string().min(1, { message: `名前を${FORM_ERROR_MESSAGE.REQUIRED}` }),
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
function Signup() {
  const [submitting, setSubmitting] = React.useState(false);
  const [, setSent] = React.useState(false);
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
      setSent(true);
    }, 1000);
  };

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <Box mb={2}>
          <Typography variant="h3" gutterBottom align="center">
            Sign Up
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="/sign-in/" underline="always">
              Already have an account?
            </Link>
          </Typography>
        </Box>
        <Grid container rowSpacing={2} columnSpacing={1}>
          <Grid item xs={6}>
            <TextField
              {...register('lastName')}
              autoFocus
              autoComplete="email"
              fullWidth
              label={'名字'}
              InputLabelProps={{ shrink: true }}
            />
            {errors.lastName?.message && <ValidationError message={errors.lastName.message} />}
          </Grid>
          <Grid item xs={6}>
            <TextField
              {...register('firstName')}
              autoComplete="email"
              fullWidth
              label={'名前'}
              InputLabelProps={{ shrink: true }}
            />
            {errors.firstName?.message && <ValidationError message={errors.firstName.message} />}
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register('email')}
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
      </AppForm>
      <Footer />
    </React.Fragment>
  );
}

export const SignupContainer = withRoot(Signup);
