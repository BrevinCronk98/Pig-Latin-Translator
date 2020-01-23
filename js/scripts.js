$(document).ready(function() {
    $("#formOne").submit(function(event){
        event.preventDefault();
        var userinput = $("#inpt").val();
        
        var array = [];
        array = userinput.split(" ");
    //    console.log(array)

    var vowels = ["a", "i" , "e" , "o" , "u" , "A", "I" , "E" , "O" , "U"];

    var consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "X", "Z", "W", "Y", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z", "w", "y"]

    


    });
    
});