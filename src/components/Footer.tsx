import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">О Sumentor</h3>
            <p className="text-gray-400">
              Платформа для разностороннего развития и обучения новым навыкам
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-white">
                  Все курсы
                </Link>
              </li>
              <li>
                <Link to="/progress" className="text-gray-400 hover:text-white">
                  Мой прогресс
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-white">
                  Личный кабинет
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@sumentor.com</li>
              <li>Телефон: +7 (999) 123-45-67</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sumentor. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 