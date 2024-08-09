$(".left-zone, .right-zone").click(function(e) {
    var clickX = (e.pageX - $("#field").offset().left) / $("#field").width();
    var clickY = (e.pageY - $("#field").offset().top) / $("#field").height();
    console.log(`translate(calc(100vh * 1.14110429 * ${clickX}), calc(100vh * ${clickY}))`);
    $("#stack-creator").css("transform", `translate(calc(100vh * 1.14110429 * ${clickX}), calc(100vh * ${clickY}))`);
    $("#stack-creator").removeClass("hidden");
});

$("#left-field, #right-field").click(function(e) {
    if (this != e.target || e.event == $(".spacer"))
        return;
    
    var clickX = (e.pageX - $("#field").offset().left) / $("#field").width();
    var clickY = (e.pageY - $("#field").offset().top) / $("#field").height();
    console.log(`translate(calc(100vh * 1.14110429 * ${clickX}), calc(100vh * ${clickY}))`);
    $("#stack-creator").css("transform", `translate(calc(100vh * 1.14110429 * ${clickX}), calc(100vh * ${clickY}))`);
    $("#stack-creator").removeClass("hidden");
})