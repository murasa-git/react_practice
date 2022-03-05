// DOM: Document Object Model
// W3Cが標準化を作っている 1~4

var timeDoc = document.getElementById("hoge");
timeDoc.textContent = "ほげ"

var main = document.getElementsByClassName("main");



var eventTest = document.getElementsByClassName("eventTest")


window.addEventListener('DOMContentLoaded', function() {
  document.getElementsByClassName("eventTest")[0].addEventListener("click",function(ev){
    window.alert("アラートだよ");
    console.log(ev);

  },false);
},false)



var img = document.getElementById("testimg");
for(var i=0;i<img.attributes.length;i++){
  console.log(img.attributes[i]);
}
window.addEventListener('DOMContentLoaded', function() {
  img.addEventListener("click",function(){
    console.log("img");
  },false);
},false)


window.addEventListener('DOMContentLoaded', function() {
  document.getElementById("addButton",addEventListener("click",function(){
    var elem = document.createElement("div");
    elem.class = "createdElement";
    document.getElementById("hoge").appendChild(elem);
    console.log("element created");
  },false));
},false)
