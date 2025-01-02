import React from 'react';
import { Button } from '../common/Button';

export const AuthButtons = () => {
  return (
    <div className="flex items-center space-x-4">
      <Button href="/sign-up" variant="primary">
        Sign Up
      </Button>
      <Button href="/sign-in" variant="outline">
        Sign In
      </Button>
    </div>
  );
};