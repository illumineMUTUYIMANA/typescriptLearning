abstract class Shape2D{
  abstract area(): number
}

class Circle extends Shape2D{
  constructor(public radius: number){
    super()
  }
  area(): number {
      //console.log(`The area of the circle is : ${this.radius*Math.PI}`);
      return this.radius*this.radius*Math.PI;
  }
}

class Rectangle extends Shape2D{
  constructor(public width:number, public height:number){
    super()
  }
  area():number{
    return this.width*this.height;
  }
}

let circle1 = new Circle(10);
let rec = new Rectangle(3,4);

console.log(circle1.area())
console.log(rec.area())
