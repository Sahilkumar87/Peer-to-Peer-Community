import { useState } from "react";
import { Link } from "react-router-dom";

function Test() {
  const questions = [
    {
      question: "What is React?",
      options: [
        "A Database",
        "A JavaScript Library",
        "A Programming Language",
        "An Operating System",
      ],
      answer: "A JavaScript Library",
    },
    {
      question: "Which hook is used to manage state in React?",
      options: [
        "useState",
        "useRoute",
        "usePage",
        "useData",
      ],
      answer: "useState",
    },
    {
      question: "Which method is commonly used to render a list in React?",
      options: [
        "forEach()",
        "map()",
        "filter()",
        "reduce()",
      ],
      answer: "map()",
    },
    {
      question: "Which syntax is used to create a React component?",
      options: [
        "function Component()",
        "create Component()",
        "new Component()",
        "component.new()",
      ],
      answer: "function Component()",
    },
    {
      question: "What does JSX allow developers to write?",
      options: [
        "SQL inside HTML",
        "HTML-like syntax inside JavaScript",
        "CSS inside MongoDB",
        "Java inside HTML",
      ],
      answer: "HTML-like syntax inside JavaScript",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const question = questions[currentQuestion];

  const handleAnswer = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: option,
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let score = 0;

    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        score++;
      }
    });

    alert(`Test submitted! Your score is ${score}/${questions.length}`);
  };

  return (
    <div className="test-page">

      {/* Navbar */}
      <nav className="dashboard-nav">
        <div className="logo">SkillExchange</div>

        <div className="dashboard-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/tests">Tests</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>

      <main className="test-main">

        {/* Header */}
        <div className="test-header">
          <div>
            <p className="small-title">SKILL TEST</p>
            <h1>React Fundamentals Test</h1>
            <p>Test your basic React knowledge.</p>
          </div>

          <div className="question-counter">
            {currentQuestion + 1} / {questions.length}
          </div>
        </div>

        {/* Progress */}
        <div className="test-progress">
          <div
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>

        {/* Question */}
        <section className="question-card">

          <p className="question-number">
            Question {currentQuestion + 1}
          </p>

          <h2>{question.question}</h2>

          <div className="options">

            {question.options.map((option, index) => (
              <button
                key={index}
                className={`option ${
                  selectedAnswers[currentQuestion] === option
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleAnswer(option)}
              >
                <span className="option-number">
                  {String.fromCharCode(65 + index)}
                </span>

                {option}
              </button>
            ))}

          </div>

          {/* Navigation */}
          <div className="test-navigation">

            <button
              className="previous-btn"
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
            >
              ← Previous
            </button>

            {currentQuestion === questions.length - 1 ? (
              <button
                className="submit-test-btn"
                onClick={handleSubmit}
              >
                Submit Test
              </button>
            ) : (
              <button
                className="next-btn"
                onClick={nextQuestion}
              >
                Next →
              </button>
            )}

          </div>

        </section>

        {/* Question Navigator */}
        <section className="question-list">

          <h3>Questions</h3>

          <div className="question-buttons">

            {questions.map((_, index) => (
              <button
                key={index}
                className={`
                  ${currentQuestion === index ? "active-question" : ""}
                  ${selectedAnswers[index] ? "answered-question" : ""}
                `}
                onClick={() => setCurrentQuestion(index)}
              >
                {index + 1}
              </button>
            ))}

          </div>

        </section>

      </main>
    </div>
  );
}

export default Test;