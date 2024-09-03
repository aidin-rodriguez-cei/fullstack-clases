import { createBrowserRouter } from "react-router-dom";

// Mis Páginas
import Posts from "../../pages/Posts";

// Páginas especiales


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layaout />,
        children: [
            {
                index: true,
                element: <Home />
            },

            {
                path: 'posts',
                element: <Posts />

            }
        ]
    }
])