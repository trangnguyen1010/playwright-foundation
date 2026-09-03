// interface User1{
//     username: string
//     password: string
//     active: boolean
//     email?: string
// }

// const users:User1[] = [
//     {
//         username: "student", 
//         password: "Password123",
//         active: true
//     },
//     {
//         username: "lockedUser",
//         password: "lockedUser",
//         active: false
//     },
//     {
//         username: "admin",
//         password: "Password123",
//         active: true
//     }
// ]

// function getActiveUsers():User1[]{
//     return users.filter(user => user.active)
// }

// const activeUsers = getActiveUsers()
// // console.log(activeUsers)

// function login1(user:User1): void{
//     if(!user.active){
//         console.log("Account Locked")
//     }
//     else {
//         console.log("Login success")
//     }
// }

// // for(const user of users){
// //     login(user)
// // }

// interface Product{
//     productName: string
//     productType: string
//     productQuantity: number
//     availableProduct: boolean
// }

// const products:Product[] = [
//     {
//         productName: "product1",
//         productType: "type1",
//         productQuantity: 10,
//         availableProduct: true
//     },
//     {
//         productName: "product2",
//         productType: "type2",
//         productQuantity: 10,
//         availableProduct: true
//     },
//     {
//         productName: "product3",
//         productType: "type3",
//         productQuantity: 10,
//         availableProduct: false
//     },
//     {
//         productName: "product4",
//         productType: "type4",
//         productQuantity: 10,
//         availableProduct: true
//     },
//     {
//         productName: "product5",
//         productType: "type5",
//         productQuantity: 10,
//         availableProduct: false
//     }
// ]


// function filterAvailableProducts(products:Product[]): Product[]{
//     return products.filter(product => product.availableProduct)
// }

// // const availableProducts = filterAvailableProducts(products)

// // for(const product of availableProducts){
// //     console.log(`Product ${product.productName} is still available`)
// // }

// interface Employee{
//     id: number
//     name: string
//     department: string
//     salary: number
//     isActive: boolean
//     email?: string
// }

// const employees:Employee[] = [
//     {
//         id: 1234,
//         name: "Trang",
//         department: "QA",
//         salary: 5000,
//         isActive: true,
//         email: "employee1@test.com"
//     },
//     {
//         id: 1235,
//         name: "employee-2",
//         department: "engineer",
//         salary: 4000,
//         isActive: true,
//         email: "employee2@test.com"
//     },
//     {
//         id: 1236,
//         name: "employee-3",
//         department: "engineer",
//         salary: 6000,
//         isActive: true,
//         email: "employee3@test.com"
//     },
//     {
//         id: 1237,
//         name: "employee-4",
//         department: "HR",
//         salary: 5000,
//         isActive: false,
//         email: "employee4@test.com"
//     },
//     {
//         id: 1238,
//         name: "employee-5",
//         department: "HR",
//         salary: 7000,
//         isActive: false,
//         email: "employee5@test.com"
//     }
// ]

// function getEmployeesWithHighSalary(employees:Employee[], minimumSalary: number): Employee[]{
//     return employees.filter(employee => employee.salary >= minimumSalary)
// }

// const highSalaryEmployees = getEmployeesWithHighSalary(employees, 6000)
// console.log(highSalaryEmployees)

// function getQAEmployees(employees:Employee[]): Employee[]{
//     return employees.filter(employee => employee.department === "QA")
// }

// const qaEmployees = getQAEmployees(employees)
// // console.log(qaEmployees)

// function increaseSalary(employee: Employee, amount: number): Employee {
//     // employee.salary += amount
    
//     return {
//         ...employee,
//         salary: employee.salary + amount
//     }
// }
// for(const employee of employees){
//     // console.log(increaseSalary(employee, 500))
//     // console.log(employee.salary)
// }

// function login(employee:Employee):boolean{
//     return employee.isActive
// }

// // for(const employee of employees){
// //     if(login(employee)){
// //         console.log("Login success")
// //     }
// //     else{
// //         console.log("Login failed")
// //     }
// // }

// function findEmployeeById(employees:Employee[], id: number):Employee | undefined {
//     return employees.find(employee => employee.id === id)
// }

// const findEmployee1 = findEmployeeById(employees, 1237)
// // console.log(findEmployee)


// function getActiveEmployees(employees:Employee[]): Employee[]{
//     return employees.filter(employee => employee.isActive)
// }

// const activeEmployees = getActiveEmployees(employees)
// // console.log(activeEmployees)


// function printEmployee(employee:Employee): void{
//     if(employee.name == "Trang"){
//         console.log(employee)
//     }
// }
// // for(const employee of employees){
// //    printEmployee(employee)
// // }


// interface LoginUser{
//     username: string
//     password: string
//     role: string
//     isActive: boolean
// }

// function validateLogin1(user:LoginUser): string{
//     if(!user.isActive){
//         return "ACCOUNT_LOCKED"
//     }
//     if(user.role !== "QA"){
//         return "INVALID_ROLE"
//     }
//     return "LOGIN_SUCCESS"
// }

// interface User2{
//     username: string
//     password: string
//     role: string
//     isActive: boolean
// }

// function isUserActive(user: User2):boolean{
//     return user.isActive
// }

// function hasValidRole(user: User2, role: string): boolean{
//     return user.role === role
// }

// function validatePassword(user: User2, password: string):boolean{
//     return user.password === password
// }

// function validateLogin(user: User2, role: string): LoginStatusTest{
//     if(!user.isActive){
//         return "ACCOUNT_LOCKED"
//     }
//     if(user.role !== role){
//         return "INVALID_ROLE"
//     }
//     return "LOGIN_SUCCESS"
// }

// type UserRole = "QA" | "Developer" | "Admin"
// type LoginStatusTest = "LOGIN_SUCCESS" | "ACCOUNT_LOCKED" | "INVALID_ROLE" | "INVALID_PASSWORD"

// interface Product1{
//     name: string
//     quantity: number
// }

// type ProductStatus = "IN_STOCK" | "LOW_STOCK" | "OUT_OF_STOCK"

// function getProductStatus(product: Product1):ProductStatus{
//     if(product.quantity === 0){
//         return "OUT_OF_STOCK"
//     }
//     if(product.quantity < 5){
//         return "LOW_STOCK"
//     }
//     return "IN_STOCK"
// }

// function identity<T>(value: T): T{
//     return value
// }

// const nameTest = identity("Trang")
// const numberTest = identity(123)
// const booleanTest = identity(true)

// function getLastItem1<T>(items: T[]): T{
//     return items[items.length - 1]
// }

// const lastItem1 = getLastItem1([1,2,3])

// interface Employee{
//     name: string
// }

// interface ApiResponse<T>{
//     success: boolean
//     data: T
// }

// interface User{
//     username: string
//     role: string
// }

// const users3: User[] = [
//     {
//         username: "Trang",
//         role: "QA"
//     },
//     {
//         username: "John",
//         role: "Developer"
//     }
// ]

// const response: ApiResponse<User> = {
//     success: true,
//     data: {
//         username: "Trang",
//         role: "QA"
//     }
// }

// function getFirstItem<T>(items: T[]): T | undefined{
//     return items[0]
// }

// function getLastItem<T>(items: T[]): T | undefined{
//     return items[items.length - 1]
// }

// const firstItem = getFirstItem([1,2,3])
// const lastItem = getLastItem(["first", "second", "third"])
// const firstItemUndefined = getFirstItem([]) // undefined
// const lastItem2 = getLastItem(users3) 
// ///// mini project 2:

// function findItemById<T extends {id: number}>(items: T[], id: number): T | undefined{
//     return items.find(item => item.id === id)
// }

// interface Employee2{
//     id: number
//     name: string
//     department: string
//     }
// interface Product2{
//     id: number
//     name: string
//     price: number
// }

// const employees2: Employee2[] = []
// const products2: Product2[] = []

// const findEmployee = findItemById(employees, 1234)
// const findProduct = findItemById(products2, 5678)

// interface Product10{
//     id: number
//     name: string
//     price: number
//     quantity: number
// }
// function updateProduct(product: Partial<Product10>){
//     return product
// }

// const updatedPrice = updateProduct({price: 20 })
// const updatedQuantity = updateProduct({quantity: 10})
// const updatedInfo = updateProduct({name: "New Product", price: 30})

// interface Employee3{
//     id?: number
//     name?: string
//     department?: string
// }

// type FullEmployee = Required<Employee3>

// const fullEmployee: FullEmployee = {
//     id: 1234,
//     name: "Trang",
//     department: "QA"
// }

// interface TestResult{
//     status: string
//     responseTime: number
// }

// const result: Readonly<TestResult> = {
//     status: "PASS",
//     responseTime: 200
// }

// console.log(result.status="FAIL") // Error: Cannot assign to 'status' because it is a read
// interface User{
//     username: string
//     password: string
//     role: string
//     isActive: boolean
// }

// type UpdateUser = Partial<User>
// type LoginUser = Pick<User, "username" | "password">

// type PublicUser = Omit<User, "password">
// type UserSummary = Pick<User, "username" | "role">

// interface User {
//     id: number
//     username: string
//     password: string
//     role: "QA" | "Developer" | "Admin"
//     isActive: boolean
//     email: string
//     createdAt: string
// }
// type LoginRequest = Pick<User, "username" | "password">
// type CreateUserRequest = Pick<User, "username" | "email" | "password" | "role">
// type UpdateUserRequest = Partial<Pick<User, "username" | "email" | "role" | "isActive">>
// type PublicUser = Omit<User, "password">
// type UserSummary = Pick<User, "id" | "username" | "role" | "isActive">
// type ReadonlyUserResponse = Readonly<PublicUser>


// const users: User[] = [
//     {
//         id: 1,
//         username: "Trang",
//         email: "trang@email.com",
//         password: "123456",
//         role: "QA",
//         isActive: true,
//         createdAt: "2026-07-17"
//     },
//     {
//         id: 2,
//         username: "Michael",
//         email: "michael@email.com",
//         password: "abcdef",
//         role: "Developer",
//         isActive: true,
//         createdAt: "2026-07-16"
//     },
//     {
//         id: 3,
//         username: "John",
//         email: "john@email.com",
//         password: "password",
//         role: "Admin",
//         isActive: false,
//         createdAt: "2026-07-15"
//     }
// ]

// function toPublicUser(user:User): PublicUser{
//     const {
//         password,
//         ...publicUser
//     } = user
//     return publicUser
// }

// function login(request: LoginRequest, users:User[]): PublicUser | undefined{
//     const user = users.find(user => user.username ===request.username && user.password === request.password &&  user.isActive)
//     if(!user){
//         return undefined
//     }

//     return toPublicUser(user)
// } 
// const loginResult = login(
//     {
//         username: "Trang",
//         password: "123456"
//     },
//     users
// )
// function createUser(request: CreateUserRequest, users: User[]): PublicUser{
//     // Implementation for creating a new user
//     const newUser:User = {
//         id: Math.floor(Math.random() * 1000),
//         isActive: true,
//         createdAt: new Date().toISOString(),
//         ...request
//     }
//     users.push(newUser)
//     return toPublicUser(newUser)
// }

// const createdUser = createUser({
//     username: "Alice",
//     email: "alice@email.com",
//     password: "alice123",
//     role: "Developer"
// }, users)
// function updateUser(id: number, updates: UpdateUserRequest, users:User[]): PublicUser | undefined{
//     const searchUser = users.find(user => user.id === id)
//     if(!searchUser){
//         return undefined
//     }
//     Object.assign(searchUser, updates)
//     return toPublicUser(searchUser)
// }
// function getUserSummary(users: User[]): UserSummary[]{
//     return users.map(user => ({
//         id: user.id,
//         username: user.username,
//         role: user.role,
//         isActive: user.isActive
//     }))
// }

class Product{
    constructor(
        public name: string,
        public price: number
    ){}
    displayInfo(){
        console.log(`Product: ${this.name}, Price: ${this.price}    `)
    }
}

const product = new Product("iPhone", 1500)
// product.displayInfo() // Output: Product: iPhone, Price: 1500 

class Employee{
    constructor(
        public name: string,
        public position: string,
        public salary: number
    ){}

    work(){
        console.log(`${this.name} is working as ${this.position}`)
    }

    getSalary(): number{
        return this.salary
    }
}

const employee = new Employee("Trang", "QA Engineer", 5000)
// employee.work() // Output: Trang is working as a QA Engineer
// console.log("Salary:", employee.getSalary()) // Output: 5000

class LoginPage{
    constructor(
        public url: string
    ){}

    goto(){
        console.log(`Opening ${this.url}`)
    }

    login(username: string, password: string){
        console.log(`Logging in with username: ${username} and password: ${password}`)
    }
}

const loginPage = new LoginPage("https://example.com/login")

loginPage.goto() // Output: Opening https://example.com/login
loginPage.login("Trang", "123456")