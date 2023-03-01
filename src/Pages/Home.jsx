import React, {useContext} from 'react';
import BlogSection from '../componets/blogsection/BlogSection';
import Header from '../componets/header/Header';
import NavBar from '../componets/navBar/NavBar';
import Blog from '../componets/blog/Blog';
import {BlogContext} from '../context/BlogContextProvider';
import {SearchContext} from '../context/SearchContextProvider';

const Home = (props) => {
  const {keyword} = useContext(SearchContext);
  const {blogList} = useContext(BlogContext);

  return (
    <div>
      <NavBar setShow={props.setShow} />
      <Header />
      <BlogSection>
        {blogList
          // eslint-disable-next-line array-callback-return
          .filter((blog) => {
            // filtering the blogs acording to the category you search
            if (keyword === '') {
              return blog;
            } else if (
              blog.title.toLowerCase().includes(keyword.toLowerCase())
            ) {
              return blog;
            }
          })
          .map((blog, index) => {
            return (
              <Blog
                key={index}
                authorName={blog?.author?.name}
                authorProfile={blog?.author?.photoURL}
                title={blog?.title}
                sampleText={blog?.post}
                // datePosted={blog?.createdAt.date}
                coverImage={blog?.coverPhoto}
                to={`/blog/${blog.id}`}
              />
            );
          })}
      </BlogSection>
    </div>
  );
};

export default Home;
