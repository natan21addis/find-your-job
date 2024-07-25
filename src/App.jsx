import React from 'react';
import {Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom';

  import MainLayout from './layout/MainLayout';
import HomePage from './components/pages/HomePage';
import JobsPage from './components/pages/JobsPage';
import NotFoundPage from './components/pages/NotFoundPage';
const router=createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>

  <Route index element={<HomePage/>}/>
  <Route path='/jobs' element={<JobsPage/>}/>
 <Route path='*' element={<NotFoundPage/>}/>

      </Route>
  )
 
  );

const App = () => {
  return <RouterProvider router={router}/> 
};

export default App