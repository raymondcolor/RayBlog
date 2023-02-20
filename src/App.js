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

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='*' element={<Error />} />
          <Route path='/' element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Route>
          <Route path='/createblog' element={<CreateBlog/>} />
          <Route path='/myblogs' element={<MyBlogs />} />
          <Route path='/viewblog' element={<ViewBlog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
