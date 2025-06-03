import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  level: string;
  price: number;
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Основы программирования',
    description: 'Изучите основы программирования с нуля',
    image: 'https://via.placeholder.com/400x300',
    category: 'Программирование',
    duration: '8 недель',
    level: 'Начинающий',
    price: 15000,
  },
  {
    id: 2,
    title: 'Английский язык',
    description: 'Разговорный английский для начинающих',
    image: 'https://via.placeholder.com/400x300',
    category: 'Языки',
    duration: '12 недель',
    level: 'Начинающий',
    price: 12000,
  },
  {
    id: 3,
    title: 'Дизайн интерьера',
    description: 'Создавайте красивые интерьеры своими руками',
    image: 'https://via.placeholder.com/400x300',
    category: 'Дизайн',
    duration: '6 недель',
    level: 'Средний',
    price: 18000,
  },
];

const categories = ['Все', 'Программирование', 'Языки', 'Дизайн'];
const levels = ['Все', 'Начинающий', 'Средний', 'Продвинутый'];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedLevel, setSelectedLevel] = useState('Все');

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'Все' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'Все' || course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Курсы</h1>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск курсов..."
                className="input pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          <div className="flex gap-4">
            <select
              className="input"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              className="input"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              {levels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <div key={course.id} className="card hover:shadow-lg transition-shadow">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {course.category}
                </span>
                <span className="text-sm bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                  {course.level}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Длительность: {course.duration}
                </div>
                <div className="font-bold text-lg">{course.price} ₽</div>
              </div>

              <Link
                to={`/courses/${course.id}`}
                className="btn btn-primary w-full mt-4"
              >
                Подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">
            По вашему запросу ничего не найдено. Попробуйте изменить параметры
            поиска.
          </p>
        </div>
      )}
    </div>
  );
};

export default Courses; 