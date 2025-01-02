import React from 'react';
import Button from '../common/Button/Button';
import './AuthButtons.css';

const AuthButtons = () => {
  return (
    <div className="auth-buttons">
      <Button variant="primary" href="/sign-up">Sign Up</Button>
      <Button variant="outline" href="/sign-in">Sign In</Button>
    </div>
  );
};

export default AuthButtons;