function primeNumbersTo(Max)

        {
            
    var store  = [], i, j, primeNumbers = []; // This step initialises the array to store values
   
    for (i = 2; i <= 100; ++i) 
    {
        if (!store [i]) 
          {
            primeNumbers.push(i); //populates the array
            for (j = i << 0; j <= 100; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primeNumbers;
}

console.log(primeNumbersTo(100));
