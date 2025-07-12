import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/api";

function QuestionDetails() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState("");

  const fetchQuestion = async () => {
    try {
      const res = await API.get(`/questions/${id}`);
      setQuestion(res.data);
    } catch (err) {
      console.error("Error loading question", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post(`/answers/${id}`, { text: answer });
      setAnswer("");
      fetchQuestion(); // refresh after answer
    } catch (err) {
      alert("Failed to post answer.");
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, [id]);

  if (!question) return <p>Loading...</p>;

  return (
    <div>
      <h2>{question.title}</h2>
      <p>{question.description}</p>

      <h3>Answers:</h3>
      {question.answers?.length ? (
        question.answers.map((a) => (
          <div key={a._id}>
            <p>{a.text}</p>
            <small>By: {a.user?.username}</small>
          </div>
        ))
      ) : (
        <p>No answers yet.</p>
      )}

      <hr />
      <h4>Post Your Answer</h4>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
        ></textarea>
        <br />
        <button type="submit">Submit Answer</button>
      </form>
    </div>
  );
}

export default QuestionDetails;
