let a1: number = 123
a1 = undefined
a1 = null
let a2: string = 'sdf'
a2 = undefined
a2 = null

function fn(x: number | string) {
  if ((<string>x).length) {
    return (x as string).length
  } else {
    return x.toString.length
  }
}

let a3          //any
a3 = 111
a3 = 'ddd'
a3 = true
let a4 = 111    //number
// a4 = 'st'

interface IPerson {
  readonly id: number
  name: string
  age: number
  sex?: string
}
const p1 = {
  id: 1,
  name: 'a',
  age: 11,
  sex: 'female'
}
const p2 = {
  id: 2,
  name: 'b',
  age: 12
}
p1.name = 'aaa'
// p1.id=3

// 方法一
const arr1: string[] = ['a', 'b', 'c']
// 方法二
const arr2: Array<string> = ['a', 'b', 'c']
// 任意类型，不建议使用
const arr3: any[] | Array<string> = ['a', 1, false]

let arr: [number, string] = [1, 'a']
arr.push(23)
// arr.push(true)  //no

// 1
function fn1(x: string): number {
  return 2
}
// 2
const fn2 = function (x: number): string {
  return 'aaa'
}
const fn3 = (x: number): string => {
  return 'aaa'
}
// 3
function fn4(x: number, y?: string) {
  console.log('fn4', x, y)
}
fn4(34, 'bbb')
fn4(35)
// 4
function fn5(x: string, y: number = 1) {
  console.log('fn5', x, y)
}
fn5('bbb')
// 5
function fn6(x: string, ...args: any[]) {
  console.log('fn6', x, args)
}
fn6('bbb', 3, true)

function createArray(length: number, value: any): Array<any> {
  let result = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
createArray(3, 'x')

function createArray2<T>(length: number, value: T): Array<T> {
  let result: Array<T> = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
const arr0=createArray2<string>(3,'x')