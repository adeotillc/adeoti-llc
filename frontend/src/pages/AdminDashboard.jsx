import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config';
import Button from '../components/Button';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API_URL}/posts`);
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      const response = await fetch(`${API_URL}/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-key': 'super_secret_adeoti_key_2026' // SECURITY HEADER
        }
      });
      
      if (response.ok) {
        setPosts(posts.filter(post => post._id !== id));
      } else {
        alert("Unauthorized: Failed to delete. Check your Admin Key.");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (loading) return <div style={{ padding: '50px', textAlign: 'center' }}>Loading dashboard...</div>;

  return (
    <div style={{ padding: '40px 50px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: 'var(--brand-brown)' }}>CMS Dashboard</h1>
        <Link to="/admin/create"><Button>+ Create New Post</Button></Link>
      </div>

      <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: 'var(--brand-gradient)', color: 'white' }}>
              <th style={{ padding: '15px' }}>Title</th>
              <th style={{ padding: '15px' }}>Date</th>
              <th style={{ padding: '15px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post._id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '15px', fontWeight: 'bold' }}>{post.title}</td>
                <td style={{ padding: '15px', color: '#666' }}>{new Date(post.createdAt).toLocaleDateString()}</td>
                <td style={{ padding: '15px', display: 'flex', gap: '10px' }}>
                  <Link to={`/admin/edit/${post._id}`}>
                    <button style={{ background: 'var(--brand-gold)', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
                  </Link>
                  <button onClick={() => handleDelete(post._id)} style={{ background: 'red', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr><td colSpan="3" style={{ padding: '20px', textAlign: 'center' }}>No posts found. Start writing!</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;