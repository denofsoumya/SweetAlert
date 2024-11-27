function submitForm(){
    userName= document.getElementById('name').value;
    userEmail = document.getElementById('email').value;
    userFeedback = document.getElementById('feedback').value;

    if(userName != "" && userEmail != "" && userFeedback != ""){
        alert("Thank u")
        swal({
            title: 'MMBFLIX',
            text: "Thanks for showing interest, we will get back to you soon!",
            icon: "success",
            button: "Ok",
        })
    }
}