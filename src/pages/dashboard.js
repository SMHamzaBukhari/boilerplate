import * as React from 'react';
import './dashboard.css'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Photos from './subpages/photos';
import Todos from './subpages/todos';
import Users from './subpages/users';
import Posts from './subpages/posts';
import Comments from './subpages/comments';
import Albums from './subpages/albums';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import UploadIcon from '@mui/icons-material/Upload';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import CommentIcon from '@mui/icons-material/Comment';
import { getData } from '../config/firebase/firebasemethods';
import { useState } from 'react';
import InputValue from './subpages/inputValue';
import ShowDetail from './subpages/showDetail';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Dashboard(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [username, setUsername] = useState("");
  const params = useParams();
  const obj = {username};
  const navigate = useNavigate();
  React.useEffect(()=>{
    if(params.id){
      getData('users')
    }
  })
  
  
  const dashboard = () =>{
    navigate(`/dashboard/${username}`, {state: obj});
    }
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const MoveToRoute = (route) =>{
      navigate(route);
  } 
  
const [routes,setRoutes] = React.useState([
  {
  routeName: 'Home',
  routeIcon: <HomeIcon/>,
  route:'/home'
},{
  routeName: 'Details',
  routeIcon: <HomeIcon/>,
  route:'/details'
},{
  routeName: 'Users',
  routeIcon: <PersonIcon/>,
  route:'/users'
},{
  routeName: 'Todos',
  routeIcon: <ListIcon/>,
  route:'/todos'
},{
  routeName: 'Posts',
  routeIcon: <UploadIcon/>,
  route:'/posts'
},{
  routeName: 'Albums',
  routeIcon: <LibraryBooksIcon/>,
  route:'/albums'
},{
  routeName: 'Photos',
  routeIcon: <PhotoSizeSelectActualIcon/>,
  route:'/photos'
},{
  routeName: 'Comments',
  routeIcon: <CommentIcon/>,
  route:'/comments'
},
]);


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {routes.map((text, index) => (
            <ListItem onClick={()=>{MoveToRoute(text.route)}} key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {text.routeIcon}
                </ListItemIcon>
                <ListItemText primary={text.routeName} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
       
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
            <Route path="/home" element={<InputValue />}></Route> 
            <Route path="/details" element={<ShowDetail />}></Route> 
            <Route path="photos" element={<Photos />}></Route> 
            <Route path="albums" element={<Albums />}></Route>
            <Route path="todos" element={<Todos />}></Route>
            <Route path="users" element={<Users />}></Route>
            <Route path="posts" element={<Posts />}></Route>
            <Route path="comments" element={<Comments />}></Route> 
            
            </Routes>
      </Box>
    </Box>
  );
}





