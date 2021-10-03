import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const {items, totalPrice} = useSelector(state => state.cart);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map(item => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.quantity * item.price,
              price: item.price
            }}
          />
        ))}
      </ul>
      <div className={classes['cart-total']}>
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>
    </Card>
  );
};

export default Cart;
