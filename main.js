$().ready(function(){
  
  $("button").click(function(){
    
    if ($("button").text() == "\u2630"){
      $("button").text("X");
    } else{
      $("button").text("\u2630");
    }
    
    $("li").toggle("slow"');
  });      
});
