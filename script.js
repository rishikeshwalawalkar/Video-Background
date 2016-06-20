// Code goes here
$(document).ready(function() {
  
  console.log("Hi!");
  
  $("#t1").keyup(function() {
    $("#t2").val($("#t1").val());
  })
  
  $("#b1").click(function() {
    $("#t1").css("background-color","yellow");
    
  });
  
  $("#b2").click(function() {
    var zipCode = $("#t1").val();
    $.ajax({
      url : "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=a30ebb5af6b78e566e1797db9855606e"
      
    }).then(function(data) {
      console.log(data.name);
      var forecast = "desc: " + data.weather[0].description;
      forecast += "<br/>humid: " + data.main.humidity;
      $("#info").html("<h2>" + forecast + "</h2>");
    })
    
  })
  
})