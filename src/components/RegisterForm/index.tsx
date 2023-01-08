import Box from "@mui/material/Box/Box";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

import * as yup from "yup";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FancyButton from "src/components/FancyButton";

import styles from "./styles";

interface formProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().required("First Name is not empty"),
  lastName: yup.string().required("Last Name is not empty"),
  email: yup.string().email(),
  password: yup.string().required("Password is not empty"),
});

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formProps>({
    resolver: yupResolver(VALIDATION_SCHEMA),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <Box sx={styles.registerFormContainer}>
      <Container maxWidth="sm">
        <Typography variant="h3" sx={styles.createAccount}>
          Create account
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputLabel sx={styles.label}>First name</InputLabel>
          <Controller
            name="firstName"
            control={control}
            render={({ field: { ref, ...field } }) => (
              <TextField
                {...field}
                error={!!errors.firstName}
                fullWidth
                size="small"
                sx={styles.textField}
                inputRef={ref}
                helperText={errors.firstName?.message}
              />
            )}
          />
          <InputLabel sx={styles.label}>Last name</InputLabel>
          <Controller
            name="lastName"
            control={control}
            render={({ field: { ref, ...field } }) => (
              <TextField
                {...field}
                error={!!errors.lastName}
                inputRef={ref}
                helperText={errors.lastName?.message}
                fullWidth
                size="small"
                sx={styles.textField}
              />
            )}
          />
          <InputLabel sx={styles.label}>Email</InputLabel>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <TextField {...field} fullWidth size="small" sx={styles.textField} />}
          />
          <InputLabel sx={styles.label}>Password</InputLabel>
          <Controller
            name="password"
            control={control}
            render={({ field }) => <TextField {...field} fullWidth size="small" sx={styles.textField} />}
          />
          <Box sx={styles.actionButtonGroup}>
            <FancyButton styleButton={styles.createButton} type="submit">
              Create
            </FancyButton>
            <MuiLink component={Link} to="/" sx={styles.linkReturn}>
              Return to Store
            </MuiLink>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default RegisterForm;
