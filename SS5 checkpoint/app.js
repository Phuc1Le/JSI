// 9
let m = [1,2,3,4,5,6,"hh", "9",80,100]
let res = m.filter(check);
function check(element){
    return typeof element == 'number';
}
let ans = res.map(item => item*item);
console.log(ans)
// 10
let s = "High knowledge, high return";
let a = []
for(let i =0;i<s.length;i++){
    if(s[i]!="'")a[i] = s[i].toLowerCase();
}
console.log(a)
// 11
class People {
    constructor(name, age, address) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
}
class Student extends People{
    constructor(name, age, address, id, math, physical, chemistry){
        super(name, age, address);
        this.id = id;
        this.mathsc = math;
        this.physicalsc = physical;
        this.chemsc = chemistry;
    }
    GPA(){
        return (this.mathsc + this.physicalsc + this.chemsc)/3; 
    }
}
let Phuc = new Student("Phúc", 15, "Hà Nội", 26, 10, 10, 10);
console.log(Phuc.GPA())
// 12
class hinh{
    constructor(width, length){
        this.width = width;
        this.length = length;
    }
}
class hinhtg extends hinh{
    constructor(width, base){
        super(width);
        this.base = base;
    }
    area(){
        return this.width*this.base/2;
    }
}
class hcn extends hinh{
    constructor(width, length){
        super(width, length);
    }
    area(){
        return this.width*this.length;
    }
}
let h1 = new hinhtg(3,4);
console.log(h1.area())
let h2 = new hcn(3,4);
console.log(h2.area())
// 13
class Animal{
    constructor(name1, age1){
        this.name = name1;
        this.age = age1;
    }
}
class Zebra extends Animal{
    constructor(name1, age1, color1){
        super(name1, age1);
        this.color = color1;
    }
    message(){
        console.log('Chú ngựa vằn có tên là' , this.name , 'chú', this.age, 'tuổi và chú có màu', this.color);
    }
}
class Dolphin extends Animal{
    constructor(name, age, color){
        super(name, age);
        this.color = color;
    }
    message(){
        console.log('Chú cá voi có tên là' , this.name , 'chú', this.age, 'tuổi và chú có màu', this.color);
    }
}
let zeb = new Zebra("zeb", 5, "black and white");
zeb.message()
let dol = new Dolphin("dol", 5, "blue");
dol.message()