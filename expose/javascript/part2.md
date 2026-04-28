### Part 2: A Little More of a Challenge

1. **What will happen at line 12 and why?** It will print `3`.
   * **Explanation:** The variable `i` is declared using `var` within the `for` loop header. Because `var` has **function scope**, it is accessible anywhere within the `discountPrices` function, even after the loop has finished executing. The loop terminates when `i` is no longer less than `prices.length`. Since `prices` has 3 elements, the loop stops when `i` reaches 3, which is the value logged to the console.

2. **What will happen at line 13 and why?** It will print `150`.
   * **Explanation:** The variable `discountedPrice` is declared with `var` inside the `for` loop. Because `var` has **function scope**, it is not restricted to the block of the loop and is accessible anywhere within the `discountPrices` function. In the final iteration of the loop, `prices[2]` (300) is multiplied by `(1 - 0.5)`, resulting in 150. Since the variable persists after the loop ends, line 13 logs this final value to the console.

3. **What will happen at line 14 and why?** It will print `150`.
   * **Explanation:** The variable `finalPrice` is declared with `var` at the top of the function scope (line 4). Throughout the loop, it is updated during each iteration. Because `var` is **function-scoped**, the value assigned during the final iteration of the loop (where `discountedPrice` was 150, and rounding it resulted in 150) persists after the loop block finishes. Therefore, line 14 successfully accesses and logs that final value.

4. **What will this function return? Give a brief explanation why. If the code causes an error, explain why.** It will return `[50, 100, 150]`.  
   **Explanation:** The function successfully iterates through the input array. Even though `let` is used for block-scoping, the variable `discounted` is declared at the top of the function (line 3), so it remains in scope for the `return` statement at line 16. The calculations and array mutations (`.push()`) work as expected because the variables needed for the math are all within their respective blocks.

5. **What will happen at line 12 and why? If the code causes an error, explain why.** It will trigger an **Error** (specifically `ReferenceError: i is not defined`).
   **Explanation:** The variable `i` is declared using `let` within the `for` loop header (line 6). Because `let` is **block-scoped**, the variable `i` only exists within the curly braces `{}` of that loop. Once the loop finishes and execution moves to line 12, `i` is no longer in scope, so the engine cannot find it and throws a ReferenceError.

6. **What will happen at line 13 and why? If the code causes an error, explain why.** It will trigger an **Error** (specifically `ReferenceError: discountedPrice is not defined`).
   **Explanation:** The variable `discountedPrice` is declared using `let` inside the `for` loop block (line 7). Because `let` is **block-scoped**, the variable only exists within the curly braces `{}` of that loop. Once the loop finishes and execution reaches line 13, `discountedPrice` is no longer in scope, so the engine cannot find it and throws an error.

7. **What will happen at line 14 and why? If the code causes an error, explain why.** It will trigger an **Error** (specifically `ReferenceError: finalPrice is not defined`).
   **Explanation:** The variable `finalPrice` is declared using `let` inside the `for` loop block (line 4). Because `let` is **block-scoped**, the variable only exists within the curly braces `{}` of that loop. Once the loop finishes and execution reaches line 14, `finalPrice` is no longer in scope, so the engine cannot find it and throws an error.

8. **What will this function return? Give a brief explanation why. If the code causes an error, explain why.** It will return `[50, 100, 150]`.
   **Explanation:** Despite the fact that previous `console.log` statements (lines 12-14) would cause errors if they weren't commented out, the actual logic of the function is sound. The variable `discounted` is declared with `let` at the function level (line 3), meaning it is in scope for the `return` statement at line 16. The calculations inside the loop correctly populate the array, and the function successfully returns that array of discounted prices.

9. **What will happen at line 11 and why? If the code causes an error, explain why.** It will trigger an **Error** (specifically `ReferenceError: i is not defined`).
   **Explanation:** The variable `i` is declared using `let` in the `for` loop header (line 6). Because `let` provides **block scope**, `i` only exists within the curly braces `{}` of the loop. Once the loop finishes and execution reaches line 11, `i` is no longer in scope, so the engine cannot find it.

10. **What will happen at line 12 and why? If the code causes an error, explain why.** It will print `3`.
   * **Explanation:** The variable `length` is declared with `const` at the top of the function block (line 4). Because it is declared within the function's scope (and outside the `for` loop), it remains accessible throughout the entire function. Since the input array `prices` has three elements, `prices.length` is 3, and that constant value is successfully logged to the console at line 12.
  
11. **What will this function return? Give a brief explanation. If the code causes an error, explain why.** It will return `[50, 100, 150]`.
    * **Explanation:** The function executes successfully because all variables used in the final return statement and the loop logic are in their proper scopes. Although `discounted` is declared with `const`, it is an array; in JavaScript, `const` prevents the **reassignment** of the variable to a new memory address, but it allows for **mutation** (like using `.push()`). Therefore, the array is populated during the loop iterations and returned at line 14 without any errors.

12. **Given the above Object, write the notation for:**

    * **A. Accessing the value of the name property in the student object:** `student.name`
    * **B. Accessing the value of the Grad Year property in the student object:** `student['Grad Year']`  
      *(Note: Bracket notation is required here because the property name contains a space.)*
    * **C. Calling the function for the greeting property in the student object:** `student.greeting()`
    * **D. Accessing the name property of the object in the Favorite Teacher property in student:** `student['Favorite Teacher'].name`
    * **E. Access index zero in the array of the courseLoad property of the student object:** `student.courseLoad[0]`
   
# Part 2: Basic Operators, Loops, and Functions

### 13. Arithmetic
| Expression | Output | Explanation |
| :--- | :--- | :--- |
| **'3' + 2** | `'32'` | The binary `+` operator triggers string concatenation when one operand is a string. The integer `2` is coerced into a string. |
| **'3' - 2** | `1` | The `-` operator only works with numbers. JavaScript coerces the string `'3'` into the number `3` to perform the math. |
| **3 + null** | `3` | `null` is converted to `0` when used in a numeric context. |
| **'3' + null** | `'3null'` | The `+` operator sees a string and coerces `null` into the string `'null'` for concatenation. |
| **true + 3** | `4` | `true` is coerced to the number `1` in a numeric context. |
| **false + null** | `0` | Both `false` and `null` map to the number `0` in a numeric context. |
| **'3' + undefined** | `'3undefined'` | `undefined` is coerced into the string `'undefined'` for concatenation with `'3'`. |
| **'3' - undefined** | `NaN` | Subtraction requires numbers. `undefined` converted to a number is `NaN` (Not a Number). Any math with `NaN` results in `NaN`. |

---

### 14. Comparison
| Expression | Output | Explanation |
| :--- | :--- | :--- |
| **'2' > 1** | `true` | The string `'2'` is coerced into the number `2` for a numeric comparison. |
| **'2' < '12'** | `false` | When comparing two strings, JavaScript uses lexicographical (alphabetical) order. `'2'` is "greater" than `'1'` (the first character of `'12'`). |
| **2 == '2'** | `true` | Loose equality (`==`) performs type coercion, converting the string `'2'` to the number `2`. |
| **2 === '2'** | `false` | Strict equality (`===`) does not perform coercion; since the types differ, it returns false. |
| **true == 2** | `false` | `true` is coerced to `1`. `1 == 2` is false. |
| **true === Boolean(2)** | `true` | `Boolean(2)` is `true` (non-zero numbers are truthy). Both are type `boolean` and value `true`. |

---

### 15. Equality Operators
* **`==` (Loose Equality):** Compares values for equality after converting both values to a common type (Type Coercion).
* **`===` (Strict Equality):** Compares both the **value** and the **type**. If the types are different, it immediately returns `false`.

---

### 16. for...in loop
*See `part2-question16.js` for the implementation.*

---

### 17. Callback Trace (modifyArray)

**Result:** `[2, 4, 6]`

**Explanation:**
1. The function `modifyArray` is called with the array `[1, 2, 3]` and the function `doSomething` as the `callback` argument.
2. A new empty array `newArr` is initialized on line 2.
3. The `for` loop iterates through each element of the input array:
   - **Iteration 1:** `i` is 0, `array[i]` is 1. It calls `callback(1)`, which executes `doSomething(1)`. This returns `2` (1 * 2), which is pushed into `newArr`.
   - **Iteration 2:** `i` is 1, `array[i]` is 2. It calls `callback(2)`, which executes `doSomething(2)`. This returns `4` (2 * 2), which is pushed into `newArr`.
   - **Iteration 3:** `i` is 2, `array[i]` is 3. It calls `callback(3)`, which executes `doSomething(3)`. This returns `6` (3 * 2), which is pushed into `newArr`.
4. Once the loop is complete, the function returns the populated `newArr`, which is `[2, 4, 6]`.

---

### 18. setInterval
*See `part2-question18.js` for the implementation.*

---

### 19. What is the output of the above code?
**Output:**

1
4
3
2

**Brief Explanation:**
1. `console.log(1)` is a synchronous operation and prints immediately.
2. `setTimeout` for `2` is scheduled to run after 1000ms and is sent to the browser's timer API.
3. `setTimeout` for `3` is scheduled with 0ms. However, because it is an asynchronous callback, it is placed in the **Task Queue** and must wait for the current execution stack to finish.
4. `console.log(4)` is a synchronous operation and prints immediately after `1`.
5. The execution stack is now empty, so the **Event Loop** pushes the first available task from the queue (`console.log(3)`) to the stack.
6. Finally, after the 1000ms timer expires, `console.log(2)` is pushed to the queue and then executed.



