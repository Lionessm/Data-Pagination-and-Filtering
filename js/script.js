/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

function createStudentLi(student) {
    return `<li class="student-item cf">
        <div class="student-details">
            <img class="avatar" src="${student.picture.medium}" alt="Profile Picture"/>
            <h3>${student.name.first} ${student.name.last}</h3>
            <span class="email">${student.email}</span>
        </div>
        <div class="joined-details">
            <span class="date">Joined ${student.registered.date}</span>
        </div>
    </li>`;
}


function showPage(list, page) {
    // Create two variables
    let itemsPerPage = 9;
    let startIndex = (page * itemsPerPage) - itemsPerPage;
    let endIndex = page * itemsPerPage;

    let firstStudent = list[0];
    let lastStudent = list[41];

    const studentList = document.querySelector(".student-list");
    // set the innerHTML property of the variable you just created to an empty string
    studentList.innerHTML = " ";

        // loop over the length of the `list` parameter
        for (let i = 0; i < list.length; i++) {
            // inside the loop create a conditional to display the proper students
            if (list[i] !== null) {

                if (i >= startIndex && i < endIndex) {
                    // inside the conditional:
                    // create the elements needed to display the student information
                    // insert the above elements
                    const createdStudentLi = createStudentLi(list[i]);
                    studentList.insertAdjacentHTML("beforeend", createdStudentLi);
                }
            }
        }
    }

let page = 1;
showPage(data, page);

// Create a button
// On click on the button
    // page = page + 1;
    // call showPage(data, page);



//Next use the querySelector method to select the UL element with a class of student-list and assign it to a new variable named studentList.
//This is the element we will be adding our student data to.
//const studentList = document.querySelector("ul.student-list");

//Now set the innerHTML property of the studentList variable to an empty string. This will remove any existing students that might have been displayed previously.
//studentList.innerHTML = "";
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
