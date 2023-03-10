import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import getApi from "./apis/GetApi.js";
import React, { useState } from "react";
import Loading from "../components/Loading";
export default function Comments() {
  getApi.getComments();

  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const [comments, setComments] = useState(null);
  const [editingCommentID, setEditingCommentID] = useState();
  const [showEdit, setShowEdit] = useState(false);
  const [content, setContent] = useState("");
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
  const attachCommenter = () => {
    setCommenter({
      uid: user?.uid,
      displayName: user?.displayName,
      photoURL: user?.photoURL,
      content: content.content,
      likes: "0",
    });
    console.log(commenter);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8000/${process.env.COMMENT_LIST}/`,
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          credentials: "omit", // include, *same-origin, omit
          body: JSON.stringify(commenter),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      console.log(response.data);
      window.sessionStorage.clear();
      window.location.reload();
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
        window.sessionStorage.clear("comments");
        window.location.reload();
      } else {
        // There was an error
        console.error(`HTTP error: ${res.status}`);
      }
    } catch (error) {
      console.error(error);
      window.sessionStorage.clear();
      window.location.reload();
    }
  };

  const handleEdit = async (e, id) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:8000/${process.env.COMMENT_DETAILS}/${editingCommentID}`,
        {
          method: "PUT",
          mode: "cors", // no-cors, *cors, same-origin
          body: JSON.stringify(commenter),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (res.ok) {
        // The request was successful
        const data = await res.json();
        console.log(data);
        window.sessionStorage.clear("comments");
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
    const item = sessionStorage.getItem("comments");
    getCommentsAndConvertToArray(item);
    setCommenter({
      uid: user?.uid,
      displayName: user?.displayName,
      photoURL: user?.photoURL,
      content: content.content,
      likes: "0",
    });
    console.log(commenter);
  }, [content]);
  if (loading) {
    return <Loading />;
  }
  console.log(commenter);
  if (user?.uid && comments) {
    return (
      <div className="create-comment-container">
        <form
          onSubmit={handleSubmit}
          onChange={attachCommenter}
          className="create-comment-form"
        >
          <input
            className="content-section"
            id="content"
            type="text"
            placeholder="Tell me what you think!"
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
            <div className="comment" key={index}>
              <h2>{comment.displayName}</h2>
              <img className="comment-image" src={comment.photoURL} />
              <h2 className="comment-content">{comment.content}</h2>
              {user?.uid === comment.uid && (
                <div>
                  <h3
                    className="edit"
                    onClick={(event) => setEditingCommentID(comment.id)}
                  >
                    Edit
                    {editingCommentID === comment.id && (
                      <form
                        onSubmit={handleEdit}
                        onChange={attachCommenter}
                        className="create-comment-form"
                      >
                        <input
                          className="content-section"
                          id="content"
                          type="text"
                          placeholder={comment.content}
                          autoComplete="off"
                          onChange={handleChange}
                          value={content.content}
                        />

                        <button className="post-button" type="submit">
                          Change!
                        </button>
                      </form>
                    )}
                  </h3>
                  <h3
                    className="delete"
                    onClick={(event) => handleDelete(event, comment.id)}
                  >
                    Delete
                  </h3>
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
          <div className="comment" key={index}>
            <h2>{comment.displayName}</h2>
            <img className="comment-image" src={comment.photoURL} />
            <h2 className="comment-content">{comment.content}</h2>
          </div>
        ))}
      </div>
    );
  } else return window.location.reload();
}
