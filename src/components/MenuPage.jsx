import { useState } from 'react';

// Mock data for menu categories and items
const menuData = {
  Shareables: Array.from({ length: 10 }, (_, i) => ({
    name: `Shareable Item ${i + 1}`,
    price: `$${(10 + i).toFixed(2)}`,
    description: `Description for shareable item Lorem ipsum dolor, sit amet consectetur adipisicing elit.${i + 1}` 
  })),
  Mains: Array.from({ length: 10 }, (_, i) => ({
    name: `Main Course ${i + 1}`,
    price: `$${(15 + i).toFixed(2)}`,
    description: `Description for shareable item Lorem ipsum dolor, sit amet consectetur adipisicing elit. ${i + 1}`
  })),
  Drinks: Array.from({ length: 10 }, (_, i) => ({
    name: `Drink ${i + 1}`,
    price: `$${(5 + i).toFixed(2)}`,
    description: `Description for shareable item Lorem ipsum dolor, sit amet consectetur adipisicing elit. ${i + 1}`
  })),
  Desserts: Array.from({ length: 10 }, (_, i) => ({
    name: `Dessert ${i + 1}`,
    price: `$${(7 + i).toFixed(2)}`,
    description: `Description for shareable item Lorem ipsum dolor, sit amet consectetur adipisicing elit. ${i + 1}`
  }))
};

// The category headings will be the keys from our `menuData` object
const menuCategories = Object.keys(menuData);


const MenuPage = () => {
  // State to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0]);

  // Get the items for the selected category
  const menuItems = menuData[selectedCategory];

  return (
    <div className="container mx-auto pt-32">
      {/* Menu Headings */}
      <div className="flex flex-wrap justify-between md:justify-around mb-6">
        {menuCategories.map((category) => (
          <button
            key={category}
            className={`text-lg font-semibold ${selectedCategory === category ? 'text-red-500' : 'text-gray-400'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {menuItems.map((item, index) => (
          <div key={index} className="">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold uppercase">{item.name}</h3>
              <p className="text-lg font-semibold text-red-500">{item.price}</p>
            </div>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
