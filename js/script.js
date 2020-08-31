/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

let itemsPerPage = 9;

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

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
    // Create two variables
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

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
    // create a variable to calculate the number of pages needed
    let numOfPages = Math.ceil(list.length / itemsPerPage)

    // select the element with a class of `link-list` and assign it to a variable
    let linkList = document.querySelector('.link-list');

    // set the innerHTML property of the variable you just created to an empty string
    linkList.innerHTML = '';

    // loop over the number of pages needed
    for (let i = 1; i <= numOfPages; i++) {
        // create the elements needed to display the pagination button
        const button = `<li>
            <button type="button"> ${i} </button>
        </li>`;

        // insert the above elements
        linkList.insertAdjacentHTML("beforeend", button);

        let firstButton = document.querySelector("button");
        // give the first pagination button a class of "active"
        firstButton.className = 'active';

        // create an event listener on the `link-list` element
        linkList.addEventListener('click', (e)  => {
            // if the click target is a button:
            if (e.target.tagName === 'BUTTON') {
                // remove the "active" class from the previous button
                let previousClickedElement = document.querySelector(".active");
                previousClickedElement.className = '';

                // add the active class to the clicked button
                e.target.className = 'active';

                let text = e.target.textContent;
                showPage(list, text);
            }
    });

    }






    // if the click target is a button:
    // remove the "active" class from the previous button
    // add the active class to the clicked button
    // call the showPage function passing the `list` parameter and page to display as arguments
}
addPagination(data);






/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/




// Call functions
