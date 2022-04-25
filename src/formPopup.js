import React, {  } from 'react';
import { Button } from 'semantic-ui-react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './interestForm.css';

export default function SubmitPopup() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
        <Button className="submit-button" type='submit' onClick={handleClick}>Submit</Button>
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message="Your form has been submitted. A representative from USC will get back to you shortly."
            action={action}
        />
    </div>
  );
}