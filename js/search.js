const search = document.getElementById('search');
const content = document.querySelector('.content');
const contentBox = document.querySelectorAll('.content .content-item');
const allContent = document.querySelectorAll('.content .content-item');
const menuItems = document.querySelectorAll('.menu a');
const tags = document.querySelectorAll('.tags');

tags.forEach(item => {
    if (item.textContent) {
        item.classList.add('active');

        item.addEventListener('click', (e) => {
            searchQuery(e.target.textContent.toLowerCase());
            setLocation(`?search=${e.target.textContent.replace(/ /g, '_')}`);

            menuItems.forEach(el => {
                el.parentElement.classList.remove('active');
            })
        })
    }
})

let contentArr = [];


search.addEventListener('input', (e) => {

    if (e.target.value.length > 2) {
        searchQuery(e.target.value.toLowerCase());
        setLocation(`?search=${e.target.value.replace(/ /g, '_')}`);
    }

    else if (e.target.value === '') {
        content.innerHTML = '';
        setLocation('/');
        document.querySelector('h1').textContent = '';

        allContent.forEach(item => {
            content.appendChild(item);
        })  
    }
})

search.addEventListener('focus', (e) => {
    e.target.placeholder = 'Начните вводить, чтобы найти информацию...';
})

search.addEventListener('blur', (e) => {
    e.target.placeholder = 'Поиск';
})


menuItems.forEach(item => {

    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (e.target.localName === 'a') {
            searchQuery(e.target.getAttribute('data-search'));

            if (e.target.getAttribute('data-search')) {
                setLocation(`?search=${e.target.getAttribute('data-search').replace(/ /g, '_')}`);
                document.querySelector('h1').textContent = e.target.getAttribute('data-search');
            }
            
            else {
                setLocation('/');
                document.querySelector('h1').textContent = '';
            }
        }

        else if (e.target.localName === 'span' || e.target.localName === 'i') {
            searchQuery(e.target.parentElement.getAttribute('data-search'));

            if (e.target.parentElement.getAttribute('data-search')) {
                document.querySelector('h1').textContent = e.target.parentElement.getAttribute('data-search');
                setLocation(`?search=${e.target.parentElement.getAttribute('data-search').replace(/ /g, '_')}`);
            }
            else {
                setLocation('/');
                document.querySelector('h1').textContent = '';
            }
        }
    })
})



let href = window.location.href;
let searchWin = window.location.search;

if (href.indexOf('?search=') != -1) {
    searchWin = searchWin.slice(1).toLowerCase();
    let utmArr = [searchWin];
  

    utmArr.forEach(el => {
        let replaceText = decodeURIComponent(el).replace(/_/g, ' ');
        document.querySelector('h1').textContent = replaceText.replace(/search=/g, ' ');
        searchQuery(replaceText.replace(/search=/g, ' ').replace(' ', ''));
        menuItems.forEach(item => {
            item.parentElement.classList.remove('active');

            if (item.getAttribute('data-search') === (replaceText.replace(/search=/g, ' ').replace(' ', ''))) {
                item.parentElement.classList.add('active');
            }
        })
    })

  }


function setLocation(curLoc){

    try {
      history.pushState(null, null, curLoc);
      return;
    } catch(e) {}
    location.hash = '#' + curLoc;
}




function searchQuery(query) {
    contentArr = [];

    contentBox.forEach(item => {
        for (let i = 0; i < item.children[0].children.length; i++) {
            if (item.children[0].children[i].innerText.toLowerCase().indexOf(query.toLowerCase()) !== -1 ) {
            contentArr.push(item);
        }
    }
    })

    if (contentArr[0]) {
        let resBlock = contentArr;
    
        content.innerHTML = '';
        content.append(...resBlock);
    }

    else {
        content.innerHTML = 'Ничего не смогли найти! Попробуйте сменить запрос!';
    }
}


