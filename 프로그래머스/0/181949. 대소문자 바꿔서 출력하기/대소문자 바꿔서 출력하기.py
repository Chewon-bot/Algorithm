# str = input()
# print(str.swapcase())

# print(input().swapcase()) 이것도 있는데 "아니….이건 논리적인 사고를 하려는데 아무런 도움이 안되잖아좋은 메서드다. 근데 코딩테스트 공부할 때는 도움안되는 방식의 풀이"라고 함
# 코테 공부할 때 도움 되게 풀기...
# 1-1.
# def swap_case(text):
    # result = []
    # for char in text: 
        # if 'a' <= char
        
# 2-1.
str = input() # 사용자 입력
for i in str: # 입력 문자열의 각 문자를 순회
    if i.islower(): # 소문자인 경우
        print(i.upper(), end = '') # 대문자로 변환 후 출력 (end = '' 로 줄바꿈 없이)
    else: # 대문자, 또는 소문자가 아닌 경우
        print(i.lower(), end = '') # 소문자로 변환 후 출력
        # 해당 문제는 lower 또는 upper 메서드를 문자열처럼 사용하려는 실수에서 비롯된 것입니다. Python에서는 메서드를 호출하려면 괄호 ()를 사용해야 합니다. 그렇지 않으면 메서드 자체(객체로서)가 출력되게 됩니다.
        
# 2-2.
# Code using list comprehension
# 리스트 컴프리헨션(List Comprehension)은 리스트를 생성하는 간결한 방법. 보통 for 루프를 사용해 리스트를 만들 때보다 코드가 더 짧고 읽기 쉬운 형태로 표현할 수 있습니다.
# 리스트 컴프리헨션은 기존 for 루프나 조건문을 한 줄로 표현할 수 있도록 도와줍니다.
# 기본 문법: 
# [표현식 for 항목 in 반복 가능한 객체 if 조건]
# 표현식: 각 항목에 대해 처리할 작업을 정의하는 부분
# for 항목 in 반복 가능한 객체: 반복할 대상(리스트, 문자열 등)
# if 조건 (선택적) : 조건에 맞는 항목만 포함시키도록 설정할 수 있습니다.

# 코드:
# str = input()
# print()
# [char.upper() if char.islower() else char.lower() for char in str]
