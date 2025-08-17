import {Routes, Route} from 'react-router-dom'
import Teste from './pages/Projetos';
import Home from './pages/Home';


function MainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Projetos' element={<Teste/>}/>    
        </Routes>
    );
}
export default MainRoutes;