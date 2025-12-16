def add(x, y):
    return x+y

def subtract(x, y):
    return x-y

def multiply(x, y):
    return x*y

def quotient(x, y):
    if y == 0:
        return float('inf')
    return x//y

def remainder(x, y):
    return x % y

A, B = map(int, input().split())
for function in (add, subtract, multiply, quotient, remainder):
    print(function(A, B))