import React from "react";
import { Link } from "react-router-dom";

function QuestionCard({ question }) {
  const { _id, title, description, tags, user } = question;

  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{description?.slice(0, 100)}...</p>

      <div style={styles.tagContainer}>
        {tags?.map((tag, index) => (
          <span key={index} style={styles.tag}>
            #{tag}
          </span>
        ))}
      </div>

      <p style={styles.user}>Posted by: {user?.username || "Unknown"}</p>

      <Link to={`/questions/${_id}`}>
        <button style={styles.button}>View Details</button>
      </Link>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "1rem",
    marginBottom: "1rem",
    borderRadius: "6px",
    backgroundColor: "#fff",
  },
  tagContainer: {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  tag: {
    marginRight: "5px",
    padding: "2px 6px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "12px",
    color: "#333",
  },
  user: {
    fontSize: "0.8rem",
    color: "#666",
  },
  button: {
    marginTop: "10px",
    padding: "6px 12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default QuestionCard;
