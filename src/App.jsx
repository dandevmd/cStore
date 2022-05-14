import {  useEffect } from 'react';
import { Routes, Route } from 'react-router';
import {useDispatch} from 'react-redux';
import { checkUserSession } from './redux/actions/user/userActionCreator';

import Home from './routes/home/Home';
import Authentication from './routes/authentication/Authentication';
import Navigation from './routes/navigation/Navigation';
import Shop from './routes/shop/Shop';
import Checkout from './routes/checkout/Checkout';



function App() {
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
