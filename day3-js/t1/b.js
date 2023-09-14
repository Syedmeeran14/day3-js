//Convert all the strings to title caps in a string array using ANONYMOUS function


const titleCase = function (sentance)
{
    let str = sentance.split(" ");
    for(let i = 0; i < str.length; i++)
    {
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    return str.join(" ");
}
console.log(titleCase("i love javascript"));