
import React, { useState } from 'react';

function CreatePost() {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleCreatePost = () => {
    // Handle post creation
    console.log(`Post created by ${author}: ${content}`);
  };

  return (
    <div>
      <h1>Create Post</h1>
      <select id="postAuthor" value={author} onChange={(e) => setAuthor(e.target.value)}>
        <option value="">Select Author</option>
        <option value="User1">User1</option>
        <option value="User2">User2</option>
      </select>
      <textarea id="postContent" value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
}

export default CreatePost;
