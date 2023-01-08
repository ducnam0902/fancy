import Box from "@mui/material/Box/Box";
import styles from "./styles";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import MuiLink from '@mui/material/Link';
interface BannerProps {
  title: string
}
const Banner = ({title}: BannerProps) => {
  return (
    <Box sx={styles.banner}>
      <Typography variant="h2" sx={styles.title}>
       {title}
      </Typography>
      <Breadcrumbs sx={styles.breadcrumbs}>
        <MuiLink sx={styles.linkHome} component={Link} to="/" >
          Home
        </MuiLink>
        <Typography sx={styles.currentTitle}>{title}</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default Banner;
