import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import MainWrapper from './components/MainWrapper/MainWrapper';
import Inbox from './components/Inbox/Inbox';
import SettingPage from './components/SettingPage/SettingPage';

function App() {
  const router = createBrowserRouter([
    {path: '', element:<MainWrapper></MainWrapper>, children:[
      {path: '/home', element:<div>This is home</div>},
      {path: '/', element:<Inbox></Inbox>},
      {path: '/starred', element:<div>This is starred</div>},
      {path: '/snoozed', element:<div>This is snoozed</div>},
      {path: '/settings', element:<SettingPage></SettingPage>}
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
