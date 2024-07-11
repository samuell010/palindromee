import React, { useState } from 'react';
import './index.css';

interface Todo {
  id: number;
  isPalindrome: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  const isPalindrome = (word: string): boolean => {
    const cleaned = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
  };

  const addTodo = () => {
    if (text.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        isPalindrome: isPalindrome(text.trim()),
      };
      setTodos([...todos, newTodo]);
      setText('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Palindrome Checker</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
            placeholder="Enter a word"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          >
            Check
          </button>
        </div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className={`flex items-center justify-between mb-2 p-2 rounded ${todo.isPalindrome ? 'bg-green-200' : 'bg-red-200'}`}>
              <span>{todo.isPalindrome ? 'You entered a Palindrome word' : 'Not Palindrome'}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
