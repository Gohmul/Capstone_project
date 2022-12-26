import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import getApi from "./apis/GetApi.js";
import React, { useState } from "react";

export default function Comments() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const [comments, setComments] = useState(null);

  const [content, setContent] = useState({
    uid: "",
    displayName: "",
    photoURL: "",
    content: "",
  });

  const getCommentsAndConvertToArray = () => {
    const item = localStorage.getItem("comments");
    const backToObject = JSON.parse(item);
    const intoAnArray = Object.values(backToObject);
    setComments(intoAnArray);
    console.log(intoAnArray);
  };

  const handleChange = (e) => {
    setContent({ ...content, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8000/${process.env.COMMENT_LIST}/`,
        {
          method: "POST",
          body: JSON.stringify(content),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      await getApi.getComments();
      getCommentsAndConvertToArray();
      window.location.reload();
      console.log(response);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Perform localStorage action
    getCommentsAndConvertToArray();
  }, []);

  console.log(comments);
  console.log(user);
  console.log(content);

  function LoggedIn(props) {
    return (
      <div>
        <h3>{props.comment.displayName}</h3>
        <h3>{props.comment.content}</h3>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  }
  function LoggedOut(props) {
    return (
      <div>
        <h3>{props.comment.displayName}</h3>
        <h3>{props.comment.content}</h3>
      </div>
    );
  }

  function Form() {
    return (
      <div className="create-comment-container">
        <form onSubmit={handleSubmit} className="create-comment-form">
          <input
            onChange={handleChange}
            className="content-section"
            id="content"
            type="text"
            placeholder="Leave comment here"
            value={content.content}
          />

          <button className="post-button" type="submit">
            Post
          </button>
        </form>
      </div>
    );
  }

  if (comments) {
    return (
      <div>
        <Form />
        <div className="grid">
          {comments.map((comment, index) => (
            <div className="grid-item" key={index}>
              {user ? (
                <LoggedIn comment={comment} />
              ) : (
                <LoggedOut comment={comment} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <h1>Please Refresh The Page...</h1>;
  }
}
