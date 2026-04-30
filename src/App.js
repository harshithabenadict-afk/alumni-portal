import { useState, useEffect } from "react";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/api";
import { createPost } from "./graphql/mutations";
import { listPosts } from "./graphql/queries";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(config);

const client = generateClient();

function App({ signOut, user }) {
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const result = await client.graphql({
        query: listPosts,
      });

      setPosts(result.data.listPosts.items);
    } catch (err) {
      console.log("Error fetching posts:", err);
    }
  }

  async function addPost() {
    if (!content) return;

    try {
      await client.graphql({
        query: createPost,
        variables: {
          input: { content },
        },
      });

      setContent("");
      fetchPosts();
    } catch (err) {
      console.log("Error creating post:", err);
    }
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Alumni Network Portal</h1>

      <h3>Welcome {user.username}</h3>

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

      <button onClick={signOut} style={{ marginTop: 20 }}>
        Logout
      </button>
    </div>
  );
}

export default withAuthenticator(App);