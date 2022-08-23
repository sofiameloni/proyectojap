function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("regBtn").addEventListener("click", function() {
        let email = document.getElementById("correo").value;
        let password = document.getElementById("password").value;
        let seCumple = true;
        

        if (email == ""){
            seCumple = false;
            showAlertError();
            alert("Debe completar el campo Email ");
            
        }

        if(password == ""){
            seCumple = false;
            showAlertError();
            alert("Debe completar el campo Contraseña");
        }

        if(seCumple){
            showAlertSuccess();
        }

    })
})

function cambiarPag(){
    window.location.assign("portada.html")
}