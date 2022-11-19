import { useState } from "react";
import Image from "mui-image";

import { Badge, Box, ListItem, Typography, Card, CardContent, IconButton } from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from "@mui/icons-material/Close";

import product from "src/assets/product.avif";
import FancyButton from "src/components/FancyButton";
import styles from "src/components/CartNavigation/styles";
const CartNavigation = () => {
  const [isOpenShoppingCart, setIsOpenShoppingCart] = useState(false);
  const handleToogleShoppingCart = () => {
    setIsOpenShoppingCart((isOpenCart) => !isOpenCart);
  };

  return (
    <>
      <ListItem sx={styles.icon} onClick={handleToogleShoppingCart}>
        <Badge badgeContent={4} sx={styles.badge}>
          <ShoppingCartOutlinedIcon fontSize="small" />
        </Badge>
      </ListItem>
      {isOpenShoppingCart && (
            <Box sx={styles.cart}>
              <Typography variant="body1" sx={styles.titleItem}>
                You have <span style={styles.item}>(7 items)</span> in your cart
              </Typography>
              <Box sx={styles.cartOverview}>
                <Card sx={styles.cartItem}>
                  <CardContent sx={styles.cartImage}>
                    <Image src={product} alt="product" duration={0} fit="contain" />
                  </CardContent>
                  <CardContent sx={styles.cartContent}>
                    <Box sx={styles.cartContextOverview}>
                      <Typography sx={styles.productName} variant="h6">
                      Aliquam consequatfuck - Default Title / black / xl
                      </Typography>
                      <IconButton sx={styles.iconButton}>
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    <Typography variant="h6" sx={styles.price}> 1 X $50.00</Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box >
                <Typography sx={styles.subtotal} variant="h6">Subtotal: $4,733.00</Typography>
                <FancyButton style={styles.cartButton}>Shopping Cart</FancyButton>
                <FancyButton>Check out</FancyButton>
              </Box>
            </Box>
          )}
    </>
  );
};

export default CartNavigation;
