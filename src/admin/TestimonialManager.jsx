import React, { useState, useEffect, useRef } from "react";
import { addTestimonial, getTestimonials, updateTestimonial, deleteTestimonial, uploadTestimonialImage, deleteTestimonialImage } from "../utils/firebaseService";

export default function TestimonialManager() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editingId, setEditingId] = useState(null);
  const successTimerRef = useRef(null);
  const errorTimerRef = useRef(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Auto-clear success message after 3 seconds
  useEffect(() => {
    if (success) {
      if (successTimerRef.current) clearTimeout(successTimerRef.current);
      successTimerRef.current = setTimeout(() => {
        setSuccess("");
      }, 3000);
    }
    return () => {
      if (successTimerRef.current) clearTimeout(successTimerRef.current);
    };
  }, [success]);

  // Auto-clear error message after 5 seconds
  useEffect(() => {
    if (error) {
      if (errorTimerRef.current) clearTimeout(errorTimerRef.current);
      errorTimerRef.current = setTimeout(() => {
        setError("");
      }, 5000);
    }
    return () => {
      if (errorTimerRef.current) clearTimeout(errorTimerRef.current);
    };
  }, [error]);

  const fetchTestimonials = async () => {
    setFetchLoading(true);
    try {
      const data = await getTestimonials();
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      setError(`Error loading testimonials: ${error.message}`);
    } finally {
      setFetchLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      if (!name.trim() || !role.trim() || !message.trim()) {
        throw new Error("Please fill in all required fields (Name, Role, Message)");
      }

      let finalImageURL = "";

      // Upload new image if file is selected
      if (imageFile) {
        console.log("Uploading image:", imageFile.name);
        try {
          finalImageURL = await uploadTestimonialImage(imageFile);
          console.log("Image URL received:", finalImageURL);
        } catch (imgError) {
          console.error("Image upload error:", imgError);
          throw imgError;
        }
      }

      const testimonialData = {
        name: name.trim(),
        role: role.trim(),
        message: message.trim(),
        rating: parseInt(rating),
      };

      // Only add image if it exists
      if (finalImageURL) {
        testimonialData.image = finalImageURL;
      }

      if (editingId) {
        console.log("Updating testimonial:", editingId);
        await updateTestimonial(editingId, testimonialData);
        setSuccess("✅ Testimonial updated successfully!");
        setEditingId(null);
      } else {
        console.log("Adding new testimonial");
        await addTestimonial(testimonialData);
        setSuccess("✅ Testimonial added successfully!");
      }

      // Reset form
      setName("");
      setRole("");
      setMessage("");
      setImage("");
      setImageFile(null);
      setImagePreview("");
      setRating(5);

      // Refresh testimonials
      console.log("Refreshing testimonials list");
      await fetchTestimonials();
    } catch (error) {
      console.error("Submit error:", error);
      setError(`❌ Failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("File selected:", file.name, file.size, file.type);
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError("❌ Please select a valid image file (JPG, PNG, GIF, WebP)");
        setImageFile(null);
        setImagePreview("");
        return;
      }

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setError("❌ Image size must be less than 5MB. Your file is " + (file.size / 1024 / 1024).toFixed(2) + "MB");
        setImageFile(null);
        setImagePreview("");
        return;
      }

      setImageFile(file);
      setError(""); // Clear any previous errors

      // Create preview
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (result) {
          setImagePreview(result);
          console.log("Image preview ready");
        }
      };
      reader.onerror = () => {
        setError("❌ Error reading image file");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = (testimonial) => {
    setName(testimonial.name);
    setRole(testimonial.role);
    setMessage(testimonial.message);
    setImage(testimonial.image || "");
    setImageFile(null);
    setImagePreview(testimonial.image || "");
    setRating(testimonial.rating || 5);
    setEditingId(testimonial.id);
  };

  const handleCancelEdit = () => {
    setName("");
    setRole("");
    setMessage("");
    setImage("");
    setImageFile(null);
    setImagePreview("");
    setRating(5);
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      setLoading(true);
      try {
        const testimonial = testimonials.find(t => t.id === id);
        
        // Delete associated image if it exists
        if (testimonial?.image) {
          await deleteTestimonialImage(testimonial.image);
        }
        
        await deleteTestimonial(id);
        await fetchTestimonials();
        setSuccess("✅ Testimonial deleted successfully!");
      } catch (error) {
        console.error("Delete error:", error);
        setError(`❌ Failed to delete: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="testimonial-manager">
      <style>{`
        .testimonial-manager {
          padding: 20px;
          background: #f5f7fa;
          min-height: 100vh;
        }

        .manager-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .manager-header h2 {
          font-size: 24px;
          color: #1a202c;
          margin: 0 0 30px 0;
        }

        .manager-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 30px;
        }

        @media (max-width: 768px) {
          .manager-grid {
            grid-template-columns: 1fr;
          }
        }

        .form-card, .testimonials-card {
          background: white;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .form-card h3, .testimonials-card h3 {
          font-size: 18px;
          color: #1a202c;
          margin: 0 0 20px 0;
        }

        .form-group {
          margin-bottom: 18px;
        }

        .form-group label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .form-group input, .form-group textarea, .form-group select {
          width: 100%;
          padding: 12px;
          border: 2px solid #e2e8f0;
          border-radius: 6px;
          font-size: 14px;
          font-family: inherit;
          box-sizing: border-box;
          transition: all 0.2s;
        }

        .form-group input:focus, .form-group textarea:focus, .form-group select:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .testimonial-item {
          background: #f7fafc;
          padding: 16px;
          border-radius: 8px;
          margin-bottom: 12px;
          border-left: 4px solid #667eea;
        }

        .testimonial-item h4 {
          font-size: 14px;
          color: #1a202c;
          margin: 0 0 4px 0;
        }

        .testimonial-item p {
          font-size: 13px;
          color: #718096;
          margin: 4px 0;
        }

        .testimonial-item .role {
          font-size: 12px;
          color: #a0aec0;
        }

        .stars {
          color: #f6ad55;
          font-size: 14px;
        }

        .loading {
          text-align: center;
          color: #718096;
          padding: 20px;
        }

        .empty-state {
          text-align: center;
          padding: 40px 20px;
          color: #718096;
        }

        .error-message {
          background: #fed7d7;
          color: #c53030;
          padding: 12px 14px;
          border-radius: 6px;
          margin-bottom: 16px;
          font-size: 13px;
          border-left: 4px solid #c53030;
          animation: slideInDown 0.3s ease;
        }

        .success-message {
          background: #c6f6d5;
          color: #22543d;
          padding: 12px 14px;
          border-radius: 6px;
          margin-bottom: 16px;
          font-size: 13px;
          border-left: 4px solid #22543d;
          animation: slideInDown 0.3s ease;
        }

        @keyframes slideInDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>

      <div className="manager-container">
        <div className="manager-header">
          <h2>⭐ Manage Testimonials</h2>
        </div>

        <div className="manager-grid">
          {/* Add Testimonial Form */}
          <div className="form-card">
            <h3>{editingId ? "✏️ Edit Testimonial" : "➕ Add New Testimonial"}</h3>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Client Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label>Role/Company</label>
                <input
                  type="text"
                  placeholder="CEO, TechStart"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label>Testimonial Message</label>
                <textarea
                  placeholder="Write the client's testimonial..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label>Client Image (Optional)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  disabled={loading}
                  style={{ padding: "10px", cursor: "pointer" }}
                />
                <p style={{ fontSize: "12px", color: "#718096", marginTop: "6px" }}>
                  📸 Optional. Max file size: 5MB (JPG, PNG, GIF, WebP)
                </p>
                {imagePreview && (
                  <div style={{ marginTop: "12px" }}>
                    <div style={{ fontSize: "11px", color: "#667eea", marginBottom: "6px", fontWeight: "600" }}>
                      ✓ Image selected for upload
                    </div>
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      style={{ 
                        width: "100px", 
                        height: "100px", 
                        borderRadius: "8px", 
                        objectFit: "cover",
                        border: "2px solid #667eea"
                      }} 
                    />
                  </div>
                )}
              </div>

              <div className="form-group">
                <label>Rating</label>
                <select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  disabled={loading}
                >
                  <option value="5">★★★★★ - 5 Stars</option>
                  <option value="4">★★★★☆ - 4 Stars</option>
                  <option value="3">★★★☆☆ - 3 Stars</option>
                </select>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? (editingId ? "Updating..." : "Adding...") : (editingId ? "Update Testimonial" : "Add Testimonial")}
              </button>
              {editingId && (
                <button 
                  type="button" 
                  className="submit-btn" 
                  style={{ background: "#a0aec0", marginTop: "8px" }}
                  onClick={handleCancelEdit}
                  disabled={loading}
                >
                  Cancel Edit
                </button>
              )}
            </form>
          </div>

          {/* Testimonials List */}
          <div className="testimonials-card">
            <h3>Recent Testimonials</h3>
            {fetchLoading ? (
              <div className="loading">Loading testimonials...</div>
            ) : testimonials.length === 0 ? (
              <div className="empty-state">
                <p>No testimonials yet</p>
              </div>
            ) : (
              <div style={{ maxHeight: "500px", overflowY: "auto" }}>
                {testimonials.slice(0, 10).map((testimonial) => (
                  <div key={testimonial.id} className="testimonial-item">
                    <div style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
                      {testimonial.image && (
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "6px",
                            objectFit: "cover"
                          }}
                        />
                      )}
                      <div style={{ flex: 1 }}>
                        <h4>{testimonial.name}</h4>
                        <p className="role">{testimonial.role}</p>
                      </div>
                    </div>
                    <p>{testimonial.message.substring(0, 100)}...</p>
                    <div className="stars">
                      {"★".repeat(testimonial.rating)}
                    </div>
                    <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                      <button 
                        onClick={() => handleEdit(testimonial)}
                        style={{
                          flex: 1,
                          padding: "6px 8px",
                          background: "#667eea",
                          color: "white",
                          border: "none",
                          borderRadius: "4px",
                          fontSize: "12px",
                          cursor: "pointer",
                          fontWeight: "600"
                        }}
                      >
                        ✏️ Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(testimonial.id)}
                        style={{
                          flex: 1,
                          padding: "6px 8px",
                          background: "#f56565",
                          color: "white",
                          border: "none",
                          borderRadius: "4px",
                          fontSize: "12px",
                          cursor: "pointer",
                          fontWeight: "600"
                        }}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
