import React, {useContext} from 'react';
import BlogSection from '../componets/blogsection/BlogSection';
import Header from '../componets/header/Header';
import NavBar from '../componets/navBar/NavBar';
import Blog from '../componets/blog/Blog';
import {BlogContext} from '../context/BlogContextProvider';

const Home = (props) => {
  const {blogList} = useContext(BlogContext);

  return (
    <div>
      <NavBar setShow={props.setShow} />
      <Header />
      <BlogSection>
        {blogList.map((blog, index) => {
          return (
            <Blog
              key={index}
              authorName={blog?.authur?.name}
              authorProfile={blog?.authur?.photoURL}
              title={blog?.title}
              sampleText={blog?.post}
              // datePosted={blog?.createdAt.date}
              coverImage={blog?.downloadURL}
              to={`/blog/${blog.id}`}
            />
          );
        })}
      </BlogSection>
    </div>
  );
};

export default Home;
