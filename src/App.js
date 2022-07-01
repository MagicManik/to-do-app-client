import './App.css';
import Header from './Components/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Tasks from './Components/Home/Tasks/Tasks';
import UpdateTask from './Components/UpdateTask/UpdateTask';
import Login from './Components/UserAccount/Login/Login';
import Register from './Components/UserAccount/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/todo' element={<Tasks></Tasks>}></Route>
        <Route path='/update/:id' element={<UpdateTask></UpdateTask>}></Route>
        <Route path='/signin' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
