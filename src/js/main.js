$(document).ready(function() {
    var quizData = [
        {
            question: "Who is the creator of JQuery?",
            answers:["Arnold Query",
                    "Jarin Besiz",
                    "Chapierre Quebali",
                    "John Resig"],
            correctAnswer: "John Resig",
            hint: `Also author of "Pro Javascript Techniques"`
        },
        {
            question: `Let's go back to the beggining of our class! When was first website created?`,
            answers:[ "July 18, 1998",
                        "September 12, 1958",
                        "January 12, 1989",
                        "March 12, 1989"],
            correctAnswer: "March 12, 1989",
            hint: `<a href="http://info.cern.ch/hypertext/WWW/TheProject.html">Click Me Please</a>
            `
        },
        {
            question: `how do we declare a variable in Javascript?`,
            answers: ["<variable>Object</variable>",
                        "$variable: Object;",
                        "var(--Object);",
                        "var variableName = {Object};"],
            correctAnswer: "var varialbleName = {Object};",
            hint: `Usually Javascript uses a key word like "var" to start up on declaring variables.`
        },
        {
            question: "how do we declare a variable in HTML?",
            answers:[ "$variable: Object;" ,
                        "<variable>Object</variable>",
                        "var(--Object);",
                        "None of the above."],
            correctAnswer: "None of the above.",
            hint: "We never learned how to, because variables are do not exist in HTML normally HTML elements are the virtual objects that are being placed inside of variables and serves as containers for them."
        },
        {
            question: "What are ::before and ::after pseudo-elements do in CSS?",
            answers: ["The ::before and ::after pseudo-elements selector allows you to select one or more elements based on their source order, according to a formula.",
            `The ::before and ::after pseudo-elements selects elements when the mouse cursor is current over them. It’s commonly associated with link (<a>) elements.`,
            "The ::before and ::after pseudo-elements matches an element with invalid contents. For example, an input element with type 'email' with a name entered.",
            "The ::before and ::after pseudo-elements in CSS allows you to insert content onto a page without it needing to be in the HTML."],
            correctAnswer: "The ::before and ::after pseudo-elements in CSS allows you to insert content onto a page without it needing to be in the HTML.",
            hint: "No hints for this one use GOOGLE! you might learn a thing or two about the wrong answers"
        },
        {
            question: "Who is the father of computers?",
            answers: ["Brittney Cergio",
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
        ]
});