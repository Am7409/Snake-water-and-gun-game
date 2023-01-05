const arr=["S","W","G"];
let game=true;
while(game){
  let choice= prompt("Enter the choice for : Snake as s, Water as w and Gun as g ");
choice= choice.toUpperCase();
  alert("Your chocice is : " + choice);
  let comp = Math.floor(Math.random() * 3);
  alert("The coputer;s chocie is : " + arr[comp]);
  
  if(choice == arr[comp]){
     alert("It's a Draw");
  }
  else {
    if ((choice == "S" && arr[comp] == "W") || (choice == "G" && arr[comp] == "S") || (choice == "W" && arr[comp] == "G")) {
      alert("You won the game.")
  }
  else {
      alert("Computer won the game.");

    }
}
  game = confirm("Do you want to play again!!");
}