import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Container,Row,Col } from 'react-bootstrap'
import {Sidebar} from './Sidebar.jsx'
import AuthRoute from '../auth/AuthRoute.jsx'
const UserLayout = () => {
  return (
    <AuthRoute>
        {/* navbar */}
      <Header/>
<Container fluid>
<Row>
<Col md={3} x l={2} className='bg-dark text-white'>
<div className="p-3">
    <div>Welcome Back</div>
    <h4>Saurab Adhikari</h4>
</div>
<hr />
<Sidebar />
</Col>
<Col md={9} x l={10} >  
      <main className='main'>
       <Outlet/>
      </main></Col>
</Row>
</Container>
     

        {/* footer */}
      <Footer/>
    </AuthRoute>
  )
}

export default UserLayout
