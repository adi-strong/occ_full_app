import {AppBar, TitlePortal} from "react-admin";
import {Box} from "@mui/material";
import logo from '../assets/logo.jpg'

export default function AppBarComponent() {
  return (
    <AppBar
      sx={{
        backgroundColor: '#0000FF'
      }}>
      <TitlePortal variant='body2' component='h3'/>
      <img
        src={logo}
        width={33}
        height={33}
        style={{ borderRadius: '50%', marginRight: 2 }}
        alt=''/>
      <Box flex={1} component='span' sx={{ fontWeight: 'bold' }}>
        OFFICE CONGOLAISE DE CONTRÔLE
      </Box>
    </AppBar>
  )
}
