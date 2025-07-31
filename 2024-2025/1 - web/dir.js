/*



        ************************************
                  Javascript       
        ************************************

        Important Note/s!
        1.) Control + "/" to comment
        2.) The position inside the HTML where we place the SCRIPT TAG MATTERS A HUGE DEAL
        3.) Common practice to put <script> tag at the end

        // ====================================
        //             Section 14
        // ====================================
        //    Introduction to Javascript ES6
        // ====================================


        Javascript - the Language that Powers the Web


        1.) Introduction to Javascript

            Netscape Navigator - the browser that dominated the 1900s 

            Mosaic Web Browser ---> Netscape Navigator ---> Mozilla Firefox

            Before...
            - in order to calculate stuff, it would send to the servers before
                    doing stuff
            - in order to be efficient, calculation must be run inside the browser
            - create a small scripting language - simple, really easy
            - Brendan Eich - created JS in 10 days - father of Javascript
            - called LiveScript before JavaScript (Microsoft reserve engg - JScript)
            - Europeans called it ECMAScript (ES6)

            Why is it called Javascript
            - Just like scripts, it tells the actors what to do
            - Actors are HTML Elements


            Java vs JavaScript
            - Car vs Carpet comparison
            - History - Java sounded very popular
            - JS - Interpreted, Java - Compiled 

            Interpreted             Compiled
            - Javascript            - Java
            - Python                - C/C++
            - Ruby                  - Swift (iOS app)


            Modern JS
            - supposed to be frontend
            - very broad framework
            - frontend and backend
            - supported by all major browsers


        2.) Javascripts Alerts - Adding Behaviour to Websites

            Chrome Developer Tools ---> Javascript Console

            alert("Hello");
            alert('Hello');     <--- both may be used


        3.) Data Types

            Interprets texts into a type of data

            3.1.) String
            - string of characters (may be string of pearls into a necklace)
            3.2.) Numbers
            - 123
            3.3.) Boolean
            - true or false

            > typeof()
            - returns the data type

        
        4.) Javascript Variables

            - holds a data inside memory
            - serves as a container

            Syntax

            var myName = "Angela";
            ^      ^        ^
            |      |      Value
            |    Name
            Keyword


            > prompt()
            - user input


        5.) Naming Conventions for Javascript Variables

            Google Developer Tools
            - Empty cache and Hard Reload 

            > console.clear()

            Variable name cannot:
            - be a keywork (e.g. var)
            - start a number
            - cannot contain spaces
            - symbols

            camelCasing
            - start name with lowercase, capitalize the subsequent words
            

        6.) String Concatenation

            alert("Hello" + " " + "World!");


        7.) String Length and Retrieving the number of characters

            > word.length;

        8.) Slicing and Extracting Parts of a String (C - strtok)

            > slice(x,y);

            e.g.
            var name = "Angela";
            name.slice (0,1);
                > A

            e.g.

            alert(prompt("Compose message : ").slice(0,50));
                  prompt().slice(x,y);

        
        9.) Changing Case in Text

            word.toUpperCase();
            word.toLowerCase();

        
        10.) Basic Arithmetic and the Modulo Operator

            Same as other languages
            - Precedence (PEMDAS)

            
        11.) Increment and Decrement

            Same as other languages 
                x++; x--;

            var x = 5;
            x += 2;
            x = x + 2; // 7

            var x = 5; var y = 3;
            x += y;
            x = x + y; // 8

            var x = 3;      // x = 3
            var y = x++;    // x = 4    y = 3
                y += 1;     // x = 4    y = 4

        
        12.) Functions: Creating and Calling Functions

            Functions - package of code

            function name() {}
                ^      ^
                |    name
             keyword


            function getMilk(){
                ....
            }

        13.) Functions P2 : Parameters and Arguments

            function name (     ){}


            > Math.floor();
            - round down

        
        14.) Function P3 : Outputs & Return Values


            var change = getMilk(10, 3);



        // ====================================
        //             Section 15
        // ====================================
        //       Intermediate Javascript
        // ====================================


        15.) Random Number Generator in Javascript

            > var n = Math.random();
        
            - 16 decimal places

            > how to extract

                var n = Math.random();
                n = n * 6;
                n = Math.floor(n);


        16.) Control Statements - Using If-Else Conditionals & Logic

            if (loveScore === 10)
            {

            }


        17.) Comparators and Equality

            ===     asks if they have the same data type
            ==      parses, doesnt check the data type

        
        18.) Combining Comparators

            PEMDAS, similar to other languages

                && - AND
                || - OR
                !  - NOT


        19.) Collections: Working with Javascript Arrays

            var eggs = [, , , , ];
            var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

            var myEggs = eggs[1];
            eggs.length

            var name = [];
            name.length

            eggs.includes(//look for specific element) // returns boolean


        20.) Adding Elements and Intermediate Array Techniques

            array.push(1);      // adds item through queue (LIFO)
            array.pop;


        21.) Control Statements: While Loops

            while(something is true)
            {
                // do something
            }

        
        22.) Control Statements : For Loops

            for (i=0 0; i < 2; i++)
            {
                // Do something
            }


        // ====================================
        //             Section 16
        // ====================================
        //   The Document Object Model (DOM)
        // ====================================


        23.) Adding Javascript to Websites

!           The position inside the HTML where we place the SCRIPT TAG MATTERS A HUGE DEAL
!           Common practice to put script tag at the end


            - Inline Javascript
                - e.g. <body onload="alert('Hello');">
                - not modular, very wonky

            - Internal Javascript
                - e.g. <script type="text/javascript">
                            alert("Hello");
                        </script>

            - External Javascript
                - e.g. <script src="    " charset="utf-8"></script>



        24.) Introduction to Document Object Model (DOM)


            Converts HTML into a DOM tree structure

vvv         > EXAMPLE CODE below

            Objects inside the DOM contains
            - properties (Getters and Setters)
                Get Property
                > car.color; // red
                Set Property
                > car.numebrOfDoors = 0;

            - methods
                Call Method
                > car.drive();
                Method


            Function vs Method
            - Method is something that an object can do.
            - Associated with an object (method)

            Button
            - Properties
                > innerHTML
                > style
                > firstChild

            - Methods
                > click()
                > appendChild()
                > setAttribute()



        25.) Selecting HTML with Javascript

            Refer Dom Challenge Starting Files
           
            .getElementsByTagName("li")                      // returns an array that contains the items
                .getElementByTagName("li")[2].style.color = "purple";
                .getElementByTagName("li")[2].length;        // returns the number of "li"
            .getElementsByClassName("btn");
            .getElementById()                                // ALWAYS gets one since ID is used once
                .getElementById("title").innerHTML = "Good Bye";


            querySelector();            // RETURNS only 1
                document.querySelector("h1");
                document.querySelector("#title");
                document.querySelector(".btn");
                document.querySelector("li a");            // combining slsectors
                document.querySelector("li.item");         // combining slsectors
                document.querySelector("#list a");         // combining slsectors
            querySelectorAll("#list .item");
                querySelectorAll(#list .item)[2].style.color = "blue";


        26.) Manipulating and Changing Styles of HTML Elements with Javascript


        27.) The Separation of Concerns: Structure vs Style vs Behavior


        28.) Text Manipulation and the Text Content Property


        29.) Manipulating HTML Element Attributes


        // ====================================
        //             Section 17 
        // ====================================
        //      Boss Level Challenge 1 - 
        //           The Dicee Game
        // ====================================

       


        // ====================================
        //             Section 18
        // ====================================
        //       Advanced Javascript and      
        //           DOM Manipulation
        // ====================================

        


        // ====================================
        //             Section 19
        // ====================================
        //               jQuery
        // ====================================




        // ====================================
        //             Section 20
        // ====================================
        //      Boss Level Challenge 1 - 
        //           The Simon Game  
        // ====================================



        // ====================================
        //             Section 21
        // ====================================
        //         The Unix Command Line
        // ====================================













-------------------------------------------------------------------------------------------      

-------------------------------------------------------------------------------------------      

-------------------------------------------------------------------------------------------      

-------------------------------------------------------------------------------------------      

-------------------------------------------------------------------------------------------      





        // ====================================
        //   Section 14 : Introduction to 
        //                  Javascript ES6
        // ====================================

            alert("Hello World!");
               ^        ^        ^
               |        |        end
            function    message
        



            var message = "Hello";
            var name = prompt("Enter your name : ");

            alert("Hello " + name);



            function getMilk() {   
                console.log("leaveHouse");
                console.log("moveRight");
                console.log("moveRight");
                console.log("moveUp");
                console.log("moveUp");
                console.log("moveUp");
                console.log("moveUp");
                console.log("moveRight");
                console.log("moveRight");
                console.log("moveLeft");
                console.log("moveLeft");
                console.log("moveDown");
                console.log("moveDown");
                console.log("moveDown");
                console.log("moveDown");
                console.log("moveLeft");
                console.log("moveLeft");
                console.log("enterHouse");
                }

        // ====================================
        //   Section 15 : Intermediate
        //                  Javascript
        // ====================================
            

            > how to extract

                    var n = Math.random();
                    n = n * 6;
                    n = Math.floor(n);


            refer up for additional commands
                

        // ====================================
        //   Section 16 : The Document Object
        //                  Model (DOM)
        // ====================================

            JAVASCRIPT IN WEBSITE will follow sequential order
            e.g.
                <script src="index.js"></script>    // CONTAINS ALERT
                <link rel="stylesheet" href="styles.css">   // CONTAINS bgcolor-red

                - Alert will popup first before applying CSS changes

            e.g.

                <script src="index.js"></script>   // CONTAINS document.querySelector("h1").innerHTML = "Good Bye";
                <h1>Hello</h1>  

                - Console will prompt error since it cannot "see" h1 tag



            document.firstElementChild;
            document.firstElementChild.firstElementChild;
            document.firstElementChild.lastElementChild;
            document.firstElementChild.lastElementChild.firstElementChild;

            EXAMPLE

            var heading = document.firstElementChild.lastElementChild.firstElementChild;
            //              saves <h1> Hello </h1>
            heading.innerHTML = "Goodbye";
            heading.style.color = "red";

            document.querySelector("input").click();


            SOLUTION: 
            document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = "Hello World!";
            document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Angela";


        // ====================================
        //   Section 17 : Boss Level Challenge
        //                  1 - The Dicee Game
        // ====================================

        

        // ====================================
        //   Section 18 : Advanced Javascript
        //                 and DOM Manipulation
        // ====================================
            
            

        // ====================================
        //   Section 19 : jQuery
        // ====================================



        // ====================================
        //   Section 20 : Boss Level Challenge
        //                  1 - The Simon Game
        // ====================================

        

        // ====================================
        //   Section 21 : The Unix Command Line
        // ====================================
            
           










*/

/*




        ************************************
                       
        ************************************


-->

<!--  
       
        // ====================================
        //             Section 
        // ====================================
        //        
        // ====================================

       


        // ====================================
        //             Section 
        // ====================================
        //         
        // ====================================

        


        // ====================================
        //             Section 
        // ====================================
        //         
        // ====================================

        



        // ====================================
        //   Section  : 
        // ====================================

        

        // ====================================
        //   Section  : 
        // ====================================
            
            

        // ====================================
        //   Section  :
        // ====================================


*/








/*

    Methods
    - alert()
    - typeof()
        - returns the data type
    - prompt()

*/