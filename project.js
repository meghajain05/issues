$(document).ready(function(){
    $(".b4").click(function(){
        
        $(".main").show();
        $(".main1").hide();
        $(".b3").addClass('default');
        $(".b3").removeClass('active');
        $(".b4").removeClass('default');
        $(".b4").addClass('active');

        
        
    });
});
$(document).ready(function(){
    $(".b3").click(function(){
        
        $(".main1").show();
        $(".main").hide();
        $(".b3").addClass('active');
        $(".b3").removeClass('default');
        $(".b4").removeClass('active');
        $(".b4").addClass('default');
       
    });
});



$(document).ready(function(){
$('#form1').submit(function() {
    var error = 0;
    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var password= $('#password').val();
    var email=$('#email').val();
        if (firstname == '') {
            error = 1;
            alert('First Name cannot be empty');
        }
        if(lastname == ''){
            error = 1;
            alert('Last Name cannot be empty');
        }


    
    var atpos=email.indexOf("@");
    var dotpos=email.lastIndexOf(".");

        if(email=="")
        {
           alert("email can't b blank");
        }
        if(!(email)=="@")
        {
           alert("email should contain @");
        }
        if(atpos<1)
        {
           alert("there should be more than 1 letter before @");
        }
        if(dotpos-atpos<5)
        {
           alert("There should be more than 5 letters before '.'");
        }


    
        if ($.trim(password).length <8  ) {
            alert('Minimum password length required is 8');
        }
        if (!(password.match(/[A-Z]/))) {
            alert('password should contain capital letter');
        }
        if (!(password.match(/[a-z]/))) {
            alert('password should contain small letter');
        }
        if (!(password.match(/[0-9]/))) {
            alert('password should contain a numeric value');
        }
    
        if(error){
            return false;
        }
        else{
            return true;
        }
    });
});