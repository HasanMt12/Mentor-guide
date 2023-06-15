import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="bg-slate-50">
     <RouterProvider router={router}></RouterProvider>
     <Toaster></Toaster>
    </div>
  );
}

export default App;
