var lastClickedInZone = false
var lastClickedTeamRed = false

var redPoints = 8;
var bluePoints = 0;

var activeStack = []
var stacks = []

function updateCubeValue() {
    $("#stack .green.cube").each(function(index){
        $(this).children(".cube-point-val").text(`${(2 + $(this).index()) * (lastClickedInZone ? 2 : 1)} points`);
    });
    $("#stack .purple.cube").each(function(index){
        $(this).children(".cube-point-val").text(`${(1 + $(this).index()) * (lastClickedInZone ? 2 : 1)} points`);
    });
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
}

function addStack(stack) {
    stacks.push(stack);
    for (var i = 0; i < stack.length; i++) {
        if (lastClickedTeamRed) {
            if (stack[i] == "purple")
                redPoints += (1 + i) * (lastClickedInZone ? 2 : 1);
            else
                redPoints += (2 + i) * (lastClickedInZone ? 2 : 1);
        } else {
            if (stack[i] == "purple")
                bluePoints += (1 + i) * (lastClickedInZone ? 2 : 1);
            else
                bluePoints += (2 + i) * (lastClickedInZone ? 2 : 1);
        }
    }
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
    activeStack.push("purple")
})

$("#add-green-cube-btn").click(function(){
    $("#stack").append(`<div class="green cube"><img src="images/green_cube.png" height="30px"><p class="cube-point-val">${(2 + $("#stack .cube").length) * (lastClickedInZone ? 2 : 1)} points</p><p>Remove</p></div>`);
    activeStack.push("green")
})

$("#stack").on("click", "div", function(){
    this.remove();
    updateCubeValue()
    
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
    }

    
    addStack(activeStack);
    event.preventDefault();
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