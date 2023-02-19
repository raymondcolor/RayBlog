import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../componets/login/login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='formContainer'>
      <div className='Form'>
        <div className='logo'>
          <h1>
            Ray<span>Blog</span>
          </h1>
        </div>
        <h2>Login</h2>
        <input
          type='text'
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Log in</button>
        <div className='Footer'>
          <p>
            Hvae no account yet?
            <Link to={'/signup'}>
              <span>Create account</span>
            </Link>
          </p>
          <p>
            Return to 
            <Link to={'/'}>
              <span>home</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
