import React, {useState, useContext} from 'react';
import NavBar from '../componets/navBar/NavBar';
import '../componets/createBlog/createPost.scss';
import {db, storage} from '../firebase';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import {AuthContext} from '../context/AuthContextProvider';

const CreateBlof = ({setShow}) => {
  const {currentUser} = useContext(AuthContext);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');
  const [post, setPost] = useState('');

  const Createblog = async () => {
    const PostCollectionRef = collection(db, 'blogs');

    // Create a storage reference to the image file with a unique name
    const imageName = file.name + '-' + Date.now();
    const imagesRef = ref(storage, 'blogImages/' + imageName);

    // Upload the file to the storage reference
    uploadBytesResumable(imagesRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(async (downloadURL) => {
        // Add the blog post data to the database
        await addDoc(PostCollectionRef, {
          category,
          title,
          downloadURL,
          post,
          authur: {
            name: currentUser.displayName,
            id: currentUser.uid,
            photoURL: currentUser.photoURL,
          },
          createdAt: serverTimestamp(),
        });
      });
    });
  };

  return (
    <div>
      <NavBar setShow={setShow} />
      <div className='mainContainer'>
        <div className='blogFormContainer'>
          <div className='formHeader'>
            <h1>Create Post</h1>
          </div>
          <div className='formBody'>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value='Design'>Design</option>
              <option value='Health'>Health</option>
              <option value='Software'>Software</option>
              <option value='Sports'>Sports</option>
            </select>
            <input
              type='text'
              placeholder='Add Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              style={{display: 'none'}}
              id='file'
              type='file'
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor='file'>Upload cover photo</label>
            <textarea
              placeholder='Type here...'
              value={post}
              onChange={(e) => setPost(e.target.value)}></textarea>
          </div>
          <div className='formFooter'>
            <button onClick={Createblog}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlof;
