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

6. **What is printed by line 9?** `Error` (specifically `TypeError: Assignment to constant variable`)
   * **Explanation:** While `const` has the same block scope as `let` (meaning line 9 is inside the correct block), `const` variables cannot be reassigned after their initial declaration. On line 7, the code attempts to reassign `result` to the sum of `num1 + num2`, which triggers a TypeError.

7. **What is printed by line 13?** `Error` (specifically `ReferenceError: result is not defined`)
   * **Explanation:** Even if the reassignment error on line 7 didn't exist, line 13 would still fail because `const` is **block-scoped**. The variable `result` only exists within the curly braces `{ }` of the `if` statement. Once the code execution moves to line 13, `result` is no longer in scope.
