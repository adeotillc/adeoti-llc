import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css'
import { API_URL } from '../config';
import Button from '../components/Button';

const EditPost = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', author: '', imageUrl: '' });
  const [content, setContent] = useState(''); 
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const modules = {
    toolbar: [
      [{ 'header': [2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${API_URL}/posts/${id}`);
        if (!response.ok) throw new Error("Post not found");
        const data = await response.json();
        setFormData({ title: data.title, author: data.author || '', imageUrl: data.imageUrl || '' });
        setContent(data.content);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true);

    try {
      const response = await fetch(`${API_URL}/posts/${id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'x-admin-key': 'super_secret_adeoti_key_2026' // SECURITY HEADER
        },
        body: JSON.stringify({ ...formData, content })
      });

      if (response.ok) {
        navigate('/admin'); 
      } else {
        alert("Unauthorized: Failed to update. Check your Admin Key.");
      }
    } catch (error) {
      console.error("Error updating post:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const inputStyle = { width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'Lato' };

  if (isLoading) return <div style={{ textAlign: 'center', padding: '100px' }}>Loading editor...</div>;

  return (
    <div style={{ padding: '40px 50px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: 'var(--brand-brown)', marginBottom: '30px' }}>Edit Post</h1>
      <form onSubmit={handleSubmit} style={{ background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Post Title</label>
        <input type="text" name="title" required value={formData.title} onChange={handleChange} style={inputStyle} />

        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Author</label>
        <input type="text" name="author" required value={formData.author} onChange={handleChange} style={inputStyle} />

        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Cover Image URL</label>
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

        <div style={{ display: 'flex', gap: '15px' }}>
          <Button type="submit">{isUpdating ? 'Saving Changes...' : 'Update Post'}</Button>
          <button type="button" onClick={() => navigate('/admin')} style={{ background: '#ccc', color: '#333', border: 'none', padding: '10px 24px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;