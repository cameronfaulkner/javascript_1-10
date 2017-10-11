//write first method
function sleep_in(weekday,vacation) {
    if(weekday == true){
        if(vacation == true){
            return true
        }else{
            return false
        }
    }if(weekday == false){
        return true
    }
}
function monkey_trouble(a_smile, b_smile){
    if(a_smile == b_smile){
            return true
    }else{
        return false
    }
}
function string_times(x, n) {
    var string = ''
    for (i = 0; i < n; i++) {
        string = string + x
    }
    return string
}
function front_times(x, n){
    string = ''
    var z= x.substring(0,3);
    for (i = 0; i < n; i++){
        string = string + z
    }
    return string;
}
function string_bits(string) {
    var every_other = '';
    for (i = 0; i < 12; i++){
        if (i % 2 == 0) {
            every_other += string.substring(i, i + 1);
        }
    }return every_other
}

    function caughtSpeeding(int, birthday){
        var n = int;
        var consideration = 0;
        if (birthday == true){
            consideration = 5;
        }
        if (n <= (60 + consideration)){
            return 0;
        }
        if(n <= (80 + consideration)){
            return 1;
        }else{
            return 2;
        }
    }



function fizz_buzz(x){
    if (x % 3 == 0 && x % 5 == 0 || x == 0){
        return 'Fizz' + 'Buzz'
    }else if( x % 3 == 0){
        return 'Fizz'
    }else if (x % 5 == 0){
        return 'Buzz'
    }else{
        return x +'!';
    }
}
function teaParty(x,y){
    if(x >= 5 && y >= 5){
        if(x >= (2 * y) || y>= (2 * x)){
            return 2;
        }else{
            return 1;
        }
    }else{
        return 0;
    }
}
function blackjack(x,y) {
    if(x > 21 && y > 21) {
        return 0
    }if(x > 21) {
        var x_check = 1;
        return y
    }if(y > 21) {
        var y_check = 1;
        return x
    }if(x > y){
        return x
    }if(y>x){
        return y
    }
}
    function loneSum(a,b,c){
        if( a == b && b == c){
            return 0;
        }else if(a == b){
            return c
        }else if( a == c){
            return b
        }else if( b == c){
            return a
        }else{
            return a + b + c;
        }
    }



function tester() {

    document.getElementById("output").innerHTML = caughtSpeeding(65, true);

}
