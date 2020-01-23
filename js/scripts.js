$(document).ready(function() {
    $("#formOne").submit(function(event){
        event.preventDefault();
        var userinput = $("#inpt").val();
        
        var array = [];
        var letterArr = [];
        array = userinput.split(" ");
        // console.log(letterArr)

        var vowels = ["a", "i" , "e" , "o" , "u" , "A", "I" , "E" , "O" , "U"];

        var consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "X", "Z", "W", "Y", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z", "w", "y"]

        for (var i=0; i < array.length; i++){
            var firstLetter = array[i].charAt(0);
            if (vowels.includes(firstLetter)){
                letterArr.push(`${array[i]}way`);
            }
            if (consonants.includes(firstLetter)){
                for (j=0; j< array[i].length; j++){
                    var letter = array[i].charAt(j);
                    console.log(letter)
                    if (consonants.includes(letter)){
                        array[i].slice(j);
                        // console.log(array[i].slice(j))
                        // letterArr.push(`${array[j]}ay`)
                        // letterArr.push(`${array[i]}way`);
                    }
                }

                    // if (letters === vowels[j]){
                        
                        // array[i].slice[0, 1];
                        // letterArr.push(`${array[i]}`);
                        // console.log(letters[l]);

            }
        }
    });   
});


    // // vowels.forEach(function(vowel) {
    //     for (var i=0; i < array.length; i++){
    //         var firstLetter = array[i].charAt(0);
    //         for (var j=0; j < vowels.length; j++){
    //             if (firstLetter === vowels[j]){
    //                 letterArr.push(`${array[i]}way`);
    //                 // console.log(letterArr)
    //             }
    //             for (var k=0; k < consonants.length; k++){
    //                 if (firstLetter === consonants[k]){
    //                     for (l=0; l<array[i].length; l++){
    //                         var letters = array[i].charAt(l);
    //                         // console.log(vowels[j])
    //                         // console.log(letters)
    //                         if (letters === vowels[j]){
                                
    //                             // array[i].slice[0, 1];
    //                             // letterArr.push(`${array[i]}`);
    //                             // console.log(letters[l]);
    //                         }    
    //                     }                        
    //                     letterArr.push(`${array[i]}ay`);    
    //                     // letterArr.push(`${array[i]}`)
    //                 }                
    //             }    
    //         }
    //         vowels[j]
    //         // console.log (letterArr);
    //         // if (firstLetter === vowel){
    //         //     newarr.push(firstLetter);
    //         // }
    //     }
    // });
    
    // alert(newarr);

