input=list('The domestic dog is a domesticated form of wolf')

str1=''.join(input).casefold().split()

str2=''.join(input).casefold().split()
str2.sort()

for i in range(len(str2)):
    for j in range(i+1,len(str2)):
        if (str2[i][0]==str2[j][0]):
            if (str1.index(str2[i])>str1.index(str2[j])):
                temp =str2[i]
                str2[i]=str2[j]
                str2[j]=temp
answer = ' '.join(str2)
print(answer)