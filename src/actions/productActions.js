import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get('http://localhost:4000/api/products');
  dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
};
