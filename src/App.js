import { useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  const alumni = [
    { name: "Rahul", role: "Software Engineer", year: "2020 Batch" },
    { name: "Priya", role: "Data Analyst", year: "2019 Batch" },
    { name: "Arjun", role: "MBA Graduate", year: "2021 Batch" },
    { name: "Sneha", role: "UI/UX Designer", year: "2018 Batch" },
    { name: "Kiran", role: "DevOps Engineer", year: "2022 Batch" }
  ];

  const opportunities = [
    "Internship at Infosys",
    "Job opening at TCS",
    "Frontend Developer role at Wipro",
    "Data Analyst internship at Accenture",
    "Software Engineer role at Cognizant"
  ];

  function addPost() {
    if (!content) return;

    const newPost = {
      id: Date.now(),
      content,
      time: new Date().toLocaleString(),
    };

    setPosts([newPost, ...posts]);
    setContent("");
  }

  return (
    <div className="app">
      <div className="container">
        <h1>🎓 Alumni Network Portal</h1>

        <div className="nav">
          <span>Home</span>
          <span>Posts</span>
          <span>Alumni</span>
          <span>Opportunities</span>
        </div>

        <h3 className="welcome">Welcome Harshitha (Student)</h3>

        <div className="input-box">
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write a post..."
          />
          <button onClick={addPost}>Post</button>
        </div>

        <div className="posts-section">
          <h3>📢 Posts</h3>

          {posts.length === 0 ? (
            <p className="empty">No posts yet</p>
          ) : (
            posts.map((p) => (
              <div key={p.id} className="post">
                <p>{p.content}</p>
                <small>{p.time}</small>
              </div>
            ))
          )}
        </div>

        <div className="posts-section">
          <h3>👥 Alumni Members</h3>

          {alumni.map((a, index) => (
            <div key={index} className="post">
              {a.name} - {a.role} ({a.year})
            </div>
          ))}
        </div>

        <div className="posts-section">
          <h3>💼 Opportunities</h3>

          {opportunities.map((o, index) => (
            <div key={index} className="post">
              {o}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;