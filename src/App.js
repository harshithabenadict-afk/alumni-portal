import { useState } from "react";

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
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Alumni Network Portal</h1>

      <h3>Welcome User</h3>

      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a post"
        style={{ padding: 10, width: "300px" }}
      />

      <button onClick={addPost} style={{ marginLeft: 10 }}>
        Post
      </button>

      <h3>Posts</h3>
      {posts.map((p) => (
        <p key={p.id}>{p.content}</p>
      ))}
    </div>
  );
}

export default App;