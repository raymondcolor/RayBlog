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
  console.log(blogList);
  //filtering blogs that are only related
  // or where posted by the currentUser / loggedin
  const currentUserBlogs = blogList.filter(
    (blog) => blog?.authur?.id === currentUser.uid,
  );

  return (
    <div>
      <NavBar setShow={setShow} />
      <Header />
      {currentUserBlogs.length === 0 ? (
        <div className='noBlogDiv'>
          <div>
            <p>No Blogs Yet</p>
            <span>Click the add button to publish a blog</span>
          </div>
        </div>
      ) : (
        <BlogSection>
          {currentUserBlogs.map((blog,index) => {
            return (
              <Blog
                key={index}
                authorName={blog?.authur?.name}
                authorProfile={blog?.authur?.photoURL}
                title={blog?.title}
                sampleText={blog?.post}
                // datePosted={blog.createdAt[0]}
                coverImage={blog?.downloadURL}
                to={`/blog/${blog.id}`}
              />
            );
          })}
        </BlogSection>
      )}
    </div>
  );
};

export default MyBlogs;
