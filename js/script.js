/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/


function showPage(list, page) {

    let firstStudent = list[0];
    let lastStudent = list[41];
    var element1 = document.querySelector(".student-list");
    // set the innerHTML property of the variable you just created to an empty string
    element1.innerHTML = " ";
    // loop over the length of the `list` parameter
    console.log(list)


        for (var i = 0; i < list.length; i++) {
            // inside the loop create a conditional to display the proper students

            if (list[i] !== null) {
                // inside the conditional:
                // create the elements needed to display the student information
                // insert the above elements
                var studentName = document.createElement("h3");
                studentName.textContent = list[i].name.first + ' ' + list[i].name.last;

                var studentEmail = document.createElement("span");
                studentEmail.className = "email";
                studentEmail.textContent = list[i].email;

                var studentImage = document.createElement("img");
                studentImage.className = "avatar";
                studentImage.src = "https://randomuser.me/api/portraits/women/25.jpg"

                var joined = document.createElement('span');
                joined.className = "date"
                joined.textContent = list[i].registered.date;

                var containerDiv = document.createElement('div')
                containerDiv.className = "student-details";
                var containerList = document.createElement('li')
                containerList.className = "student-item cf";
                var studentList = document.querySelector(".student-list");
                const containerDivDate = document.createElement('div')
                containerDivDate.classNAme = "joined-details";


                containerDiv.appendChild(studentImage);
                containerDiv.appendChild(studentEmail);
                containerDiv.appendChild(studentName);
                containerList.appendChild(containerDiv);
                studentList.appendChild(containerList);
                containerList.appendChild(containerDivDate);
                containerList.appendChild(joined);


            }
        }
    }

showPage(data, 1);

// Create two variables
// startIndex = (page parameter * items per page) - items per page
// const startIndex =
// endIndex = page parameter * items per page


//Next use the querySelector method to select the UL element with a class of student-list and assign it to a new variable named studentList.
//This is the element we will be adding our student data to.
const studentList = document.querySelector("ul.student-list");

//Now set the innerHTML property of the studentList variable to an empty string. This will remove any existing students that might have been displayed previously.
//studentList.innerHTML = " ";
// Next we will create a for loop that will run once for each object in the list parameter. We can do this by using the length property of list.

//Inside the loop, create a conditional statement that checks if i is greater than or equal to the startIndex variable and less than the endIndex variable. The student at these indexes are the ones we want to display on the page.

//If that condition is met, we will create the DOM elements needed to display the student at that index, which we will assign to a variable named studentItem. We will create these elements using a template literal.
//Use bracket notation to access the student object at that index and dot notation to access the specific properties of that student object. The end result should be elements that look like this:











/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
