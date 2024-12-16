import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, createContext, useContext } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ToursPage from './pages/ToursPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Footer } from './components/Footer';
import DestinationsPage from './pages/DestinationsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import PackageBuilderPage from './pages/PackageBuilderPage';
import AdminDashboard from './pages/AdminDashboard';
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tours" element={<ToursPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/build-package" element={<PackageBuilderPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/admin" 
                element={
                  <PrivateRoute requiredPermissions={['manage_tours', 'manage_users']}>
                    <AdminDashboard />
                  </PrivateRoute>
                } 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;