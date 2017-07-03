export class Product {
  static SALE_BADGE = 'SALE';
  static EXCLUSIVE_BADGE = 'EXCLUSIVE';
  price: string;
  productImage: string;
  productName: string;
  size: string[];
  isSale?: boolean;
  isExclusive?: boolean;

  /**
   * Product Constructor
   * @param productData
   */
  constructor(productData?: any) {
    // If Product data is set
    if (productData) {
      // Add product data attributes to this product model
      for (const key of Object.keys(productData)) {
        this[key] = productData[key];
      }
    }
  }

  /**
   * Get full image url
   * @returns {string}
   */
  getImageUrl() {
    return `/assets/img/products/${this.productImage}`;
  }
}
