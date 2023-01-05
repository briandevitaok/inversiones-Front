import { LocalFireDepartment, TurnedInNot } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import logo from '../asset/img/mia.jpg'; // with import
import { deepOrange } from '@mui/material/colors';





export const SideBar = ({ drawWithd }) => {
    const {user} = useContext(AuthContext)

    
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawWithd }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawWithd },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" className='center'>
          

            {/* <Avatar sx={{ width: 50, height: 50, bgcolor: deepOrange[500]}}>{user[1][2]}</Avatar> */}
            <Button variant="contained" color="success">{user}</Button>

  
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'].map(
            (text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <AttachMoneyIcon>
                    <TurnedInNot />
                  </AttachMoneyIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                    <ListItemText
                      secondary={
                        'Mis inversiones: $200000'
                      }
                    />
                  </Grid>
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
};
