




  
function welcomingPrompt() {
     let name = prompt("Please, Enter your name")
     let gender = prompt("Please, Enter your gender(Male/Female)")
     let age = prompt("Please, Enter your age")
     if (age <= 0 ){
          alert("The age is less than or equal to zero.")
     } 
     let confirmation = confirm("Do you want to skip welcoming message.") 
     if (confirmation){
          return
     }else{
          switch(confirmation == false){
               case gender.toLowerCase()=="male":
                    alert(`Welcome Mr ${name}` );
                    break;
               case gender.toLowerCase() == "female":
                    alert(`Welcome Ms ${name}` );
                    break;
               case gender.toLowerCase() !== "male" || "female":
                    alert(`Welcom ${name}`)
          console.log(gender)
          }

     }
}

setTimeout(()=> {
     welcomingPrompt()
},1500)