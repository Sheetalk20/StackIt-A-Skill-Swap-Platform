import React, { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";

function AskQuestion() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    tags: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const tagsArray = form.tags.split(",").map((tag) => tag.trim());

      await API.post("/questions", {
        title: form.title,
        description: form.description,
        tags: tagsArray,
      });

      alert("Question posted!");
      navigate("/");
    } catch (err) {
      alert("Failed to post question. Are you logged in?");
    }
  };

  return (
    <div>
      <h2>Ask a Question</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <br />
        <textarea
          name="description"
          placeholder="Description"
          rows={5}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="tags"
          placeholder="Tags (comma separated)"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AskQuestion;
