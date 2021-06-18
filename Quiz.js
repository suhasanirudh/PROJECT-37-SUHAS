class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide ();

    //write code to change the background color here
    background ("light blue");

    //write code to show a heading for showing the result of Quiz
    textSize (30);
    background("lightblue");
    textSize(30);
    fill("brown");
    text("Result of the quiz",340,50);
    text("..............................",320,60);
   
    //call getContestantInfo( ) here
    contestant.getPlayerInfo();
    if(allContestants !== undefined) {
      fill ("blue");
      textSize (20);
      text ("NOTE: Contestants who answered correctly will be highlighted in GREEN colour")
    }




    //write code to highlight contest who answered correctly
    for (var plr in allContestants) {
      var correctAns = "2"
      if (correctAns === allContestants[plr].answer)
      fill ("green") 
      else 
      fill ("red") 
    }
  }

}
