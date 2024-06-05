

let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let result = document.querySelector("#result");
let button = document.querySelector("button");

button.addEventListener("click", () => {
    let heightValue = parseFloat(height.value);
    let weightValue = parseFloat(weight.value);

    if (isNaN(heightValue) || heightValue <= 0) {
        result.innerHTML = "Please enter a valid height";
    } else if (isNaN(weightValue) || weightValue <= 0) {
        result.innerHTML = "Please enter a valid weight";
    } else {
        let heightInMeters = heightValue / 100;
        let bmi = weightValue / (heightInMeters ** 2);
        result.innerHTML = bmi.toFixed(2) + " kg/m<sup>2</sup>";
        
    }
    result.classList.remove("final");
});