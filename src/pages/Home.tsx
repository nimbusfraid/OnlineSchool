import { Link } from 'react-router-dom';

const featuredCourses = [
  {
    id: 1,
    title: 'Основы программирования',
    description: 'Изучите основы программирования с нуля',
    image: 'https://via.placeholder.com/400x300',
    category: 'Программирование',
  },
  {
    id: 2,
    title: 'Английский язык',
    description: 'Разговорный английский для начинающих',
    image: 'https://via.placeholder.com/400x300',
    category: 'Языки',
  },
  {
    id: 3,
    title: 'Дизайн интерьера',
    description: 'Создавайте красивые интерьеры своими руками',
    image: 'https://via.placeholder.com/400x300',
    category: 'Дизайн',
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Развивайтесь вместе с Sumentor
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Онлайн-курсы для вашего разностороннего развития
            </p>
            <Link
              to="/courses"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Начать обучение
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Популярные курсы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div key={course.id} className="card hover:shadow-lg transition-shadow">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-6">
                  <span className="text-sm text-secondary font-medium">
                    {course.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <Link
                    to={`/courses/${course.id}`}
                    className="btn btn-primary inline-block"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="btn btn-secondary inline-block"
            >
              Смотреть все курсы
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 