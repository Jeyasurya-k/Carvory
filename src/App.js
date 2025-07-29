import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import Header  from './components/Header';
import Body from "./components/Body"
import Error from "./components/Error";

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        children:[
            {
                path:"/",
                element: <Body />
            },
                  {
                path:"/header",
                element: <Header />
            },
        ],
        errorElement: <Error />
    }
])
 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)