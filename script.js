<script>
    function authenticate(){
    
     const validuser = "abc";
     const valispass = "xyz";

    const userinput= document.getElementById("username").value;
    const passinput=documnet.getElementById("password").value;

    if(!userinput || !passinput){

        alert("Enter both Username And Password");
        return;
    }

    if(userinput === validuser && passinput === valispass){
        alert("Login Succesful");
    }
    else{
        if(userinput != validuser)
        {
            alert("Invalid Username Plz try again");
        }
        else{
            alert("Invalid password plz try again");
        }
    }

    }
</script>