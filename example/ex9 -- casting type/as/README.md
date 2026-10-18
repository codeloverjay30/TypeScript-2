# NOTICE
> [!CAUTION]
> Casting doesn't actually change the type of the data within the variable.
> 
> For example the following code will not work as expected 
> 
> since the variable `x` is still holds a number.  
> 
> ```
> let x: unknown = 4;  
> console.log((x as string).length); // prints undefined since numbers don't have a length
> ```

> [!CAUTION]
> TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct.
> 
> For example the following will throw a type error 
> 
> since TypeScript knows casting a string to a number doesn't makes sense without converting the data.  

> ```
> console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake 
> because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
> ```

