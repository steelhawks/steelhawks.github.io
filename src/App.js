import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './components/Navigation/navigation.component';
import { webpages } from './routes/routes'
import {createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom';
import { Footer } from './components/Footer/footer.component';

const App = (props) => {
    return (
        <div>
            <Navigation routes={webpages}/>
            <RouterProvider router={createBrowserRouter(webpages)} />
        </div>

    )
}

export default App;
