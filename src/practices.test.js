import { capitalize, reverseString, calculator } from "./funcs";

test('Test failed', () =>{
    expect(capitalize("trial")).toMatch(/^[A-Z][a-z]*$/);
})

test('Test failed', () =>{
    expect(reverseString("hello")).toBe("olleh")
})

test('add', () =>{
    expect(calculator.add(1,2)).toBe(3)
})

test('subtract', () =>{
    expect(calculator.subtract(3,2)).toBe(1)
})

test('multiply', () =>{
    expect(calculator.multiply(1,2)).toBe(2)
})