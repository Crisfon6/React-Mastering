import { useState } from 'react';
import { HookApp } from './HookApp';
import { TodoApp } from './10-useReducer/TodoApp';

export const AppSwitcher = () => {
  const [currentApp, setCurrentApp] = useState<'hook' | 'todo'>('hook');

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
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          {currentApp === 'hook' ? <HookApp /> : <TodoApp />}
        </div>
      </div>
    </div>
  );
}; 