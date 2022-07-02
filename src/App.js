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
import Calendar from './Components/Calendar/Calendar';
import CompletedTasks from './Components/CompletedTasks/CompletedTasks';
import RequireAuth from './Components/UserAccount/RequireAuth/RequireAuth';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/todo' element={<Tasks></Tasks>}></Route>
        <Route path='/update/:id' element={<UpdateTask></UpdateTask>}></Route>
        <Route path='/calendar' element={<Calendar></Calendar>}></Route>
        <Route path='/complete' element={
          <RequireAuth>
            <CompletedTasks></CompletedTasks>
          </RequireAuth>}>
        </Route>
        <Route path='/signin' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
