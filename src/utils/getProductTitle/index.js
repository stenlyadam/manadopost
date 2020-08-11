export const getProductTitle = (productId) => {
  if (productId === '1_bulan') {
    return '1 Bulan';
  } else if (productId === '1_tahun') {
    return '1 Tahun';
  } else if (productId === '6_bulan') {
    return '6 Bulan';
  } else {
    return '3 hari percobaan';
  }
};
