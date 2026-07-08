import React from 'react';

const CategorySection = () => {
  const categories = [
    { name: 'T-Shirt', icon: '👕' },
    { name: 'Polo T-Shirt', icon: '👕' },
    { name: 'Shirts', icon: '👔' },
    { name: 'Hoodie', icon: '🧥' },
    { name: 'Joggers', icon: '👖' },
    { name: 'Sweatshirt', icon: '🧣' },
    { name: 'Shorts', icon: '🩳' },
    { name: 'Track Pant', icon: '👖' },
    { name: 'Blazer', icon: '🧥' }
  ];

  return (
    <section className="category-section" id="collection">
      <h2 className="category-title">OUR COLLECTION</h2>

      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="circle">
              <span>{category.icon}</span>
            </div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
