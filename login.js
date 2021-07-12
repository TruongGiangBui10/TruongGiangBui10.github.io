var base="file:///home/truonggiang/projects/PRJ2ATTT/"
var selectedpieces = [];
function sendpassword1() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password1").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.status == 200) {
            var data = xhttp.response
            document.getElementById("layer3").innerHTML = "";
            for (var i = 0; i < data.length; i++) {
                var url = data[i];
                document.getElementById("layer2").innerHTML +=
                    `<div class="col_img">
                    <label class="image_label">
                        <input class="radio1" type="radio" name="picture" value="${url.split("/pictures/")[1]}">
                        <img class="img-piece" src="${url}" alt="">         
                    </label>
                </div>`
            }
        }
        else {
            var err = xhttp.response;
            if(err.length>0)
            alert(err[0]);
        }
    };
    xhttp.open("POST", "http://localhost:8081/api/login/layer1", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.responseType = "json";
    xhttp.send(JSON.stringify({ username: String(username), password: String(password) }));
    document.getElementById("layer2_box").style.display = "block";
    document.getElementById("submit1").disabled = true;
}
function sendpassword2() {
    var input = document.getElementsByName("picture");
    var selected;
    input.forEach(element => {
        if (element.checked) selected = element.value;
    });
    console.log(selected);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.status == 200) {
            var data = xhttp.response
            console.log(data);
            document.getElementById("layer3").innerHTML = "";
            for (var i = 0; i < data.length; i++) {
                var url = data[i];
                var id = url.split("/pieces/")[1].replace(".jpg", "");
                document.getElementById("layer3").innerHTML +=
                    `<div class="col_img" onclick=selectpiece(id) id="piece${id}">
                <label class="image_label">
                    <img class="img-piece" src=${url} alt="">   
                    <div class="piecenumber">
                        <div id="piecebox${id}" class="piecenumberbox">
                          
                        </div>
                    </div>      
                </label>
              </div>`
            }
        }
    };
    xhttp.open("POST", "http://localhost:8081/api/login/layer2", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ password: String(selected) }));
    xhttp.responseType = "json";
    document.getElementById("layer3_box").style.display = "block";
    document.getElementById("submit2").disabled = true;
}
function sendpassword3() {
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.status == 200) {
            window.location.href="/mess.html"
            var res=this.response
            if(res.length>0){
                var token=res[0];
                localStorage.setItem("Token",token);
            }
        } else {
            if(this.status==406)
            alert("wrong password")
        }
    };
    xhttp.open("POST", "http://localhost:8081/api/login/layer3", true);
    xhttp.setRequestHeader("Content-type", "application/json;charset=utf-8");
    xhttp.send(JSON.stringify(selectedpieces));
    xhttp.responseType = "json";
    document.getElementById("layer3_box").style.display = "block";
}
function selectpiece(id) {
    var name = id.split("piece")[1]
    if (selectedpieces.includes(name)) {
        selectedpieces.splice(selectedpieces.indexOf(name), 1);
        document.getElementById("piecebox" + name).style.display = "none";
    } else {
        selectedpieces.push(name)
        document.getElementById("piecebox" + name).style.display = "block";
    }
    reloadchain()
    console.log(selectedpieces);
}
function reloadchain() {
    selectedpieces.forEach(piece => {
        document.getElementById("piecebox" + piece).innerText = selectedpieces.indexOf(piece) + 1;
    })
}