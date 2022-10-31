import React, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {baseUrl} from "./ListTodos";
// import { wrap } from "module";

const InputTodo = () => {
  const [model, setModel] = useState("");
  const [country, setCountry] = useState("");
  const [device, setDevice] = useState("");
  const [oem, setOem] = useState("");
  const [countEbay, setCountEbay] = useState("");
  const [priceEbay, setPriceEbay] = useState("");
  const [priceStore, setPriceStore] = useState("");
  const [countStore, setCountStore] = useState("");
  const [linkAdr, setLinkAdr] = useState("");
  const [image, setImage] = useState("");
  const [dateTime, setDateTime] = useState("");


  const onSubmitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const body = { model, country, device, oem, countEbay, priceEbay, priceStore, countStore, linkAdr, image};
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response)

      // window.location.href = "/";
      window.location.reload();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" align="center">
          PERN DEVICE
        </Typography>
      </Box>
      <Box
      component="form"
      // onSubmit={onSubmitForm}
      sx={{
        mt: 4,

        display: "flex",
        flexDirection: 'column',
        width: 900,
        maxWidth: "100%",
        mx: "auto",
      }}>
        <Box
        component="form"
        onSubmit={onSubmitForm}
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: 'column',
          width: 400,
          maxWidth: "100%",
          mx: "auto",
        }}

      >
        <TextField
          margin="dense"
          label="Add new model"
          variant="outlined"
          value={model}
          onChange={(event) => setModel(event.target.value)}
          fullWidth
          InputProps={{
            endAdornment: (
              <Button variant="contained" type="submit">
                Add
              </Button>
            ),
          }}

        />
        <TextField
          margin="dense"
          label="Add new country"
          variant="outlined"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          fullWidth
          InputProps={{
            endAdornment: (
              <Button variant="contained" type="submit">
                Add
              </Button>
            ),
          }}

        />
        <TextField
          margin="dense"
          label="Add new device"
          variant="outlined"
          value={device}
          onChange={(event) => setDevice(event.target.value)}
          fullWidth
          InputProps={{
            endAdornment: (
              <Button variant="contained" type="submit">
                Add
              </Button>
            ),
          }}

        />
        <TextField
          margin="dense"
          label="Add new oem"
          variant="outlined"
          value={oem}
          onChange={(event) => setOem(event.target.value)}
          fullWidth
          InputProps={{
            endAdornment: (
              <Button variant="contained" type="submit">
                Add
              </Button>
            ),
          }}

        />
        <TextField
          margin="dense"
          label="Add new count-ebay"
          variant="outlined"
          value={countEbay}
          onChange={(event) => setCountEbay(event.target.value)}
          fullWidth
          InputProps={{
            endAdornment: (
              <Button variant="contained" type="submit">
                Add
              </Button>
            ),
          }}
      />
      <TextField
          margin="dense"
          label="Add new price-ebay"
          variant="outlined"
          value={priceEbay}
          onChange={(event) => setPriceEbay(event.target.value)}
          fullWidth
          InputProps={{
            endAdornment: (
              <Button variant="contained" type="submit">
                Add
              </Button>
            ),
          }}

        />
        <TextField
          margin="dense"
          label="Add new price-store"
          variant="outlined"
          value={priceStore}
          onChange={(event) => setPriceStore(event.target.value)}
          fullWidth
          InputProps={{
            endAdornment: (
              <Button variant="contained" type="submit">
                Add
              </Button>
            ),
          }}

        />
        <TextField
          margin="dense"
          label="Add new count-store"
          variant="outlined"
          value={countStore}
          onChange={(event) => setCountStore(event.target.value)}
          fullWidth
          InputProps={{
            endAdornment: (
              <Button variant="contained" type="submit">
                Add
              </Button>
            ),
          }}

        />
        <TextField
          margin="dense"
          label="Add new link"
          variant="outlined"
          value={linkAdr}
          onChange={(event) => setLinkAdr(event.target.value)}
          fullWidth
          InputProps={{
            endAdornment: (
              <Button variant="contained" type="submit">
                Add
              </Button>
            ),
          }}

        />
        <TextField
          margin="dense"
          label="Add new image"
          variant="outlined"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          fullWidth
          InputProps={{
            endAdornment: (
              <Button variant="contained" type="submit">
                Add
              </Button>
            ),
          }}

        />
      </Box>


      {/* <Box
        component="form"
        onSubmit={onSubmitForm}
        sx={{
          mt: 4,
          display: "flex",
          width: 300,
          maxWidth: "100%",
          mx: "auto",
        }}
      >
        <TextField
          label="Add new country"
          variant="outlined"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          fullWidth
          InputProps={{
            endAdornment: (
              <Button variant="contained" type="submit">
                Add
              </Button>
            ),
          }}
        />
      </Box> */}


      </Box>

    </Fragment>
  );
};

export default InputTodo;
