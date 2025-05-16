import { useState } from 'react';
import { TodoApp } from './10-useReducer/TodoApp';
import { MainApp } from './11-useContext/MainApp';
import { HookApp } from './HookApp';
export const AppSwitcher = () => {
  const [currentApp, setCurrentApp] = useState<'hook' | 'todo' | 'main'>('main');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setCurrentApp('hook')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              currentApp === 'hook'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 hover:bg-blue-50'
            }`}
          >
            Hook App
          </button>
          <button
            onClick={() => setCurrentApp('todo')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              currentApp === 'todo'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 hover:bg-blue-50'
            }`}
          >
            Todo App
          </button>
          <button
            onClick={() => setCurrentApp('main')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              currentApp === 'main'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 hover:bg-blue-50'
            }`}
          >
            Main App
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          {currentApp === 'main' ? (
            <MainApp />
          ) : currentApp === 'todo' ? (
            <TodoApp />
          ) : currentApp === 'hook' ? (
            <HookApp />
          ) : (
            <MainApp />
          )}
        </div>
      </div>
    </div>
  );
}; 