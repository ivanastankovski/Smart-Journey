//check off/on specific list items by clicking:
//add event listener on existing element (when page loaded) - ul
$("ul").on("click", "li", function() {
    $(this).toggleClass("done");
});

//click on X to delete list item:
//add event listener on existing element (when page loaded) - ul
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(450, function() {
        $(this).remove();
    });
    //stop the event bubbling with stopPropagation()
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function() {
    if(event.which === 13) {
        var value = $(this).val();
        //clear the input:
        $(this).val("");
        $(this).siblings("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + value + "</li>");
    }
});

$(".fa-plus").on("click", function() {
    $(this).parent().siblings("input").fadeToggle();
});