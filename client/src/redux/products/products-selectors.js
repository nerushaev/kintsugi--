import { getFilter } from '../filter/filter-selectors';

export const getStateProducts = state => state.products.items;

export const selectIsLoading = state => state.products.isLoading;

export const selectError = state => state.products.error;

export const getFilteredProducts = state => {
  const filter = getFilter(state);
  const products = getStateProducts(state);

  if (!filter) {
    return products;
  }

  const filteredProducts = products.filter(({ category }) => {
    const result = category.includes(filter);
    return result;
  })

  return filteredProducts;
}