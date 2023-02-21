import React, {useContext} from 'react';
import Blog from '../componets/blog/Blog';
import BlogSection from '../componets/blogsection/BlogSection';
import NavBar from '../componets/navBar/NavBar';
import Header from '../componets/myBlogs/Header';
import {BlogContext} from '../context/BlogContextProvider';

const MyBlogs = ({setShow}) => {
  const {blogList} = useContext(BlogContext);
  console.log(blogList);
  return (
    <div>
      <NavBar setShow={setShow} />
      <Header />
      <BlogSection>
        <Blog
          authorName=''
          authorProfile=''
          title=''
          sampleText=''
          datePosted=''
        />
      </BlogSection>
    </div>
  );
};

export default MyBlogs;
