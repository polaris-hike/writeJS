# writeJS
# writeJS

define (f n )
        (if (= n 1)
            1
            （* n f(- n 1))

        
        )
        console.log

        function f(n){
    return fi(1,1,n)
}
function fi(result,n,max){
    if(n === max){
        return result;
    }else{
       return fi(result*(n+1),n+1,max)
    }
}
