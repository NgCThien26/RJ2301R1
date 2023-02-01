function isFirstLetterUpperCase(str) {
    RegExp = /^[A-Z]/;
    if (RegExp.test(str)) {
       console.log(str + " contains first character is uppercase ");
    } else {
       console.log(str + " contains first character is not uppercase");
    }
 }
