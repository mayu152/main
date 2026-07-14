// 联系表单自定义校验
const form = document.getElementById("contactForm");
if(form){
    form.addEventListener("submit", function(e){
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const msg = document.getElementById("message").value.trim();
        const tip = document.getElementById("formTip");

        if(name.length < 2){
            tip.textContent = "Name must be at least 2 characters";
            tip.style.color = "red";
            e.preventDefault();
        }else if(!email.includes("@")){
            tip.textContent = "Please input valid email";
            tip.style.color = "red";
            e.preventDefault();
        }else if(msg.length < 5){
            tip.textContent = "Message cannot be too short";
            tip.style.color = "red";
            e.preventDefault();
        }else{
            tip.textContent = "Form submitted successfully!";
            tip.style.color = "green";
        }
    })
}

// Trivia页面BMI计算函数（仅trivia.html使用）
function calculateBMI(){
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const resultBox = document.getElementById("bmiResult");

    if(isNaN(height) || isNaN(weight) || height <= 0 || weight <=0){
        resultBox.textContent = "Please input valid height and weight";
        resultBox.style.color = "red";
        return;
    }
    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);
    let category = "";
    if(bmi < 18.5) category = "Underweight";
    else if(bmi < 24) category = "Normal";
    else if(bmi < 28) category = "Overweight";
    else category = "Obese";

    resultBox.textContent = `Your BMI: ${bmi.toFixed(2)} , Category: ${category}`;
    resultBox.style.color = "#222";
}
