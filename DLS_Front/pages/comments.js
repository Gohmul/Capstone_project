import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import getApi from "./apis/GetApi.js";
import React, { useState } from "react";
import Refresh from "../components/Refresh";
import Loading from "../components/Loading";

export default function Comments() {
  getApi.getComments();
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const [comments, setComments] = useState(null);
  const [content, setContent] = useState({
    content: "",
  });
  const [commenter, setCommenter] = useState([
    {
      uid: user?.uid,
      displayName: user?.displayName,
      photoURL: user?.photoURL,
      content: content,
    },
  ]);
  console.log(user);
  const handleChange = (e) => {
    setContent({ ...content, [e.target.id]: e.target.value });
    setCommenter({
      uid: user?.uid,
      displayName: user?.displayName,
      photoURL: user?.photoURL,
      content: content.content,
      likes: "0",
    });
    console.log(commenter);
    console.log(JSON.stringify(commenter));
  };

  const getCommentsAndConvertToArray = (item) => {
    if (item) {
      const backToObject = JSON.parse(item);
      const intoAnArray = Object.values(backToObject);
      setComments(intoAnArray);
      console.log(intoAnArray);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = JSON.stringify(commenter);

    try {
      const response = await fetch(
        `http://localhost:8000/${process.env.COMMENT_LIST}/`,
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "no-cors", // no-cors, *cors, same-origin
          credentials: "omit", // include, *same-origin, omit
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      getApi.getComments();
      // window.location.reload();
      console.log(response);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (e, id) => {
    e.preventDefault;
    try {
      const res = await fetch(
        `http://localhost:8000/${process.env.COMMENT_DETAILS}/${id}`,
        {
          method: "DELETE",
          mode: "cors", // no-cors, *cors, same-origin
          body: "",
        }
      );

      if (res.ok) {
        // The request was successful
        const data = await res.json();
        console.log(data);
        window.location.reload();
      } else {
        // There was an error
        console.error(`HTTP error: ${res.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const item = localStorage.getItem("comments");
    getCommentsAndConvertToArray(item);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (user?.uid && comments) {
    return (
      <div className="create-comment-container">
        <form onSubmit={handleSubmit} className="create-comment-form">
          <input
            className="content-section"
            id="content"
            type="text"
            placeholder="Leave comment here"
            autoComplete="off"
            onChange={handleChange}
            value={content.content}
          />

          <button className="post-button" type="submit">
            Post!
          </button>
        </form>
        <div className="grid">
          {comments.map((comment, index) => (
            <div className="grid-item" key={index}>
              <h2>{comment.displayName}</h2>
              {/* <img src={comment.photoURL} /> */}
              <h2>{comment.content}</h2>
              {user?.uid === comment.uid && (
                <div>
                  <button>edit</button>
                  <button onClick={(event) => handleDelete(event, comment.id)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (comments) {
    return (
      <div className="grid">
        {comments.map((comment, index) => (
          <div className="grid-item" key={index}>
            <h2>{comment.displayName}</h2>
            <img src={comment.photoURL} />
            <h2>{comment.content}</h2>
          </div>
        ))}
      </div>
    );
  } else return <Refresh />;
}
