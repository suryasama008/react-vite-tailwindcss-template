// Mock data for menu categories and items
const menuData = {
  Shareables: Array.from({ length: 10 }, (_, i) => ({
    name: `Shareable Item ${i + 1}`,
    price: `$${(10 + i).toFixed(2)}`,
    description: `Description for shareable item ${i + 1}`
  })),
  Mains: Array.from({ length: 10 }, (_, i) => ({
    name: `Main Course ${i + 1}`,
    price: `$${(15 + i).toFixed(2)}`,
    description: `Description for main course ${i + 1}`
  })),
  Drinks: Array.from({ length: 10 }, (_, i) => ({
    name: `Drink ${i + 1}`,
    price: `$${(5 + i).toFixed(2)}`,
    description: `Description for drink ${i + 1}`
  })),
  Desserts: Array.from({ length: 10 }, (_, i) => ({
    name: `Dessert ${i + 1}`,
    price: `$${(7 + i).toFixed(2)}`,
    description: `Description for dessert ${i + 1}`
  }))
};

// The category headings will be the keys from our `menuData` object
const menuCategories = Object.keys(menuData);
