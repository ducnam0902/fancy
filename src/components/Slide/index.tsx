import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Box } from "@mui/material";
import Image from "mui-image";

import slides from "src/utils/slides";
import styles from "./styles";
type NavButtonProps = {
  onClick: Function | MouseEvent;
  next: boolean;
  prev: boolean;
};
const Slide = () => {
  return (
    <Carousel
    navButtonsProps={{style: styles.navButtonProps}}
      indicatorContainerProps={{
        style: {
            position: "absolute",
            textAlign: 'right',
            right: 0,
            bottom: 0,
        }
    }}
    indicatorIconButtonProps={{style: styles.indicatorIconButton}}
    activeIndicatorIconButtonProps={{style: styles.activeIndicator}}
    >
      {slides.map((item, index) => (
        <Paper key={index} sx={styles.paper}>
          <Image src={item.image} />
          <Box sx={styles.textOverview}>
            <Typography variant="h2" sx={styles.name}>
              {item.name}
            </Typography>
            <Typography variant="h3" sx={styles.description}>
              {item.description}
            </Typography>
            {index !== slides.length - 1 && <Button sx={[styles.button, styles.shopNow]}>Shop now</Button>}
            <Button sx={styles.button}>Show more</Button>
          </Box>
        </Paper>
      ))}
    </Carousel>
  );
};

export default Slide;
