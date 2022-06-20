import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './components/App';
import Curriculum from './components/Portafolio/Curriculum';
import Portafolio from './components/Portafolio/Portafolio';
import Animation from './components/Animating/Animation';
import Numbers from './components/PureComponets/Numbers';
import Calculator from './components/Calculator/Calculator';
import Conctato from './components/registro/Person';
import Timer from './components/Timer/Timer';
import Crypto from './components/Crypto/Crypto';
import Charthome from './components/Chart/Charthome';
import Guess from './components/guess/Game/Game';
import Game from './components/piedra/Game/Game';
import Todo from './components/Todo/Todo';
import Error404 from './components/Error/404';

const  AppRoutes = () => (
    <App>
        <Routes>
            <Route path='/' element={<Curriculum />} />
            <Route path='/portafolio' element={<Portafolio />} />
            <Route path='/portafolio/animation' element={<Animation />} />
            <Route path='/portafolio/numbers' element={<Numbers />} />
            <Route path='/portafolio/calculator' element={<Calculator />} />
            <Route path='/portafolio/timer' element={<Timer />} />
            <Route path='/portafolio/crypto' element={<Crypto />} />
            <Route path='/portafolio/charthome' element={<Charthome />} />
            <Route path='/portafolio/guess' element={<Guess />} />
            <Route path='/portafolio/game' element={<Game />} />
            <Route path='/portafolio/todo' element={<Todo />} />
            <Route path='/conctato' element={<Conctato />} />
            <Route path='/*' element={<Error404 />} />
            
        </Routes>
    </App>
)

export default AppRoutes;