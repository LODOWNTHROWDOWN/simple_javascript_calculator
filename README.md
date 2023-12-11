This JavaScript program performs the following actions (in sequence,
step-by-step):
1. Welcomes the visitor with an alert
2. Prompts the visitor for his/her name
3. Displays the visitor’s name with an alert
4. Asks the visitor to enter a list of numbers (positive and negative numbers are
   allowed) with a prompt
   b. These numbers are stored into an array
5. A function is used to perform the following actions:
   a. Iterates through the array of numbers the visitor entered.
   b. Compares the current number and the next number (if any) in the array. If
   the current number is larger than or equal to the next number, then the
   current number is added to a new array. This process is repeated for all numbers in the
   array. The last number in the array is always included in the new array.
   c. Adds all the numbers in the new array together and returns the total.
6. Displays the total to the visitor with an alert.
7. Uses conditional logic:
   a. If the total is greater than 50:
   i. Alert: “That is a big number.”
   b. If the total is less than or equal to 50
   i. Alert: “That is a small number.”
8. Uses a loop to prompt and ask if the visitor wants to continue adding more numbers again,
   if yes, the visitor is able to provide a new set of numbers again and produce the
   result with an alert (steps 4-7 repeat)