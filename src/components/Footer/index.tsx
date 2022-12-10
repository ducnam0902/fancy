import { Box, Container, Typography } from "@mui/material";
import Image from "mui-image";

import contactDetails from "src/utils/contactDetails";
import payment from "src/assets/payment.avif";
import logo from "src/assets/logo.webp";
import styles from "./styles";
import FooterMenu from "src/components/FooterMenu";

import menuList from "src/stub/menuList.json";
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <Container fixed sx={styles.footerTop}>
        <Box sx={styles.footerColumn}>
          <Image src={logo} alt="logo" width="100px" height="45px" />
          <Typography variant="h6" sx={styles.title}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
          <Box sx={styles.contactOverview}>
            {contactDetails.map((item) => (
              <Box sx={styles.contactDetails}>
                <Box sx={styles.icon}>{item.icon}</Box>
                <Box sx={styles.contactTitle}>
                  <Typography variant="h6" sx={styles.topTitle}>
                    {item.topTitle}
                  </Typography>
                  <Typography variant="h6" sx={styles.topTitle}>
                    {item.bottomTitle}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        {menuList.map((item, key) => (
          <Box sx={styles.footerColumn} key={key}>
            <FooterMenu {...item} />
          </Box>
        ))}
      </Container>
      <Box sx={styles.footerBottom}>
        <Container sx={styles.wrapper}>
          <Typography variant="body1" sx={styles.copyright}>
            Copyright © Fancy. All Rights Reserved.
          </Typography>
          <Box sx={styles.paymentImage}>
            <Image src={payment} alt="payment" />
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
