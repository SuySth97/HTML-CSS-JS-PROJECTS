let textbox= document.getElementById("textbox");

textbox.addEventListener("input", function(){
  var text = this.value;
  let char = text.length;
  document.getElementById("char").innerHTML = char;

  text = text.trim();
  let words = text.split(" ");
  let cleanList = words.filter(function(elm){
    return elm != "";
  });
  let clnlist = cleanList.length;
  document.getElementById("word").innerHTML = clnlist;
});