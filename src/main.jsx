import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Chapter1 from "./routes/AliceInWonderland/Chapter1.jsx"
import Chapter2 from "./routes/AliceInWonderland/Chapter2.jsx"
import Chapter3 from "./routes/AliceInWonderland/Chapter3.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Root from "./routes/root";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root id ="rootpage" classname="root-page"/>
  },
  {
    path: "/App",
    element: <App/>
  },
  {
    path:"/App/Chapter1",
    element:<Chapter1/>
  },
  {
    path:"/App/Chapter2",
    element:<Chapter2/>
  },
  {
    path:"/App/Chapter3",
    element:<Chapter3/>
  }



]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
