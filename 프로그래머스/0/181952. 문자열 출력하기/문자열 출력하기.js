const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line]; // 1*1 행렬 같은 느낌.**input = [line]**은 배열을 새로 생성하여 값을 덮어씌우는 방식입니다. push는 기존 배열에 값이 추가됩니다.
}).on('close',function(){
    str = input[0];
    console.log(str); // 저장된 문자열 출력
});

    
//     rl.on('line', function (line) { ... })의 역할
// rl.on(event, callback):
// readline 인터페이스에서 특정 이벤트가 발생했을 때 동작하는 이벤트 리스너를 설정합니다.
// event는 감지할 이벤트의 이름이고, callback은 해당 이벤트가 발생했을 때 실행할 함수입니다.

 // 'line' 이벤트:
// 'line' 이벤트는 사용자가 Enter 키를 눌러 한 줄 입력을 완료했을 때 발생합니다.
// 예를 들어, 사용자가 Hello라고 입력한 뒤 Enter를 누르면 'line' 이벤트가 발생하며 Hello가 line 변수에 저장됩니다.

    // 다른 이벤트 ('input', 'close', 등):
// 'input': 특정 상황에서는 입력을 기다리는 이벤트로 사용할 수도 있지만, 보통 readline 인터페이스에선 'line'을 사용합니다.
// 'close': rl.close()를 호출하여 입력을 종료했을 때 발생합니다.
    
//     'line'이벤트는 매개변수 line과 다르다:    
//     이벤트 리스너에서 매개변수 line은 특별한 문법이나 기능이 아니라, 단지 이벤트가 발생할 때 실행되는 함수에 전달되는 값입니다.자바스크립트에서 이벤트 리스너는 인수(매개변수)를 자동으로 전달합니다. 이 경우 line은 입력된 문자열이기 때문에, 그 이름은 개발자가 선택할 수 있고, line이란 이름은 단순히 관습적으로 쓰이는 것일 뿐입니다. 이름을 input, message, data 등으로 바꿔도 문제는 없습니다.