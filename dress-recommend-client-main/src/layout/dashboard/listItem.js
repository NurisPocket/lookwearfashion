import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from '@mui/material';
//import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

export default function ListItem() {
  return (
    <List>
      <ListSubheader>Menu</ListSubheader>

      <Link
        to="/Realreview"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <ListItemButton>
          <ListItemText primary="실착후기" />
        </ListItemButton>
      </Link>
      <Link to="/mypage" style={{ textDecoration: 'none', color: 'inherit' }}>
        <ListItemButton>
          <ListItemText primary="마이페이지" />
        </ListItemButton>
      </Link>
      <Link to="/aboutus" style={{ textDecoration: 'none', color: 'inherit' }}>
        <ListItemButton>
          <ListItemText primary="About Us" />
        </ListItemButton>
      </Link>
    </List>
  );
}
