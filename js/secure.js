var host = "www.snaveenkumar.me";
if(host == window.location.host){
    window.location.host = "www.snaveenkumar.me";
}
if ((host == window.location.host) && (window.location.protocol != "https:"))
    window.location.protocol = "https";