import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Main } from "./pages/main/Main";
import { Typography } from "./pages/typography/Typography";
import { HorizontalScrollGallery } from './pages/horizontalScrollGallery';

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/typography' element={<Typography />} />
                <Route path='/horizontalGallery' element={<HorizontalScrollGallery/>} />
                <Route path='/test/:id' element={'test detail'} />
            </Routes>
        </HashRouter>
    );
};

export default App;





