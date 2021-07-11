var piecelist=[
  "http://localhost:8081/pieces/1-0-0.jpg",
  "http://localhost:8081/pieces/1-4-4.jpg",
  "http://localhost:8081/pieces/1-3-4.jpg",
  "http://localhost:8081/pieces/1-4-3.jpg",
  "http://localhost:8081/pieces/1-2-4.jpg",
  "http://localhost:8081/pieces/1-4-2.jpg",
  "http://localhost:8081/pieces/1-3-3.jpg",
  "http://localhost:8081/pieces/1-1-4.jpg",
  "http://localhost:8081/pieces/1-2-3.jpg",
  "http://localhost:8081/pieces/1-4-1.jpg",
  "http://localhost:8081/pieces/1-3-2.jpg",
  "http://localhost:8081/pieces/1-0-4.jpg",
  "http://localhost:8081/pieces/1-4-0.jpg",
  "http://localhost:8081/pieces/1-2-2.jpg",
  "http://localhost:8081/pieces/1-1-3.jpg",
  "http://localhost:8081/pieces/1-3-1.jpg",
  "http://localhost:8081/pieces/1-0-3.jpg",
  "http://localhost:8081/pieces/1-3-0.jpg",
  "http://localhost:8081/pieces/1-1-2.jpg",
  "http://localhost:8081/pieces/1-2-1.jpg",
  "http://localhost:8081/pieces/1-2-0.jpg",
  "http://localhost:8081/pieces/1-0-2.jpg",
  "http://localhost:8081/pieces/1-1-1.jpg",
  "http://localhost:8081/pieces/1-0-1.jpg",
  "http://localhost:8081/pieces/1-1-0.jpg"
]
var row = 0;
var s=""
for (var i = 0; i < piecelist.length; i+=5){
    s+=`<div class="col-1">
    <img class="img-piece" src="${piecelist[i]}" alt="">
    <img class="img-piece" src="${piecelist[i+1]}" alt="">
    <img class="img-piece" src="${piecelist[i+2]}" alt="">
    <img class="img-piece" src="${piecelist[i+3]}" alt="">
    <img class="img-piece" src="${piecelist[i+4]}" alt="">
    </div>`
}
document.getElementById("picture_frame").innerHTML = s;