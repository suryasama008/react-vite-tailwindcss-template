 // DropdownMenu.jsx
import{ useState } from 'react';

const DropdownMenu = ({ categories, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  const handleSelect = (category) => {
    onSelect(category);
    setSelectedCategory(category.name);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white px-4 py-2 rounded bg-dark-800 w-full text-left"
      >
        {selectedCategory} <span className="float-right">▼</span>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full bg-dark-800">
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() => handleSelect(category)}
              className="text-white px-4 py-2 hover:bg-dark-700"
            >
              {category.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
