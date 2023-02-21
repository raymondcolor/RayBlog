import React, {useContext} from 'react';
import Blog from '../componets/blog/Blog';
import BlogSection from '../componets/blogsection/BlogSection';
import NavBar from '../componets/navBar/NavBar';
import Header from '../componets/myBlogs/Header';
import {BlogContext} from '../context/BlogContextProvider';
import {AuthContext} from '../context/AuthContextProvider';

const MyBlogs = ({setShow}) => {
  const {blogList} = useContext(BlogContext);
  const {currentUser} = useContext(AuthContext);

  //filtering blogs that are only related
  // or where posted by the currentUser / loggedin
  const currentUserBlogs = blogList.filter(
    (blog) => blog.authur.id === currentUser.uid,
  );

  return (
    <div>
      <NavBar setShow={setShow} />
      <Header />
      <BlogSection>
        {currentUserBlogs.map((blog) => {
          return (
            <Blog
              authorName={blog.authur.name}
              authorProfile={blog.authur.photoURL}
              title={blog.title}
              sampleText={blog.post}
              datePosted={blog.createdAt.date}
              coverImage={blog.downloadURL}
            />
          );
        })}
      </BlogSection>
    </div>
  );
};

export default MyBlogs;
