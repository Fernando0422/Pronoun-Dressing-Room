$(document).ready(function(){
    
  var name = ""

 
  
  $("button").click(function (){
    name = $("#fname").val()
    pronoun = $("#pronoun").val()

    
    $(".teacher").text(`${name} is very strict. ${pronoun} won't let us turn in late work`);
    $(".shelia").text(`${name} made a funny joke. ${pronoun} didnt even try to make it funny`)
    $(".lucy").text(`When ${name} housesat for us, ${pronoun} watered the plants` )
     $(".kim").text(`${name} is a marathon runner. ${pronoun} ran for 2 years and qualified for the Boston Marathon`)
    
    
  
  })
  
  
})