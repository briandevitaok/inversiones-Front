import { LocalFireDepartment, TurnedInNot } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Chip,
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
import { useNavigate } from 'react-router-dom';
import { deepOrange, pink, red } from '@mui/material/colors';

export const SideBar = ({ drawWithd }) => {
  
  const { user, email } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home', {
      replace: true,
    });
  };
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
          <Typography variant="h6" noWrap component="div" className="center">
            <Avatar sx={{ width: 50, height: 50, bgcolor: deepOrange[500] }}>
              {user}
            </Avatar>
          {email}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'].map(
            (text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <AttachMoneyIcon sx={{ color: red[600] }}>
                    <TurnedInNot />
                  </AttachMoneyIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                    <ListItemText secondary={'Valor invertido: $200000'} />
                    <ListItemText secondary={'Rentabilidad: $200000'} />
                    {/* <Chip label="Ver detalles" onClick={handleClick} /> */}
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
