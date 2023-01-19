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
import ListItemAvatar from '@mui/material/ListItemAvatar';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import { red } from '@mui/material/colors';
export const SideBar = ({ drawWithd }) => {
  
  const { name, email, logged } = useContext(AuthContext);
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
          {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>{name[1]}</Avatar> */}
          <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        {/* <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar> */}
        {/* <ListItemText primary={email}/> */}
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`Usuario: ${name}`} secondary={ logged ? <span className='badge text-bg-success'>Activo</span>: null} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
          {/* {email} */}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {['Enero'].map(
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
                    <ListItemText secondary={'Tiempo financiado: 5'} />
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
