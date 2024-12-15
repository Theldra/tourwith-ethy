import React from 'react';

const ProfilePage = () => {
  // This is a placeholder for user data. In a real application, you would fetch this from your backend.
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: '2023-01-01',
    bookings: [
      { id: 1, tour: 'Kakum National Park Adventure', date: '2023-07-15' },
      { id: 2, tour: 'Cape Coast Castle Tour', date: '2023-08-22' },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Your Profile</h1>
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">{user.name}</h2>
          <p className="text-gray-600 mb-2">Email: {user.email}</p>
          <p className="text-gray-600 mb-4">Member since: {user.joinDate}</p>
          <h3 className="text-xl font-semibold mb-2">Your Bookings</h3>
          {user.bookings.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {user.bookings.map((booking) => (
                <li key={booking.id} className="py-4">
                  <p className="font-medium">{booking.tour}</p>
                  <p className="text-gray-600">Date: {booking.date}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">You haven't made any bookings yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

