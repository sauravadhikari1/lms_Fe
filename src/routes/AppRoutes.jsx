import React from 'react'
import {Route, Routes} from 'react-router-dom'
// import Home from '../pages/home/HomePage.jsx'
// import Dashboard from '../pages/dashboard/DashboardPage.jsx'
import DefaultLayout from '../components/layouts/DefaultLayout.jsx'
import{ HomePage, DashboardPage } from '../pages'
const AppRoutes = () => {
  return (
    
    <>
      <Routes>
        {/*public pages*/}
        <Route path="/" element={
          <DefaultLayout>
            <HomePage />
          </DefaultLayout>
        } />


        {/*private pages*/}

         <Route path="/user" element={
          
             <DashboardPage />
          
         } />
      </Routes>
    </>
  )
}

export default AppRoutes
