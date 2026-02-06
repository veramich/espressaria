import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import CommunityPage from './pages/CommunityPage';
import Layout from './Layout'

const routes = [{
  path: '/',
  element: <Layout />,
  children: [{
    path: '/',
    element: <HomePage />
  }, {
    path: '/about',
    element: <AboutPage />
  }, {
    path: '/community',
    element: <CommunityPage />
  }]
}]
  

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router = { router } />
  )
}

export default App;
