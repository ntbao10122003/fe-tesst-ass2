import { useState } from 'react'
import './App.css'
import { Layout } from 'antd';
import {Route, Router , Routes , BrowserRouter} from "react-router-dom"
import Home from "./pages/user/home";
import Infor from './pages/user/information';
import AddAdmin from './pages/admin/admin-add';
import List from "./pages/admin/admin-list"
import UpData from "./componnets/admin/update/update"
function App() {
  const [count, setCount] = useState(0)
  const {  Footer, Content } = Layout;
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' index element={<Home></Home>}></Route>
            <Route path='/information' element={<Infor></Infor>}></Route>
            <Route path='/Home' index element={<Home></Home>}></Route>
          </Routes>
          <Routes>
          <Route path='/add' element={<AddAdmin></AddAdmin>}></Route>
          <Route path='/list' element={<List></List>}></Route>
          <Route path='/update' element={<UpData></UpData>}></Route>


          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
