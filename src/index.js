module.exports = function reverse (n) {
    
    if(n>0){
        return Number(n.toString().split('').reverse().join(''));
    } else{
        return Number(n.toString().split('').slice(1).reverse().join(''));
    }
    
}
