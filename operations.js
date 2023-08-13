/**
 * @description Compute the sum of two numbers.
 */
    var num1 = 5;
    var num2 = 6;
    var sum = num1 + num2;

    console.log(sum);

/**
 * @description Add two strings into one.
 */
    var str1 = "gvireyg596945 97235972y3";
    var str2 = "12874hbribv 84795>?:{_";
    var txt= str1 + str2;

    console.log(txt);

/**
 * @description Check the trueness of prop variable.
 */
    var prop = 0;
    var result = !!prop;

    console.log(result);

/**
 * @description Return true if length of string is more than 10.
 */
    var str = "shetikfgtn1.38'/"
    var result = str.length > 10 ? true : false;

    console.log(result);

/**
 * @description Return the mathematical sum of two strings.
 */
    var str1 = "6";
    var str2 = "7";
    var result = +str1 + +str2;

    console.log(result);

/**
 * @description Swap the values of variables.
 */
    var value1 = "756";
    var value2 = 'lbfledg';
    var value3 = value1;
    value1 = value2;
    value2 = value3;

    console.log(value1);
    console.log(value2);

/**
 * @description Swap the values of variables without an extra variable.
 */
    var vrbl1 = 34;
    var vrbl2 = 97858;
    vrbl1 += vrbl2;
    vrbl2 = vrbl1 - vrbl2;
    vrbl1 -= vrbl2;

    console.log(vrbl1);
    console.log(vrbl2);

/**
 * @description Compute maximum of three numbers.
 */
    var num1 = 45;
    var num2 = 785768;
    var num3 = 19724;
    var result = num1 > num2 && num1 > num3 ? num1 : num2 > num1 && num2 > num3 ? num2 : num3;

    console.log(result);

/**
 * @description Compute minimum of three numbers.
 */
    var num1 = 5;
    var num2 = 10;
    var num3 = 4;
    var result = num1 < num2 && num1 < num3 ? num1 : num2 < num1 && num2 < num3 ? num2 : num3;

    console.log(result);