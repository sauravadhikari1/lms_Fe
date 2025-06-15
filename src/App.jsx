import './App.css'
import { Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
function App() {
 toast.success('Wow so easy !')
  

  return (
    <>
    <div className="grid place-items-center h-dvh bg-zinc-900/15">
      <Button >Notify !</Button>
      <ToastContainer />
    </div>
    </>
  )
}

export default App
