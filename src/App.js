import * as React from 'react';
import "./App.css";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const App = () => {

  return (

    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", mt: 10 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: "column", alignContent: "center", alignItems: "center", m: 2 }}>
        <Avatar sx={{ bgcolor: "secondary.main" }}>
          <LockIcon></LockIcon>
        </Avatar>
        <Typography variant="h6">Sign Up</Typography>
      </Box>
      <form>
        <Box sx={{ width: 400, mb: 1, display: "flex", justifyContent: "space-between" }}>
          <TextField id="outlined-basic" label="First Name *" variant="outlined" />
          <TextField id="outlined-basic" label="Last Name *" variant="outlined" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", width: 400, mb: 1 }}>
          <TextField id="fullWidth" fullWidth label="Email Adress *" variant="outlined" sx={{ mb: 2 }} />
          <TextField id="fullWidth" fullWidth label="Password *" variant="outlined" />
        </Box >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
          <Checkbox></Checkbox>
          <Typography sx={{ width: 370 }}>I want to recibe information,marketing promotions and updates via email</Typography>
        </Box>
        <Button sx={{ width: 400, m: 2 }} variant="contained">Sing Up</Button>
        <Box sx={{ width: 400, mb: 1, display: "flex", justifyContent: "flex-end" }}>
          <Link href="#" underline="hover" >{'Already have an account? Sign in'}</Link>
        </Box>
      </form>
      
    </Box>
  )
}

export default App;
