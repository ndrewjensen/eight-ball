import { useState } from "react";
import './EightBall.css'

const answersDefault = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

/** Generate 8 Ball
 *
 * Props: array of objects like:
 * [{msg, color},...]
 *
 * state:
 * {msg,color}
 *
 * App -> EightBall
 */

function EightBall({ answers = answersDefault }) {
  const [answer, setAnswer] = useState({
    msg: "Think of a Question",
    color: "black",
  });

  function getAnswer() {
    const randomIdx = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIdx]);
  }

//   const eightBallStyle = {
//     color: answer.color,
//     backgroundColor: otherColor,
//   };


  return (
    <div className="EightBall postion-relative" onClick={getAnswer} style={{backgroundColor: answer.color}}>
      <p className="position-absolute top-50 start-50 translate-middle">{answer.msg}</p>
    </div>
  );
}

export default EightBall;
