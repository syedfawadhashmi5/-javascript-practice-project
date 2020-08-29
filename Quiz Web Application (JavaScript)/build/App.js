function submitFrom(e) {
  e.preventDefault();
  var name = document.getElementById("val");
  var userName = name.value;
  localStorage.setItem("userName", userName);
  location.href = "quiz.html";
}

window.onload = function () {
  show(0)
}
// Question Array


let questions = [
  {
    id: 1,

    question: "Q 1 - Which of the following is true about variable naming conventions in JavaScript?",
    answer: "C - JavaScript variable names are case sensitive.",
    option: [

      "A - JavaScript variable names are case sensitive.",
      "B - Both of the above.",
      "C - None of the above.",

    ]

  },
  {
    id: 2,
    question: "Q 2 - Which of the following is the correct syntax to print a page using JavaScript?",
    answer: "A - window.print();",
    option: [

      "A - window.print();",
      "B - browser.print();",
      "C - navigator.print();"

    ]

  },
  {
    id: 3,
    question: "Q 3 - Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
    answer: "A - last()",
    option: [

      "A - last()",
      "B - put()",
      "C - push()"

    ]

  },
  {
    id: 4,
    question: "Q 4 - Which built-in method sorts the elements of an array?",
    answer: "A - changeOrder(order)",
    option: [

      "A - changeOrder(order)",
      "B - order()",
      "C - sort()"

    ]

  },
  {
    id: 5,
    question: "Q 5 - Which of the following function of Number object returns the number's value",
    answer: "B - valueOf()",
    option: [

      "A - toString()",
      "B - valueOf()",
      "D - toPrecision()"

    ]

  },
  {
    id: 6,
    question: "Q 6 - Which of the following function of String object returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order?",
    answer: "A - localeCompare()",
    option: [

      "A - localeCompare()",
      "B - search()",
      "C - substr()"

    ]

  },
  {
    id: 7,
    question: "Q 7 - Which of the following function of String object causes a string to be displayed in the specified color as if it were in a <font color='color'> tag?",
    answer: "A - fixed()",
    option: [

      "B - fontcolor()",
      "C - blink()",
      "D - bold()",

    ]

  },
  {
    id: 8,

    question: "Q 8 - Which of the following is true about variable naming conventions in JavaScript?",
    answer: "C - JavaScript variable names are case sensitive.",
    option: [

      "C - JavaScript variable names are case sensitive.",
      "B - Both of the above.",
      "A - None of the above."

    ]

  },
  {
    id: 9,
    question: "Q 9 - Which of the following is the correct syntax to print a page using JavaScript?",
    answer: "A - window.print();",
    option: [

      "A - window.print();",
      "B - browser.print();",
      "C - navigator.print();"

    ]

  },
]

var count = 0;

var point = 0;

function next() {

  var userAnswer = document.querySelector("li.option.active").innerHTML;
  if (userAnswer == questions[count].answer) {
    point += 10;
    localStorage.setItem('points', point);
  }


  if (count == questions.length - 1) {
    localStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "endPage.html";
  }


  console.log(userAnswer)
  count++
  show(count);
}

function show(count) {
  var QsANS = document.getElementById("QsANS");

  QsANS.innerHTML = ` <h2>${questions[count].question}</h2> <ul>
                                                            <li class="option">${questions[count].option[0]}</li>
                                                            <li class="option">${questions[count].option[1]}</li>
                                                            <li class="option">${questions[count].option[2]}</li>
                                                          </ul>`
  toggleActive()
}


function toggleActive() {
  var option = document.querySelectorAll("li.option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    }
  }
}


let userName = localStorage.getItem("userName");
let points = localStorage.getItem('points');
let timer = localStorage.getItem('time');

document.querySelector("#userName").innerHTML = "Name " + " : " + userName;
document.querySelector("#points").innerHTML = "congestion your score is" + " : " + 100 + "/" + points;
document.querySelector("#time").innerHTML = "Your Run Time" + " : " + timer;

