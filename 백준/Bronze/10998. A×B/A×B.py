def multiply_two_ints(x: int, y: int) -> int:
    """Return the multiplication of two input integers.
    
    Parameters
    ----------
    x: int
        An integer greater than 0.
        
    y: int
        An integer less than 10.
    
    Returns
    -------
    int
        An integer that is the result of the multiplication of two integers.
    """
    return x*y

A, B = map(int, input().split())
print(multiply_two_ints(A, B))
