import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Grid, Link, FormControlLabel, Checkbox, Paper, Alert, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './SignIn.css'; // Import the CSS file

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState(''); // State for role
    const navigate = useNavigate();

    const validatePassword = (password) => {
        if (password.length < 8) return false;
        if (!/[a-z]/.test(password)) return false;
        if (!/[A-Z]/.test(password)) return false;
        if (!/[0-9]/.test(password)) return false;
        return true;
    };

    const handleSignIn = () => {
        if (!validatePassword(password) || role === '') {
           setPasswordError(true);
           return;
        }
        setPasswordError(false);
        
        // Store email in session storage
        sessionStorage.setItem('loggedInUserEmail', email);
        
        // Redirect based on the selected role
        if (role === "Admin") {
           navigate('/Users'); // Assuming '/Users' is the route for the Users page
        } else if (role === "User") { // Add this condition to handle User role
           navigate('/Home'); // Redirect to the Home page for users
        }
    };
    

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        document.body.classList.add('signin-background');

        return () => {
            document.body.classList.remove('signin-background');
        };
    }, []);

    return (
        <div className="signin">
            <Container className="signin-form" component="main" maxWidth="sm" style={{ marginTop: '20vh' }}>
                <Paper elevation={3} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h4" align="center">
                        Sign In
                    </Typography>
                    <form style={{ width: '100%', marginTop: '2rem', marginLeft: '4rem', marginRight: '4rem', maxHeight: '120vh' }}>
                    <TextField
    margin="normal"
    required
    fullWidth
    id="email"
    label="Email Address"
    name="email"
    autoComplete="email"
    autoFocus
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    sx={{ '& .MuiInputBase-input': { backgroundColor: 'transparent' } }}
    aria-label="Email Address" // Add aria-label for accessibility
    helperText="Enter your email address" // Add helper text
/>
<TextField
    margin="normal"
    required
    fullWidth
    name="password"
    label="Password"
    type={showPassword ? 'text' : 'password'}
    id="password"
    autoComplete="current-password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    sx={{ '& .MuiInputBase-input': { backgroundColor: 'transparent' } }}
    aria-label="Password" // Add aria-label for accessibility
    helperText="Enter your password. Must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number." // Add helper text
    InputProps={{
        endAdornment: (
            <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
            </InputAdornment>
        ),
    }}
/>

                        {passwordError && (
                            <Alert severity="error" style={{ marginTop: '1rem' }}>
                                Password is invalid. It must contain at least one lowercase letter, one uppercase letter, one number, and be at least 8 characters long.
                            </Alert>
                        )}
                        <FormControlLabel
                            control={<Checkbox color="primary" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />}
                            label="Remember Me"
                        />
                        {/* Updated Select component for role selection with "User" and "Admin" options */}
                        <Select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            style={{ marginTop: '1rem' }}
                        >
                            <MenuItem value="" disabled>
                                Sign in as
                            </MenuItem>
                            <MenuItem value={"User"}>User</MenuItem>
                            <MenuItem value={"Admin"}>Admin</MenuItem>
                        </Select>
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleSignIn}
                            style={{ marginTop: '1rem' }}
                        >
                            Sign In
                        </Button>
                        <Grid container justifyContent="flex-end" style={{ marginTop: '1rem' }}>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    Don't have an account? Sign up
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export default SignIn;
