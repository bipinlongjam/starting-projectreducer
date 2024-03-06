import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { sendCartData, fetchCartData } from './store/cart-actions';


function App() {

  const dispatch = useDispatch()
  const showCart= useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification)

  let isInitial = true;

  useEffect(()=>{
    dispatch(fetchCartData)
  },[dispatch])

  useEffect(() =>{
    if(isInitial){
      isInitial = false
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart))
    }
  },[cart, dispatch])
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
