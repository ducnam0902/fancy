import React from 'react'
import { List, ListItem,ListItemText,  Typography } from "@mui/material";
import styles from "./styles";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
type menuListProps = {
  title: string,
  link: string
}

type FooterMenuProps = {
  title: string,
  menuList: menuListProps[],
}

const FooterMenu = ({title, menuList}: FooterMenuProps) => {
  return (
    <>
      <Typography variant='h6' sx={styles.topTitleColumn}>{title}</Typography>
      <List sx={styles.listMenu}>
        {menuList.map((item,key) => (
           <ListItem key={key} sx={styles.listMenuItem} component={Link} to={item.link}>
           <FaAngleDoubleRight size='12px'/>
           <ListItemText sx={styles.listMenuItemText}>{item.title}</ListItemText>
           </ListItem>
        ))}


      </List>
    </>
  )
}

export default FooterMenu
