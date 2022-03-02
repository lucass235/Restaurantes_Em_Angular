export class User {
  constructor(public email: string,
              public name: string,
              private password: string) {

  }

  matches(another: User): boolean {
    return another !== undefined &&
    another.email === this.email &&
    another.password === this.password
  }
}

export const users: {[key: string]: User} = {
  "lucas@gmail.com": new User("lucas@gmail.com", "Lucas dos Santos", "123"),
  "rhay@gmail.com": new User("rhay@gmail.com", "Rhaylene", "321")
}
