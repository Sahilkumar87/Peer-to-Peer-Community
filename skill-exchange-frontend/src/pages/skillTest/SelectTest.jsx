import { Link } from "react-router-dom";

function SelectTest() {
  const tests = [
    {
      name: "React",
      icon: "⚛️",
      level: "Basic",
      questions: 10,
      description: "Test your fundamentals of React and components.",
    },
    {
      name: "JavaScript",
      icon: "🟨",
      level: "Basic",
      questions: 10,
      description: "Test your JavaScript fundamentals and concepts.",
    },
    {
      name: "DSA",
      icon: "🧠",
      level: "Basic",
      questions: 10,
      description: "Test your knowledge of data structures and algorithms.",
    },
    {
      name: "Java",
      icon: "☕",
      level: "Basic",
      questions: 10,
      description: "Test your understanding of Java programming.",
    },
    {
      name: "UI/UX Design",
      icon: "🎨",
      level: "Basic",
      questions: 10,
      description: "Test your understanding of basic UI/UX principles.",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      level: "Basic",
      questions: 10,
      description: "Test your basic MongoDB and database knowledge.",
    },
  ];

  return (
    <div className="tests-page">

      {/* Navbar */}
      <nav className="dashboard-nav">
        <div className="logo">SkillExchange</div>

        <div className="dashboard-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Logout</Link>
        </div>
      </nav>

      <main className="tests-main">

        {/* Heading */}
        <div className="tests-heading">
          <p className="small-title">SKILL ASSESSMENT</p>

          <h1>Choose Your Skill Test</h1>

          <p>
            Select a skill and test your knowledge to discover your skill level.
          </p>
        </div>

        {/* Test Cards */}
        <div className="test-selection-grid">

          {tests.map((test) => (
            <div className="test-selection-card" key={test.name}>

              <div className="test-icon">
                {test.icon}
              </div>

              <h2>{test.name}</h2>

              <p>{test.description}</p>

              <div className="test-info">
                <span>📝 {test.questions} Questions</span>
                <span>📊 {test.level}</span>
              </div>

              <Link
                to={
                  test.name === "React"
                    ? `/test/${test.name}`
                    : `/test/${test.name.toLowerCase().replace("/", "-").replace(" ", "-")}`
                }
                className="start-test-btn"
              >
                Start Test →
              </Link>

            </div>
          ))}

        </div>

      </main>

    </div>
  );
}

export default SelectTest;