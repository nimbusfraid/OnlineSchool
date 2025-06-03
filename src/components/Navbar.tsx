import { Link } from 'react-router-dom';
import { UserCircleIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <AcademicCapIcon className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-gray-900">Sumentor</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/courses"
                className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium"
              >
                Курсы
              </Link>
              <Link
                to="/progress"
                className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium"
              >
                Прогресс
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              to="/profile"
              className="flex items-center text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium"
            >
              <UserCircleIcon className="h-6 w-6" />
              <span className="ml-2">Профиль</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 