function clickMe(){
  let customerName = $("#myInput").val().replace("script", "");
  $("#welcomeText").html("<p>Hey "+customerName+"</p><p>Welcome to XSS World</p>")
}
