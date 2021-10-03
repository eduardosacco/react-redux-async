import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { uiActions } from './store/ui-slice';

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    //effect
    const sendCardData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart information to server.'
      }));

      const response = await fetch('https://pantuflas-nastita-default-rtdb.firebaseio.com/cart.json',
      {
        method: 'PUT',
        body: JSON.stringify(cart)
      });

      if (!response.ok) {
        throw new Error('There was an error when sending cart data.');
      }

      dispatch(uiActions.showNotification({
        status: 'sucess',
        title: 'Sent',
        message: 'Cart information succesfully sent to server.'
      }));
    };

    sendCardData().catch(e => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error',
        message: 'There was an error when sending cart information to server.'
      }));
    });

  }, [dispatch, cart])

  return (
    <Layout>
      <Notification 
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
