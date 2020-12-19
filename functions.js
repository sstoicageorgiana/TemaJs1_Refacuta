/** 1.O functie "equals" care primeste 2 parametrii si returneaza daca cei 2 parametrii sunt egali, strict */

let returnedStatament = equals(2,5)
console.log("1. After comparation we have: ", returnedStatament);

function equals(FistNumber, SecondNumber)
{
    if (FistNumber === SecondNumber)
        return true 
    else
    {
        return false 
    }
}

/** 2. O functie "compare" care primeste 2 parametrii si returneaza -1 daca primul e mai mic ca al doilea, 0 daca sunt egale si 1 daca primul e mai mare ca al doilea */
let returnedStatamentForCompare = compare(5,2)
console.log("2. After comparation we have:", returnedStatamentForCompare);

function compare(fistNumber, secondNumber)
{
    if ( fistNumber < secondNumber)
        return -1
    else if (fistNumber > secondNumber)
        return 1
    else if (fistNumber === secondNumber)
        return 0
}

/** 3. O functie "max" care primeste 2 parametrii si returneaza maximul dintre cele 2*/
let maxNrGlobal =  max(11,11)
console.log("3. After comparation the max number is : ", maxNrGlobal);
function max(firstNumber, secondNumber)
{
   let maxNrLocal
   if (firstNumber > secondNumber)
   {
     maxNrLocal =  firstNumber
   }
   else 
   {
     maxNrLocal =  secondNumber
   }
   return maxNrLocal
}

/** 4. O functie "max" care primeste 2 parametrii si returneaza maximul dintre cele 2*/
let minNrGlobal =  min(5,2)
console.log("3. After comparation the min number is : ", minNrGlobal);
function min(firstNumber, secondNumber)
{
   let minNrLocal
   if (firstNumber < secondNumber)
   {
    minNrLocal =  firstNumber
   }
   else 
   {
    minNrLocal =  secondNumber
   }
   return minNrLocal
}

/** 5. O functie "suma" care primeste 1 parametru, numar intreg si returneaza suma primelor N numere naturale pozitive (exemplu: daca N este 3, trebuie sa returneze 6) */
let param =3 ;
let sum = suma(param);
console.log("5. The sum of first N numbers is: ", sum);
function suma(param)
{   let s = 0
    for ( let i=1; i<=param; i++)
    {
        s = s+i
    }
    return s;
}

/** 6. O functie "prim" care primeste 1 parametru si returneaza true/false daca N este numar prim sau nu (restul impartirii la 1 si la N ==0) */
let numberGiven = 8;
let ifPrim = prim(numberGiven);
switch(ifPrim)
{
   case true:
       console.log("6. " + numberGiven + " Is a prim number.");
       break;
   case false:
       console.log("6. " + numberGiven + " Is not a prim number.");
       break;
}


function prim(number)
{
   if(number < 2) 
       return false;
   if(number === 2) 
       return true;
   for(var i = 2; i < number; i++)
    {
       if(number % i === 0) 
           return false;
   }
   return true;
}

//**7. O functie "sumaPrime" care primeste 1 parametru si returneaza suma primelor N numere prime (pentru N=5 trebuie sa returneze 2+3+5+7+11=28) */
let e = 5;
let sumOfFirstNPrims = sumaPrime(e);
console.log("7. Sum of First "+ e + " prim nr :", sumOfFirstNPrims);

function sumaPrime(n)
{
 let i = 0;
 let s = 0;
 let m = 2;
 while ( i<n )
 {
    if (prim(m))
    {
        s += m;
        i++; 
        m++;
    }
    else
    {
        m++;
    }
 } 
 return s;
}




//**8. O functie "invers" care primeste un parametru de tip numar si intoarce inversul acestuia (ca numar) (123 => 321) */
let numberToReverse = 123456;
resultedInverseNumber = invers(numberToReverse)

console.log("8. The invers numbers is: ", resultedInverseNumber);
function invers(n) {
    var result = '';
    if(typeof n === 'number')
    {
        n = '' + n + '';
    }

    for(var i = n.length; i >= 0; i--)
    {
        result += n.charAt(i);
    }

    result = parseInt(result);
    return result;
  
}


//** 9.	O functie "produsImpare" care primeste 1 parametru si returneaza produsul primelor N numere impare pozitive (pentru N=5; returneaza 1*3*5*7*9=945) */
console.log("produs", produsImpare(5));

function produsImpare(n)
{
  let prod = 1; 
  let m=1;
  let contor =0; 

  while (contor<n )
  {
      prod = prod *m;
      m= m+2;
      contor++;
  }
  return prod;
}



//** 10.	O functie "contains" care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in array (rezultatul este true/false)*/
let arrayContainsSpecificNumber = [1,2,3,4,5];
let numberSearched = 2
let bool =  contains(arrayContainsSpecificNumber,numberSearched);

switch(bool)
{
    case true:
      console.log("10. the number "+ numberSearched +" is found in the given array");
      break;
    case false:
      console.log("10. the number "+ numberSearched +" is NOT  found in the given array");
      break; 
}

function contains(arrayToSearch, element)
{
    var len = arrayToSearch.length;
    for(var i = 0 ; i < len;i++)
    {
        if(arrayToSearch[i] === element){return true;}
    }
    return false;
} 



//**  11.	O functie "maxArray" care primeste un array si returneaza valoarea maxima  (ar trebui sa functioneze si pentru numere si pentru stringuri)*/
var arrayOfNumbers = [1,2,3,4,5,10];
let maxOfArray = arrayMax(arrayOfNumbers)

console.log("11. The maximum value from the array is : ", maxOfArray);
function arrayMax(arr) {
  var len = arr.length, max = -Infinity;
  while (len--) 
  {
    if (arr[len] > max)
    {
      max = arr[len];
    }
  }
  return max;
};



//**12.	O functie "sumMinMax" care primeste un array de numere si returneaza suma dintre valoare maxima si valoare minima*/
var arrayForSumMinMax = [1,2,5];
sumMinMax();
console.log("12.The sum of of minimum and maximun form the given array is:  "+sumOfMinAndMax);


function sumMinMax()
{
  let max = arrayMax(arrayForSumMinMax);
  let min = arrayMin(arrayForSumMinMax);
  sumOfMinAndMax = max + min;
}

function arrayMin(arr) 
{
  var len = arr.length, min = Infinity;
  while (len--) 
  {
    if (arr[len] < min) 
    {
      min = arr[len];
    }
  }
  return min;
};
  
function arrayMax(arr) 
{
  var len = arr.length, max = -Infinity;
  while (len--) 
  {
    if (arr[len] > max)
     {
      max = arr[len];
      }
  }
  return max;
};



//** 13.	O functie "hasDuplicates" care primeste un array   si returneaza daca exista duplicate intr-un array primit ca parametru (true/false)*/
var arrayHasDuplicates = [1,2,2,3,4,5,10];
arrayExpected = [];
arrayExpected = hasDuplicates(arrayHasDuplicates);

console.log("13. Value expected", arrayExpected);

function hasDuplicates(array) {
    let value = []
  
    for (let i = 0; i < array.length; i++)
    {
        let val = array[i]
        if (value.indexOf(val) !== -1) 
        {
            var arr = [true];                                                                                                                                                                                                                                                                                                         
            return arr[0];
        }
        value.push(val)
    }
    var arr = [false];
    return arr[0];
}



//**14.	O functie "produsPozitive" care primeste un array si returneaza produsul numerelor pozitive intr-un array primit ca parametru*/
var arrayOfPozNegNr = [ 4,-2, 3, 2];
let prodPozitiveNr = produsPozitive(arrayOfPozNegNr);   

console.log("14. Produs of positive elements in the array: ",prodPozitiveNr);

function produsPozitive(array)
{
    let prod = 1;
    for (let i = 0; i < array.length; i += 1)
    {
        let val = array[i];
        if (val > 0)
        {
            prod *= array[i];
        } 
    }
    return prod
}


//** 15.	O functie "palindrom" care primeste un string  si returneaza daca este palindrom (inversul == originalul, ex: "1234321", "55", "787") (true/false) */
let c= 121;
let varBool = palindrom(c); 

switch(varBool) 
{
    case false:
        console.log("15. The input is NOt a palindrom : " , c);
        break;
    case true :
        console.log("15. The input is a palindrom : " , c);
        break;
}

function palindrom(str) 
{
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
}

