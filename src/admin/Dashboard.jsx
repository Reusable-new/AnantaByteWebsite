import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="admin-dashboard">
      <style>{`
        .admin-dashboard {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .dashboard-header {
          background: white;
          padding: 20px 30px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .dashboard-header h1 {
          font-size: 24px;
          font-weight: 700;
          color: #1a202c;
          margin: 0;
        }

        .btn-logout {
          background: #e53e3e;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-logout:hover {
          background: #c53030;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(229, 62, 62, 0.3);
        }

        .dashboard-content {
          padding: 40px 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .dashboard-welcome {
          background: white;
          padding: 30px;
          border-radius: 12px;
          margin-bottom: 30px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .dashboard-welcome h2 {
          font-size: 22px;
          color: #1a202c;
          margin: 0 0 8px 0;
        }

        .dashboard-welcome p {
          color: #718096;
          margin: 0;
        }

        .dashboard-widgets {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .widget {
          background: white;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s;
          animation: fadeIn 0.4s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .widget:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .widget h3 {
          font-size: 18px;
          font-weight: 700;
          color: #1a202c;
          margin: 0 0 8px 0;
        }

        .widget p {
          color: #718096;
          font-size: 14px;
          margin: 0 0 16px 0;
        }

        .widget button {
          width: 100%;
          padding: 10px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .widget button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .widget-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }
      `}</style>

      <header className="dashboard-header">
        <h1>📊 Admin Dashboard</h1>
        <button onClick={handleLogout} className="btn-logout">
          Logout
        </button>
      </header>

      <main className="dashboard-content">
        <section className="dashboard-welcome">
          <h2>Welcome back! 👋</h2>
          <p>Manage your AnantaByte website from here</p>
        </section>

        <div className="dashboard-widgets">
          <div className="widget">
            <div className="widget-icon">📧</div>
            <h3>Client Inquiries</h3>
            <p>View and manage contact form submissions</p>
            <button onClick={() => navigate('/admin/inquiries')}>View Inquiries</button>
          </div>

          <div className="widget">
            <div className="widget-icon">⭐</div>
            <h3>Testimonials</h3>
            <p>Upload and manage client testimonials</p>
            <button onClick={() => navigate('/admin/testimonials')}>Manage Testimonials</button>
          </div>

          <div className="widget">
            <div className="widget-icon">📈</div>
            <h3>Analytics</h3>
            <p>Track website traffic and visitor stats</p>
            <button>View Analytics</button>
          </div>

          <div className="widget">
            <div className="widget-icon">📝</div>
            <h3>Content Management</h3>
            <p>Edit homepage sections and copy</p>
            <button>Edit Content</button>
          </div>
        </div>
      </main>
    </div>
  );
}