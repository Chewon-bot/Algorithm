str_raw = input()
str_processed = str_raw.split()
plus_val = 0
for i in str_processed:
    plus_val += int(i)
print(plus_val)