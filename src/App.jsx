import React from 'react';

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-survaloOrange">Survalo</h1>
          <span className="text-xs text-white bg-survaloDark px-2 py-1 rounded">
            Built by Chartered Surveyors
          </span>
        </div>
        <nav className="space-x-4 text-sm">
          <a href="#features" className="hover:text-survaloOrange">Product</a>
          <a href="#pricing" className="hover:text-survaloOrange">Pricing</a>
          <a href="#how-it-works" className="hover:text-survaloOrange">How it Works</a>
          <a href="#support" className="hover:text-survaloOrange">Support</a>
          <a href="#" className="bg-survaloOrange text-white px-4 py-2 rounded hover:bg-orange-700">Sign Up</a>
        </nav>
      </header>
      <main className="text-center py-16 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold mb-4">AI-Powered Valuation for Surveyors</h2>
        <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
          Survalo is the first valuation platform built by Chartered Surveyors,
          designed for Red Book–compliant reporting with AI commentary, voice notes,
          comps management, and easy exports.
        </p>
        <a href="#" className="bg-survaloOrange text-white px-6 py-3 rounded text-lg hover:bg-orange-700">Start Free Trial</a>
      </main>
    </div>
  );
}