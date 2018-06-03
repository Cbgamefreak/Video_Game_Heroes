// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//var snakepower = ((Math.floor(Math.random() * (350 - 150 + 1)) + 150));
//var snakeDefense = ((Math.floor(Math.random() * (350 - 150 + 1)) + 150));
var masterChief = {
      name: "Master Chief",
      image:"assets/images/masterChief.png",
      powerLevel: 200,
      defenseLevel:200,
      health: 200, 
      heroID: "master-chief-text",
      imageID: "master-chief-image",
      info: function() {return "Name: " + this.name + " Powerlevel: " + this.powerLevel + ", Defenselevel: " + this.defenseLevel + ", Health: " + this.health;}
      //get info() {return this.name + " Powerlevel: " + this.powerLevel + ", Defenselevel: " + this.defenseLevel + ", Health: " + this.health;}
}
var kratos = {
      name: "Kratos",
      image:"assets/images/kratos.png",
      powerLevel: 320,
      defenseLevel:150,
      health: 140,
      heroID: "kratos-text",
      imageID: "kratos-image",
      info: function() {return "Name: " + this.name + " Powerlevel: " + this.powerLevel + ", Defenselevel: " + this.defenseLevel + ", Health: " + this.health}
}; 
var link = {
      name: "Link",
      image:"assets/images/link.png",
      powerLevel: 160,
      defenseLevel: 270,
      health: 300, 
      heroID: "link-text",
      imageID: "link-image",
      info: function() {return "Name: " + this.name + " Powerlevel: " + this.powerLevel + ", Defenselevel: " + this.defenseLevel + ", Health: " + this.health}
}

  var solidSnake = {
        name: "Solid Snake",
      image:"assets/images/solid_snake.png",
      powerLevel: 100,
      defenseLevel: 400,
      health: 200, 
      heroID: "solid-snake-text",
      imageID: "solid-snake-image",
      info: function() {return "Name: " + this.name + " Powerlevel: " + this.powerLevel + ", Defenselevel: " + this.defenseLevel + ", Health: " + this.health}
}
var bowser = {
      name: "Bowser",
      image:"assets/images/bowser.png",
      powerLevel: 190,
      defenseLevel: 200,
      health: 200, 
      villianID: "bowser-text",
      imageID: "bowser-image",
      info: function() {return "Name: " + this.name + " Powerlevel: " + this.powerLevel + ", Defenselevel: " + this.defenseLevel + ", Health: " + this.health}
       //get info() {return this.name + " Powerlevel: " + this.powerLevel + ", Defenselevel: " + this.defenseLevel + ", Health: " + this.health;}
}
var generalGrievous = {
      name: "General Grievous",
      image:"assets/images/general_grievous.png",
      powerLevel: 250,
      defenseLevel: 145,
      health: 250, 
      villianID: "general-grievous-text",
      imageID: "general-grievous-image",
      info: function() {return "Name: " + this.name + " Powerlevel: " + this.powerLevel + ", Defenselevel: " + this.defenseLevel + ", Health: " + this.health}
       //get info() {return this.name + " Powerlevel: " + this.powerLevel + ", Defenselevel: " + this.defenseLevel + ", Health: " + this.health;}
}
var glados = {
      name: "GlaD0S",
      image:"assets/images/glados.png",
      powerLevel: 350,
      defenseLevel: 100,
      health: 150, 
      villianID: "glados-text",
      imageID: "glados-image",
      info: function() {return "Name: " + this.name + " Powerlevel: " + this.powerLevel + ", Defenselevel: " + this.defenseLevel + ", Health: " + this.health}
       //get info() {return this.name + " Powerlevel: " + this.powerLevel + ", Defenselevel: " + this.defenseLevel + ", Health: " + this.health;}
}

var ganon = {
  name: "Ganon",
  image:"assets/images/ganon.png",
  powerLevel: 250,
  defenseLevel: 200,
  health: 300, 
  villianID: "gannon-text",
  imageID: "gannon-image",
  info: function() {return this.name + " Powerlevel: " + this.powerLevel + ", Defenselevel: " + this.defenseLevel + ", Health: " + this.health}
   //get info() {return this.name + " Powerlevel: " + this.powerLevel + ", Defenselevel: " + this.defenseLevel + ", Health: " + this.health;}
}

var heroArr = [masterChief, kratos, link, solidSnake];
var villianArr = [bowser, generalGrievous, glados, ganon];
var heroDiv = $(".hero-div");
var battleDiv = $(".battle-zone");
var villianDiv = $(".villian-div");
var heroBattleDiv = $(".hero-battle-zone");
var villianBattleDiv = $(".villian-battle-zone");
var fightButton = $(".fight-button");
var attackButton = $(".attack-button");
var battleText = $(".battle-text");
var heroHealthDiv = $(".hero-health");
var villianHealthDiv = $(".villian-health");
var middle = $(".middle");
var audioSword = new Audio("assets/images/unsheath-sword.wav");
var finalBattleAudio = new Audio("assets/images/Final_battle.wav");
var gameOverAudio = new Audio ("assets/images/game_over.wav");
var victoryAudio = new Audio ("assets/images/victory_sound.wav");
var finalBattle = 0;
function heroCreation(hero){
 var heroImage = $("<img>");
 var heroText = $("<a>");
 heroText.addClass("hero-text");
 heroImage.attr("src", hero.image);
 heroText.attr("id", hero.heroID);
 heroImage.attr("id", hero.imageID);
 heroText.attr("title", hero.info());
 heroImage.addClass("hero-images");
 heroDiv.append(heroText);
 heroText.append(heroImage);
}
console.log("heroArr " + villianArr.length);
heroCreation(masterChief)
heroCreation(kratos)
heroCreation(link)
heroCreation(solidSnake)


function villianCreation(villian){
 var villianImage = $("<img>");
 var villianText = $("<a>");
 villianText.addClass("villian-text");
 villianImage.attr("src", villian.image);
 villianText.attr("id", villian.villianID);
 villianImage.attr("id", villian.imageID);
 villianText.attr("title", villian.info());
 villianImage.addClass("villian-images");
 villianDiv.append(villianText);
 villianText.append(villianImage);
}

villianCreation(bowser)
villianCreation(generalGrievous)
villianCreation(glados)
console.log("villianArr " + villianArr.length);
heroDiv.on("click", ".hero-text", "hero-images", function() {
 for (var i = 0; i < heroArr.length; i++) {
     if (heroArr[i].heroID==($(this).attr("id")) && heroArr[i].health > 0 && ganon.health > 0){
         console.log(heroArr[i]);
         var heroBattleImage = $("<img>");
         var healthText = $("<a>");
         heroBattleImage.attr("src", heroArr[i].image);
         heroBattleImage.attr("data-heropower",heroArr[i].powerLevel);
         heroBattleImage.attr("data-herodefense",heroArr[i].defenseLevel);
         heroBattleImage.attr("data-herohealth",heroArr[i].health);
         heroBattleImage.attr("data-heroname",heroArr[i].name);
         heroBattleImage.attr("id", "hero-battle-image");
         heroHealthDiv.html("Health: " + heroArr[i].health);
         heroBattleDiv.html(heroBattleImage);
         audioSword.play(); 
          if ($(villianBattleDiv).is(':empty')) {
             middle.html(heroArr[i].name + " VS " )
         }
         else{
          middle.html(heroArr[i].name + " VS " + $("#villian-battle-image").attr("data-villianname"))
         }
     }
  }
});

villianDiv.on("click", ".villian-text", "villian-images", function() {
 for (var i = 0; i < villianArr.length; i++) {
     if (villianArr[i].villianID==($(this).attr("id")) && villianArr[i].health > 0){
         console.log(villianArr[i]);
         var villianBattleImage = $("<img>");
         villianBattleImage.attr("src", villianArr[i].image);
         villianBattleImage.attr("data-villianpower",villianArr[i].powerLevel);
         villianBattleImage.attr("data-villiandefense",villianArr[i].defenseLevel);
         villianBattleImage.attr("data-villianhealth",villianArr[i].health);
         villianBattleImage.attr("data-villianname",villianArr[i].name);
         villianBattleImage.attr("id", "villian-battle-image");
         villianHealthDiv.html("Health: " + villianArr[i].health);
         villianBattleDiv.html(villianBattleImage);
         audioSword.play(); 
         if ($(heroBattleDiv).is(':empty')) {
             middle.html(" VS " + villianArr[i].name)
         }
         else{
          middle.html($("#hero-battle-image").attr("data-heroname") + " VS " + villianArr[i].name)
         }
     }
  }
});

var stopIt = 0

$(fightButton).on("click", function() {

if ($(heroBattleDiv).is(':empty') || $(villianBattleDiv).is(':empty')){
  console.log("you're missing a hero");
  stopIt++;
  if(stopIt > 10){
      alert("Stop clicking the button! You haven't picked your characters -_-")
  }
}
else{
  $(".attack-button").css({"visibility": "visible"});
  battleText.html("Todays battle is " + $("#hero-battle-image").attr("data-heroname") + " verses " + $("#villian-battle-image").attr("data-villianname"));


}
});



var maxRoll = 80;
var minRoll = 20;

$(attackButton).on("click", function() {
 var hit = ((Math.floor(Math.random() * (maxRoll - minRoll + 1)) + minRoll));

var heroHit = Math.round(parseInt($("#hero-battle-image").attr("data-heropower")) * hit);

var villianHit = Math.round(parseInt($("#villian-battle-image").attr("data-villianpower")) * hit);

var heroDamage = Math.round(heroHit/(parseInt($("#villian-battle-image").attr("data-villiandefense"))))

var villianDamage = Math.round(villianHit/(parseInt($("#hero-battle-image").attr("data-herodefense"))))

battleText.html("Ooh, " + $("#hero-battle-image").attr("data-heroname") + " hit " + $("#villian-battle-image").attr("data-villianname") + " for " + heroDamage + " damage, but was hit back and took " + villianDamage + " damage");


for (var i = 0; i < villianArr.length; i++) {
  if (villianArr[i].name==($("#villian-battle-image").attr("data-villianname"))){
      console.log(villianArr[i]);
villianArr[i].health = villianArr[i].health - heroDamage;
villianHealthDiv.html("health: " + villianArr[i].health);
if (villianArr[i].health < 1){
  villianHealthDiv.html("Health: " + 0)
}

setTimeout(checkDeath, 500, villianArr[i], villianBattleDiv, villianHealthDiv);
  }
  
}
for (var i = 0; i < heroArr.length; i++) {
  if (heroArr[i].name==($("#hero-battle-image").attr("data-heroname"))){
heroArr[i].health = heroArr[i].health - villianDamage;
heroHealthDiv.html("health: " + heroArr[i].health);
if (heroArr[i].health < 1){
  heroHealthDiv.html("Health: " + 0)
}
setTimeout(checkDeath, 500, heroArr[i], heroBattleDiv, heroHealthDiv);

  }
  
}

});
var deaths = 1;
var victories = 1;
function checkDeath(hero, imageDiv, healthDiv){
    console.log(hero);
if (hero.health < 1){
  healthDiv.html("");
  imageDiv.html("");
  $(".attack-button").css({"visibility": "hidden"});
  if (villianArr.includes(hero) == true){
      battleText.html("Congrats!");
      console.log(hero.imageID);
      $("#"+hero.imageID).attr("src", "assets/images/red_x.png");
      $("#"+hero.villianID).attr("title", hero.name + " has been defeated");
      victories++;
      checkWinCondition();

  }
  if(heroArr.includes(hero) == true){
 
      battleText.html("Your hero was defeated, pick a new hero to battle with");
      console.log(hero.imageID);
      $("#"+hero.imageID).attr("src", "assets/images/red_x.png");
      $("#"+hero.heroID).attr("title", hero.name + " has been defeated");
      deaths++;
      checkLossCondition();
      
  }
}

}

var count = 1;
function checkLossCondition(){
  console.log("deaths " + deaths);
if (masterChief.health < 1 && kratos.health < 1 && solidSnake.health < 1 && link.health < 1 ){
  battleText.html("All of your heroes have been defeated, you lose");
  finalBattleAudio.pause();
  gameOverAudio.play();

}
}
function checkWinCondition(){
  console.log( "victores " +victories);

 if (glados.health < 1 && generalGrievous.health < 1 && bowser.health < 1){
  finalBattleAudio.play();
  var finalBattleImage = $("<img>");
  finalBattleAudio.onended = function() {
    if(count <= 3){
      count++;
      finalBattleAudio.play();
   }
};
  if (finalBattle == 0){
  $(".attack-button").css({"visibility": "hidden"});
  battleText.html("Time for the Final Battle");
  console.log("battle")
  finalBattleImage.attr("src", ganon.image);
  finalBattleImage.attr("data-villianpower",ganon.powerLevel);
  finalBattleImage.attr("data-villiandefense",ganon.defenseLevel);
  finalBattleImage.attr("data-villianhealth",ganon.health);
  finalBattleImage.attr("data-villianname",ganon.name);
  finalBattleImage.attr("id", "villian-battle-image");
  villianHealthDiv.html("health: " + ganon.health);
  villianBattleDiv.html(finalBattleImage);
  finalBattle = 1;
  if ($(heroBattleDiv).is(':empty')) {
    middle.html(" VS " + ganon.name)
}
else{
 middle.html($("#hero-battle-image").attr("data-heroname") + " VS " + ganon.name)
}
  

}
console.log(finalBattle);
   if (finalBattle === 1){
    if(ganon.health < 1 && (masterChief.health > 1 || kratos.health > 1 || solidSnake.health > 1 || link.health > 1 )) {
      finalBattleAudio.pause();
      victoryAudio.play();
      villianHealthDiv.html("");
      var finalBattleImage = $("<img>");
      finalBattleImage.attr("id", "villian-battle-image");
      finalBattleImage.attr("src", "assets/images/red_x.png");
      villianBattleDiv.html(finalBattleImage);
      battleText.html("Congrats, You are Victorious!!!!!");

    }
    


}
}

}


