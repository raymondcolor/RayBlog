import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [file, setFile] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='formContainer'>
      <div className='Form'>
        <div className='logo'>
          <h1>
            Ray<span>Blog</span>
          </h1>
        </div>
        <h2>Create an account</h2>
        <input
          type='text'
          placeholder='User name'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Enter Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='file'>Upload profile pic</label>
        <input
          style={{display: 'none'}}
          type='file'
          id='file'
          value={file}
          onChange={(e) => setFile(e.target.files[0])}
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
            Have an account?
            <Link to={'/login'}>
              <span>Log In</span>
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

export default SignUp;
