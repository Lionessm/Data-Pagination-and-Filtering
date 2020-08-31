
let itemsPerPage = 9;

/*
 The 'createStudentLi' function organises the content to be displayed regarding the student (image, name, email, registered date)
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


/*

The `showPage` function creates and inserts/appends the elements needed to display a "page" of nine students
*/

function showPage(list, page) {

    let startIndex = (page * itemsPerPage) - itemsPerPage;
    let endIndex = page * itemsPerPage;

    let firstStudent = list[0];
    let lastStudent = list[41];

    const studentList = document.querySelector(".student-list");
    studentList.innerHTML = " ";

        // loop over the length of the `list` parameter
        for (let i = 0; i < list.length; i++) {
            // conditional that displays the proper students
            if (list[i] !== null) {

                if (i >= startIndex && i < endIndex) {
                    //elements needed to display student information + their insertion in the DOM
                    const createdStudentLi = createStudentLi(list[i]);
                    studentList.insertAdjacentHTML("beforeend", createdStudentLi);
                }
            }
        }
    }

let page = 1;
showPage(data, page);

/*

The `addPagination` function creates and inserts/appends the elements needed for the pagination buttons
*/

function addPagination(list) {

    let numOfPages = Math.ceil(list.length / itemsPerPage)
    let linkList = document.querySelector('.link-list');
    linkList.innerHTML = '';

    /*
     loop over the number of pages needed
    */
    for (let i = 1; i <= numOfPages; i++) {

        // create the elements needed to display the pagination button
        const button = `<li>
            <button type="button"> ${i} </button>
        </li>`;

        linkList.insertAdjacentHTML("beforeend", button);
        let firstButton = document.querySelector("button");

        firstButton.className = 'active';

        /*
         create an event listener on the `link-list` element
        */
        linkList.addEventListener('click', (e)  => {

            if (e.target.tagName === 'BUTTON') {
                let previousClickedElement = document.querySelector(".active");
                previousClickedElement.className = '';
                e.target.className = 'active';
                let text = e.target.textContent;
                showPage(list, text);
            }
        });

    }
}

addPagination(data);