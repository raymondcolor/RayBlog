import React, {useContext, useState} from 'react';
import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ViewBlog from './Pages/ViewBlog';
import {ProtectedRoutes} from './protectedRoutes/ProtectedRoutes';
import MyBlogs from './Pages/MyBlogs';
import CreateBlog from './Pages/CreateBlog';
import LogOutModal from './componets/modals/LogOutModal';
function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show ? <LogOutModal setShow={setShow} /> : null}
      <Router>
        <Routes>
          <Route path='*' element={<Error />} />
          <Route path='/' element={<Home setShow={setShow} />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Route>
          <Route
            path='/createblog'
            element={<CreateBlog setShow={setShow} />}
          />
          <Route path='/myblogs' element={<MyBlogs setShow={setShow} />} />
          <Route path='/viewblog' element={<ViewBlog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
