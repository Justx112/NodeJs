import  Color  from "colors";

let counter = 0;

let numbers = process.argv.slice(2)



checkInput(numbers)

let aria = getAria(numbers)

output(aria)

function output(aria){
    aria.forEach(element => {
        if(isprime(element))
        {
            switch(counter){
                case 0:
                    counter++;
                    console.log(Color.green(element))
                    break
                case 1:
                    counter++;
                    console.log(Color.yellow(element))
                    break
                default:
                    counter = 0;
                    console.log(Color.red(element))
                    break
            }
        }
    });
}

function getAria([number_first, number_second]){
    let ariaArray = []
    
    for(let i = number_first; i<=number_second; i++){
        ariaArray.push(+i)
    }

    return ariaArray
}

function isprime(n){
	if(n==1)
		return false;
	for(let d=2; d*d<=n; d++){ 
		if(n%d==0) 
			return false;
		}
	return true;
	}

function checkInput(array){

    array.forEach(element => {
        if(Number.isNaN(+element)){
            console.log("Введеные данные не числа");
            process.exit(9)
        }
    })

    if(array.length !== 2)
    {
        console.log("Неверное задан диапазон");
        process.exit(9)
    }
}