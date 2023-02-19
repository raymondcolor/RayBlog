import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ViewBlog from './Pages/ViewBlog';
import NavBar from './componets/NavBar';
function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path='*' element={<Error />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/' element={<Home />} />
          <Route path='/viewblog' element={<ViewBlog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
