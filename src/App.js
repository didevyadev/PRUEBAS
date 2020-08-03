import React from "react";
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { green } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  '& > span': {
    margin: theme.spacing(2),
  },
}));


function App() {
  const classes = useStyles();


  return (
    <div className="App">
      <Card className={classes.root}>
        <List
          component="nav"
          className={classes.root}
          aria-label="mailbox folders"
        >
          <ListItem>
            <ListItemText primary="" />
            <Typography variant="h5" gutterBottom>
              TALLER
            </Typography>
          </ListItem>
          <Divider />
          <ListItem button>
          <TextField
          id="standard-textarea"
          label="Registro de servicio"
          placeholder="Placeholder"
          multiline
        />
         <TextField
          label="Monto"
          id="standard-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position="start">S/</InputAdornment>,
          }}
        />
          <AddIcon></AddIcon> Añadir otro registro
          </ListItem>
        </List>
      </Card>

    </div>
  );
}

export default App;
