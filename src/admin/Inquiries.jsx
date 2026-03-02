import React, { useState, useEffect } from "react";
import { getInquiries, updateInquiry, deleteInquiry } from "../utils/firebaseService";

export default function Inquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [expandedId, setExpandedId] = useState(null);
  const [replyNotes, setReplyNotes] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const data = await getInquiries();
      setInquiries(data);
    } catch (err) {
      console.error("Error fetching inquiries:", err);
      setError("Failed to load inquiries");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      setError("");
      await updateInquiry(id, {
        status: newStatus,
        replyNotes: replyNotes[id] || "",
      });
      setSuccess(`✅ Inquiry marked as ${newStatus}!`);
      await fetchInquiries();
      setReplyNotes({});
    } catch (err) {
      setError(`❌ Failed: ${err.message}`);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      try {
        setError("");
        await deleteInquiry(id);
        setSuccess("✅ Inquiry deleted!");
        await fetchInquiries();
      } catch (err) {
        setError(`❌ Failed to delete: ${err.message}`);
      }
    }
  };

  const filteredInquiries = filter === "all" 
    ? inquiries 
    : inquiries.filter(i => i.status === filter);

  const counts = {
    all: inquiries.length,
    new: inquiries.filter(i => i.status === "new").length,
    read: inquiries.filter(i => i.status === "read").length,
    replied: inquiries.filter(i => i.status === "replied").length,
  };

  return (
    <div className="inquiries-page">
      <style>{`
        .inquiries-page {
          padding: 20px;
          background: #f5f7fa;
          min-height: 100vh;
        }

        .inquiries-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .inquiries-header h2 {
          font-size: 24px;
          color: #1a202c;
          margin: 0;
        }

        .filter-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 8px 16px;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 6px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          transition: all 0.2s;
        }

        .filter-btn.active {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }

        .filter-btn:hover {
          border-color: #667eea;
        }

        .status-badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 99px;
          font-size: 12px;
          font-weight: 600;
          min-width: 70px;
          text-align: center;
        }

        .status-new {
          background: #bee3f8;
          color: #2c5282;
        }

        .status-read {
          background: #c6f6d5;
          color: #22543d;
        }

        .status-replied {
          background: #fcd34d;
          color: #78350f;
        }

        .empty-state {
          text-align: center;
          padding: 60px 20px;
          color: #718096;
        }

        .empty-state p {
          font-size: 16px;
          margin: 0;
        }

        .loading {
          text-align: center;
          padding: 40px;
          color: #718096;
        }

        .inquiries-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .inquiries-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .inquiry-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: all 0.2s;
        }

        .inquiry-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .inquiry-header {
          padding: 16px;
          background: #f7fafc;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          border-bottom: 2px solid #e2e8f0;
          gap: 16px;
        }

        .inquiry-header:hover {
          background: #edf2f7;
        }

        .inquiry-preview {
          flex: 1;
        }

        .inquiry-preview h3 {
          font-size: 16px;
          font-weight: 600;
          color: #1a202c;
          margin: 0 0 4px 0;
        }

        .inquiry-preview p {
          font-size: 13px;
          color: #718096;
          margin: 2px 0;
        }

        .inquiry-content {
          padding: 20px;
          display: none;
        }

        .inquiry-content.expanded {
          display: block;
        }

        .inquiry-details {
          background: #f7fafc;
          padding: 16px;
          border-radius: 8px;
          margin-bottom: 16px;
        }

        .detail-row {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          font-size: 14px;
        }

        .detail-row:last-child {
          margin-bottom: 0;
        }

        .detail-label {
          font-weight: 600;
          color: #2d3748;
          min-width: 100px;
        }

        .detail-value {
          color: #4a5568;
          flex: 1;
          word-break: break-all;
        }

        .inquiry-message {
          background: white;
          padding: 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          margin-bottom: 16px;
          white-space: pre-wrap;
          word-wrap: break-word;
          color: #2d3748;
          line-height: 1.6;
          max-height: 300px;
          overflow-y: auto;
        }

        .reply-section {
          margin-bottom: 16px;
        }

        .reply-section label {
          display: block;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 8px;
          font-size: 13px;
        }

        .reply-section textarea {
          width: 100%;
          padding: 12px;
          border: 2px solid #e2e8f0;
          border-radius: 6px;
          font-family: inherit;
          font-size: 14px;
          resize: vertical;
          min-height: 100px;
          box-sizing: border-box;
        }

        .reply-section textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .action-buttons {
          display: flex;
          gap: 10px;
          margin-top: 16px;
          flex-wrap: wrap;
        }

        .btn-action {
          flex: 1;
          min-width: 120px;
          padding: 10px 16px;
          border: none;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-read {
          background: #c6f6d5;
          color: #22543d;
        }

        .btn-read:hover {
          background: #9ae6b4;
        }

        .btn-replied {
          background: #fcd34d;
          color: #78350f;
        }

        .btn-replied:hover {
          background: #fbbf24;
        }

        .btn-delete {
          background: #fed7d7;
          color: #c53030;
        }

        .btn-delete:hover {
          background: #fc8181;
        }

        .btn-collapse {
          background: #e2e8f0;
          color: #2d3748;
        }

        .btn-collapse:hover {
          background: #cbd5e0;
        }

        .error-message {
          background: #fed7d7;
          color: #c53030;
          padding: 12px 14px;
          border-radius: 6px;
          margin-bottom: 16px;
          font-size: 13px;
          border-left: 4px solid #c53030;
        }

        .success-message {
          background: #c6f6d5;
          color: #22543d;
          padding: 12px 14px;
          border-radius: 6px;
          margin-bottom: 16px;
          font-size: 13px;
          border-left: 4px solid #22543d;
        }

        h4 {
          margin: 0 0 8px 0;
          color: #2d3748;
          font-size: 14px;
        }
      `}</style>

      <div className="inquiries-container">
        <div className="inquiries-header">
          <h2>📧 Client Inquiries</h2>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({counts.all})
            </button>
            <button 
              className={`filter-btn ${filter === 'new' ? 'active' : ''}`}
              onClick={() => setFilter('new')}
            >
              New ({counts.new})
            </button>
            <button 
              className={`filter-btn ${filter === 'read' ? 'active' : ''}`}
              onClick={() => setFilter('read')}
            >
              Read ({counts.read})
            </button>
            <button 
              className={`filter-btn ${filter === 'replied' ? 'active' : ''}`}
              onClick={() => setFilter('replied')}
            >
              Replied ({counts.replied})
            </button>
          </div>
        </div>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        {loading ? (
          <div className="loading">Loading inquiries...</div>
        ) : filteredInquiries.length === 0 ? (
          <div className="empty-state">
            <p>No inquiries to display</p>
          </div>
        ) : (
          <div className="inquiries-list">
            {filteredInquiries.map((inquiry) => (
              <div key={inquiry.id} className="inquiry-card">
                <div 
                  className="inquiry-header"
                  onClick={() => setExpandedId(expandedId === inquiry.id ? null : inquiry.id)}
                >
                  <div className="inquiry-preview">
                    <h3>{inquiry.name}</h3>
                    <p>📧 {inquiry.email}</p>
                    <p>📱 {inquiry.phone || "No phone"}</p>
                    <p style={{ fontSize: "12px", color: "#a0aec0", marginTop: "4px" }}>
                      {new Date(inquiry.createdAt).toLocaleDateString()} at {new Date(inquiry.createdAt).toLocaleTimeString()}
                    </p>
                  </div>
                  <span className={`status-badge status-${inquiry.status}`}>
                    {inquiry.status.toUpperCase()}
                  </span>
                </div>

                {expandedId === inquiry.id && (
                  <div className="inquiry-content expanded">
                    <div className="inquiry-details">
                      <div className="detail-row">
                        <span className="detail-label">Name:</span>
                        <span className="detail-value">{inquiry.name}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Email:</span>
                        <span className="detail-value">{inquiry.email}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Phone:</span>
                        <span className="detail-value">{inquiry.phone || "Not provided"}</span>
                      </div>
                      <div className="detail-row">
                        <span className="detail-label">Date:</span>
                        <span className="detail-value">{new Date(inquiry.createdAt).toLocaleString()}</span>
                      </div>
                    </div>

                    <h4>Message:</h4>
                    <div className="inquiry-message">{inquiry.message}</div>

                    {inquiry.replyNotes && (
                      <div>
                        <h4>Reply Notes:</h4>
                        <div className="inquiry-message" style={{ background: "#fffaf0", borderColor: "#fbd38d" }}>
                          {inquiry.replyNotes}
                        </div>
                      </div>
                    )}

                    <div className="reply-section">
                      <label>Add Reply Notes:</label>
                      <textarea
                        placeholder="Add notes about your reply to this inquiry..."
                        value={replyNotes[inquiry.id] || ""}
                        onChange={(e) => setReplyNotes({
                          ...replyNotes,
                          [inquiry.id]: e.target.value
                        })}
                      />
                    </div>

                    <div className="action-buttons">
                      {inquiry.status !== "read" && (
                        <button 
                          className="btn-action btn-read"
                          onClick={() => handleStatusChange(inquiry.id, "read")}
                        >
                          ✓ Mark as Read
                        </button>
                      )}
                      {inquiry.status !== "replied" && (
                        <button 
                          className="btn-action btn-replied"
                          onClick={() => handleStatusChange(inquiry.id, "replied")}
                        >
                          ✓ Mark as Replied
                        </button>
                      )}
                      <button 
                        className="btn-action btn-delete"
                        onClick={() => handleDelete(inquiry.id)}
                      >
                        🗑️ Delete
                      </button>
                      <button 
                        className="btn-action btn-collapse"
                        onClick={() => setExpandedId(null)}
                      >
                        Collapse
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
