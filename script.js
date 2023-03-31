const months=[31,28,31,30,31,30,31,31,30,31,30,31]

function OnClick(){
    alert("It works")
}

function CalculateAge() {
    let today = new Date();
    let inputmonth = document.getElementById("month").value;
    let inputday = document.getElementById("day").value;
    let inputyear = document.getElementById("year").value;

    let currentyear = today.getFullYear();
    let currentmonth = today.getMonth() + 1;
    let currentday = today.getDate();

    leapYearCheck(currentyear);

    if( inputyear > currentyear || (inputmonth > 
        currentmonth && inputyear == currentyear) || 
        (inputday > currentday && inputmonth == currentmonth && inputyear == currentyear)
        ){
            alert("User hasn't been born yet!")
            result("-","-","-");
            return;
        }
    birthyear = currentyear - inputyear;

    if(currentmonth >= inputmonth){
        birthmonth = currentmonth - inputmonth;
    }
    else {
        birthyear--;
        birthmonth = 12 + currentmonth - inputmonth;
    }

    if(currentday >= inputday){
        birthday = currentday - inputday
    }
    else{
        birthmonth--;
        let days = months[currentmonth - 2];
        birthday = days + currentday - inputday;
        if ( birthmonth < 0){
            birthmonth = 11;
            birthyear--;
        }
    }
    console.log(inputyear, inputmonth, inputday)
    console.log(birthyear)
    result(birthday, birthmonth, birthyear);
}

function result(bday, bmonth, byear){
    document.getElementById("years").textContent = byear;
    document.getElementById("months").textContent = bmonth;
    document.getElementById("days").textContent = bday;
}

function leapYearCheck(){
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] = 29;
    }
    else{
        months[1] = 28;
    }
}