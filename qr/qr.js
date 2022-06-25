var t = false;
var u = false;
var c = false;
var w = false;
var data = "";

function text(){
    t = true;
    u = false;
    c = false;
    w = false;
    document.getElementById("inn").innerHTML = `<textarea placeholder="Enter Your Text..." id="qrtext"></textarea>`;
}


function url(){
    t = false;
    u = true;
    c = false;
    w = false;
    document.getElementById("inn").innerHTML = `<textarea placeholder="Enter Your Website..." id="qrurl"></textarea>`;
}


function card(){
    t = false;
    u = false;
    c = true;
    w = false;
    document.getElementById("inn").innerHTML = ` <div class="max1">
        <div class="mini">
            Name : 
        </div>
        <div class="mini">
            Contact No. : 
        </div>
        <div class="mini">
            Adress : 
        </div>
        <div class="mini">
            Email : 
        </div>
        <div class="mini">
            Website : 
        </div>
    </div>
    <div class="max2">
        <input class="cardin" id="name" placeholder="Full Name" type="text">
        <input class="cardin" id="phone" placeholder="+91 98765-43210" type="number">
        <input class="cardin" id="adress" placeholder="Enter Your Adress..." type="text">
        <input class="cardin" id="mail" placeholder="abc@xyz.com" type="email">
        <input class="cardin" id="site" placeholder="www.abc.in" type="url">
    </div>  `;
}


function wifi(){
    t = false;
    u = false;
    c = false;
    w = true;
    document.getElementById("inn").innerHTML = `<div class="wifi">
    <div class="max1">
        <div class="mini">
         Network Name : 
        </div>
        <div class="mini">
         Password : 
        </div>
        <div class="mini">
         Encryption : 
        </div>
    </div>
    <div class="max2">
        <input id="network" class="wifiin" placeholder="SSID" type="text">
        <input id="password" class="wifiin" placeholder="*password*" type="password">
        <select name="encryption" id="encryption" required class="wifiin" id="">
            <option value="None" >None</option>
            <option value="WEP">WEP</option>
            <option value="WPA/WPA2"> <details>WPA/WPA2 PSK</option>
        </select>
    </div>
</div>`;
}


function genQR()
{

    
    var api = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    var img = document.getElementById("img");
    var size = document.getElementById("size").value;
{
    if(t) {
        var data = document.getElementById("qrtext").value;
    } else if(u) {
        var data = document.getElementById("qrurl").value;
    } else if(c) {
        var name = " " + document.getElementById("name").value;
        var phone = " " + document.getElementById("phone").value;
        var adress = " " + document.getElementById("adress").value;
        var email = " " + document.getElementById("mail").value;
        var site = " " + document.getElementById("site").value;

        data = "Name :"+ name + " Contact No. :" + phone + " Adress :" + adress + "Email : " + email + " Website :" + site;

    } else if(w) {
        var network = " " + document.getElementById("network").value;
        var password = " " + document.getElementById("password").value;
        var encryption = " " + document.getElementById("encryption").value;

        data = "Network :"+ network + " Password : " +password + " Encryption : " + encryption;
    }
    else {
        data = "";
    }
}

    if (data!=="")
    {
        img.src = api + size + "&chl=" + data;
     } else {
        alert("Please Enter Data");
     }
}