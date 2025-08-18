import {Routes, Route} from 'react-router-dom'
import Projeto from './pages/Projetos';
import Home from './pages/Home';
import SeguidorPage from './pages/PageSeguidor'; // exemplo
import Sobre from './pages/Teste';
import PageBraco from './pages/PageBraco'; 

function MainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Projetos' element={<Projeto/>}/>  
            <Route path='/MaisSobre' element={<Sobre/>} />
            <Route path="/seguidor" element={<SeguidorPage />} />
            <Route path="/bracorobotico" element={<PageBraco />} />
        </Routes>
    );
}
export default MainRoutes;