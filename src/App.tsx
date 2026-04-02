import React from 'react';
import 'styles/globals.css';

const App: React.FC< = () => (
  <div className="min-h-screen bg-gray-50">
    <header className="bg-white shadow mb-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800">English Learning Site MVP</h1>
        <p className="text-xl text-gray-600">Starting point for the english learning application</p>
      </div>
    </header>
    <main className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Project Status</h2>
        <ul className="space-y-4">
          <li>React + TypeScript + Vite configured</li>
          <li>Tailwind CSS set up</li>
          <li>Netlify deployment ready</li>
          <li>QA testing environment being set up</li>
        </ul>
        <a href="/" className="inline-block p-4 bg-blue-600 text-white rounded hover:bg-blue-700 mt-6">Go to Home Page</a>
      </div>
    </main>
  </div>
);

export default App;
