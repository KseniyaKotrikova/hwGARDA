/*
* myAtoi(str) convert string to integer 
*/
function myAtoi(str) {
    if (typeof(str) == "string"){
       var myStr = myTrim(str);
    } else {
       return -1;
    }
 
    var result = 0;
    var sign = 1;
    var i = 0;

    if (myStr.charAt(0) == "-") {
       sign = -1; 
       ++i;
    }
    if (myStr.charAt(0) == "+") {
       sign = 1; 
       ++i;
    }
    
    while(i < myStr.length) {   
        if( isNaN(myStr.charAt(i))) {
            ++i;
        }
        if(myStr.charAt(i) == ' ') {
            ++i;
        }
        result = (result * 10) + getIntFromChar(myStr.charAt(i));
        ++i;
    }
    
    result = result * sign;
    
    if (result > (Math.pow(2,31) - 1)) {
        return Math.pow(2,31) - 1;
    } else if (result < Math.pow(-2,31)) {
        return Math.pow(-2,31);
   }
    
    return result;

};

/*
* myTrim(str)  
*/
function myTrim(str) {
    return str.replace(/^\s+|\s+$/g, '');
} 

/*
* getIntFromChar(char) 
*/
function getIntFromChar(char) {
    switch (char) {
        case '0' : {
               return 0;
        }
                    case '1' : {
               return 1;
        }
                    case '2' : {
               return 2;
        }
                    case '3' : {
               return 3;
        }
                    case '4' : {
               return 4;
        }
                    case '5' : {
               return 5;
        }
                    case '6' : {
               return 6;
        }
                    case '7' : {
               return 7;
        }        case '8' : {
               return 8;
        }
             case '9' : {
               return 9;
        }         
    }
} 

/*
* clean(str) removed exceed symbols
*/
function clean(str){
    var myStr = myTrim(str);
    var map = {};
    var cleanStr = '';
    var i = 0;
    
    while(i < myStr.length){
        if(myStr.charAt(i) == ' ') {
            ++i;
        }
        if(!(myStr[i] in map)) {
        cleanStr += myStr[i];
        map[myStr[i]] = true;
        }   
        ++i;
    }
    return cleanStr;
}


console.log(myAtoi('-21474 83649'))
console.log(myAtoi(' -8877656557777 '))
console.log(myAtoi(' -887 57a777 '))
console.log(myAtoi(' 1w 87 57a777 '))
console.log(myAtoi(1))

console.log(clean(" gggjyyye ooo"))
console.log(clean(" AAA BBB 1 OO CC"))