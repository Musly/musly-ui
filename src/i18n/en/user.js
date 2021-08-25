import UC from '../../features/User/User.constants';

export const user = {
  login: {
    headline: 'Log in',
    description: 'Log in with the credentials you received from your administrator.',
    email: {
      placeholder: 'Your Email Address',
    },
    password: {
      placeholder: 'Your Password',
      forgot: 'Forgot Password?',
    },
    loginBtn: 'Log In',
    rememberMe: 'Remember Me',
  },
  signup: {
    headline: 'Sign Up',
    description: 'No account? No problem. Just fill in the fields and start working right away.',
    signupBtn: 'Sign Up',
    email: {
      placeholder: 'Your Email Address',
    },
    firstName: {
      placeholder: 'Your First Name',
    },
    lastName: {
      placeholder: 'Your Last Name',
    },
    password: {
      placeholder: 'Choose a password',
    },
    passwordConfirm: {
      placeholder: 'Confirm your password',
    },
  },
  types: {
    [UC.TYPE_MANAGER]: 'Manager',
    [UC.TYPE_MEMBER]: 'Member',
  },
};
