$(document).ready(function() {
    const questions = [
        {
            question: "Who is the creator of JQuery?",
            answer:["Arnold Query",
                    "Jarin Besiz",
                    "Chapierre Quebali",
                    "John Resig"],
            correctAnswer: "John Resig",
            hint: `Also author of "Pro Javascript Techniques"`
        },
        {
            question: `Let's go back to the beginning of our class! When was the first website created?`,
            answer:[ "July 18, 1998",
                        "September 12, 1958",
                        "January 12, 1989",
                        "March 12, 1989"],
            correctAnswer: "March 12, 1989",
            hint: `<a href="http://info.cern.ch/hypertext/WWW/TheProject.html">Click Me Please</a>`
        },
        {
            question: `How do we declare a variable in Javascript?`,
            answer: ["<variable>Object</variable>",
                        "$variable: Object;",
                        "var(--Object);",
                        "var variableName = {Object};"],
            correctAnswer: "var variableName = {Object};",
            hint: `Usually, Javascript uses a keyword like "var" to start declaring variables.`
        },
        {
            question: "How do we declare a variable in HTML?",
            answer:[ "$variable: Object;" ,
                        "<variable>Object</variable>",
                        "var(--Object);",
                        "None of the above."],
            correctAnswer: "None of the above.",
            hint: "We never learned how to because variables do not exist in HTML. Normally, HTML elements are the virtual objects placed inside of variables and serve as containers for them."
        },
        {
            question: "What are ::before and ::after pseudo-elements do in CSS?",
            answer: ["The ::before and ::after pseudo-elements selector allow you to select one or more elements based on their source order, according to a formula.",
            `The ::before and ::after pseudo-elements select elements when the mouse cursor is currently over them. It’s commonly associated with link (<a>) elements.`,
            "The ::before and ::after pseudo-elements match an element with invalid contents. For example, an input element with type 'email' with a name entered.",
            "The ::before and ::after pseudo-elements in CSS allow you to insert content onto a page without it needing to be in the HTML."],
            correctAnswer: "The ::before and ::after pseudo-elements in CSS allow you to insert content onto a page without it needing to be in the HTML.",
            hint: "No hints for this one, but you can use GOOGLE! You might learn a thing or two about the wrong answers"
        },
        {
            question: "Who is the father of computers?",
            answer: ["Brittney Cergio",
                        "Alexander Windows",
                        "Percy Computero",
                        "Charles Babbage"],
            correctAnswer: "Charles Babbage",
            hint: `<a href="https://www.britannica.com/biography/Charles-Babbage">Click Me Please</a>`
        },
        {
            question: "What is CSS used for?",
            answer: ["Adding functionalities to websites",
                    "Assigning mark-up structure for our websites",
                    "Creating sitemaps and wireframes for our websites",
                    "Managing our websites's HTML element's style properties for our websites"],
            correctAnswer: "Managing our websites's HTML element's style properties for our websites",
            hint: `CSS stands for "Cascading Style Sheets".`
        },
        {
            question: "What does HTML stand for?",
            answer:[ "Hot Tamales",
                        "Hyper Transfer Mechanical Language",
                        "Human Text Mark-up Telecommunications",
                        "Hyper Text Mark-up Language"],
            correctAnswer: "Hyper Text Mark-up Language",
            hint: "It's definitely not Hot Tamales"
        },
        {
            question: "How long of a time period did it take Brendan Eich to create Javascript?",
            answer: ["2 months",
                    "24 days",
                    "1 year and 4 days",
                    "10 days"],
            correctAnswer: "10 days",
            hint: `Not much of a hint I can hint out, but Google should be able to point it out.`
        },
        {
            question: "What Does CMS Stand For?",
            answer:  ["Crafted Mechanical Site",
                        "Content Messaging Service",
                        "Commercial Marketing System",
                        "Content Management System"],
            correctAnswer: "Content Management System",
            hint: "We learned how to use one of these tools (WordPress)."
        },
        {
            question: "In CSS what does the padding property target?",
            answer: ["It targets the border size of the content within the element.",
                    "It targets the space outside of the element that no other elements can enter.",
                    "It allows us to move our elements on its Y-axis",
                    "It allows us to target the space within the element"],
            correctAnswer: "It allows us to target the space within the element",
            hint: "Also squeezes our content, making them adapt a smaller size when this property exceeds the content's size threshold"
        },
    ];
    

    // Hide the custom alert when the "Next Question" button is clicked
    $(".randomize-button").click(function() {
        $(".custom-alert").hide();
    });
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
    }
    shuffleArray(questions);
    questions.forEach(question => {
        shuffleArray(question.answer);
    });
    let questionIndex = 0;
    function displayRandomQuestion() {
        if (questionIndex < questions.length) {
            const currentQuestion = questions[questionIndex]; 
            $("#randomize-button").prop("disabled", true);
            $("#question-text").text(currentQuestion.question);
            const answerList = $("#answer-list");
            answerList.empty();
            currentQuestion.answer.forEach(answer => {
                answerList.append(`<li class="answer">${answer}</li>`);
            });
            $("#answer-list li").click(function() {
                const clickedAnswer = $(this);
                const correctAnswer = currentQuestion.correctAnswer;
                correctAnswered = true;
                if (clickedAnswer.text() === correctAnswer) {
                    clickedAnswer.addClass("crossed-out"); 
                    alert("Correct! Click next to continue...");
                    $("#randomize-button").prop("disabled", false);
                    correctAnswered = false;
                } else {
                    clickedAnswer.addClass("crossed-out");
                    alert("Incorrect!");
                    correctAnswered = true;
                }
            });
            questionIndex++;
            } else {
                $("#question-text").text("No more questions.");
                $("#answer-list").empty();
            }
    }
    displayRandomQuestion();

    $(".randomize-button").click(displayRandomQuestion);
    $(".quiz-container").slideDown();
});

