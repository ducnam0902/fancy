const styles = {
  registerFormContainer: {
    paddingTop: "40px",
    paddingBottom: "60px",
  },
  createAccount:{
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "19px",
    color: "#525151",
    textTransform: "uppercase",
    borderBottom: "1px solid #f0f0f0",
    marginBottom: "20px",
    paddingBottom: "15px"
  },
  label:{
    fontFamily: "Lato",
    fontSize: "15px",
    fontWeight: "700",
    lineHeight: "21px",
    color: "#666",
    textTransform: "capitalize",
    marginBottom: "5px",
  },
  textField:{
    marginBottom: "20px"
  },
  createButton:{
    width: "100px",
    background: "#fff",
    color: "#555",
    border: "1px solid #d3d3d3",
    boxShadow: "none",
    fontSize: "14px",
    lineHeight: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    padding: "10px 25px",

    "&:hover":{
      background: "#24ccd7",
      color: "#fff",
    }
  },
  actionButtonGroup:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  linkReturn:{
    display: "block",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "400",
    color: "#24ccd7",
    textDecoration: "none",

    "&:hover":{
      color: "#24ccd7"
    }
  },
};

export default styles;
