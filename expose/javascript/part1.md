# Part 1: Variables & Scoping

### var declaration

1. **What is printed by line 9?** `values added: 20`
   * **Explanation:** The variable `result` is declared using `var`, which has **function scope**. Since the `if (add)` condition is true, the code block executes, calculates the sum of 10 and 10, and logs it to the console.

2. **What is printed by line 13?** `final result: 20`
   * **Explanation:** Because `var` is function-scoped rather than block-scoped, the variable `result` is still accessible anywhere within the `sumValues` function, even after the `if` block has closed.

3. **Why should you not use var? Explain why.**
   `var` is generally avoided in modern JavaScript because its function-scoping leads to "leaky" variables that can be accessed outside of the blocks (like `if` statements or loops) where they were defined. This often causes naming conflicts, accidental redeclarations, and bugs related to "hoisting." Using `let` and `const` is preferred because they provide **block scope**, making the code more predictable and easier to debug.

### let declaration

4. **What is printed by line 9?** `values added: 20`
   * **Explanation:** The variable `result` is declared with `let`, which is **block-scoped**. Since line 9 is located inside the same `if` block where `result` was defined, it has access to the variable and logs the correct sum.

5. **What is printed by line 13?** `Error` (specifically `ReferenceError: result is not defined`)
   * **Explanation:** Unlike `var`, `let` variables are restricted to the block in which they are declared (the curly braces `{ }` of the `if` statement). Because line 13 is outside of that `if` block, `result` is out of scope and the engine cannot find the variable, resulting in an error.

### const declaration
6. **What is printed by line 9?** `values added: 20`  
   *Explanation:* Like `let`, `const` is block-scoped. Line 9 is within that scope.

7. **What is printed by line 13?** `Error` (ReferenceError: result is not defined)  
   *Explanation:* `const` variables are also block-scoped. Line 13 is outside the `if` block, so it cannot access `result`.
