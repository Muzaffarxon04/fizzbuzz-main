let Results = document.getElementById("results");

Results.addEventListener("keyup", (e) => {
    e.preventDefault();
    let ui = document.createElement("li");
    function fizzBuz(result) {
        let message = "";
            if (result % 3 === 0 && result % 5 === 0) message += "FizzBuzz";
            else if (result % 3 === 0) message += "Fizz";
            else if (result % 5 === 0) message += "Buzz";
            else message += `${Results.value} FizzBuzz son emas`;
            return (ui.textContent = message || result);

    }
    ids.appendChild(ui);

    fizzBuz(Number(e.target.value));
});

// let result =fizzBuz(4);
//     console.log(result);
//     function fizzBuz (input) {
//         if (typeof input !== 'number')
//         return 'son emas';

//         if((input % 3 === 0) && (input % 5 === 0))
//         return 'FizzBuzz';

//         if (input % 3 === 0)
//         return 'Fizz';

//         if (input % 5 === 0)
//         return 'Buzz';
//         return input;
//     }
