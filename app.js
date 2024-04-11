function welcomingPrompt() {
     let name = prompt("Please, Enter your name")
     let gender = prompt("Please, Enter your gender(Male/Female)")
     let age = prompt("Please, Enter your age")
     if (age <= 0) {
          alert("The age is less than or equal to zero.")
     }
     let confirmation = confirm("Do you want to skip welcoming message.")
     if (confirmation) {
          return
     } else {
          switch (confirmation == false) {
               case gender.toLowerCase() == "male":
                    alert(`Welcome Mr ${name}`);
                    break;
               case gender.toLowerCase() == "female":
                    alert(`Welcome Ms ${name}`);
                    break;
               default:
                    alert(`Welcom ${name}`)
                    console.log(gender)
          }

     }
}

setTimeout(() => {
     questions()
}, 1500)
function questions() {
     let user_questions = [];
     user_questions[0] = prompt("Do you like to contact us ?");
     user_questions[1] = prompt("Do you like the design of the page ?");
     user_questions[2] = prompt("Do you like the programming ?");

     for (let i = 0; i < user_questions.length; i++) {
          if (user_questions[i] === (null)) {
               user_questions[i] = "invalid"
          }
          if (user_questions[i] === ("")) {
               user_questions[i] = "invalid"

          }
          
     }
     return console.log(user_questions)
}


