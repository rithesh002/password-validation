function matchpass(){
    var firstpass =document.f1.password.value;
    var secondpass =document.f2.password2.value;
    if(firstpass == secondpass){
        alert("your password is correct");
        return true;
    }
    else{
        alert("your password is incorrect");
        return false
    }
}