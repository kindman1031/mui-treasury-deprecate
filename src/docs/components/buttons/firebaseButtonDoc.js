import React from 'react';
import FirebaseButton from 'components/buttons/FirebaseButton';

const demoCode = `
  import React from 'react';
  import FirebaseButton from './FirebaseButton';
  
  const Demo = () => (
    <>
      <FirebaseButton>Default</FirebaseButton>
      <FirebaseButton variant={'contained'} color={'primary'}>
        Primary
      </FirebaseButton>
    </>
  )
  
  export default Demo;
`;

FirebaseButton.Demo = () => (
  <>
    <FirebaseButton>Default</FirebaseButton>
    <FirebaseButton variant={'contained'} color={'primary'}>
      Primary
    </FirebaseButton>
  </>
);

const firebaseCode = `
  import React from 'react';
  import Button from '@material-ui/core/Button';
  import { makeStyles } from '@material-ui/styles';
  
  const useStyles = makeStyles(({ shadows, palette }) => ({
    root: {
      borderRadius: 8,
    },
    text: {
      paddingLeft: 16,
      paddingRight: 16,
    },
    contained: {
      boxShadow: 'none',
      '&$focusVisible': {
        boxShadow: shadows[0],
      },
      '&:active': {
        boxShadow: shadows[0],
      },
    },
    containedPrimary: {
      backgroundColor: '#039be5',
      color: palette.common.white,
      '&:hover': {
        backgroundColor: '#0388ca',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: '#0388ca',
        },
      },
    },
    label: {
      textTransform: 'none',
      letterSpacing: '0.5px',
      fontWeight: 500,
    },
  }));
  
  const FirebaseButton = props => {
    const classes = useStyles(props);
    return <Button {...props} classes={classes} />;
  };
  
  export default FirebaseButton;

`;

FirebaseButton.info = {
  name: 'Firebase Button',
  description: "We're on fire",
  links: [
    { label: 'Code Sandbox', url: 'https://codesandbox.io/s/ojnxlj1ry6' },
    { label: 'Button API', url: 'https://material-ui.com/api/button/' },
    {
      label: 'Styling',
      url: 'https://material-ui.com/styles/basics/#hook-api',
    },
  ],
  files: [
    {
      label: 'Demo.js',
      code: demoCode,
    },
    {
      label: 'FirebaseButton.js',
      code: firebaseCode,
    },
  ],
  libraries: [],
  dependencies: [],
};
FirebaseButton.codeSandbox = 'https://codesandbox.io/s/ojnxlj1ry6';

export default FirebaseButton;
