import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { blue } from "@mui/material/colors";

const emails = ["username@gmail.com", "user02@gmail.com"];

export default function SkillsModal(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{selectedValue.name}</DialogTitle>
      <Divider />
      <List sx={{ pt: 0, pl: "2em", pr: "2em" }}>
        <ListItem disableGutters>
          <ListItemText primary={selectedValue.text} />
        </ListItem>
      </List>
    </Dialog>
  );
}
