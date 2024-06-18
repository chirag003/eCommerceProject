import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import ProductItem from './ProductItem';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const categorizedProducts = products.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div>
        <p>HI!!!!!!!!!!</p>
      {Object.keys(categorizedProducts).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div>
            {categorizedProducts[category].map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
