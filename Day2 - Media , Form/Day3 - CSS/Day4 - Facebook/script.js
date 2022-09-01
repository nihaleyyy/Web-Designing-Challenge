
$(document).ready(function(){
    
    $("#signup-form").submit(function(){
        var password=$("#pass").val();
        var confirmpass=$("#cpass").val();
        if(password==confirmpass){
            $("#error").text("");
            return true;
        }else{
            $("#error").text("Password does not match");
            return false;

        }
    })
    $("#signup-form").validate({
        
        rules:{
            
        fname:{
            required:true,
            minlength:4,
            maxlength:6
        },
        sname:{
            required:true,
            minlength:4
        },
        emailmobile:{
            email:true,
            required:true,
            
        },
        password:{
            minlength:6,
            required:true,
        },
        day:{
            required:true
        },
        month:{
            required:true
        },
        year:{
            required:true
        },
        gender:{
            required:true 
        },
        cpassword:{
            required:true,
            minlength:6,
        }
        },
        messages:{
            fname:{
                required:"Enter First Name",
                minlength:"Enter Atleast 4 Characters"
            }
        }
        
    })
})