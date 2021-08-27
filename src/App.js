
import { makeStyles } from '@material-ui/core/styles';
import {Paper,TextField,Button,CircularProgress } from '@material-ui/core';
import Navbar from './Navbar'

const useStyles = makeStyles((theme) => ({

  paper:
  {
  marginTop:50,
    width: 300,
    margin: '0 auto',
    textAlign: 'center',
    padding:15
  },
  input:{
    width:'98%',
    marginBottom:10
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
       <Navbar/>
      <Paper elevation={3} className={classes.paper} >
        <h1>
          LOGIN
        </h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField  label="Enter Email"  className={classes.input}/>
      
          <TextField  label="Enter Password" className={classes.input} />
        
          <Button variant="contained" color="primary"  className={classes.input}>
              Login
              </Button>
        </form>
        <CircularProgress value={50} />
      </Paper>
    </div>
  );
}

export default App;
