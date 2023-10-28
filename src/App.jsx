import './style.css';
import ContainerCardItems from './components/components item/ContainerCardItems';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItem from './components/components item/DetailsItem';
import ProviderContextoListCart from './components/components item/providerContextoListCart';
import NavBar from './components/navBar/NavBar';
import Compra from './components/components item/Compra';



function App() {

  return (
    <ProviderContextoListCart>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={ <ContainerCardItems />} />
            <Route path='/item/:idItem' element={ <DetailsItem />} />
            <Route path='/category/:categoria' element={ <ContainerCardItems />} />
            <Route path='/compra' element={ <Compra />} />
          </Routes>
      </BrowserRouter>
    </ProviderContextoListCart>
  );
}

export default App;
