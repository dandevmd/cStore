import {  useEffect } from 'react';
import { onAuthObserver } from './database/firebase.config';
import { createUserDocumentFromAuth } from './database/firebase.config';
import { Routes, Route } from 'react-router';
import {useDispatch} from 'react-redux';

import {setCurrentUser} from './redux/actions/user/userActionCreator.js'

import Home from './routes/home/Home';
import Authentication from './routes/authentication/Authentication';
import Navigation from './routes/navigation/Navigation';
import Shop from './routes/shop/Shop';
import Checkout from './routes/checkout/Checkout';



function App() {
const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthObserver(user => {
      if (user) {
        createUserDocumentFromAuth(user)

      }

      dispatch(setCurrentUser(user))
      console.log(user)
    })
    return unsubscribe
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
