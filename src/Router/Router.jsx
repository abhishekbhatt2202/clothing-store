import React from 'react'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Root from '../Root'
import Header from '../Components/Header/Header'
import Home from '../Components/Home/Home'

function Router() {
   const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root/>}>
                <Route path='' element={<Home/>} />
            </Route>
        )
    )
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default Router