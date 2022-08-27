import logo from './logo.svg';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'

import { useAuth } from './hooks/use-auth';

import { Navbar1 } from './components/organisms'
import { Navbar } from './components/templates'
import { Registration, Home, AddStudent } from './components/pages'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Registration />,
  },
  {
    path: '/addstudent',
    element: <AddStudent />,
  },

]

const authenticatedRoutes = [
    {
    path: '/attendance',
    element: <></>,
  }
]

function RequireAuth({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // write path of sign-in page here instead of '/'
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <React.Suspense fallback={null}>
    <Navbar />
    {/* <Navbar1 /> */}
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route} path={route.path} element={route.element}></Route>
        ))}
        {authenticatedRoutes.map((route) => (
          <Route
            path={route.path}
            exact
            element={<RequireAuth>{route.element}</RequireAuth>}
          />
        ))}
      </Routes>
    </Router>
    </React.Suspense>
    </div>
    </ChakraProvider>
  );
}

export default App;
