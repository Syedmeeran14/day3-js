//Convert all the strings to title caps in astring array using IIFE function


(function (sentance)
{
    let str = sentance.split(" ");
    for(let i = 0; i < str.length; i++)
    {
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    var a = str.join(" ");
    console.log(a);
})
("i love javascript");