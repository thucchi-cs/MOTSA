a = ''
s = []
s2 = []
while a != '0':
    a = input().strip()
    a2 = input().strip()
    s.append(a)
    s2.append(a2)

for i in range(len(s)):
    s1 = s[i]
    s22 = s2[i]
    s3 = s1[:]
    s3 = s3.lower()
    s3 = s3.replace(' ', '-')
    s3 = s3.replace("''", '')
    s3 += '.pdf'
    print(f"('high', '{s1}', '{s22}', FALSE, FALSE, 'None', '{s3}'),")

