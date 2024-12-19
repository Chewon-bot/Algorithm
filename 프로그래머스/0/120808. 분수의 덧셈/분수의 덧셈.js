function f_gcd(a, b) {
    return (a % b) ? f_gcd(b, a % b): b; 
}
//재귀. 나머지가 0이 될 때까지 계속 더 작은 값으로 가도록.  

function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1
    let denom = denom1 * denom2
    let gcd = f_gcd(numer, denom)
    var answer = [numer/gcd, denom/gcd];
    return answer;
}

// return (a % b) ? f_gcd(b, a % b): b;는 a를 b로 나눈 나머지(a%b)가 0이 될 때까지 유클리드 쓰는 거니까 재귀식이 끝나는 조건이 충족되면 b를 뱉는 거고, var g = (a, b) => b ? g(b, a % b) : Math.abs(a);는 b 자체가 0이 될 때까지 유클리드 쓰는 거니까  재귀식이 끝나는 조건이 충족되면 a의 절댓값을 뱉는 게 맞네