var display=document.querySelector("#disp")
function show(val) {
	display.value+=val
}
function clean() {
	display.value=""
}
function answer() {
	var ans=display.value
	ans=eval(ans)
	display.value=ans
}











var display = document.querySelector("#disp");

function addToScore(val) {
    display.value += val;
}

function clean() {
    display.value = "";
}


function answer() {
 

    if (score < 0 & score > 100){
        display.value = "Invalid score";
        return;
    }
    var score = (display.value);

    var grade;
    if (score >= 80 & score <= 100) {
        grade = 'A+ [5.00]';
        
    } else if (score >= 70 & score <= 79) {
        grade = 'A [4.00]';
        GPA = "4.00";
    } else if (score >= 60 & score <= 69) {
        grade = 'A- [3.50]';
        GPA = "3.50";
    } else if (score >= 50 & score <= 59) {
        grade = 'B [3.00]';
        GPA = "3.00";
    } else if (score >= 40 & score <= 49) {
        grade = 'C [2.00]';
        GPA = "2.00";
    } else if (score >= 33 & score <= 39) {
        grade = 'D [1.00]';
        GPA = "1.00";
    } else if (score >= 0 & score <= 32) {
        grade = 'F [0.00]';
        GPA = "0.00";
    } else {
        grade = 'Invalid score';
    }

    display.value = grade;
}
