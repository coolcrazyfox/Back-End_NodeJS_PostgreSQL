import React, { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";



interface ToDo {
  todo: {
      id : string
      model: string
      country: string
      device: string
      oem: string
      count_ebay : string
      price_ebay : string
      price_store: string
      count_store: string
      link: string
      image : string
      datetime : string

  };
}

const EditTodo = ({ todo }: ToDo) => {
  const [model, setModel] = useState(todo.model);
  const [country, setCountry] = useState(todo.country);
  const [device, setDevice] = useState(todo.device);
  const [oem, setOem] = useState(todo.oem);
  const [count_ebay, setCountEbay] = useState(todo.count_ebay);
  const [price_ebay, setPriceEbay] = useState(todo.price_ebay);
  const [price_store, setPriceStore] = useState(todo.price_store);
  const [count_store, setCountStore] = useState(todo.count_store);
  const [link, setLink] = useState(todo.link);
  const [image, setImage] = useState(todo.image);
  const [datetime, setDateTime] = useState(todo.datetime);
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateDescription = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    try {
      const body = { model , country, device, oem, count_ebay, price_ebay, price_store, count_store, link, image, datetime };
      const response = await fetch(
        `http://localhost7000/device/${todo.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location.href = "/";
      // window.location.reload();
        console.log("response",response)
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <IconButton
        component="button"
        onClick={handleClickOpen}
        // disabled={todo.completed}
        color="warning"
      >
        <EditIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        onClick={() => setModel(todo.model)}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle>Edit Device</DialogTitle>
        <DialogContent sx={{ width: 500, maxWidth: "100%" }}>
          <TextField
            autoFocus
            margin="normal"
            label="Edit model"
            variant="outlined"
            value={model}
            onChange={(event) => {
              setModel(event.target.value);
            }}
            fullWidth
          />
           <TextField
            autoFocus
            margin="normal"
            label="Edit country"
            variant="outlined"
            value={country}
            onChange={(event) => {
              setCountry(event.target.value);
            }}
            fullWidth
          />
          <TextField
            autoFocus
            margin="normal"
            label="Edit device"
            variant="outlined"
            value={device}
            onChange={(event) => {
              setDevice(event.target.value);
            }}
            fullWidth
          />
          <TextField
            autoFocus
            margin="normal"
            label="Edit OEM"
            variant="outlined"
            value={oem}
            onChange={(event) => {
              setOem(event.target.value);
            }}
            fullWidth
          />
            <TextField
            autoFocus
            margin="normal"
            label="Edit count_ebay"
            variant="outlined"
            value={count_ebay}
            onChange={(event) => {
              setCountEbay(event.target.value);
            }}
            fullWidth
          />
          <TextField
            autoFocus
            margin="normal"
            label="Edit price_ebay"
            variant="outlined"
            value={price_ebay}
            onChange={(event) => {
              setPriceEbay(event.target.value);
            }}
            fullWidth
          />
          <TextField
            autoFocus
            margin="normal"
            label="Edit price_store"
            variant="outlined"
            value={price_store}
            onChange={(event) => {
              setPriceStore(event.target.value);
            }}
            fullWidth
          />
          <TextField
            autoFocus
            margin="normal"
            label="Edit count_store"
            variant="outlined"
            value={count_store}
            onChange={(event) => {
              setCountStore(event.target.value);
            }}
            fullWidth
          />
          <TextField
            autoFocus
            margin="normal"
            label="Edit Link"
            variant="outlined"
            value={link}
            onChange={(event) => {
              setLink(event.target.value);
            }}
            fullWidth
          />
          <TextField
            autoFocus
            margin="normal"
            label="Edit Image"
            variant="outlined"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
            fullWidth
          />
          <TextField
            autoFocus
            margin="normal"
            label="Edit date"
            variant="outlined"
            value={datetime}
            onChange={(event) => {
              setDateTime(event.target.value);
            }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={(event) => updateDescription(event)}>Save</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default EditTodo;
