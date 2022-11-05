
ValidationForm = () => {
    let testname = document.forms["form"]["nom"].value;
    if (testname == ""){
        alert("error");
        return false;
    }
}