function tempe(){
    let input = document.querySelector("#num").value;
    let from = document.querySelector("#from");
    let to = document.querySelector("#to");
    let result = document.querySelector("#result");
    if (input == "") {
        alert("Please Enter any Number....")
        location.reload()
    }
    else if (from.value == "celcius" && to.value == "celcius") {
        let Celcius = Number.parseInt(input) * 1
        result.innerHTML = Celcius.toFixed(2) + `&deg;C`
    }
    else if (from.value == "celcius" && to.value == "fahrenheit") {
        let Fahrenheit = Number.parseInt(input) * (9 / 5) + 32
        result.innerHTML = Fahrenheit.toFixed(2) + "F"
    }
    else if (from.value == "celcius" && to.value == "kelvin") {
        let Kelvin = Number.parseInt(input) + 273.15
            result.innerHTML = Kelvin.toFixed(2) + "K"
        }
    else if (from.value == "celcius" && to.value == "rankine") {
        let Rankine = Number.parseInt(input) * (9 / 5) + 491.67
        result.innerHTML = Rankine.toFixed(2) + "R"
    }
    else if (from.value == "fahrenheit" && to.value == "celcius") {
        let Celcius = Number.parseInt(input) - 32 * (5 / 9)
        result.innerHTML = Celcius.toFixed(2) + `&deg;C`
    }
    else if (from.value == "fahrenheit" && to.value == "fahrenheit") {
        let Fahrenheit = Number.parseInt(input) * 1
        result.innerHTML = Fahrenheit.toFixed(2) + "F"
    }
    else if (from.value == "fahrenheit" && to.value == "kelvin") {
        let Kelvin = Number.parseInt(input) - 32 * (5 / 9) + 273.15
        result.innerHTML = Kelvin.toFixed(2) + "K"
    }
    else if (from.value == "fahrenheit" && to.value == "rankine") {
        let Rankine = Number.parseInt(input) + 459.67
        result.innerHTML = Rankine.toFixed(2) + "R"
    }
    else if (from.value == "kelvin" && to.value == "celcius") {
        let Celcius = Number.parseInt(input) - 273.15
        result.innerHTML = Celcius.toFixed(2) + `&deg;C`
    }
    else if (from.value == "kelvin" && to.value == "fahrenheit") {
        let Fahrenheit = Number.parseInt(input) - 273.15 * (9 / 5) + 32
        result.innerHTML = Fahrenheit.toFixed(2) + "F"
    }
    else if (from.value == "kelvin" && to.value == "kelvin") {
        let Kelvin = Number.parseInt(input) * 1
        result.innerHTML = Kelvin.toFixed(2) + "K"
    }
    else if (from.value == "kelvin" && to.value == "rankine") {
        let Rankine = Number.parseInt(input) * 1.8
        result.innerHTML = Rankine.toFixed(2) + " R"
    }
    else if (from.value == "rankine" && to.value == "celcius") {
        let Celcius = Number.parseInt(input) - 491.67 * (5 / 9)
        result.innerHTML = Celcius.toFixed(2) + `&deg;C`
    }
    else if (from.value == "rankine" && to.value == "fahrenheit") {
        let Fahrenheit = Number.parseInt(input) - 495.67
        result.innerHTML = Fahrenheit.toFixed(2) + "F"
    }
    else if (from.value == "rankine" && to.value == "kelvin") {
        let Kelvin = Number.parseInt(input) * (5 / 9)
        result.innerHTML = Kelvin.toFixed(2) + "K"
    }
    else if (from.value == "rankine" && to.value == "rankine") {
        let Rankine = Number.parseInt(input) * 1
        result.innerHTML = Rankine.toFixed(2) + "R"
    }
}