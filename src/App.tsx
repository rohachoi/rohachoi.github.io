import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import {Main} from "./pages/main/Main";
import {Typography} from "./pages/typography/Typography";

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/typography' element={<Typography />} />
                <Route path='/test' element={'test'} />
                <Route path='/test/:id' element={'test detail'} />
            </Routes>
        </HashRouter>
    );
};

export default App;





