
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // Fetch the post by id and set title and content
    setTitle('Sample Title');
    setContent('Sample Content');
  }, [id]);

  const handleEditPost = () => {
    // Handle post update
    console.log(`Post ${id} edited to: ${title}, ${content}`);
  };

  return (
    <div className="post">
      <h1>Edit Post</h1>
      <input id="postTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea id="postContent" value={content} onChange={(e) => setContent(e.target.value)} />
      <button className="button" onClick={handleEditPost}>Save Changes</button>
    </div>
  );
}

export default EditPost;
