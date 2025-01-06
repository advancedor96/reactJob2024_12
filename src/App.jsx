import { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePages from './pages/HomePages'
import AddJob from './pages/AddJob'
import MainLayout from './pages/MainLayout'
import Jobs from './pages/Jobs'
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"  element={<MainLayout />}>
      <Route index element={<HomePages />} />
      <Route path="/add"  element={<AddJob />} />
      <Route path="/jobs"  element={<Jobs />} />

    </Route>

  ))


  return (
    <RouterProvider router={router} />
    
  )
}

export default App
