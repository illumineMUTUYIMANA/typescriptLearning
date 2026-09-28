type Users={
  name:string
  age:number
}

function validateUser(user:unknown):Users{
  console.log(typeof(user))
  if (!user || user === null || typeof(user)!=='object'){
    throw new Error('no user provided');
  }else {
    let userData = user as any;
    if(typeof(userData.name)==='string'&& typeof(userData.age)==='number'){
      return user as Users;
    }else{
      throw new Error(`A user name must be string and age must be a number`);
    }
  }
}

type PartialUser= Partial<Users>;

console.log(validateUser({name:'alive'}));