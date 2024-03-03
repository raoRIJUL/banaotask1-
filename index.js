const cont=document.querySelector("#create-form");


document.getElementById("show").addEventListener("click", function() {
    document.getElementById("create-form").style.display = "block";
});



cont.addEventListener("click", (e) =>{

    if(e.target.classList.contains("sign-in"))
    {
        if (document.getElementById("hide-for-sign-in1").style.display = "block") {
            document.getElementById("hide-for-sign-in1").style.display = "none";
        } else {
            document.getElementById("hide-for-sign-in1").style.display = "block";
        }
    
        if (document.getElementById("hide-for-sign-in2").style.display = "block") {
            document.getElementById("hide-for-sign-in2").style.display = "none";
        } else {
            document.getElementById("hide-for-sign-in2").style.display = "block";
        }
    
        if (document.getElementById("update").textContent = "Create Account") {
            document.getElementById("update").textContent = "Sign In";
        } else {
            document.getElementById("update").textContent = "Create Account"
        }
        if (document.getElementById("update1").textContent = "Create Account") {
            document.getElementById("update1").textContent = "Sign In";
        } else {
            document.getElementById("update1").textContent = "Create Account";
        }
    }
    
});


document.querySelector(".close-form").addEventListener("click", function() {
    document.getElementById("create-form").style.display = "none";
    document.getElementById("hide-for-sign-in1").style.display = "block";
    document.getElementById("hide-for-sign-in2").style.display = "block";
    document.getElementById("update").textContent === "Create Account"
    document.getElementById("update1").textContent === "Create Account";

});