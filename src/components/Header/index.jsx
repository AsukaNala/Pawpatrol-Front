import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../../assets/logo.png";
import { styled } from "@mui/material/styles";
import { NavLink, Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

const drawerWidth = 240;

const LogoLink = styled(Link)(() => ({
  display: "flex",
  alignItems: "center",
  color: "inherit",
  textDecoration: "none",
  flexGrow: 1,
}));

const HeaderLink = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  textDecoration: "none",
  color: "inherit",
}));

const LogoImg = styled("img")(() => ({
  width: 80,
  height: 80,
  borderRadius: "50%",
  marginRight: 10,

  "@media (max-width: 600px)": {
    width: 40,
    height: 40,
  },
}));

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <NavLink to="/">
        <Typography
          variant="h6"
          sx={{ fontFamily: "Permanent Marker, cursive", my: 2 }}
        >
          Paw Patrol
        </Typography>
      </NavLink>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <HeaderLink component={NavLink} to="/missingpets/search">
              Search Missing Pets
            </HeaderLink>
          </ListItemButton>
          <ListItemButton sx={{ textAlign: "center" }}>
            <HeaderLink component={NavLink} to="/foundpets/search">
              Search Found Pets
            </HeaderLink>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <LogoLink component={RouterLink} to="/">
            <LogoImg src={Logo} alt="Logo" />
            <Typography
              variant="h3"
              ml={2}
              component="div"
              sx={{
                fontFamily: "Permanent Marker, cursive",
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
              }}
            >
              Paw Patrol
            </Typography>
          </LogoLink>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <nav>
              <HeaderLink component={NavLink} to="/missingpets/search">
                Search Missing Pets
              </HeaderLink>
              <HeaderLink component={NavLink} to="/foundpets/search">
                Search Found Pets
              </HeaderLink>
            </nav>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Header;
