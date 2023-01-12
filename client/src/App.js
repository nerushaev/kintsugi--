import SharedLayout from './components/Main/SharedLayout/SharedLayout'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
// import {GoodsDetails} from './components/Main/Products/GoodsDetails/GoodsDetails';
import About from './pages/About';
import BusketPage from './pages/BusketPage';
import Delivery from './pages/Delivery';
// import Catalog from './pages/Catalog';
import Admin from './pages/Admin';
import LoginAdmin from './components/Admin/LoginAdmin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        {/* <Route path=":goodsId" element={<GoodsDetails />} /> */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/catalog" element={<Catalog />} /> */}
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/busket" element={<BusketPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<LoginAdmin />} />
      </Route>
    </Routes>
  );
}

export default App;
