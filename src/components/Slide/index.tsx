import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Box } from "@mui/material";
import { Fade } from 'react-reveal';
import Image from "mui-image";
import slides from "src/utils/slides";
import styles from "./styles";
import { useState } from "react";
type NavButtonProps = {
  onClick: Function | MouseEvent;
  next: boolean;
  prev: boolean;
};
const Slide = () => {
  const [isShowFade, setIsShowFade] = useState(crypto.randomUUID());

  const handleShowFadeImage = (now, previous) => {
    setIsShowFade(crypto.randomUUID());

  }
  return (
    <Carousel
      navButtonsProps={{ style: styles.navButtonProps }}
      indicatorContainerProps={{
        style: {
          position: "absolute",
          textAlign: 'right',
          right: 0,
          bottom: 0,
        }
      }}
      indicatorIconButtonProps={{ style: styles.indicatorIconButton }}
      activeIndicatorIconButtonProps={{ style: styles.activeIndicator }}
      animation={undefined}
      swipe={false}
      onChange={handleShowFadeImage}
    >
      {slides.map((item, index) => (
        <Paper key={index} sx={styles.paper}>
          <Image src={item.image} />
          <Box sx={styles.textOverview}>
            <Fade left spy={isShowFade}>
              <Typography variant="h2" sx={styles.name}>
                {item.name}
              </Typography>
            </Fade>

            <Fade left delay={500} spy={isShowFade}>
              <Typography variant="h3" sx={styles.description}>
                {item.description}
              </Typography>
            </Fade>
            <Fade left delay={1000} spy={isShowFade} >
              <>
              {index !== slides.length - 1 && <Button sx={[styles.button, styles.shopNow]}>Shop now</Button>}
              <Button sx={styles.button}>Show more</Button>
              </>
            </Fade>

          </Box>
        </Paper>
      ))}
    </Carousel>
  );
};

export default Slide;
