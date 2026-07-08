import React from 'react';

const ProductsSection = () => {
  return (
    <section className="products-section">
      <div className="products-header">
        <p className="small-title">HOSTTER APPARELS</p>
        <h2>EXPLORE RECENT PRODUCTS</h2>
      </div>

      <div className="products-grid">
        <div className="product-card">
          <img src="images/p1.jpg" alt="Product 1" />
        </div>

        <div className="product-card">
          <img src="images/p2.jpg" alt="Product 2" />
        </div>

        <div className="product-card">
          <img src="images/p3.jpg" alt="Product 3" />
        </div>

        <div className="product-card">
          <img src="images/p4.jpg" alt="Product 4" />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
