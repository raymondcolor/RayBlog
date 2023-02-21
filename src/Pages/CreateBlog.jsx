import React from 'react';
import NavBar from '../componets/navBar/NavBar';
import '../componets/createBlog/createPost.scss';

const CreateBlof = ({setShow}) => {
  return (
    <div>
      <NavBar setShow={setShow} />
      <div className='mainContainer'>
        <div className='blogFormContainer'>
          <div className='formHeader'>
            <h1>Create Post</h1>
          </div>
          <div className='formBody'>
            <input type='text' placeholder='Add Tittle' />
            <input style={{display: 'none'}} id='file' type='file' />
            <label htmlFor='file'>Upload cover photo</label>
            <textarea placeholder='Type here...'></textarea>
          </div>
          <div className='formFooter'>
            <button>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlof;
