import React, {useState} from 'react';
import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ViewBlog from './Pages/ViewBlog';
import {ProtectedRoutes} from './protectedRoutes/ProtectedRoutes';
import MyBlogs from './Pages/MyBlogs';
import CreateBlog from './Pages/CreateBlog';
import LogOutModal from './componets/modals/LogOutModal';

function App() {
  //state for showing and hinding a logout popu
  const [show, setShow] = useState(false);

  //stste for chaaning button text on submiting data
  const [isLoading, setIsloading] = useState(false);
  return (
    <div>
      {show ? <LogOutModal setShow={setShow} /> : null}
      <Router>
        <Routes>
          <Route path='/' element={<Home setShow={setShow} />} />
          <Route element={<ProtectedRoutes />}>
            <Route
              path='/login'
              element={
                <Login isLoading={isLoading} setIsloading={setIsloading} />
              }
            />
            <Route path='/signup' element={<SignUp />} />
          </Route>
          <Route
            path='/createblog'
            element={
              <CreateBlog
                setShow={setShow}
                isLoading={isLoading}
                setIsloading={setIsloading}
              />
            }
          />
          <Route path='/myblogs' element={<MyBlogs setShow={setShow} />} />
          <Route path='/blog/:id' element={<ViewBlog setShow={setShow} />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
