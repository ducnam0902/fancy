import { useState } from "react";
import { AppBar, Badge, Container, IconButton, Toolbar, List, ListItem, ListItemText, Drawer, Box, Typography } from "@mui/material";
import logo from "src/assets/logo.webp";
import navigation from "src/stub/navigation.json";
import { NavLink } from "react-router-dom";
import styles from "src/components/Header/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const handleToggleDrawer = () => {
    setIsOpenDrawer((isOpen) => !isOpen);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#444444" }}>
      <Container maxWidth="lg" sx={styles.container}>
        <Toolbar>
          <IconButton sx={{ padding: 0 }} component={NavLink} to="/">
            <img src={logo} alt="logo" />
          </IconButton>
        </Toolbar>
        <List sx={styles.menuListNavigation}>
          {navigation.map((item, index) => (
            <ListItem sx={styles.menuItemText} key={index} component={NavLink} to={item.link}>
              <ListItemText
                sx={{
                  ...{ width: index === navigation.length - 1 ? "90px" : "60px" },
                }}
              >
                {item.title}
              </ListItemText>
            </ListItem>
          ))}
        </List>

        <List sx={styles.menuIcon}>
          <ListItem sx={styles.icon}>
            <SearchIcon fontSize="small" />
          </ListItem>
          <ListItem sx={styles.icon}>
            <Badge badgeContent={4} sx={styles.badge}>
              <ShoppingCartOutlinedIcon fontSize="small" />
            </Badge>
          </ListItem>
          <ListItem sx={styles.icon}>
            <PersonOutlineOutlinedIcon fontSize="small" />
          </ListItem>
          {matches && (
            <ListItem sx={styles.icon} onClick={handleToggleDrawer}>
              <MenuIcon fontSize="small" />
            </ListItem>
          )}
        </List>
        <Drawer anchor="left" open={isOpenDrawer} onClose={handleToggleDrawer}>
          <Box sx={styles.leftMenu}>
            <Box sx={styles.drawHeader}>
              <Typography variant="body1">Menu</Typography>
              <CloseOutlinedIcon fontSize="small" onClick={handleToggleDrawer}/>
            </Box>
          <List sx={styles.menuDrawerNavigation}>
          {navigation.map((item, index) => (
            <ListItem sx={styles.menuDrawerItem} key={index} component={NavLink} to={item.link}>
              <ListItemText
                sx={{
                  ...{ width: index === navigation.length - 1 ? "90px" : "60px" },
                }}
              >
                {item.title}
              </ListItemText>
            </ListItem>
          ))}
        </List>
          </Box>
        </Drawer>
      </Container>
    </AppBar>
  );
};

export default Header;
