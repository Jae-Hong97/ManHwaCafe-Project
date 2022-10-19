/* eslint-disable */
import React from 'react';
import { TextField, Checkbox, Button, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';

function Login(props) {
    return (
        
      <div className="login">
        
        
        
      <div>
        <h1> 가게 Cafe 시스템</h1>
      </div>
      <div>
        <div><TextField 
        label = "ID"
         required 
          name='ID'
          autoComplete="id"
          autoFocus />
        </div>
        <div>
        <TextField 
        label = "Password"  
        type="password" 
        required 
        
        name='password'/>
        </div>
        <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="이메일 기억하기"
              />
        <div>
          <Link to = "/main"> 
        <Button type="submit"   
        variant="contained" sx={{ mt: 3, mb: 1 }}> 로그인 </Button>
        </Link>
        </div>
        <div>
          
        </div>
        
      </div>
      <Link to = "/signup"> 
        <Button type="submit"   
        variant="contained" sx={{ mt: 1, mb: 2 }}> 회원가입 </Button>
        </Link>
            
  
      
      </div>
      
      
    );
  }
  
  export default Login;