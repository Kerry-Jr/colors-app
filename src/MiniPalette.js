import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  colors: {
    backgroundColor: 'grey'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    color: 'black',
    paddingTop: '0.5rem',
    fontSize: '1rem',
    position: 'relative'
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1rem'
  }

};

function MiniPalette(props) {
  const {classes, paletteName, emoji} = props;
  console.log(classes);

  return (
     <div className={classes.root}>
       <div className={classes.colors}></div>
       <h5 className={classes.title}>{paletteName} &nbsp; <span className={classes.emoji}>{emoji}</span></h5>
     </div>
  );
}

export default withStyles(styles)(MiniPalette);