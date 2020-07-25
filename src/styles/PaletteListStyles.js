import sizes from "./sizes";
import bg from './bg.svg';

export default {

  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out"
    }
  },

  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    /* background by SVGBackgrounds.com */
    backgroundColor: "#891bc4",
    backgroundImage: `url(${bg})`,
    overflow: "scroll"
},
  heading: {
    fontSize: "2rem"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%"
    },
    [sizes.down("xs")]: {
      width: "70%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: 'center',
    color: 'white',
    '& a': {
      color: 'white',
      textDecoration: 'none'
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
    // [sizes.down("lg")]: {
    //   width: "25% !important",
    //   height: "33.3333% !important"
    // },
    [sizes.down("md")]: {
      // width: "50%",
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("sm")]: {
      width: "80% !important",
      height: "10% !important",
      gridTemplateColumns: "repeat(1, 100%)"
    },
    [sizes.down("xs")]: {
      width: "100%",
      gridTemplateColumns: "repeat(1, 130%)"
    }
  }
};
