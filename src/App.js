import React from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

const App = () => {
  return (
    <div className="App">
      <PostForm />
      <PostList />
    </div>
  );
};

export default App;
