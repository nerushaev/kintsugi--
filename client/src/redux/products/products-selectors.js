import { getFilter } from '../filter/filter-selectors';

export const getStateProducts = state => state.products.items;

export const selectСomingSoonProducts = state => state.products.comingSoonProducts;

export const selectIsLoading = state => state.products.isLoading;

export const selectError = state => state.products.error;

export const getCurrentPage = state => state.products.currentPage;

export const getTotalPages = state => state.products.totalPages;

export const getFilteredProducts = state => {
  const filter = getFilter(state);
  const products = getStateProducts(state);

  // if (!filter) {
  //   const filteredProducts = products.filter((element) => {
  //     const filtered = element.hasOwnProperty('comingSoon');
  //     const result = !filtered;
  //     return result;
  //   })
  //   return filteredProducts;
  // }

  if (!filter) {
    return products;
  }

  const filteredProducts = products.filter(({ category }) => {
    const result = category.includes(filter);
    return result;
  });

  return filteredProducts;
}