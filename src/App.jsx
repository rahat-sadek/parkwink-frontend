import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarList from './pages/CarList';
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import RegisterForm from './pages/RegisterForm';
import LoginForm from './pages/LoginForm';
import AddCars from './pages/AddCars';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={
            <LoginForm />
        } />
      <Route path="/"  element={
            <RegisterForm />
        } />
        <Route path="/register"  element={
            <RegisterForm />
        } />
        <Route path="/home" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/addcars" element={
          <Layout>
            <AddCars />
          </Layout>
        } />
        <Route path="/carlist" element={
          <Layout>
            <CarList />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
