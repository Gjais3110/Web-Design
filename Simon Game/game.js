$(document).ready(function(){

    var randomNumber="",randomChosenColour="";
    var gamePattern = [],userClickedPattern=[],buttonColours = ["red","blue","green","yellow"];
    var len,level=-1,started=false;

    function nextSequence()
    {
        level++;

        randomNumber = Math.floor(Math.random()*4);

        randomChosenColour = buttonColours[randomNumber];

        gamePattern.push(randomChosenColour);

        $("#"+randomChosenColour).fadeOut(100).fadeIn(100);

        $("h1").text("Level "+ level);
    }

    function playSound(name)
    {

        var sound = new Audio(name);
        sound.play();

    }

    function animatePress(currentColor)
    {

        $(currentColor).addClass("pressed");
        setTimeout(function()
        {
            $(currentColor).removeClass("pressed");
        }
        ,100);

    }

    function checkAnswer(currentLevel)
    {
        if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
        {

            if(userClickedPattern.length===gamePattern.length)
            {
                userClickedPattern=[];
                setTimeout(function()
                {
                    nextSequence();
                }
                ,1000);
            }
        }
            
        else
        {
            playSound("./sounds/wrong.mp3");
            $("body").addClass("game-over");
            setTimeout(function()
            {
                $("body").removeClass("game-over");
            }
            ,200);
            $("h1").text("Game Over, Press \'A\' Key to Restart");
            started = false;
        }
    }

    function startOver()
    {
        randomNumber="";
        randomChosenColour="";
        gamePattern = [];
        userClickedPattern=[];
        len=0;
        level=-1;
    }

    $(document).on("keypress",function(event)
    {

        if((event.key==="a")&&(level==-1))
        {
            started = true;
            nextSequence();
        }

        if(started==false)
        {
            startOver();
        }
            
    });

    $(".btn").on("click",function handler()
    {
        let userChosenColor = $(this).attr("id");

        userClickedPattern.push(userChosenColor);

        animatePress("#"+userChosenColor);

        if(this.id===randomChosenColour)
            playSound("./sounds/" + randomChosenColour + ".mp3");
        else
            playSound("./sounds/wrong.mp3");

        

        len = userClickedPattern.length;

        checkAnswer(len-1);

    });
    
});