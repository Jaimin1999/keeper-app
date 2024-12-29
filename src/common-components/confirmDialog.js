import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog(props) {
  const {
    yesAction,
    onClose,
    onOpen,
    text = `Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.`,
    title = `Use Google's location service?`,
    yesText = "Yes",
    noText = `No`,
  } = props;

  return (
    <React.Fragment>
      <Dialog
        open={onOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="warning" variant="contained">
            {noText}
          </Button>
          <Button
            color="error"
            variant="outlined"
            onClick={() => {
              onClose();
              yesAction();
            }}
            autoFocus
          >
            {yesText}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
