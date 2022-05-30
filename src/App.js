import { Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  button: {
    backgroundColor: 'blue',
    padding: "10px"
  }
})

const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Button variant="contained" className= { classes.button }>Click Me</Button>
    </div>
  );
}

export default App;
