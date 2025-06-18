import React from 'react'
import {Route, Routes} from 'react-router-dom'
// import Home from '../pages/home/HomePage.jsx'
// import Dashboard from '../pages/dashboard/DashboardPage.jsx'
import DefaultLayout from '../components/layouts/DefaultLayout.jsx'
import{ HomePage, DashboardPage,SignInPage, SignUpPage,ForgetPasswordPage,BookLandingPage } from '../pages'

const AppRoutes = () => {
  return (
    
    <>
      <Routes>
        {/*public pages*/}

        <Route path="/" element={<DefaultLayout/>}>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<SignInPage />} />
        <Route path="forget-password" element={<ForgetPasswordPage />} />
        <Route path="books" element={<BookLandingPage />} />
        </Route>
        {/*private pages*/}

         <Route path="/user" element={
          
             <DashboardPage />
          
         } />
      </Routes>
    </>
  )
}

export default AppRoutes
