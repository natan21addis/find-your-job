import React from 'react';
import {Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom';

  import MainLayout from './layout/MainLayout';
import HomePage from './components/pages/HomePage';
import JobsPage from './components/pages/JobsPage';
import NotFoundPage from './components/pages/NotFoundPage';
import JobPage,{jobLoader} from './components/pages/JobPage';
import AddJobPage from './components/pages/AddJobPage';



const App = () => {

  const addJob= async (newJob)=>{
   const res=await fetch('/api/jobs',{})
  };
  
  const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout/>}>
  
    <Route index element={<HomePage/>}/>
    <Route path='/jobs' element={<JobsPage/>}/>
    <Route path='/add-jobs' element={<AddJobPage addJobSubmit={addJob}/>}/>
    <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader}/>
   <Route path='*' element={<NotFoundPage/>}/>
  
        </Route>
    )
   
    );

  return <RouterProvider router={router}/> 
};

export default App