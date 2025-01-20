import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import RegisterForm from './pages/RegisterForm';
import LoginForm from './pages/LoginForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={
            <LoginForm />
        } />
      <Route path="/register" element={
            <RegisterForm />
        } />
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/user" element={
          <Layout>
            <UserPage />
          </Layout>
        } />
        <Route path="/admin" element={
          <Layout>
            <AdminPage />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
