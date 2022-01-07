import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const Validates = ({ handleClose }) => {

  const { handleSubmit, control } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form 

    noValidate={true}
    onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="First Name"
            variant="outlined"
            id="outlined-required"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            required
          />
        )}
        rules={{ required: 'First name required' }}
      />
      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Last Name"
            variant="outlined"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            required
          />
        )}
        rules={{ required: 'Last name required' }}
      />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Email"
            variant="outlined"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="email"
            required
          />
        )}
        rules={{ required: 'Email required' }}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Password"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="password"
          />
        )}
        rules={{ required: 'Password required' }}
      />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
};

export default Validates;