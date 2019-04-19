// this and global

var car = {
    name: "BMW",
    year: 2019,
    printDetail:function(){
        console.log(this.name + this.year );
    }
}

function fullName(){
    console.log(this.fname + " " + this.lname);
}

var customerOne = {
    fname:"sujan",
    lname:"sharma",
    print: fullName
}

var customerTwo = {
    fname: "Ravi",
    lname: "sharma",
    print: fullName

}
customerOne.print();
customerTwo.print();
console.log(this);