import * as React from 'react';
import { Box, CssBaseline, Container, Stack, Typography, Card, CardContent, FormControl, FormLabel, TextField, OutlinedInput, InputAdornment, IconButton, Checkbox, Button, Grid} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {


    
    //Show/hide Password
    const [showPassword, setShowPassword] = React.useState(false);
    const [values, setValue] = React.useState('');


    const handleClickShowPassword = () => setShowPassword((show) => !show);


    const handleMouseDownPassword = (event) => {
        // alert("hello");
        // event.preventDefault();
       
        setValue(event.target.value);
        // console.log(event.target.value);
    };

    console.log(values);
    

        // const amj = () => {
        //     alert("dhddhhdhhddh")
        // }


  return (
    <Box>
    <CssBaseline />
    <Container maxWidth="sm">
        <Grid container justifyContent="center" padding="50px 0px">
            <Grid item sm={8} xs={12}>
                <Box textAlign="center" paddingBottom="18px">
                    <Typography component="a" href='#Ggf' sx={{ textDecoration: "none", display: "inline-block" }}>
                        <Stack spacing={1} direction="row" alignItems="center" justifyContent="center">
                            <img
                                src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/logo.png"
                                alt="NiceAdminlogo"
                                width="25px"
                                height="25px"
                            />
                            <Typography
                                variant="h6"
                                noWrap
                                className='nunito-sans'
                                fontWeight={700}
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: '"Nunito", sans-serif',
                                    fontSize: "24px",
                                    color: "#012970",
                                    textDecoration: 'none',
                                }}
                            >
                                NiceAdmin
                            </Typography>
                        </Stack>
                    </Typography>
                </Box>
                <Card sx={{boxShadow : "0px 0px 8px rgba(0,0,0,0.3)"}}>
                    <CardContent sx={{padding : "30px 20px"}}>
                        <Typography variant="h5" component="div" fontWeight={700} textAlign="center" className='nunito-sans' color="#012970" >
                            Login to Your Account
                        </Typography>
                        <Typography variant="body2" textAlign="center" marginBottom="22px">
                         Enter your username & password to login
                        </Typography>
                        <Stack spacing={2}>
                            <FormControl fullWidth>
                                <FormLabel sx={{ color: "#000", marginBottom: "8px" }} >Username</FormLabel>
                                <TextField type='text' size='small'  value={values}/>
                            </FormControl>
                            <FormControl fullWidth>
                                <FormLabel sx={{ color: "#000", marginBottom: "8px" }} >Password</FormLabel>
                                <OutlinedInput                     
                                     onKeyUp={handleMouseDownPassword}
                                    //  onClick={handleMouseDownPassword}
                                //    onFocus={handleMouseDownPassword}
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                // onMouseUp={amj}
                                                // onMouseDown={handleMouseDownPassword}                                 
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    size='small'
                                />
                            </FormControl>
                            <Stack direction="row" alignItems="center">
                                <Checkbox disableRipple />
                                <Typography>
                                Remember me
                                </Typography>
                            </Stack>
                            <Button variant="contained" sx={{ textTransform: "capitalize", fontSize: "16px", backgroundColor: "#0d6efd" }}>
                                Login
                            </Button>
                            <Typography>
                            Don't have account?
                                <Typography component="a" href='#ff' color="#4154f1" sx={{ textDecoration: "none" }}> Create an account</Typography>
                            </Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </Container>
</Box>
  )
}

export default Login;