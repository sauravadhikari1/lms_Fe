import React from 'react'
import Header from './Header'
import Footer from './Footer'

const DefaultLayout = ({children}) => {
  return (
    <div>
        {/* navbar */}
      <Header/>

      {/* main  */}
      <main className='main'>
       
      </main>

        {/* footer */}
      <Footer/>
    </div>
  )
}

export default DefaultLayout
