"use client"
import { useState } from 'react';

interface Comment {
  author: string;
  content: string;
  date: string;
}

interface CommentSectionProps {
  postId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (author && content) {
      const newComment: Comment = {
        author,
        content,
        date: new Date().toLocaleDateString(),
      };
      setComments([...comments, newComment]);
      setAuthor('');
      setContent('');
    }
  };

  return (
    <div className="comment-section mt-6">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      
      {/* Form to add a comment */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <textarea
          placeholder="Your comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Comment
        </button>
      </form>

      {/* Displaying comments */}
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment, index) => (
            <li key={index} className="border-b py-4">
              <p className="font-bold">{comment.author} <span className="text-gray-500 text-sm">on {comment.date}</span></p>
              <p>{comment.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default CommentSection;
