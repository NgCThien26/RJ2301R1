function is_usZipCode(str) {
    RegExp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (RegExp.test(str)) {
        return true;
    } 
    return false;
}