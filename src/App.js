import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import MainWrapper from './components/MainWrapper/MainWrapper';

function App() {
  const router = createBrowserRouter([
    {path: '', element:<MainWrapper></MainWrapper>, children:[
      {path: '/home', element:<div>This is home</div>},
      {path: '/', element:<div>This is inbox</div>},
      {path: '/starred', element:<div>This is starred</div>},
      {path: '/snoozed', element:<div>This is snoozed</div>},
      {path: '/settings', element:<div>This is setting</div>}
    ]},

    {path: '/products', element:<div>This is products</div>}
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
