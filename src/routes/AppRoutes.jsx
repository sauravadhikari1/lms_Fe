import React from 'react'
import {Route, Routes} from 'react-router-dom'
// import Home from '../pages/home/HomePage.jsx'
// import Dashboard from '../pages/dashboard/DashboardPage.jsx'
import DefaultLayout from '../components/layouts/DefaultLayout.jsx'
import{ HomePage, DashboardPage,SignInPage, SignUpPage,ForgetPasswordPage,BookLandingPage,Books,EditBookPage,NewBookPage,ReviewsPage,UserPage,Profile,BorrowPage } from '../pages'
import UserLayout from '../components/layouts/UserLayout.jsx'


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
        {/* <Route path="books" element={<BookLandingPage />} /> */}
        </Route>
        {/*private pages*/}

         <Route path="/user" element={<UserLayout />} >
        <Route index element={<DashboardPage />} />
        <Route path="books" element={<Books />} />
        <Route path="new-book" element={<NewBookPage />} />
        <Route path="edit-book" element={<EditBookPage />} />
        <Route path="borrow-books" element={<BorrowPage />} />

        <Route path="book-landing" element={<BookLandingPage />} />
        <Route path="all" element={<UserPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes
