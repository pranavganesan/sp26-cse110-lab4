# Part 1: Variables & Scoping

### var declaration
1. **What is printed by line 9?** `values added: 20`  
   *Explanation:* Since `var` is function-scoped and the condition `add` was true, `result` was initialized and assigned the value of 20. Line 9 is within the scope.

2. **What is printed by line 13?** `final result: 20`  
   *Explanation:* Because `var` does not have block scope, the variable `result` "leaks" out of the `if` block and remains accessible anywhere within the `sumValues` function.

3. **Why should you not use var?** `var` can lead to many bugs because it allows for variable redeclaration and lacks block-scoping. This often results in variables being accessible in places they shouldn't be, leading to naming conflicts and confusing logic.

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
