// A mock function to mimic making an async request for data

export const fetchUser = (name = "1") => {
  return new Promise<{ data: string }>(resolve =>
    setTimeout(() => resolve({ data: name} ), 500),
  )
}
// export const fetchFullUser = (user) => {
//   return new Promise<{ data: User }>(resolve =>
//     setTimeout(() => resolve({ data: {name: user.name} ), 500),
//   )
// }

