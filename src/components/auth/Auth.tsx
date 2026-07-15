import { Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';


interface AuthProps {
  submitLabel: string
  onSubmit: (credentials: {
    email: string, 
    password: string
  }) => Promise<void>;
  children: React.ReactNode;
}

const Auth = ({submitLabel, onSubmit, children}: AuthProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <Stack spacing={3} sx={{ width: '100%', maxWidth: { xs: '100%', sm: '400px' }, margin: '0 auto', marginTop: '2rem' }}>
      <TextField type="email" label="Email" variant="outlined" value={email} onChange={(event) => setEmail(event.target.value)} />
      <TextField type="password" label="Password" variant="outlined" value={password} onChange={(event) => setPassword(event.target.value)} />
      <Button variant="contained" onClick={() => onSubmit({ email, password })}>
        {submitLabel}
      </Button>
      {children}
    </Stack>
  )
};

export default Auth

