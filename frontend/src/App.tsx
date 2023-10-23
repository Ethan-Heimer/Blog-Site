import { BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './Sign In Page/SignIn'
import CreateUser from './Sign In Page/CreateUser'
import HomePage from './Sign In Page/HomePage'

function App() {
 
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>} />
          <Route path='/user/create' element={<CreateUser/>}/>
          <Route path="/home" element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
