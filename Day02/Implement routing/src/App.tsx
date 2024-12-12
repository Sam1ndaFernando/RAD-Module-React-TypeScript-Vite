import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Dashboard } from './pages/Dashboard.tsx';
import AddCustomer from './pages/AddCustomer.tsx';
import UpdateCustomer from './pages/UpdateCustomer.tsx';
import DeleteCustomer from './pages/DeleteCustomer.tsx';


function App() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Dashboard/>,
            children: [
                { path: '/', element: <Dashboard /> },
                { path: '/add', element: <AddCustomer /> },
                { path: '/delete', element: <UpdateCustomer /> },
                { path: '/update', element: <DeleteCustomer /> }
            ]
        }
    ]);



    return (
        <>

            <RouterProvider router={routes} />
        </>
    );
}


export default App;
