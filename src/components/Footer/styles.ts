const styles = {
    footer:{
        backgroundColor: "#363636",
    },
    footerTop: {
        padding: {
            md: "45px 0",
            xs: "45px 50px",
        },
        display: "flex",
        color: "#fff",
        flexDirection: {
            xs: "column",
            md: "row",
        }
    },
    footerColumn: {
        padding: '0 15px',
        width: {
            xs: "100%",
            md: "25%",
        },
        marginBottom: '10px'
    },
    title: {
        fontFamily: "Lato",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "20px",
        color: "#f1f1f1",
        marginTop: "20px",
        paddingRight: "10px",
    },
    contactOverview: {
        marginTop: "20px",
    },
    contactDetails: {
        marginBottom: '15px',
        paddingRight: {
            lg: "55px",
            xs: 0,
        },
        display: "flex",
    },
    icon: {
        width: '38px',
        height: "38px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: '50%',
        border: "1px solid #fff",
        marginRight: "10px",
        cursor: "pointer",

        "&:hover": {
            color: "#24ccd7",
            background: "#fff",
        }
    },
    contactTitle: {

    },
    topTitle: {
        fontFamily: 'Lato',
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "20px",
        color: "#f1f1f1",
    },
    footerBottom: {
        backgroundColor: "#454545",
    },
    wrapper: {
        display: "flex",
        flexDirection: {
            xs: "column",
            md:"row",
        },
        justifyContent: "space-between",
        padding: "17px 0",
    },
    copyright: {
        fontFamily: "Lato",
        fontSize: "13px",
        fontWeight: 400,
        lineHeight: "19px",
        color: "#fff",
        textAlign: {
            xs: "center",
            sm: "left",
        },
        paddingBottom: {
            xs: "17px",
            sm: "0"
        },
    },
    paymentImage: {
        width: "214px",
        height: "24px",
        marginLeft: {
            xs: "auto"
        },
        marginRight: {
            xs: "auto",
            sm: "initial",
        }
    },
};

export default styles;
