

interface Email{
   type: 'email'; 
   to: string; 
   subject: string
}

interface Sms{
   type: 'sms'; 
   to: string; 
   phone: string
}
interface Push{
   type: 'push'; 
   to: string; 
   deviceId: string
}



let test1: Email= { type:'email',to:'kevin', subject:'message'}
let test2= {type: 'tablet', to: "nova", phone:'0789678'}


function assertNever(x: never): never{
  throw new Error(`type inserted doesn't exist`);
}

type Notification1 = Email|Sms|Push;
 
function sendNotification(n: Notification1): void{
  switch(n.type){
    case 'email':
      console.log(`email to ${n.to} subject ${n.subject}`);
      break;
    case 'sms':
      console.log(`sms sent to ${n.to} subject ${n.phone}`);
      break;
    case 'push':
      console.log(`sms sent to ${n.to} subject ${n.deviceId}`);
      break;
    default:
      assertNever(n)
  }
}


sendNotification(test1);
//sendNotification(test2);