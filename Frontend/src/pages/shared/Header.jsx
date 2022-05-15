import React, { useState } from 'react';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link, Paper, Divider, ListItemIcon, 
  MenuItem, Menu, Avatar, Card, IconButton,
   Tooltip, styled } from '@mui/material';
import VideoUpload from '../videos/VideoUpload';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentTab, setCurrentTab] = useState("Videos")
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledPaper = styled(Paper)(({ theme }) => ({
    margin: theme.spacing(1),
    display: 'flex',
    alignItems: 'left',
    textAlign: 'center',
    outline: 'true'
  }));

  const changeTab = (event) => {
    const selectedTab = event.currentTarget.name;
    setCurrentTab(selectedTab)
    if(selectedTab == 'Videos'){
      return (<VideoUpload/>);
    }
  }

  const renderTabs = (currentState) => {
    if(currentState == 'Videos'){
      return (<VideoUpload/>);
    }
  }

  return (
    <React.Fragment>
      {/* <StyledBox> */}
        <StyledPaper sx={{ width:"100%", alignItems:"left"}}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar>P</Avatar>
          </IconButton>
        </Tooltip>
        <Link color="any" name="Profile" underline="none" sx={{ m: 3 }} onClick={changeTab}>Profile</Link>
        <Link color="any" name="Vision" underline="none" sx={{ m: 3 }} onClick={changeTab}>Vision Board</Link>
        <Link color="any" name="Videos" underline="none" sx={{ m: 3 }} onClick={changeTab}>Videos</Link>
        <Link color="any" name="Skols" underline="none" sx={{ m: 3 }} onClick={changeTab}>Skols</Link>
        </StyledPaper>
      {/* </StyledBox> */}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <Card>
        <section>
          {renderTabs(currentTab)}
        </section>
      </Card>
    </React.Fragment>
  );
}
