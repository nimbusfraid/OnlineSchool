import React from 'react';
import { useParams } from 'react-router-dom';
import { ClockIcon, AcademicCapIcon, BookOpenIcon } from '@heroicons/react/24/outline';

// Type definitions
export interface Lesson {
  id: number;
  title: string;
  duration: string;
  isCompleted?: boolean;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  level: string;
  price: number;
  instructor: string;
  lessons: Lesson[];
}

// Course data
const course: Course = {
  id: 1,
  title: 'Основы программирования',
  description: 'Полный курс по основам программирования для начинающих. Вы изучите базовые концепции, структуры данных и алгоритмы.',
  image: 'https://via.placeholder.com/800x400',
  category: 'Программирование',
  duration: '8 недель',
  level: 'Начинающий',
  price: 15000,
  instructor: 'Александр Петров',
  lessons: [
    { id: 1, title: 'Введение в программирование', duration: '45 мин', isCompleted: true },
    { id: 2, title: 'Переменные и типы данных', duration: '60 мин', isCompleted: true },
    { id: 3, title: 'Условные операторы', duration: '55 мин', isCompleted: false },
    { id: 4, title: 'Циклы и итерации', duration: '50 мин', isCompleted: false },
  ],
};

// Component definition
const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // В реальном приложении здесь был бы запрос к API для получения данных курса по id
  console.log(`Loading course details for ID: ${id}`);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-sm text-gray-500 mb-4">ID курса: {id}</div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Основная информация */}
        <div className="lg:col-span-2">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-64 object-cover rounded-xl mb-8"
          />
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-gray-600 mb-8">{course.description}</p>

          {/* Информация о курсе */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center">
              <ClockIcon className="h-6 w-6 text-primary mr-2" />
              <div>
                <div className="text-sm text-gray-600">Длительность</div>
                <div className="font-medium">{course.duration}</div>
              </div>
            </div>
            <div className="flex items-center">
              <AcademicCapIcon className="h-6 w-6 text-primary mr-2" />
              <div>
                <div className="text-sm text-gray-600">Уровень</div>
                <div className="font-medium">{course.level}</div>
              </div>
            </div>
            <div className="flex items-center">
              <BookOpenIcon className="h-6 w-6 text-primary mr-2" />
              <div>
                <div className="text-sm text-gray-600">Уроков</div>
                <div className="font-medium">{course.lessons.length}</div>
              </div>
            </div>
          </div>

          {/* Программа курса */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Программа курса</h2>
            <div className="space-y-4">
              {course.lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="card flex items-center justify-between p-4"
                >
                  <div className="flex items-center">
                    <div
                      className={`w-4 h-4 rounded-full mr-4 ${
                        lesson.isCompleted
                          ? 'bg-green-500'
                          : 'border-2 border-gray-300'
                      }`}
                    />
                    <div>
                      <h3 className="font-medium">{lesson.title}</h3>
                      <p className="text-sm text-gray-600">
                        Длительность: {lesson.duration}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Боковая панель */}
        <div className="lg:col-span-1">
          <div className="card sticky top-8">
            <div className="p-6">
              <div className="text-3xl font-bold mb-6">{course.price} ₽</div>
              <button className="btn btn-primary w-full mb-4">
                Записаться на курс
              </button>
              <div className="border-t pt-6 mt-6">
                <h3 className="font-bold mb-4">Преподаватель</h3>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4" />
                  <div>
                    <div className="font-medium">{course.instructor}</div>
                    <div className="text-sm text-gray-600">
                      Эксперт по программированию
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Default export
export default CourseDetails; 