import axios from "axios";
import React, { useEffect, useState } from "react";

const UsersPage = () => {
  const [link, setLink] = useState([]);
  async function getLink() {
    const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
    setLink(data);
  }
  useEffect(() => {
    getLink();
  }, []);
  return (
    <div>
      <h2>Link list</h2>
      {link.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
};

export default UsersPage;
