import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

interface Course {
  id: number;
  title: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  lastActivity: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Основы программирования',
    progress: 75,
    totalLessons: 20,
    completedLessons: 15,
    lastActivity: '2024-03-15',
  },
  {
    id: 2,
    title: 'Английский язык',
    progress: 30,
    totalLessons: 30,
    completedLessons: 9,
    lastActivity: '2024-03-14',
  },
];

const Progress = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Мой прогресс</h1>

      <div className="grid gap-8">
        {courses.map((course) => (
          <div key={course.id} className="card">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <Link
                  to={`/courses/${course.id}`}
                  className="text-xl font-semibold hover:text-primary"
                >
                  {course.title}
                </Link>
                <div className="mt-2 flex items-center text-sm text-gray-600">
                  <ClockIcon className="h-5 w-5 mr-1" />
                  Последняя активность: {new Date(course.lastActivity).toLocaleDateString()}
                </div>
              </div>

              <div className="w-full md:w-1/3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">
                    Прогресс: {course.progress}%
                  </span>
                  <span className="text-sm text-gray-600">
                    {course.completedLessons}/{course.totalLessons} уроков
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center">
                {course.progress === 100 ? (
                  <div className="flex items-center text-green-500">
                    <CheckCircleIcon className="h-6 w-6 mr-2" />
                    <span>Завершено</span>
                  </div>
                ) : (
                  <Link
                    to={`/courses/${course.id}`}
                    className="btn btn-primary"
                  >
                    Продолжить
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {courses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">У вас пока нет активных курсов</p>
          <Link to="/courses" className="btn btn-primary">
            Найти курсы
          </Link>
        </div>
      )}
    </div>
  );
};

export default Progress; 