const styles = {
  badge: {
    "& .MuiBadge-badge": {
      backgroundColor: "#666666",
    },
  },
  icon: {
    cursor: "pointer",
    padding: "0 12px",
    // height: "84px",

    "&:hover": {
      color: "#24ccd7 !important",
    },
  },
  cart: {
    zIndex: 1000,
    position: 'absolute',
    top: '59px',
    right: 0,
    backgroundColor: '#444444',
    padding: {
        xs: '10px',
        md: '30px'
    },
    width: {
        xs: '280px',
        md: '300px'
    },
    boxSizing: 'content-box',
    color: "#fff"
  },
  titleItem: {
    textAlign: 'center',
    paddingBottom: '15px',
    fontSize: '12px',
    fontWeight: '55',
    lineHeight: '13px',
    fontFamily: 'Lato',
    textTransform: 'uppercase',
    borderBottom: '1px solid #fff'
  },
  cartOverview: {
    paddingTop: '15px',
    paddingBottom: '15px',
    borderBottom: '1px solid #fff'
  },
  cartItem: {
    backgroundColor: '#444444',
    boxShadow: "none",
    width: '100%',
    display: "flex",
    borderRadius: 0,
  },
  cartImage: {
    padding: 0,
    width: '30%',
    height: '101px',
    objectFit: 'cover',
  },
  item: {
    color: "#24ccd7 !important",
  },
  cartContent: {
    padding: 0,
    marginLeft: '10px',
    color: "#fff",
    width: '70%',
  },
  cartContextOverview: {
    display: "flex",
    justifyContent: "space-between",
  },
  productName: {
    fontSize: "12px",
    lineHeight: "13px",
    fontFamily: 'Lato',
    fontWeight: 500,
    textTransform: 'uppercase',
    marginBottom: '10px',
  },
  iconButton: {
    color: '#fff',
    fontSize: '12px',
    padding: 0,
    marginBottom: '10px',
  },
  price: {
    fontSize: '15px',
    fontWeight: 500,
    lineHeight: '25px',
  },
  subtotal: {
    padding: '15px 0',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    fontFamily: 'Lato'
  },
  cartButton: {
    marginBottom: '10px',
  }
};

export default styles;
