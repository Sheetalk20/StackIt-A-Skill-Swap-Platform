import React, { useEffect, useState } from "react";
import API from "../utils/api";
import QuestionCard from "../components/QuestionCard";

function Home() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await API.get("/questions");
        setQuestions(res.data);
      } catch (err) {
        console.error("Error loading questions", err);
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div>
      <h2>All Questions</h2>
      {questions.length === 0 ? (
        <p>No questions yet.</p>
      ) : (
        questions.map((q) => <QuestionCard key={q._id} question={q} />)
      )}
    </div>
  );
}

export default Home;
