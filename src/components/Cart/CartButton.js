import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const cartTotalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  function showCartHandler () {
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalQuantity}</span>
    </button>
  );
};

export default CartButton;
