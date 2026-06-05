import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css'
import { API_URL } from '../config';
import Button from '../components/Button';

const CreatePost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', author: 'Adeoti LLC Team', imageUrl: '' });
  const [content, setContent] = useState(''); 
  const [isPublishing, setIsPublishing] = useState(false);

  const modules = {
    toolbar: [
      [{ 'header': [2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPublishing(true);

    try {
      const response = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-admin-key': 'super_secret_adeoti_key_2026' // SECURITY HEADER
        },
        body: JSON.stringify({ ...formData, content }) 
      });

      if (response.ok) {
        navigate('/admin');
      } else {
        alert("Unauthorized: Failed to publish. Check your Admin Key.");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsPublishing(false);
    }
  };

  const inputStyle = { width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'Lato' };

  return (
    <div style={{ padding: '40px 50px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: 'var(--brand-brown)', marginBottom: '30px' }}>Write a New Post</h1>
      <form onSubmit={handleSubmit} style={{ background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Post Title</label>
        <input type="text" name="title" required value={formData.title} onChange={handleChange} style={inputStyle} />

        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Author</label>
        <input type="text" name="author" required value={formData.author} onChange={handleChange} style={inputStyle} />

        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Cover Image URL (Optional)</label>
        <input type="url" name="imageUrl" value={formData.imageUrl} onChange={handleChange} style={inputStyle} />

        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Article Content</label>
        <div style={{ marginBottom: '20px', background: 'white' }}>
          <ReactQuill 
            theme="snow" 
            value={content} 
            onChange={setContent} 
            modules={modules}
            style={{ height: '300px', marginBottom: '40px' }} 
          />
        </div>

        <Button type="submit">{isPublishing ? 'Publishing...' : 'Publish Post'}</Button>
      </form>
    </div>
  );
};

export default CreatePost;