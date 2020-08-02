export const getProductTitle = (productId) => {
  if (productId === '1_bulan') {
    return '1 Bulan';
  } else if (productId === '1_tahun') {
    return '1 Tahun';
  } else {
    return '6 Bulan';
  }
};
