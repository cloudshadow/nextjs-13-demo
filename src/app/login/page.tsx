'use client';

import { Button, TextField } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';

import React from 'react';
import styles from './page.module.css';

export default function Login() {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const onSubmit = async () => {
    const result = await signIn('credentials', {
      username,
      password,
      redirect: true,
      callbackUrl: '/products',
    });
  };
  // const onGoogle = async () => {
  //   const result = await signIn('google');
  // };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Sign in</div>
        <div className={styles.subTitle}>
          Sign In to start buying the best brands for medical aesthetics at most favorable wholesale prices!
        </div>
      </div>
      <div className={styles.modalContainer}>
        <div className={styles.modal}>
          <TextField
            id="username"
            label="Username or Email"
            variant="outlined"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              console.log(username);
              console.log(password);
              onSubmit();
            }}
          >
            Log in
          </Button>
          <Button
            variant="contained"
            onClick={() => signIn("google")}
          >
            Google
          </Button>
        </div>
      </div>
    </div>
  );
}
