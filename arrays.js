function primeNumbersTo(Max)

        {
            
    var store  = [], i, j, primeNumbers = []; // This step calls for initialisation the array to store values
   
    for (i = 2; i <= 100; ++i) 
    {
        if (!store [i]) 
          {
            primeNumbers.push(i); //populates the array
            for (j = i << 1; j <= 100; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primeNumbers;
}

console.log(primeNumbersTo(100));
