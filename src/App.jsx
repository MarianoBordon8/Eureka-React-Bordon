import './style.css';
import ItemListContainer from './components/itemsListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItem from './components/components item/DetailsItem';
import ProviderContextoListCart from './components/components item/providerContextoListCart';
import NavBar from './components/navBar/NavBar';
import Compra from './components/components item/Compra';
import ContainerCart from './components/header/ContainerCart';




function App() {

  return (
    <ProviderContextoListCart>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer />} />
            <Route path='/item/:idItem' element={ <DetailsItem />} />
            <Route path='/category/:categoria' element={ <ItemListContainer />} />
            <Route path='/compra' element={ <ContainerCart/>} />
          </Routes>
      </BrowserRouter>
    </ProviderContextoListCart>
  );
}

export default App;
