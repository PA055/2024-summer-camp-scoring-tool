var lastClickedInZone = false
var lastClickedTeamRed = false

var redPoints = 8;
var bluePoints = 0;

var activeStack = []
var stacks = []

function updateStackValue() {
    var stackVal = 0
    $("#stack .green.cube").each(function(index){
        stackVal += (2 + $(this).index()) * (lastClickedInZone ? 2 : 1)
    });
    $("#stack .purple.cube").each(function(index){
        stackVal += (1 + $(this).index()) * (lastClickedInZone ? 2 : 1)
    });
    $("#stack-point-value").text(`${stackVal} points`)
}

function clearStack() {
    $("#stack .cube").each(function(index){
        $(this).remove();
    });
    activeStack = [];
}

function updatePoints() {
    $("#red-points").text(`${redPoints} points`);
    $("#blue-points").text(`${bluePoints} points`);

    if (redPoints > bluePoints) {
        $("#blue").removeClass("won")
        $("#red").addClass("won")
    } else if (bluePoints > redPoints) {
        $("#blue").addClass("won")
        $("#red").removeClass("won")
    } else {
        $("#blue").removeClass("won")
        $("#red").removeClass("won")
    }
}

function addStack(stack) {
    stacks.push(stack);
    stackDiv = $("<div class=\"stack\"></div>")
    stackDiv.append("<p>Remove</p>")
    var points = 0
    for (var i = 0; i < stack.length; i++) {
        if (stack[i] == "purple") {
            points += (1 + i) * (lastClickedInZone ? 2 : 1);
            stackDiv.append("<img src=\"images/purple_cube.png\" height=\"40px\">");
        } else {
            points += (2 + i) * (lastClickedInZone ? 2 : 1);
            stackDiv.append("<img src=\"images/green_cube.png\" height=\"30px\">");
        }
    }
    
    if (lastClickedTeamRed) {
        stackDiv.addClass("team-red")
        redPoints += points
    } else {
        stackDiv.addClass("team-blue")
        bluePoints += points
    }

    if (lastClickedInZone)
        stackDiv.addClass("in-zone")
    
    stackDiv.attr("id", `stack-${stacks.length - 1}-${points}`)

    $("#all-stacks h1").after(stackDiv)
    updatePoints();
}

$(".right-zone").click(function(e) {
    clearStack();
    var clickX = (e.pageX - $("#field").offset().left) / $("#field").width();
    var clickY = (e.pageY - $("#field").offset().top) / $("#field").height();
    lastClickedInZone = true;
    lastClickedTeamRed = false;
    $("#stack-creator").css("transform", `translate(calc(100vh * 1.14110429 * ${clickX}), calc(100vh * ${clickY}))`);
    $("#stack-creator").removeClass("hidden");
});

$(".left-zone").click(function(e) {
    clearStack();
    var clickX = (e.pageX - $("#field").offset().left) / $("#field").width();
    var clickY = (e.pageY - $("#field").offset().top) / $("#field").height();
    lastClickedInZone = true;
    lastClickedTeamRed = true;
    $("#stack-creator").css("transform", `translate(calc(100vh * 1.14110429 * ${clickX}), calc(100vh * ${clickY}))`);
    $("#stack-creator").removeClass("hidden");
});

$("#right-field").click(function(e) {
    if (this != e.target || e.event == $(".spacer"))
        return;
    
    clearStack();
    var clickX = (e.pageX - $("#field").offset().left) / $("#field").width();
    var clickY = (e.pageY - $("#field").offset().top) / $("#field").height();
    lastClickedInZone = false;
    lastClickedTeamRed = false;
    $("#stack-creator").css("transform", `translate(calc(100vh * 1.14110429 * ${clickX}), calc(100vh * ${clickY}))`);
    $("#stack-creator").removeClass("hidden");
})

$("#left-field").click(function(e) {
    if (this != e.target || e.event == $(".spacer"))
        return;

    clearStack();
    var clickX = (e.pageX - $("#field").offset().left) / $("#field").width();
    var clickY = (e.pageY - $("#field").offset().top) / $("#field").height();
    lastClickedInZone = false;
    lastClickedTeamRed = true;
    $("#stack-creator").css("transform", `translate(calc(100vh * 1.14110429 * ${clickX}), calc(100vh * ${clickY}))`);
    $("#stack-creator").removeClass("hidden");
})


$("#add-purple-cube-btn").click(function(){
    $("#stack").append(`<div class="purple cube"><img src="images/purple_cube.png" height="40px"><p class="cube-point-val">${(1 + $("#stack .cube").length) * (lastClickedInZone ? 2 : 1)} points</p><p>Remove</p></div>`);
    activeStack.push("purple");
    updateStackValue();
})

$("#add-green-cube-btn").click(function(){
    $("#stack").append(`<div class="green cube"><img src="images/green_cube.png" height="30px"><p class="cube-point-val">${(2 + $("#stack .cube").length) * (lastClickedInZone ? 2 : 1)} points</p><p>Remove</p></div>`);
    activeStack.push("green");
    updateStackValue();
})

$("#stack").on("click", "div", function(){
    this.remove();
    $("#stack .green.cube").each(function(index){
        $(this).children(".cube-point-val").text(`${(2 + $(this).index()) * (lastClickedInZone ? 2 : 1)} points`);
    });
    $("#stack .purple.cube").each(function(index){
        $(this).children(".cube-point-val").text(`${(1 + $(this).index()) * (lastClickedInZone ? 2 : 1)} points`);
    });
    updateStackValue();
    
})

$("#cancel-btn").click(function(){
    $("#stack-creator").addClass("hidden");
    clearStack();
})

$("#done-btn").click(function(){
    addStack(activeStack);
    $("#stack-creator").addClass("hidden");
    clearStack();
})

$("#quick-stack").submit(function(event){
    event.preventDefault();
    activeStack = [];
    for (var i = 0; i < parseInt($("#num-cubes").val()); i++)
        activeStack.push($("#cube-color").val());
    
    if ($("#zone").val() == "blue-normal") {
        lastClickedInZone = false;
        lastClickedTeamRed = false;
    } else if ($("#zone").val() == "blue-zone") {
        lastClickedInZone = true;
        lastClickedTeamRed = false;
    } else if ($("#zone").val() == "red-normal") {
        lastClickedInZone = false;
        lastClickedTeamRed = true;
    } else if ($("#zone").val() == "red-zone") {
        lastClickedInZone = true;
        lastClickedTeamRed = true;
    } else {
        alert("something went wrong");
        return false;
    }
    
    addStack(activeStack);
})

$("#auton-bonus-team").change(function(){
    if (this.value == "blue") {
        bluePoints += 8;
        redPoints -= 8;
    }
    if (this.value == "red") {
        redPoints += 8;
        bluePoints -= 8;
    }
    updatePoints();
})

$("#all-stacks").on("click", ".stack", function(){
    var score = $(this).attr("id").split('-')[2]
    if ($(this).hasClass("team-blue")) {
        bluePoints -= score
    } else if ($(this).hasClass("team-red")) {
        redPoints -= score
    }
    updatePoints();
    this.remove();
})

$("#reset").submit(function(event){
    event.preventDefault();
    if ($("#auton-bonus-team").val() == "blue") {
        redPoints = 0;
        bluePoints = 8;
    } else if ($("#auton-bonus-team").val() == "red") {
        redPoints = 8;
        bluePoints = 0;
    }
    updatePoints();

    stacks = [];
    $("#all-stacks .stack").each(function(){
        $(this).remove();
    });

})

// this is the flag lol: pbcctf{ThI5_CH411an6e_!5_S0_bAD,_i_b37_YOu_ovER7hOU6HT_it_aNd_sPen7_1iKE_2_h0UR5_DOinG_TH!$}
