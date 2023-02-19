import React from 'react';
import BlogSection from '../componets/blogsection/BlogSection';
import Header from '../componets/header/Header';
import NavBar from '../componets/navBar/NavBar';
const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <BlogSection />
    </div>
  );
};

export default Home;
