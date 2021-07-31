# interview-question-rearrange-words

## _Rearrange words_


1) Arrange the words in alphabetical order based on only the "first" character (not the second character and further characters).
2) If two words are starting with the same character then the same order of the words should be maintained from the original sentence. 



## Constraints for this problem:


    Use char[] or Character[] array for the input and output. (e.g., avoid in-built java.lang.String or similar class to represent 'string', instead use char[] to solve the problem). 
    e.g., 
       Java: 
              char input[] = "The domestic dog is a domesticated form of wolf".toCharArray() 
       Python: 
              input = list('The domestic dog is a domesticated form of wolf')
       Javascript:
              input = Array.from('hello')

Example 1:
Input: 
       this is an impossible task -- \\--
Output: 
       an is impossible this task

       Explanation:
       'a' is the lowest, followed by 'i' and 't' character.
       an - first word because of 'a'
       'is impossible' - 'is' comes before 'impossible' since 'is' appears in the orginial sentence before 'impossible'.
       'this task' - 'this' comes before 'task' since 'this' appears in the orginial sentence before 'task'.

Example 2:
Input: 
       the domestic dog is a domesticated form of wolf  --\\--
Output:
       a domestic dog domesticated form is of the wolf
