import { Toaster } from 'react-hot-toast'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './components/Body'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Feed from './components/Feed'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Connections from './components/Connections'
import Requests from './components/Requests'
import Premium from './components/Premium'

function App() {
  
  return (
    <>
      <Provider store={appStore}>
        <Toaster position='bottom-left' reverseOrder={false}/>
        <BrowserRouter basename='/' >
          <Navbar/> 
          <Routes>
            <Route path='/' element={<Body/>}>
            <Route path='/' element={<Feed/>}/>
            <Route path='/login' element={<Login/>}/>
            
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/connections' element={<Connections/>}/>
            <Route path='/requests' element={<Requests/>} />

            <Route path='/premium' element={<Premium/>}/>
              
            {/* <Route path='/chart/:targetUserId' element={<Chat/>} />  */}
            
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
