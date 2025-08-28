import {Routes, Route} from 'react-router-dom'
import Projeto from './pages/Projetos';
import Home from './pages/Home';
import SeguidorPage from './pages/PageSeguidor'; // exemplo
import Sobre from './pages/Teste';
import PageBraco from './pages/PageBraco'; 
import PageSmartPlant from './pages/PageSmartPlant';
import PageRobo4Roda from './pages/PageRobo4Rodas';
import PageCasainteligente from './pages/PageCasa';

function MainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Projetos' element={<Projeto/>}/>  
            <Route path='/MaisSobre' element={<Sobre/>} />
            <Route path="/seguidor" element={<SeguidorPage />} />
            <Route path="/bracorobotico" element={<PageBraco />} />
            <Route path="/smart" element={<PageSmartPlant />} />
            <Route path="/robo4rodas" element={<PageRobo4Roda />} />
            <Route path="/casainteligente" element={<PageCasainteligente />} />
        </Routes>
    );
}
export default MainRoutes;