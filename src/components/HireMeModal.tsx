import React, { useState } from 'react';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HireMeModal: React.FC<HireMeModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [result, setResult] = useState("");

  if (!isOpen) return null;

  const handleHireSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(e.currentTarget)
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);
      setResult(data.success ? "Success!" : "Error");
      if (data.success) {
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => { onClose(); setResult(""); }, 2000);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setResult("Error");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()} style={{ background: 'var(--bg-base)', borderRadius: '22px', border: '1px solid var(--border-soft)', boxShadow: 'var(--shadow-soft)' }}>
        <button className="modal-close" onClick={onClose}>
          <span className="material-icons-round">close</span>
        </button>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '20px', fontFamily: 'var(--font-display)', color: 'var(--text-main)' }}>Let's work together</h2>
        <form onSubmit={handleHireSubmit}>
          <input type="hidden" name="access_key" value="506cac7d-5b56-42f5-a4b0-3d7eb7e5034d" />
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="form-control"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="form-control"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Project Details</label>
            <textarea
              id="message"
              name="message"
              required
              className="form-control"
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              placeholder="Interested in working together? Drop your details here — this goes straight to my personal inbox, which I check daily!"
            />
          </div>
          <button type="submit" className="btn-primary btn-submit" style={{ fontFamily: 'inherit' }}>Send Details</button>
          {result && <p style={{ marginTop: '10px', textAlign: 'center', color: 'var(--text-main)' }}>{result}</p>}
        </form>
      </div>
    </div>
  );
};

export default HireMeModal;
