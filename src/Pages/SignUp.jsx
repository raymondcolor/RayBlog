import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import googleIcon from '../componets/login/g.jpg';
import {auth, storage, provider} from '../firebase';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from 'firebase/auth';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [file, setFile] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  //sign up with email pasword
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);
      uploadBytesResumable(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then(async (downloadURL) => {
          await updateProfile(res.user, {
            displayName: displayName,
            photoURL: downloadURL,
          });
        });
      });
      navigate('/');
    } catch {
      console.log('error occured');
    }
  };

  //sigup with google
  const SignInWithgoogle = () => {
    try {
      signInWithPopup(auth, provider).then(() => {
        navigate('/');
      });
    } catch (err) {
      console.error(err);
    }
  };

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
          onChange={(e) => setFile(e.target.files[0])}
        />
        <input
          type='password'
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Sign Up</button>

        <p>or</p>
        <button onClick={SignInWithgoogle} className='googleBtn'>
          <div className='googleBtnDiv'>
            <div className='icon'>
              <img src={googleIcon} alt='' />
            </div>
            <div className='googleText'>
              <p>Sign in with google</p>
            </div>
          </div>
        </button>
        <div className='Footer'>
          <p>
            Have an account?
            <Link to={'/login'}>
              <span>Log In</span>
            </Link>
          </p>
          <p>
            Return to:
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
