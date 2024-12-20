a, b = map(int, input().strip().split(' '))
print(f"a = {a} \nb = {b}")
# / 와 \는 다르다
# print("a = " + str(a) +"\nb = " + str(b))
# TypeError: can only concatenate str (not "int") to str 에러는 문자열과 정수를 더하려고 할 때 발생합니다. Python에서는 문자열과 숫자를 직접 연결할 수 없습니다. 이 문제를 해결하려면 정수를 문자열로 변환해야 합니다.