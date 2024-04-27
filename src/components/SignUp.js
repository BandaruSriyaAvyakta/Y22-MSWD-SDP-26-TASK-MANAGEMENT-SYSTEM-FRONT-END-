import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Grid, Link, Paper, Alert } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import './SignIn.css'; // Import the CSS file

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        document.body.classList.add('signin-background');

        return () => {
            document.body.classList.remove('signin-background');
        };
    }, []);

    const navigate = useNavigate();
    const location = useLocation();

    const containerStyle = {
        background: location.pathname === '/signin' || location.pathname === '/signup' ? 'rgba(255, 255, 255, 0.8)' : 'initial',
        borderRadius: '8px',
        padding: '2rem',
        width: '70%',
        margin: 'auto',
        marginTop: '20vh',
    };

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!fullName) {
            errors.fullName = "Full name is required.";
            isValid = false;
        }

        if (!gender) {
            errors.gender = "Gender is required.";
            isValid = false;
        }

        if (!dob) {
            errors.dob = "Date of birth is required.";
            isValid = false;
        }

        if (!email) {
            errors.email = "Email is required.";
            isValid = false;
        }

        if (!password) {
            errors.password = "Password is required.";
            isValid = false;
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
            errors.password = "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.";
            isValid = false;
        }

        if (!mobileNumber) {
            errors.mobileNumber = "Mobile number is required.";
            isValid = false;
        } else if (mobileNumber.length !== 10) {
            errors.mobileNumber = "Mobile number must be 10 digits long.";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSignUp = () => {
        if (!validateForm()) {
            return;
        }

        if (!recaptchaValue) {
            alert('Please verify that you are not a robot.');
            return;
        }

        console.log('Signing up with the following data:');
        console.log('Full Name:', fullName);
        console.log('Gender:', gender);
        console.log('Date of Birth:', dob);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Mobile Number:', mobileNumber);
        navigate('/Home');
    };

    return (
        <Container
            component="main"
            maxWidth="sm"
            style={containerStyle}
        >
            <Paper elevation={3} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '500px', overflow: 'auto' }}>
                <Typography variant="h5" align="center">
                    Sign Up Form
                </Typography>
                <form style={{ width: '100%', marginTop: '1rem' }}>
                    {errors.fullName && <Alert severity="error">{errors.fullName}</Alert>}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="fullName"
                        label="Full Name"
                        name="fullName"
                        autoComplete="name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    {errors.gender && <Alert severity="error">{errors.gender}</Alert>}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="gender"
                        label="Gender"
                        name="gender"
                        autoComplete="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    {errors.dob && <Alert severity="error">{errors.dob}</Alert>}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="dob"
                        label="Date of Birth"
                        name="dob"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                    {errors.email && <Alert severity="error">{errors.email}</Alert>}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.password && <Alert severity="error">{errors.password}</Alert>}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.mobileNumber && <Alert severity="error">{errors.mobileNumber}</Alert>}
                    <TextField
                        margin="normal"
                        fullWidth
                        id="mobileNumber"
                        label="Mobile Number"
                        name="mobileNumber"
                        autoComplete="tel"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />
                    <ReCAPTCHA
                        sitekey="6Lf-ho8pAAAAAA_On4CjDnXAMywR2qWFhL8OGIXk"
                        onChange={handleRecaptchaChange}
                    />

                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleSignUp}
                        style={{ marginTop: '1rem' }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end" style={{ marginTop: '1rem' }}>
                        <Grid item>
                            <Link href="/signin" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default SignUp;
