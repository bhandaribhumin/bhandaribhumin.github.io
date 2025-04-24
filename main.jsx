
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
    <img src="/Bhumin.png" alt="Bhumin" className="w-40 h-40 rounded-full shadow-lg mb-4" />
    <h1 className="text-4xl font-bold text-blue-600">Hi, I'm Bhumin 👋</h1>
    <p className="mt-2 text-lg max-w-xl">
      Hybrid Mobile & Web Application Developer with 11+ years of experience in Ionic, React Native, Flutter, Angular, Node.js and Shopify integration.
    </p>
    <div className="flex space-x-4 mt-6">
      <a href="https://github.com/bhandaribhumin" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">GitHub</a>
      <a href="https://www.linkedin.com/in/bhuminbhandari" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">LinkedIn</a>
      <a href="/Bhumin-Cv.pdf" download className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Download Resume</a>
    </div>
    <div className="mt-10 text-left max-w-3xl">
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Featured Projects</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Shling Shopping App</strong>: Dynamic e-commerce platform built in Flutter + Shopify APIs</li>
        <li><strong>LivingWith Cancer App</strong>: Multilingual hybrid mobile app for cancer care</li>
        <li><strong>Pfizer SmartClick</strong>: BLE-enabled medical device companion app</li>
      </ul>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
