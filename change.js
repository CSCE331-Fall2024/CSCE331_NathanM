var tbtn = document.getElementById("themeChange");
var x = 0;

function themeChange(){
    if(window.localStorage.getItem("thm1") === "bigPageCSSOG.css"){
        window.localStorage.setItem("thm1", "bigPageCSS.css");
    } 
    else{
        window.localStorage.setItem("thm1", "bigPageCSSOG.css");
        document.getElementById("theme").href = "bigPageCSSOG.css";
    }
    location.reload();
}

window.onload = () => {
    if(window.localStorage.getItem("thm1") === "bigPageCSSOG.css"){
        document.getElementById("theme").href = "bigPageCSSOG.css";
    }
    else{
        document.getElementById("theme").href = "bigPageCSS.css";
    }
}

