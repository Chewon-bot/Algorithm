function solution(array) {
    // let sorted_array = array.sort((a, b) => a - b)
    // let mid_index = Math.floor(sorted_array.length / 2)
    // return sorted_array[mid_index];
    return array[Math.floor(array.sort((a, b) => a - b).length / 2)]
}

// array.sort((a, b) => a - b)를 사용하면 배열의 순서가 오름차순으로 변경되고, 이 배열은 기존 배열을 덮어쓰게 됩니다.

// return array[Math.floor(array.sort((a, b) => a - b).length / 2)] 이거랑     return array.sort((a, b) => a - b)[Math.floor(array.length / 2)] 이거의 차이가 뭐임?
// 이 두 코드의 차이점은 정렬 후 배열을 처리하는 방식과 배열을 정렬하는 시점에 있습니다.
// return array[Math.floor(array.sort((a, b) => a - b).length / 2)] 이게 나음? []이 안에 있는 걸 먼저 바꿔야 하는 거임
// []나 ()처럼 괄호 안에 있는 코드가 먼저 처리된다. 자바스크립트에서 괄호(()와 [])는 연산자 우선순위가 가장 높습니다. 괄호 안에 있는 코드는 먼저 실행되고 그 결과가 외부에서 사용됩니다. 따라서 array.sort((a, b) => a - b).length처럼 괄호 안에 정렬 후 길이를 구하는 계산이 먼저 이루어지고, 그 결과로 배열의 중앙값을 찾는 과정이 이어집니다.

//중앙값은 함수가 있었지만 최빈값은 또 다른 문제(알고리즘 짜기) 인 듯