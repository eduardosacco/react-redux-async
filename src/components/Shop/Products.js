import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODS = [
  {
    id: 'p1',
    price: 6,
    title: 'Beer',
    description: 'Porter, black as the night.'
  },
  {
    id: 'p2',
    price: 16,
    title: 'Coffee',
    description: 'House blend, hip AF.'
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {DUMMY_PRODS.map(p => (
        <ProductItem
          key = {p.id}
          id = {p.id}
          title = {p.title}
          price = {p.price}
          description = {p.description}
        />
      ))}
      </ul>
    </section>
  );
};

export default Products;
