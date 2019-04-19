// // //console.log(document);

// // /*  console.dir(document);
// // document.title = "Title is new"
// // console.log(document.title); */


// // // selectors
// // //1.select by id 

// // /*
// // var footerEl = document.getElementById("my-footer");
// // console.log(footerEl);

// // console.log(footerEl.innerText);

// // var aboutEl =document.getElementById("about-title-text");
// // aboutEl.innerText = 'About Us'
// // console.log(aboutEl);
// // console.log(aboutEl.innerText);  */

// // /*
// //  var testDivEl = document.getElementsByClassName("test-div");
// //  console.log(testDivEl)

// //  //console.log(testDivEl[2].innerText);

// //  for(let i=0; i<testDivEl.length; i++){
// //      testDivEl[i].style.color = "red";
// //      testDivEl[i].style.borderBottom = "1px blue solid";

// //      console.dir(testDivEl[i]);
// //     // console.log(testDivEl[i].innerText);
// //  }
// // */


// // //---query selector(),query selector All()

// // /*
// // var cardsEl = document.querySelectorAll('.card');
// // console.dir(cardsEl);
// // */

// // // parent child
// // /*
// // var childEl = document.getElementById("testOne");
// // console.dir(childEl);

// // var parentEl = childEl.parentNode;

// // console.dir(childEl.parentNode);
// // */


// // /*
// // function handleBtnClick(el){
// //     el.innerText = "clicked";
// //     console.dir(el);

// // }
// // */

// // /*

// // var clickBtn = document.getElementById("clickBtn");
// // var childEl = document.getElementById("testOne");
// // console.dir(childEl);

// // clickBtn.onclick =  function(){
// //     childEl.style.color = "red";
// //     childEl.style.fontSize = "150px";
// //     childEl.style.fontWeight = "bold";
// //     clickBtn.innerText= "Nicely clicked !!";
// //     console.log("clickedddd");
// // }
// // */

// // /*

// // //create new html element using  createElement()

// // var newP =document.createElement("p");

// // //assign new  class name to newly created paragraph element
// // newP.className="normal";

// // //setting inner text of paragraph element
// // newP.innerText = "This is new paragraphhhhhhhhhhhhhhhh!!!!";
// // console.dir(newP);

// // //setting up new attribute  and its  value 
// // newP.setAttribute("id","new-element");
// // console.log(newP);

// // var newEl =document.getElementById("new-element");
// // newEl.appendChild(newP);
// // */



// // /* wrong try.......
// // var clickHere = document.getElementById("clickHere");
// // var newclick = document.getElementById("newclick");
// // clickHere.onclick = function(){
// //     var newP = document.createElement("p");
// // newP.innerText = "This is new paragraph";
// // newP.setAttribute("id","new-click");
// // var newEl = document.getElementById("new-click");
// // newclick.appendChild(newP):
// // }
// //  */

// // /*
// // var textGeneratorBtn = document.getElementById("text-generator");
// // var generatedTextDiv = document.getElementById("generated-text");

// // textGeneratorBtn.onclick = function(){
// //     var newTextPara = document.createElement('p');
// //     newTextPara.innerText = "this is newly generated";
// //     generatedTextDiv.appendChild(newTextPara);
// // }

// // */
// // /*

// // var mynewBtn = document.getElementById("text-generator");
// // var generatedTextDiv = document.getElementById("generated-text");

// // textGeneratorBtn.ondblclick = function(){
// //   */
 
// // var newInput = document.querySelector("#id-name");
// // var typedValue = document.querySelector("#typedValue");
// // console.log(newInput);

// // newInput.onkeydown= function(e){
// //     var result =e.target.value;
// //    // typedValue.innerText = result;
// //     var integerResult =parseInt(result);

// //     if(isNaN(integerResult)){
// //         typedValue.innerText = "please enter valid number";

// //     }else{
// //         typedValue.innerText =result;
// //     }


// //     console.log(integerResult)
// //     // console.log(result);
// //     //console.log(typeof result);
// // }
    
   

// // Array methods.....
 var students =[
     {
         name:"sujan koirala",
         college:"swastik",
          dob:"1996",
      },
      {
         name:"rujan koirala",
         college:"IOE",
         dob:"1986",
      },
      {
         name:"pujan koirala",
         college:"samajik",
         dob:"1978",
      },
  ];

//  //array.map()

//  students.map(function(student, index, array){
//      console.log(index + " " + student.name);

//  });


//  var mappdeData = students.map(function(student){   //callback function//
//      return student.dob;
//  });

//  var arrayOne = [1,2,3,4,5,6];
//  var square = arrayOne.map(function(arr){    //callback function//
//      return arr*2;
//  });
// console.log(square);


//  console.log(mappdeData);





var studentList = document.querySelector("#student-list");
var studentTable = document.querySelector("#student-table");
console.log(studentList);

//looping through each array element
students.forEach(function(student, index){

    //creating li for each student
   // var listEl = document.createElement("li");

   studentTable.innerHTML += `
   <tr>
       <td>${index+1}</td>
       <td>${student.name}</td>
       <td>${student.college}</td>
       <td>${student.dob}</td>

   </tr>`

    /*
    listEl.innerText = student.name;
    studentList.appendChild(listEl);
    */
});

/*
//var forInnerHTML = document.querySelector("#forInnerHTML");
//forInnerHTML.innerHTML = "<h3>This is inserted HTML</h3><p>This is new insertefd paragraph</P>";
//forInnerHTML

*/



