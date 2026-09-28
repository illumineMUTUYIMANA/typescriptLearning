type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

type UpdatedUser = Partial<User>

let nextUserId = 1
const users: User[] = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_smith", role: "contributor" },
    { id: nextUserId++, username: "alice_jones", role: "admin" },
    { id: nextUserId++, username: "charlie_brown", role: "member" },
];

function updateUser(id:number,Updates:UpdatedUser):void{
    let foundUser = users.find((user)=>user.id === id);
    if(!foundUser){
        throw new Error('user not found');
    }
    Object.assign(foundUser,Updates);
}

function addNewUser(newUser:Omit<User,"id">):User{
    let user = {
        id:nextUserId++,
        ...newUser
    }
    users.push(user);
    return user;
}
addNewUser({username :'ange', role: 'member'})

updateUser(1,{role: "contributor"})

console.log(users);