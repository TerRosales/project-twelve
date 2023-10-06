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
            question: `Let's go back to the beggining of our class! When was first website created?`,
            answer:[ "July 18, 1998",
                        "September 12, 1958",
                        "January 12, 1989",
                        "March 12, 1989"],
            correctAnswer: "March 12, 1989",
            hint: `<a href="http://info.cern.ch/hypertext/WWW/TheProject.html">Click Me Please</a>
            `
        },
        {
            question: `how do we declare a variable in Javascript?`,
            answer: ["<variable>Object</variable>",
                        "$variable: Object;",
                        "var(--Object);",
                        "var variableName = {Object};"],
            correctAnswer: "var varialbleName = {Object};",
            hint: `Usually Javascript uses a key word like "var" to start up on declaring variables.`
        },
        {
            question: "how do we declare a variable in HTML?",
            answer:[ "$variable: Object;" ,
                        "<variable>Object</variable>",
                        "var(--Object);",
                        "None of the above."],
            correctAnswer: "None of the above.",
            hint: "We never learned how to, because variables are do not exist in HTML normally HTML elements are the virtual objects that are being placed inside of variables and serves as containers for them."
        },
        {
            question: "What are ::before and ::after pseudo-elements do in CSS?",
            answer: ["The ::before and ::after pseudo-elements selector allows you to select one or more elements based on their source order, according to a formula.",
            `The ::before and ::after pseudo-elements selects elements when the mouse cursor is current over them. It’s commonly associated with link (<a>) elements.`,
            "The ::before and ::after pseudo-elements matches an element with invalid contents. For example, an input element with type 'email' with a name entered.",
            "The ::before and ::after pseudo-elements in CSS allows you to insert content onto a page without it needing to be in the HTML."],
            correctAnswer: "The ::before and ::after pseudo-elements in CSS allows you to insert content onto a page without it needing to be in the HTML.",
            hint: "No hints for this one but you can use GOOGLE! you might learn a thing or two about the wrong answers"
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
            question: "What is CSS used for",
            answers: ["Adding functionalities for websites",
                    "Assigning mark up structure for our websites",
                    "Creating sitemaps and wireframes for our websites",
                    "Managing style properties for our websites"],
            correctAnswer: "Managing style properties for our websites",
            hint: `CSS stands for "Cascading Style Sheets".`
        },
        {
            question: "What does HTML stand for?",
            answers:[ "Hot Tamales",
                        "Hyper Transfer Mechanical Language",
                        "Human Text Mark-up Telecommunations",
                        "Hyper Text Mark-up Language"],
            correctAnswer: "Hyper Text Mark-up Language",
            hint: "Its Definately, Not Hot Tamales"
        },
        {
            question: "How long of a time period did it take Brendan Eich to create Javascript?",
            answers: ["2 months",
                    "24 days",
                    "1 year and 4 days",
                    "10 days"],
            correctAnswer: "10 days",
            hint: `No much of a hint I can hint out, but google should be able to point it out.`
        },
        {
            question: "What Does CMS Stand For?",
            answers:  ["Crafted Mechahical Site",
                        "Content Messaging Service",
                        "Commercial Marketing System",
                        "Content Management System"],
            correctAnswer: "Content Management System",
            hint: "We learned how to use one of these tools(WordPress)."
        },
        {
            question: "In CSS what does the padding property target?",
            answers: ["It targets the border size of the content within the element.",
                    "It targets the space outside of the element that no other elements can enter.",
                    "It allows us to move our elements on its Y-axis",
                    "It allows us to target the space within the element"],
            correctAnswer: "It allows us to target the space within the element",
            hint: "Also squeezes our content making them adapt a smaller size when this property exceeds the content's size threshold"
        },
        ]; 


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};
function displayRandomQuestion() {
    // Shuffle the questions array
    shuffleArray(questions);

    // Get a random question from the shuffled array
    const randomQuestion = questions[0];

    // Display the question and answers in the HTML using jQuery
    $(".question-text").text(randomQuestion.question);

    const answersList = $(".answers-list");
    const answers = [randomQuestion.answers, ...questions.slice(1, 4).map(q => q.answer)];
    shuffleArray(answers);

    // Clear the previous answers
    answersList.empty();

        randomQuestion.answers = [randomQuestion.answer, ...questions.slice(1, 4).map(q => q.answer)];
        shuffleArray(randomQuestion.answers);

        $.each(randomQuestion.answers, function(index, answer) {
            const li = $("<li>").text(answer);
            answersList.append(li);

            // Add a click event handler for each answer
            li.click(function() {
                // Check if the selected answer is correct
                const selectedAnswer = answer;
                if (selectedAnswer === randomQuestion.correctAnswer) {
                    alert("Correct!"); // You can replace this with your desired feedback mechanism
                } else {
                    alert("Incorrect!"); // You can replace this with your desired feedback mechanism
                }

                // Display a new random question after the user selects an answer
                displayRandomQuestion();
});

displayRandomQuestion();

// Add a click event handler for the randomize button
$(".randomize-button").click(function() {
    displayRandomQuestion();
});

});