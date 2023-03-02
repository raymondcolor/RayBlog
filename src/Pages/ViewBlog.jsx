import React, {useContext, useEffect, useState} from 'react';
import Header from '../componets/viewBlog/Header';
import BlogBody from '../componets/viewBlog/BlogBody';
import NavBar from '../componets/navBar/NavBar';
import {BlogContext} from '../context/BlogContextProvider';
import {useParams} from 'react-router-dom';

const ViewBlog = ({setShow}) => {
  const {blogList} = useContext(BlogContext);
  const [blog, setBlog] = useState({});
  const {id} = useParams();

  useEffect(() => {
    //loookign for ablog from bloglist that has the same
    //id as the one from params
    let Nblog = blogList?.find((blog) => blog?.id === id);
    if (Nblog) {
      //if it was found, we set it to the blog state variable
      setBlog(Nblog);
    }
  }, [blogList, id, setBlog]);

  return (
    <div>
      <NavBar setShow={setShow} />
      <Header blog={blog} />
      <BlogBody blog={blog}/>
    </div>
  );
};

export default ViewBlog;
