# #2 Fibonacci sequence

## Problem

เลขจำนวนฟีโบนัชชี คือจำนวนต่างๆ ที่อยู่ในลำดับจำนวนเต็มดังต่อไปนี้

`0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946 ...`

หากเขียนให้อยู่ในรูปของสัญลักษณ์ ลำดับ `F(n) = F(n - 1) + F(n - 2)` โดยกำหนดให้ค่า `F(0) = 0, F(1) = 1`

ให้หาลำดับของตัวเลขจำนวนเต็ม X ในเลขจำนวนฟีโบนัชชี ซึ่งถ้าตัวเลขจำนวนเต็ม X ไม่อยู่ในเลขจำนวนฟีโบนัชชีให้ตอบว่า "None"

## Input

Array ของตัวเลขจำนวนเต็ม X โดยที่ X มาค่ามากกว่า 1 เสมอ

## Output

Array ลำดับของตัวเลขจำนวนเต็ม X ที่อยู่ในเลขจำนวนฟีโบนัชชี หรือ "None" หากตัวเลขจำนวนเต็ม X ไม่อยู่ในเลขจำนวนฟีโบนัชชี

## Example

### Input

```json
[377, 21, 40]
```

### Output

```json
[14, 8, "None"]
```