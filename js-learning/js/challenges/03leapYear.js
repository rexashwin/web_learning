let year = prompt("Enter a year to check its leap year or not:");

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0)
            alert(year + " is a leap year");
        else
            alert(year + " is not a leap year");
    }
    else
        alert(year + " is a leap year");
}
else
    alert(year + " is not a leap year");