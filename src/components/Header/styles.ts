const styles = {
  container: {
    padding: "25px 0",
    display: "flex",
    justifyContent: "space-between",
  },
  menuListNavigation: {
    display: {
      xs: "none",
      md: "flex",
    },
  },
  menuIcon:{
    display:  "flex",
  },
  menuItemText: {
    padding: "0 10px",
    margin: "0 10px",
    fontSize: "16px",
    textTransform: "uppercase",
    fontFamily: "Lato",
    fontWeight: "700",
    lineHeight: "23px",
    textAlign: "center",
    color: "#fff",

    "&:hover": {
      backgroundColor: "transparent",
      color: "#24ccd7 !important",
    },

    "&.active ": {
      color: "#24ccd7 !important",
    },
  },
  badge: {
    "& .MuiBadge-badge": {
      backgroundColor: "#666666",
    },
  },
  icon: {
    cursor: "pointer",
    padding: "0 12px",

    "&:hover": {
      color: "#24ccd7 !important",
    },
  },

  drawHeader: {
    display: "flex",
    padding: "12px",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #24ccd7",
    textTransform: "uppercase",
    color: "#fff",
    fontSize: "20px",
  },
  leftMenu: {
    backgroundColor: "#444444",
    width: '200px',
    height: "100%",
  },
  menuDrawerNavigation:{
    display: "flex",
    flexDirection: "column",
  },
  menuDrawerItem:{
    fontSize: "16px",
    textTransform: "uppercase",
    fontFamily: "Lato",
    fontWeight: "700",
    lineHeight: "23px",
    textAlign: "center",
    color: "#fff",

    "&:hover": {
      backgroundColor: "transparent",
      color: "#24ccd7 !important",
    },

    "&.active ": {
      color: "#24ccd7 !important",
    },
  }
};

export default styles;
