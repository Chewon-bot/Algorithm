

var solution = (numbers) => {return numbers.map(i=>i*2)}
// solution 함수 써야 한다는 거 잊지 말기. 아무 함수나 설정 ㄴㄴ.
// 문제 2: 리스트 컴프리헨션이 아닌 map() 사용
// 자바스크립트는 파이썬처럼 리스트 컴프리헨션을 지원하지 않습니다. 대신에 map() 메서드를 사용하여 배열의 각 요소에 대해 작업을 수행할 수 있습니다.

// 해결 방법
// 올바른 자바스크립트 코드로 수정하려면 map()을 사용하여 배열을 변환하고, 함수는 중괄호로 감싸야 합니다.

//  return numbers.map(i=>i*2);  just multiplies each elements in the array. 
// different method:   return numbers.reduce((a, b) => [...a, b * 2], []);, on the other hand, is just using a as an recursion element.
// so the accumulator a is just an array storing what you made by b*2, starting from an empty array[],  and you are just iterating b*2 all the time

//1 Start with an empty array [] as the initial value of the accumulator a.
//2 For each element in the numbers array, multiply it by 2 (b * 2), and add the result to the accumulator a (using ...a to keep the previous elements intact).
//3 Return the final accumulated array

// numbers.reduce((accumulator, currentValue) => {
    // operation
// }, initialValue);