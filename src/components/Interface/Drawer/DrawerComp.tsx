import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemButton,
  Link,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../Theme";
import { routes } from "../../../routes/route";
import MenuIcon from '@mui/icons-material/Menu';
import './Drawer.css';



const DrawerComponent: React.FC = () => {
  
    const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Drawer open={openDrawer}  onClose={() => setOpenDrawer(false)} anchor="right" >

        <List>
              
          {routes.map((page) => (
            <>
           
          <ListItem onClick={() => setOpenDrawer(false)} >

          <Link       key={page.key}
                      component={NavLink}
                      to={page.path}
                      color="black"
                      className='link'
                      underline="none"
                      variant="button">
            <ListItemButton  sx={{
            ":hover": {
              backgroundColor: "#FFFFFF"}}}>
              <ListItemText primary={page.title} />
              </ListItemButton>
            </Link>
          
          </ListItem>

          </>


          ))}
        
        </List>

      </Drawer>
   

      <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ marginLeft: 'auto'}}>
        <MenuIcon sx={{color: '#000000'}}/>
      </IconButton>


      </ThemeProvider>
  );
}
export default DrawerComponent;