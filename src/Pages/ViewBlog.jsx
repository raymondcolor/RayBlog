import React from 'react';
import Header from '../componets/viewBlog/Header';
import BlogBody from '../componets/viewBlog/BlogBody';
import NavBar from '../componets/navBar/NavBar'

const ViewBlog = ({setShow}) => {
  return <div>
    <NavBar setShow={setShow}/>
    <Header />
    <BlogBody/>
  </div>;
};

export default ViewBlog;
