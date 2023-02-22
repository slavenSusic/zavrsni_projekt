import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home/Home';
import Shop from './Shop/Shop';
import RootLayout from './RootLayout'
import About from './About/About';
import FAQ from './FAQ/FAQ';
import DeployCoin from './Deploy/DeployCoin';


const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/shop', element: <Shop /> },
      {path: '/about', element:<About />},
      {path: '/FAQ', element:<FAQ />},
      {path: '/deploycoin', element:<DeployCoin />} 
     

    ]
  },

])
function App() {


  return (
    <div>
      <RouterProvider router={router} />


    </div>
  );
}

export default App;