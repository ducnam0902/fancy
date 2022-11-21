const styles = {
  paper: {
    position: "relative",
  },
  textOverview: {
    position: "absolute",
    top: "28%",
    right: "20%",
    textAlign: "right",
  },
  name: {
    fontSize: {
      sm: "38px",
      xs: "16px",
    },
    fontWeight: 700,
    lineHeight: "1.4",
    color: "#666666",
    textTransform: "uppercase",
    fontFamily: "Lato",
  },
  description: {
    fontSize: {
      sm: "32px",
      xs: "14px",
    },
    fontWeight: 400,
    lineHeight: "1.4",
    color: "#666666",
    textTransform: "captitalize",
    textAlign: "right",
    fontFamily: "Lato",
  },
  button: {
    marginTop: "8px",
    border: "1px solid #ccc",
    color: "#666",
    display: "inline-block !important",
    fontSize: {
      sm: "16px",
      xs: "9px",
    },
    fontWeight: 700,
    lineHeight: {
      sm: "40px",
      xs: "17px",
    },
    padding: {
      sm: "0 30px",
      xs: "0 5px",
    },
    fontFamily: "Lato",

    "&:hover": {
      color: "#fff",
      backgroundColor: "#24ccd7",
      borderColor: "#24ccd7",
    },
  },
  shopNow: {
    marginRight: "7px",
  },
  navButtonProps: {
    backgroundColor: "##ffffff6b",
    color: "#24ccd7",
  },
  indicatorIconButton: {
    background: "transparent",
    color: "transparent",
    border: "1px solid #24ccd7",
    marginRight: "10px",
  },
  activeIndicator: {
    color: "#24ccd7"
  }
};

export default styles;
