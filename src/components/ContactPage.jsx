
const ContactPage = () => {
  return (
    <div className="container mx-auto p-4 text-center pt-32 h-screen">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor.</p>
      
      <div className="flex flex-col items-center justify-center md:flex-row">
       
        <div>
          <h2 className="text-2xl font-semibold mb-4">Opening Soon!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p className="mt-4">1234 Pub Lane</p>
          <p>New City, XY 12345</p>
          <p className="mt-2">Email: contact@thebar.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
