import styles from "./styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "mui-image";
import banner1 from "src/assets/banner1.webp";
import banner2 from "src/assets/banner2.webp";
import banner3 from "src/assets/banner3.webp";
import { Box, Typography } from "@mui/material";
import FancyButton from "src/components/FancyButton";

const BannerFashion = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={styles.gridStyled}>
        <Grid item xs={12} lg={6}>
          <Box sx={styles.boxContainer}>
            <Image src={banner1} wrapperStyle={styles.imageWrapper} style={styles.image} />
            <Typography variant="h3" sx={styles.menFashion}>
              Men's Fashion
            </Typography>
            <FancyButton styleButton={styles.shop}>Shop Now</FancyButton>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box sx={styles.boxContainer}>
            <Image src={banner2} wrapperStyle={styles.accessories} style={styles.image} />
            <Typography variant="h3" sx={styles.menFashion}>Accessories</Typography>
            <FancyButton styleButton={styles.shopJewelry}>Shop Now</FancyButton>
          </Box>
          <Box sx={styles.boxContainer}>
            <Image src={banner3} wrapperStyle={styles.imageWrapper} style={styles.image} />
            <Typography variant="h3" sx={styles.womenFashion}>Women's Fashion</Typography>
            <FancyButton styleButton={styles.shopWomen}>Shop Now</FancyButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BannerFashion;
