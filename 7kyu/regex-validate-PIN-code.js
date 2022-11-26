// DESCRIPTION:
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

//My solution
function validatePIN (pin) {
    const reg = /[^0-9]/g;
    const num = pin.replace(reg, '');
    if((pin.length === 4 || pin.length === 6) && pin === num) return true;
    return false;
}