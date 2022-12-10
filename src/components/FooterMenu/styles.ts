const styles = {
  topTitleColumn: {
    padding: "0 0 19px",
    borderBottom: "1px dashed #787878",
    color: "#f1f1f1",
    fontFamily: "Lato",
    fontSize: "16px",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  listMenu: {
    padding: 0,
    paddingTop: '12px'
  },
  listMenuItem: {
    padding: "12px 0 12px 0",
    cursor: "pointer",
    transition: "all .3s ease-in-out 0s",
    transform: "translateX(0)",
    color: "#f1f1f1 !important",
    "&:hover": {
      color: "#24ccd7 !important",
    },

    "&:hover span": {
        transition: "all .3s ease-in-out 0s",
        color: "#24ccd7",
        transform: "translateX(5%)",
    }
  },
  listMenuItemText: {
    paddingLeft: "10px",
    margin:0,
    span: {
      fontFamily: "Lato",
      fontWeight: "400",
      fontSize: "13px",
      lineHeight: "19px",
      color: "#f1f1f1",
    },
  },
};

export default styles;
