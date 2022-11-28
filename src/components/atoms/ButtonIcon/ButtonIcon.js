import {Link} from 'react-router-dom';
import {IconButton} from '@mui/material';

export default function ButtonIcon(props) {
  const {link, children, tabIndex, ...other} = {...props};

  const classes = {
    fontSize: 'inherit',
    padding: '0px',
    margin: '0px',
    color: 'inherit',
    lineHeight: '0px',

    '*': {
      fontSize: 'inherit',
      padding: '0px',
      margin: '0px',
    },

    svg: {
      fontSize: 'inherit',
    },
  };

  let icon = (
    <IconButton sx={classes} tabIndex={link || tabIndex ? -1 : null} {...other}>
      {children}
    </IconButton>
  );

  if (link) {
    icon = (
      <Link to={link} style={classes}>
        {icon}
      </Link>
    );
  }

  return icon;
}
