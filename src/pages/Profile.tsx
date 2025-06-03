import React, { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

interface UserProfile {
  name: string;
  email: string;
  avatar: string | null;
  bio: string;
}

const Profile = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    avatar: null,
    bio: 'Студент Sumentor, изучаю программирование и дизайн.',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Here would be API call to update profile
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Профиль</h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="btn btn-secondary"
          >
            {isEditing ? 'Отменить' : 'Редактировать'}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <div className="flex flex-col items-center">
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-32 h-32 rounded-full"
                />
              ) : (
                <UserCircleIcon className="w-32 h-32 text-gray-400" />
              )}
              {isEditing && (
                <button className="btn btn-primary mt-4">
                  Загрузить фото
                </button>
              )}
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Имя
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="input"
                      value={profile.name}
                      onChange={(e) =>
                        setProfile({ ...profile, name: e.target.value })
                      }
                    />
                  ) : (
                    <p className="mt-1">{profile.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      className="input"
                      value={profile.email}
                      onChange={(e) =>
                        setProfile({ ...profile, email: e.target.value })
                      }
                    />
                  ) : (
                    <p className="mt-1">{profile.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    О себе
                  </label>
                  {isEditing ? (
                    <textarea
                      className="input h-32"
                      value={profile.bio}
                      onChange={(e) =>
                        setProfile({ ...profile, bio: e.target.value })
                      }
                    />
                  ) : (
                    <p className="mt-1">{profile.bio}</p>
                  )}
                </div>

                {isEditing && (
                  <div className="flex justify-end">
                    <button type="submit" className="btn btn-primary">
                      Сохранить изменения
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 