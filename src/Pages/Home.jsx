import React from 'react';
import BlogSection from '../componets/blogsection/BlogSection';
import Header from '../componets/header/Header';
import NavBar from '../componets/navBar/NavBar';
import Blog from '../componets/blog/Blog';
const Home = () => {
  return (
    <div>
      <NavBar />
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

export default Home;
