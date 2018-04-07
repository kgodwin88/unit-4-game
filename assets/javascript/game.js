$(document).ready(function() {
     var wins = 0;
        var losses = 0;
    function rpg(){
        setTimeout(function(){alert("Choose a Character");}, 500);
        $("#darthVader").show();
        $("#darthMaul").show(); 
        $("#kyloRen").show();
        $("#rey").show();
        $("#yoda").show();
        $("#skywalker").show();
        $(".light").append($("#rey"), $("#yoda"), $("#skywalker"));
        $(".dark").append($("#darthVader"), $("#darthMaul"), $("#kyloRen"));
        healthDM = 120;
        healthDV = 150;
        healthKR = 100;
        healthRey = 100;
        healthYoda = 150;
        healthLS = 120;
       
        var darthMaul = {name: "darthMaul", health: healthDM, attack: 9, counter:11};
        var darthVader = {name: "darthVader", health: healthDV, attack:5, counter: 15};
        var kyloRen = {name: "kyloRen", health: healthKR, attack: 12, counter: 8};
        var rey = {name: "rey", health: healthRey, attack: 12, counter: 8};
        var yoda = {name: "yoda", health: healthYoda, attack: 5, counter: 15};
        var skywalker ={name: "skywalker", health: healthLS, attack: 9, counter: 11};
        var characterArray = [darthMaul, darthVader, kyloRen, rey, yoda, skywalker];
        $("#dmHealth").html(healthDM);
        $("#dvHealth").html(healthDV);
        $("#krHealth").html(healthKR);
        $("#reyHealth").html(healthRey);
        $("#yodaHealth").html(healthYoda);
        $("#lsHealth").html(healthLS);
        $("#wins").html(wins);
        $("#losses").html(losses);
        $(".images").on("click", function(){
            if($(".yourCharacter").children(".images").length == 0){
                for (var i = 0; i < characterArray.length; i ++){
                    if(this.id == characterArray[i].name){
                        character = characterArray[i];
                        attack = character.attack;
                    };
                };
                console.log(character);
                $(this).remove();
                $(".yourCharacter").append(this);
                if(this.id == "kyloRen" || this.id == "darthVader" || this.id == "darthMaul"){
                    alert("you chose the dark side");
                    $(".enimiesArea").append($("#rey"));
                    $(".enimiesArea").append($("#yoda"));
                    $(".enimiesArea").append($("#skywalker"));
                    
                }
                else{
                    alert("You have choose the light side");
                    $(".enimiesArea").append($("#darthVader"), $("#darthMaul"), $("#kyloRen"));
                };
            };
        
            $(".enimiesArea").children($(".images")).on("click", function (){
                
                if($(".defender").children(".images").length == 0){
                    for (var i = 0; i < characterArray.length; i ++){
                        if(this.id == characterArray[i].name){
                            defender = characterArray[i];
                            defenderAttack = defender.counter;
                        };
                    };
                
                    $(this).remove();
                    $(".defender").append(this);
                    defense = this;
                };
                });
            });
                $("#attack").on("click", function(){
                    if($(".defender").children(".images").length == 1 && $(".yourCharacter").children(".images").length == 1){
                        health();
                        console.log(character.health);
                        
                         if(character.health <= 0){
                            setTimeout(function(){loss();}, 500);
                        };
                        if($(".defender").children(".images").length == 0 && $(".enimiesArea").children(".images").length == 0){
                            setTimeout(function(){win();}, 500);
                        }
                        
                    };
                });
                        
                    
            
            };           

rpg();
        

function health(){
    character.health = (character.health - defenderAttack);
    if(character.name == "kyloRen"){
        $("#krHealth").html(character.health);
        if(character.health<= 0){
            $(".yourCharacter").children(".images").hide();
            $(".dark").append(("#kyloRen"));
        }
    }
    else if(character.name == "rey"){
        $("#reyHealth").html(character.health);
        if(character.health<= 0){
            $(".yourCharacter").children(".images").hide();
            $(".light").append($("#rey"));
        }
    }
    else if(character.name == "yoda"){
        $("#yodaHealth").html(character.health);
        if(character.health<= 0){
            $(".yourCharacter").children(".images").hide();
            $(".light").append($("#yoda"));
        }
    }
    else if(character.name == "skywalker"){
        $("lsHealth").html(character.health);
        if(character.health<= 0){
            $(".yourCharacter").children(".images").hide();
            $(".light").append($("#skywalker"));
        }
    }
    else if(character.name == "darthVader"){
        $("#dvHealth").html(character.health);
        if(character.health<= 0){
            $(".yourCharacter").children(".images").hide();
            $(".dark").append($("#darthVader"));
        }
    }
    else if(character.name == "darthMaul"){
        $("#dmHealth").html(character.health);
        if(character.health<= 0){
            $(".yourCharacter").children(".images").hide();
            $(".dark").append($("#darthMaul"));
        }
    };
    if(defender.name == "kyloRen"){
        $("#krHealth").html(healthKR);
        healthKR = (healthKR - character.attack);
        $("#krHealth").html(healthKR);
        if(healthKR <= 0){
            $(defense).hide();
            $(".dark").append(("#kyloRen"));
        };
    } 
    else if(defender.name == "rey"){
        $("#reyHealth").html(healthRey);
        healthRey = (healthRey - character.attack);
        $("#reyHealth").html(healthRey);
        if(healthRey <= 0){
            $(defense).hide();
            $(".light").append($("#rey"));
        };
        } 
    else if(defender.name == "skywalker"){
        $("#lsHealth").html(healthLS);
        healthLS = (healthLS - character.attack);
        $("#lsHealth").html(healthLS);
        if(healthLS <= 0){
            $(defense).hide();
            $(".light").append($("#skywalker"));
        };
    }
    else if(defender.name == "darthVader"){;
        $("#dvHealth").html(healthDV); 
        healthDV = (healthDV - character.attack);
        $("#dvHealth").html(healthDV);
        if(healthDV <= 0){
            $(defense).hide();
            $(".dark").append($("#darthVader"));
        };
    }
    else if(defender.name == "yoda"){
        $("#yodaHealth").html(healthYoda);
        healthYoda = (healthYoda - character.attack);
        $("#yodaHealth").html(healthYoda);
        if(healthYoda <= 0){
            
            $(defense).hide();
            $(".light").append($("#yoda"));
        };
    }
    else if(defender.name == "darthMaul"){
        $("#dmHealth").html(healthDM);
        healthDM = (healthDM - character.attack);
        $("#dmHealth").html(healthDM);
        if(healthDM <= 0){
            $(defense).hide();
            $(".dark").append($("#darthMaul"));
        };
    };
   
    character.attack = (character.attack + attack);
    };

function win(){
    alert("You Have Defeated Your Enemies");
    wins ++;
    $("#wins").html(wins);
    rpg();
};
function loss(){
    alert("Your Enimies Have Defeated You");
    losses ++;
    $("#losses").html(losses);
    rpg();
};
   $("#reset").on("click", function(){
       location.reload();
   });
});