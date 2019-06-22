/* eslint-disable */
import React from 'react';
import Box from '@material-ui/core/Box';
import InvertedArrow from 'components/arrows/InvertedArrow';
import Icon from 'components/predefined/Icon';
import { mergeInfo } from 'helpers/function';

const demoCode = `
  import React from 'react';
  import Box from '@material-ui/core/Box';
  import InvertedArrow from './InvertedArrow';
  
  const Demo = () => (
    <Box width={'100%'} display={'flex'} justifyContent={'space-evenly'}>
      <InvertedArrow direction={'left'} />
      <InvertedArrow direction={'right'} />
    </Box>
  );
  
  export default Demo;
`;

InvertedArrow.Demo = () => (
  <Box width={'100%'} display={'flex'} justifyContent={'space-evenly'}>
    <InvertedArrow direction={'left'} />
    <InvertedArrow direction={'right'} />
  </Box>
);

const coreCode = `
  import React from 'react';
  import PropTypes from 'prop-types';
  import { makeStyles } from '@material-ui/styles';
  import Button from '@material-ui/core/Button';
  import Icon from './Icon';
  
  const useStyles = makeStyles(({ palette, breakpoints }) => ({
    root: {
      borderRadius: '50%',
      border: '1px solid',
      borderColor: 'rgba(255, 255, 255, 0.6)',
      width: 40,
      minWidth: 40,
      height: 40,
      '& .MuiIcon-root': {
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
      },
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.38)',
        borderColor: palette.common.white,
        '& .MuiIcon-root': {
          transform: 'scale(1.3)',
          [breakpoints.up('md')]: {
            transform: 'scale(1.7)',
          },
        },
      },
      [breakpoints.up('sm')]: {
        width: 48,
        minWidth: 48,
        height: 48,
      },
      [breakpoints.up('md')]: {
        width: 64,
        minWidth: 64,
        height: 64,
      },
    },
    label: {
      color: palette.common.white,
    },
  }));
  
  const InvertedArrow = ({ direction, iconProps, ...props }) => {
    const classes = useStyles(props);
    return (
      <Button {...props} classes={classes}>
        <Icon {...iconProps}>{\`keyboard_arrow_\${direction}\`}</Icon>
      </Button>
    );
  };
  
  InvertedArrow.propTypes = {
    direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
    iconProps: PropTypes.shape({}),
  };
  InvertedArrow.defaultProps = {
    iconProps: {},
  };
  
  export default InvertedArrow;

`;

InvertedArrow.info = mergeInfo(
  {
    name: 'InvertedArrow',
    description: '',
    links: [
      { label: 'Button API', url: 'https://material-ui.com/api/button/' },
    ],
    files: [
      {
        label: 'Demo.js',
        code: demoCode,
      },
      {
        label: 'InvertedArrow.js',
        code: coreCode,
        core: true,
      },
    ],
    libraries: [],
    dependencies: [],
  },
  Icon.info,
);

export default InvertedArrow;
