import React from 'react';
import './modals.scss';
import {auth} from '../../firebase';
import {signOut} from 'firebase/auth';

const LogOutModal = ({setShow}) => {
  //logging out user
  const SignOut = () => {
    signOut(auth)
      .then(() => {
        window.location.pathname = '/';
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className='logoutModalContainer'>
      <div id='logoutModal'>
        <p>Are you sure you want to log out</p>
        <div className='buttonLogoutModal'>
          <button onClick={() => setShow(false)} className='btnCancel'>Cancel</button>
          <button onClick={SignOut} className='logoutBtn'>Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default LogOutModal;
