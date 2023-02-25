import React, {useContext} from 'react';
import Blog from '../componets/blog/Blog';
import BlogSection from '../componets/blogsection/BlogSection';
import NavBar from '../componets/navBar/NavBar';
import Header from '../componets/myBlogs/Header';
import {Delete} from '@mui/icons-material';
import {BlogContext} from '../context/BlogContextProvider';
import {AuthContext} from '../context/AuthContextProvider';
import {deleteDoc, doc} from 'firebase/firestore';
import {db} from '../firebase';

const MyBlogs = ({setShow}) => {
  const {blogList} = useContext(BlogContext);
  const {currentUser} = useContext(AuthContext);
  console.log(blogList);
  //filtering blogs that are only related
  // or where posted by the currentUser / loggedin
  const currentUserBlogs = blogList.filter(
    (blog) => blog?.author?.id === currentUser.uid,
  );

  //deleting a blog
  //in order for any user not to delete any blog
  //the delete button is shown on to the current user
  //and only on blogs he create. this logic is in the reusable blog componet
  const deleteBlog = async (id) => {
    const blogDoc = doc(db, 'blogs', id);
    await deleteDoc(blogDoc);
  };

  const handleDelete = (id) => {
    return async () => {
      await deleteBlog(id);
    };
  };

  return (
    <div>
      <NavBar setShow={setShow} />
      <Header />
      <div className="title">
      <h1>My Blogs ({currentUserBlogs.length})</h1>
      </div>
      {currentUserBlogs.length === 0 ? (
        <div className='noBlogDiv'>
          <div>
            <p>No Blogs Yet</p>
            <span>Click the add button to publish a blog</span>
          </div>
        </div>
      ) : (
        <BlogSection>
          {currentUserBlogs.map((blog, index) => {
            return (
              <div className='mainblogContainer'>
                <div className='deleteBtn'>
                  <button onClick={handleDelete(blog.id)}>
                    <Delete className='icon' />
                  </button>
                </div>
                <Blog
                  key={index}
                  authorName={blog?.author?.name}
                  authorProfile={blog?.author?.photoURL}
                  title={blog?.title}
                  sampleText={blog?.post}
                  // datePosted={blog.createdAt[0]}
                  coverImage={blog?.coverPhoto}
                  to={`/blog/${blog.id}`}
                />
              </div>
            );
          })}
        </BlogSection>
      )}
    </div>
  );
};

export default MyBlogs;
