import { React, useState } from 'react';
import { Box, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from './listItem';

export default function Side() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        aria-label="logo"
        onClick={() => setDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center">
          <ListItem />
        </Box>
      </Drawer>
    </>
  );
}
