import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  
    useRouteMatch,
    NavLink
  } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button} from "@mui/material";
import Pay from "../Pay/Pay";
import MyOrders from "../MyOrders/MyOrders";
import Review from "../Review/Review";
import useAuth from "../../../hooks/useAuth";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddProducts from "../AddProducts/AddProducts";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import dashboardLogo from '../../../images/logo/benz-motors.png';
import './Dashboard.css';
import ManageProducts from "./ManageProducts/ManageProducts";
const drawerWidth = 200;

function Dashboard(props) {
    const {logOut, admin} = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{backgroundColor: '#4971FF'}}>
      <Toolbar />
      <Divider />
      <Typography className="dashboard-text-1" variant="h6" noWrap component="div">
          Dashboard
      </Typography>
      <Link className="dashboard-text" style={{display: 'block', }} to="/explore">Explore</Link>
      <Link className="dashboard-text" style={{display: 'block', }}  to={`${url}/myorder`}>My Orders</Link>
      <Link className="dashboard-text" style={{display: 'block', }} to={`${url}/payment`}>Payment</Link>
      <Link className="dashboard-text" style={{display: 'block', }}  to={`${url}/reviews`}>Reviews</Link>
      {admin && <Box>
        <Link className="dashboard-text" style={{display: 'block', }}  to={`${url}/makeAdmin`}>Make Admin</Link>
        <Link className="dashboard-text" style={{display: 'block', }}  to={`${url}/addProducts`}>Add Products</Link>
        <Link className="dashboard-text" style={{display: 'block', }}  to={`${url}/manageAllOrders`}>Manage All Orders</Link>
        <Link className="dashboard-text" style={{display: 'block', }}  to={`${url}/manageProducts`}>Manage Products</Link>
          </Box>}
      <Button style={{backgroundColor: '#232628', fontWeight: 'bold', borderRadius: '0px', width: '100%', padding: '15px 0px', marginTop: '150px'}} onClick={logOut} variant="contained">Logout</Button>
      
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{backgroundColor: '#232628'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div>
            <NavLink to="/home"><img style={{ height: "65px" }} src={dashboardLogo} alt="" /></NavLink>
          </div>
          <Typography variant="h6" noWrap component="div">
          
            
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/payment`}>
          <Pay></Pay>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/addProducts`}>
          <AddProducts></AddProducts>
        </AdminRoute>
        <AdminRoute path={`${path}/manageAllOrders`}>
          <ManageAllOrders></ManageAllOrders>
        </AdminRoute>
        <AdminRoute path={`${path}/manageProducts`}>
          <ManageProducts></ManageProducts>
        </AdminRoute>
        <Route path={`${path}/myorder`}>
          <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/reviews`}>
          <Review></Review>
        </Route>
      </Switch>
       </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;