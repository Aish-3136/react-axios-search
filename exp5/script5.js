const quiz = [
  {
    question: "Which language is used for structuring web pages?",
    answers: ["HTML", "CSS", "JavaScript", "Python"],
    points: [1, 0, 0, 0]
  },
  {
    question: "Which language is mainly used for styling web pages?",
    answers: ["HTML", "CSS", "JavaScript", "PHP"],
    points: [0, 1, 0, 0]
  },
  {
    question: "Which of these is a JavaScript framework?",
    answers: ["React", "Django", "Flask", "Laravel"],
    points: [1, 0, 0, 0]
  },
  {
    question: "What does SQL stand for?",
    answers: ["Structured Query Language", "Simple Query Language", "Sequential Query List", "Server Question Language"],
    points: [1, 0, 0, 0]
  },
  {
    question: "Which protocol is used to load web pages?",
    answers: ["HTTP", "FTP", "SMTP", "SSH"],
    points: [1, 0, 0, 0]
  }
];

let current = 0;
let totalPoints = 0;

function loadQuestion() {
  const q = quiz[current];
  document.getElementById("question").innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((ans, index) => {
    const div = document.createElement("div");
    div.classList.add("answer-card");
    div.innerText = ans;

    div.onclick = () => {
      totalPoints += q.points[index];
      current++;
      if (current < quiz.length) {
        loadQuestion();
      } else {
        showResult();
      }
    };

    answersDiv.appendChild(div);
  });
}

function showResult() {
  document.getElementById("question").innerText = "🎉 Quiz Completed!";
  document.getElementById("answers").innerHTML = "";

  let resultText;
  if (totalPoints === quiz.length) resultText = "Excellent! You are a Web Dev Pro!";
  else if (totalPoints >= quiz.length - 2) resultText = "Good! You know your web basics.";
  else resultText = "Keep Learning! Practice more on web technologies.";

  document.getElementById("result").innerText = resultText;
}

loadQuestion();
