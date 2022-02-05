import * as React from 'react';
import "./App.css";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

const App = () => {

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",width:550 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: "column", alignContent:"center",alignItems: "center", m:2 }}>
        <Avatar sx={{ bgcolor: "secondary.main" }}>
          <LockIcon></LockIcon>
        </Avatar>

        <Typography variant="h6">Sign Up</Typography>
      </Box>
      <Box sx={{  maxWidth: '100%',mb:1}}>
        <TextField id="outlined-basic" label="First Name *" variant="outlined" sx={{m:1}} />
        <TextField id="outlined-basic" label="Last Name *" variant="outlined" sx={{m:1}}/>
      </Box>
      <Box sx={{display:"flex", flexDirection: "column", width:450}}>
        <TextField id="fullWidth" fullWidth label="Email Adress *" variant="outlined" sx={{mb: 2}} />
        <TextField id="fullWidth" fullWidth label="Password *" variant="outlined" />
      </Box >

      <Box sx={{ display: 'flex', alignItems: 'center',m:1 }}>
        <Checkbox></Checkbox>
        <Typography>I want to recibe information,marketing promotions and updates via email</Typography>
      </Box>

    </Box>
  )
}

export default App;
