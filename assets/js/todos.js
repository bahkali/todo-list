//ceck off specific todos by clicking
$('ul').on("click", "li", function(){
//    //if li is gray 
//    if($(this).css("color") === "rgb(128, 128, 128)"){
//        //turn it black
//        $(this).css({
//            color: "black",
//            textDecoration: "none"
//            }); 
//    } else{
//        //else turn it gray
//           $(this).css({
//            color: "gray",
//            textDecoration: "line-through"
//            }); 
//    }
     
    $(this).toggleClass("completed");   
    
});

//click on X to delete todo
$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    //stop the buble affect
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    //13 is enter key
    if(event.which === 13){
      var todoText = $(this).val();
      $(this).val("");
      $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});