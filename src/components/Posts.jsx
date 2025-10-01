import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 15))); // 15 primeros
  }, []);

  return (
    <ol style={{textAlign:"left"}}>
      {posts.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ol>
  );
}

export default Posts;