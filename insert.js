var insert = require("./server/database")

var insertSql = "INSERT INTO student (student_id, name) VALUES ?"
var students = [['13phde', 'Phedre Dulaney']]

var sqlAlt = "INSERT INTO alternative (alt_id, alt_body, is_correct) VALUES ?"
var alt = [
    ["a001", "Insinuation", true], ["a002", "Continuation", false], ["a003", "Proximity", false], ["a004", "Similarity", false], 
    ["a005", "5-10 % among men, less than 1% among women", true], ["a006", "5-10 % among women, less than 1 % among men", false], ["a007", "Around 5 % for both men and women", false], ["a008", "It varies - 15-20 % among men in US/EU, but only around 5 % in Asia. About a third of that for women. ", false], 
    ["a009", "Web Content Accessibility Guidelines", true], ["a0010", "World Community Aquiline Guidelines", false], ["a011", "Web Community for Administrators and Gurus", false], ["a012", "Web Content Assessment Group  ", false], 
    ["a013", "Robust", true], ["a0014", "Perceivable", false], ["a015", "Operable", false], ["a016", "Understandable", false], 
    ["a017", "A set of psychological theories on how the brain processes perceptual input.", true], ["a0018", "Not laws per se, but rather a set of designing principles formulated and often followed by the community.", false], ["a019", "A set of EU laws that regulate digital information exchange.", false], ["a020", "A set of priciples that were used in art during the renaissanece, and is still useful in interaction design.", false], 
    ["a021", "Perceivable", true], ["a0022", "Robust", false], 
    ["a029", "Scalable Vector Graphics", true], ["a0030", "Standard Viscosity Gander", false], ["a031", "Simple Vector Graphics", false], ["a032", "Standard Vector Graphics", false]]

var sqlIsFor = "INSERT INTO isfor (alt_id, question_id) VALUES ?"
var isFor = [["a001", "q001"], ["a002", "q001"], ["a003", "q001"], ["a004", "q001"], 
["a005", "q002"], ["a006", "q002"], ["a007", "q002"], ["a008", "q002"], 
["a009", "q003"], ["a0010", "q003"], ["a011", "q003"], ["a012", "q003"], 
["a013", "q004"], ["a0014", "q004"], ["a015", "q004"], ["a016", "q004"], 
["a017", "q005"], ["a0018", "q005"], ["a019", "q005"], ["a020", "q005"], 
["a021", "q006"], ["a0022", "q006"], ["a015", "q006"], ["a016", "q006"], 
["a021", "q007"], ["a0022", "q007"], ["a015", "q007"], ["a016", "q007"], 
["a029", "q008"], ["a0030", "q008"], ["a031", "008"], ["a032", "q008"]]

var sqlquestion = "INSERT INTO question (question_id, question_body, course, subject) VALUES ?"
var question = [
    ["q001", "Which of these is not a Gestalt law?", "grägrä01", "Gestalt psychology"], 
["q002", "When making websites, one should take into consideration people with disabilities. One of the most common is colour blindness. Roughly how common is it?", "grägrä01", "Accessibility"], 
["q003", "What is the abbreviation WCAG?", "grägrä01", "Accessibility"], 
["q004", "'Maximize compatibility with current and future user agents' is part of the WCAG 2.1. Which principle does it belong to?", "grägrä01", "Accessibility"], 
["q005", "What are the Gestalt laws?", "grägrä01", "Gestalt psychology"], 
["q006", "What WCAG category does the following belong to: 'All non-text content that is presented to the user has a text alternative that serves the equivalent purpose'", "grägrä01", "Accessibility"], 
["q007", "The default human language of each Web page can be programmatically determined' is part of the WCAG. Which principle does it belong to?", "grägrä01", "Accessibility"], 
["q008", "In graphics, What does the abbreviation SVG mean?", "grägrä01", "graphics"]]


var sqlBelongs = "INSERT INTO belongs_to (question_id, test_id) VALUES ?"
var belongs = [["q001", "t001"], ["q003", "t001"], ["q004", "t001"], ["q008", "t001"], 
["q002", "t002"], ["q005", "t002"], ["q007", "t002"], ["q008", "t002"], 
["q001", "t003"], ["q002", "t003"], ["q005", "t003"], ["q004", "t003"]]

var sqlResult = "INSERT INTO result (question_id, student_id, date, score) VALUES ?"
var result = [
    //Test 1
    ["q001", "13shco", "1537488000", 1], ["q003", "13shco", "1537488000", 0], ["q004", "13shco", "1537488000", 0], ["q008", "13shco", "1537488000", 1], 
    ["q001", "13wiro", "1537488000", 0], ["q003", "13wiro", "1537488000", 1], ["q004", "13wiro", "1537488000", 1], ["q008", "13wiro", "1537488000", 1], 
    ["q001", "13phde", "1537574400", 1], ["q003", "13phde", "1537574400", 1], ["q004", "13phde", "1537574400", 1], ["q008", "13phde", "1537574400", 1],
    //Test 2
    ["q002", "13shco", "1537574400", 0], ["q005", "13shco", "1537574400", 1], ["q007", "13shco", "1537574400", 0], ["q008", "13shco", "1537574400", 0], 
    ["q002", "13wiro", "1537574400", 1], ["q005", "13wiro", "1537574400", 1], ["q007", "13wiro", "1537574400", 0], ["q008", "13wiro", "1537574400", 1], 
    //Test 3
    ["q001", "13shco", "1540166400", 1], ["q002", "13shco", "1540166400", 0], ["q005", "13shco", "1540166400", 0], ["q004", "13shco", "1540166400", 1], 
    ["q001", "13wiro", "1540166400", 1], ["q002", "13wiro", "1540166400", 1], ["q005", "13wiro", "1540166400", 1], ["q004", "13wiro", "1540166400", 1], 
    ["q001", "13phde", "1540252800", 1], ["q002", "13phde", "1540252800", 1], ["q005", "13phde", "1540252800", 1], ["q004", "13phde", "1540252800", 1]
]

var sqlTakes = "INSERT INTO takes (student_id, test_id, date) VALUES ?"
var takes = [["13shco", "t001", "1537488000"], ["13shco", "t002", "1537574400"], ["13shco", "t003", "1540166400"], 
["13wiro", "t001", "1537488000"], ["13wiro", "t002", "1537574400"], ["13wiro", "t003", "1540166400"], 
["13phde", "t001", "1537574400"], ["13phde", "t003", "1540252800"]]

var sqlTest = "INSERT INTO test (test_id, test_name) VALUES ?"
var test = [["t001", "ID Quiz 1, Te17A"], ["t001", "ID Quiz 1, Te17B"], ["t002", "ID Quiz 2, Te17A"], ["t002", "ID Quiz 2, Te17B"], ["t003", "ID Quiz 3, Te17A"]]

insert.insert(sqlBelongs, belongs);