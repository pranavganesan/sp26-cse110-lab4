
# DevTools - Debugging

### Screenshots
* **Breakpoint at result initialization:** `expand/screenshots/result-calculateSum.png`
* **Watch expressions showing data types:** `expand/screenshots/result-dataType.png`
* **Screenshot of the code fix:** `expand/screenshots/fix.png`

---

### 1. What was the bug?
The bug was a **data type mismatch** (specifically, string concatenation instead of mathematical addition). 

In JavaScript, the `.value` property of an HTML input element always returns a **String**. When the `+` operator is used with strings, it performs **concatenation** (joining the characters together). Therefore, when inputs like `2` and `3` were passed into the function, the code calculated `"2" + "3"`, which resulted in the string `"23"`.

### 2. How would you fix it?
The fix is to explicitly convert (or "cast") the string inputs into **Numbers** before the addition operation takes place. This ensures the `+` operator treats the values as mathematical integers rather than text.

**The corrected code line:**
```javascript
let result = Number(num1) + Number(num2);
