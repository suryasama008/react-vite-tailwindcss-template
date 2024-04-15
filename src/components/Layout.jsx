
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="bg-gray-800 py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            My Bar
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link to="/menu" className="hover:text-gray-400">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/book-table" className="hover:text-gray-400">
                Book a Table
              </Link>
            </li>
            <li>
              <Link to="/sports-matches" className="hover:text-gray-400">
                Upcoming Sport Matches
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;