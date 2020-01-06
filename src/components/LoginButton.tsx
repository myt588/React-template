import React from 'react';
import { Button } from 'antd';
import { useAuth0 } from '../Auth0';

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <div>
      {!isAuthenticated && (
        <Button type="link" onClick={() => loginWithRedirect({})}>
          Log in
        </Button>
      )}
      {isAuthenticated && (
        <Button type="link" onClick={() => logout()}>
          Log out
        </Button>
      )}
    </div>
  );
};

export default LoginButton;
