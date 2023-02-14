player1Name = localStorage.getItem("player1Name");
player2Name = localStorage.getItem("player2Name");

Player1Score = 0;
Player2Score = 0;

document.getElementById("player1Name").innerHTML=player1Name + " : ";
document.getElementById("player2Name").innerHTML=player2Name + " : ";

document.getElementById("player1Score").innerHTML=Player1Score + " : ";
document.getElementById("player2Score").innerHTML=Player2Score + " : ";

document.getElementById("player_question").innerHTML= "Turno de pergunta -" + player1Name;
document.getElementById("player_aswer").innerHTML= "Turno de resposta -" + player2Name;

function send() {
var first_number = document.getElementById ("first_number").value;
var second_number = document.getElementById ("second_number").value;
var resposta_atual = parseInt(first_number) * parseInt (second_number);
console.log (resposta_atual);

question_number = "<h4>"+first_number + 'X'+ second_number+"</h4>";
    inputBox = "<br>Resposta : <input type='text'id='inputCheckBox'>";
    checkButton = "<br><br> <button class='btn btn-info' onlick='check()'> Checar </button> "
    row = question_number + inputBox + checkButton ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("first_number").value = "";
    document.getElementById("second_number").value = "";
}

questionTurn = "player1";
anwerTurn = "player2";

function check(){
    getAnswer = document.getElementById("inputCheckBox").value;
    if (getAnswer == resposta_atual)
    {
        if (anwerTurn == "player1"){
            Player1Score = Player1Score +998;
            document.getElementById("player1Score").innerHTML = Player1Score;
        }
        else{
            Player2Score = Player2Score +999;
            document.getElementById("player2Score").innerHTML = Player2Score;
        }
    }
    if (questionTurn == "player1"){
        questionTurn = "player2"
        document.getElementById("playerQuestion").innerHTML = "Turno de pergunta - " + player2Name ;
}
    else{
        questionTurn = "player1"
        document.getElementById("playerQuestion").innerHTML = "Turno de pergunta - " + player1Name ;
    }
    if (answerTurn == "player1"){
        answerTurn = "player2"
        document.getElementById("playerAnswer").innerHTML = "Turno de resposta - " + player2Name ;
}
    else{
        answerTurn = "player1"
        document.getElementById("playerAnswer").innerHTML = "Turno de resposta - " + player1Name ;
    }
    document.getElementById("output").innerHTML = "";
}