/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
//Select the ul element that contains all student records
//This is what we'll be manipulating for pagination
const studentList = document.querySelector('ul.student-list');
const records = studentList.children;

//Set how many student records will be displayed on each page
const recordsPerPage = 10;

//Create the div that will hold pagination links
const paginationDiv = document.createElement('div');

//The following function determines which student records are displayed
//based on the page number passed into it
function showPage(records, pageNumber){
    const startIndex = (pageNumber * recordsPerPage) - recordsPerPage;
    const endIndex = startIndex + (recordsPerPage - 1);
    for(let i = 0; i < records.length; i++){
        if(i < startIndex || i > endIndex){
            records[i].style.display = 'none';
        } else {
            records[i].style.display = '';
        }
    }
    return records;
}

//The purpose of this function is to create
//the page links necessary to view the entire list of records
//and to initiate the first-page view
function appendPageLinks(records){
    const page = document.querySelector('div.page');
    const pageLinksUl = document.createElement('ul');
    const numberOfPages = Math.ceil(records.length / recordsPerPage);
    for(let i = 1; i <= numberOfPages; i++){
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = i;
        li.appendChild(a);
        pageLinksUl.appendChild(li);
    }
    paginationDiv.appendChild(pageLinksUl);
    paginationDiv.className = 'pagination';
    page.appendChild(paginationDiv);
    //Default to page 1 view when user first sees the page
    pageLinksUl.firstElementChild.firstElementChild.className = 'active';
    return showPage(records, 1);
}

appendPageLinks(records);

//As the user clicks around to different pages (page links),
//showPage() is called to display the records
//that correspond with that page number
paginationDiv.addEventListener('click', (e) => {
    const pageNum = e.target.textContent;
    const pageLis = paginationDiv.firstElementChild.children;
    for(let i = 0; i < pageLis.length; i++){
        if(pageLis[i].firstElementChild === e.target){
            pageLis[i].firstElementChild.className = 'active';
        } else {
            pageLis[i].firstElementChild.classList.remove('active');
        }
    }
    return showPage(records, pageNum);
});

//pretty cool stuff!
