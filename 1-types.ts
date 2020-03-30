const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const messsage: string = 'Hello Typescript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8] // generic types

// Tuple type
const contact: [string, number] = ['Serhii', 123456]

// Any type
let variable: any = 42
variable = 'Nes String'

// ======
function sayMyName(name: string): void {
  console.log(name)
}
sayMyName('Serhii')

 // Type
 type Login = string
 const login: Login = 'admin'

 type ID = string | number
 const id1: ID = 1234
 const id2: ID = '1234'
//  const id3: ID = true

// null and underfine
type SomeType = string | null | undefined