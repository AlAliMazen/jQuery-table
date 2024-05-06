
$(document).ready(function () {
    $("tr:odd").addClass("odd");
    $("tr:even").addClass("even");
    $("tr th").addClass("border-style");
    $("tr th:first").text("still learning");

    $("h2").mouseenter(function(){
        $("h2").addClass("title-hovered");
        $("h2").removeClass("title-unhovered");
    });
    $("h2").mouseleave(function(){
        $("h2").removeClass("title-hovered");
        $("h2").addClass("title-unhovered");
    })

    /**
     * events click, hover, mouseenter, mouseleave
     * effects: show,hide toggle, slidedown, slideUp fadeIn ..
     * how fast is the effect takes either time in miliseconds or
     * slow,medium and fast
     */

    $("button").click(function(){
        $("p").toggle(1000)
        
    })

    /**
     * Method chaining is when we call many functions after each other
     * 
     */

    $("p").click(function(){
        $("button").text("Chaining").css("border","solid 2px red");
    })

    /**
     * 
     * importance of using this keyword
     * 'this' is used to identify the element which should
     * take the effect of jQuery function
     */
    $("p").mouseenter(function(){
        $(this).addClass("make-green").removeClass("make-normal")
    }).mouseleave(function(){
        $(this).addClass("make-normal").removeClass("make-green")
    })

});

//events is the interaction between user and website
/**
 * we have to understand the following 3 crucial parts:
 *  - understanding events
 *  - understand effects of event
 *  - understand method chaining
 */
