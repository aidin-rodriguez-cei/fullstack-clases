import { createBrowserRouter } from "react-router-dom";

// Mis Páginas
import Home from "../../pages/Home";  
import Posts from "../../pages/Posts";
import Layout from "../../Layout"; 

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, 
        children: [
            {
                index: true,
                element: <Home /> 
            },
            {
                path: 'posts',
                element: <Posts />
            }
            // {
            //     path: 'post/:id',
            //     element: <Post />
            // },
            // {
            //     path: '*',
            //     element: <ErrorPage />
            // }
        ]
    }
]);

export default router; 
