/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/
  const page = document.querySelector('div.page');
  const studentList = document.querySelector('ul.student-list');
  const paginationDiv = document.createElement('div');
  paginationDiv.className = 'pagination';

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/

function showPage(list, pageNum){
  const students = list.children;
  const startIndex = (pageNum * 10) - 10;
  const endIndex = startIndex + 9;

  for(let i = 0; i < students.length; i++){
    if(i < startIndex || i > endIndex){
      students[i].style.display = 'none';
    }
  }
  return students;
}



/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
  function appendPageLinks(list){

    const ul = document.createElement('ul');
    const numberOfPages = Math.ceil(list.children.length / 10);
    for(let i = 1; i <= numberOfPages; i++){
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = i;
      li.appendChild(a);
      ul.appendChild(li);
    }
    paginationDiv.appendChild(ul);
    page.appendChild(paginationDiv);


  }
  paginationDiv.addEventListener('click', (e) => {
    const pageNum = e.target;
    const pages = paginationDiv.firstElementChild.children;

    for(let i = 1; i <= pages.length; i++){
      if(pages[i].firstElementChild.className === 'active'){
        pages[i].firstElementChild.classList.remove('active');
      }
    }
    pageNum.className = 'active';
    const pageNumber = pageNum.textContent;
    
    showPage(studentList, pageNumber);
  })

appendPageLinks(studentList);


//each function should return something
// Remember to delete the comments that came with this file, and replace them with your own code comments.
