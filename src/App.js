import { useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  function addPost() {
    if (!content) return;

    const newPost = {
      id: Date.now(),
      content,
    };

    setPosts([newPost, ...posts]);
    setContent("");
  }

  return (
    <div className="app">
      <div className="container">
        <h1>🎓 Alumni Network Portal</h1>

        <h3 className="welcome">Welcome User</h3>

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
                {p.content}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;