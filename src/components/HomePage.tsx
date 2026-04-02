import React from 'react';

interface HomePageProps {
  // No props for now
}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            English Learning Site MVP
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Welcome to the English learning platform MVP. This is the initial deploy with basic structure.
          </p>
          <div className="group-space-y-4 mt-8">
            <div className="p-4 bg-green-50 rounded-lg">
              <h2 className="text-lg font-bold text-green-800 mb-2">Status: Initial Deploy Ready</h2>
              <ul className="mt-2 space-y-2">
                <li>Netlify deployment configured</li>
                <li>React 18 + TypeScript + Tailwind CSS</li>
                <li>Staging environment for QA testing</li>
                <li>Components will be added gradually</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h2 className="text-lg font-bold text-blue-800 mb-2">Next Steps:</h2>
              <ul className="mt-2 space-y-2">
                <li>QA testing by Olivia (quality assurance)</li>
                <li>SEO check by EnglishSiteSEO</li>
                <li>Design review by EnglishSiteDesigner</li>
                <li>Addition of more components</li>
              </ul>
            </div>
            <div className="mt-8 p-4 bg-gray-800 text-white rounded-xl">
              <p className="text-lg font-bold">Project Info:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <strong>GitHub Repo:</strong>
                  <a href="https://github.com/seret/english-learning-site-mvp" className="text-blue-300 hover:text-blue-500 underline">
                    github.com/seret/english-learning-site-mvp
                  </a>
                </div>
                <div>
                  <strong>English.agems.ai:</strong>
                  <a href="https://english.agems.ai" className="text-blue-300 hover:text-blue-500 underline">
                    english.agems.ai
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
