import { createBrowserRouter, Outlet } from 'react-router'
import Feed from './pages/Feed';

const RootLayout = (
  <main className='flex flex-col min-h-screen min-w-screen bg-primary text-content'>
    <nav className='flex bg-primary'>
      <h1>hello</h1>
    </nav>
    <section className='flex flex-col flex-1 items-center'>
      <Outlet />
    </ section>
    <footer className='flex bg-primary'>
      <h2>rants</h2>
    </footer>
  </main>
);


const router = createBrowserRouter([
  {
    path: "/",
    element: RootLayout,
    children: [
      { index: true, Component: Feed }
    ]
  }
]);

export default router
