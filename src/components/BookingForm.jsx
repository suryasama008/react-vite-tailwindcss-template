import  { useState } from 'react';
import image from '../assets/book.png';
const BookingForm = () => {
  const [formData, setFormData] = useState({
    people: 1,
    date: '',
    time: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
    alert("Table booked successfully!");
  };

  return (
    <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center h-screen w-full"
               style={{ 
                backgroundImage: `url(${image})`,
                 backgroundSize: '100% 100%',  // Ensures the bg image covers the screen
                 backgroundRepeat: 'no-repeat'  // Prevents repeating the image
               }}>
      <div className="z-10">
        <form className="w-full max-w-lg bg-black bg-opacity-90 rounded-lg shadow-lg p-8 grid grid-cols-1 gap-6">
          <h2 className="text-center text-3xl font-bold text-gray-200">Reserve Your Table</h2>
          <div>
            <label htmlFor="people" className="text-gray-200">Number of Guests:</label>
            <input
              type="number"
              id="people"
              name="people"
              min="1"
              value={formData.people}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 rounded text-gray-300 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-persianGreen"
            />
          </div>
          <div>
            <label htmlFor="date" className="text-gray-200">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 rounded text-gray-300 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-persianGreen"
            />
          </div>
          <div>
            <label htmlFor="time" className="text-gray-200">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 rounded text-gray-300 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-persianGreen"
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-white text-gray-700 mt-8 hover:bg-black hover:border-white hover:border-2 hover:text-white font-bold py-2 px-4  shadow"
          >
            Book Now
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
