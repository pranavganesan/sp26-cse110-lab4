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
   *Explanation:* `let` is block-scoped. Since line 9 is within the same `if` block where `result` was declared, it can access the value.

5. **What is printed by line 13?** `Error` (ReferenceError: result is not defined)  
   *Explanation:* `let` variables only exist within the block they are defined in. Once the code execution leaves the `if` block (line 11), `result` is garbage collected and no longer exists.

### const declaration
6. **What is printed by line 9?** `values added: 20`  
   *Explanation:* Like `let`, `const` is block-scoped. Line 9 is within that scope.

7. **What is printed by line 13?** `Error` (ReferenceError: result is not defined)  
   *Explanation:* `const` variables are also block-scoped. Line 13 is outside the `if` block, so it cannot access `result`.
