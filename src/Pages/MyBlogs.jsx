import React from 'react';
import Blog from '../componets/blog/Blog';
import BlogSection from '../componets/blogsection/BlogSection';
import NavBar from '../componets/navBar/NavBar';
import Header from '../componets/myBlogs/Header';

const MyBlogs = ({setShow}) => {
  return (
    <div>
      <NavBar setShow={setShow} />
      <Header />
      <BlogSection>
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </BlogSection>
    </div>
  );
};

export default MyBlogs;
