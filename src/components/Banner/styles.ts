import banner from "src/assets/banner.webp";
const styles = {
  banner: {
    backgroundImage: `url(${banner})`,
    padding: "130px 0 140px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    textAlign: "center",
  },
  breadcrumbs: {
    fontFamily: "Lato",
    display: "flex",
    justifyContent: "center",
    paddingTop: "8px",
    paddingBottom: "8px",
    marginBottom: "20px",
  },
  title: {
    fontSize: {
      xs: "25px",
      md: "30px",
    },
    fontWeight: "500",
    lineHeight: "33px",
    color: "#444444",
    marginTop: "6px",
    marginBottom: "10px",
    textTransform: "uppercase",
    letterSpacing: '1.1'
  },
  linkHome: {
    fontSize: "14px",
    lineHeight: "20px",
    color: "#337ab7",
    fontFamily: "Lato",
    fontStyle: "normal",
    textDecoration: "none",

    "&:hover": {
      color: "#24ccd7",
    },
  },
  currentTitle: {
    fontWeight: 400,
    fontFamily: "Lato",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#333",
    textTransform: "capitalize",
  },
};

export default styles;
