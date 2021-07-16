const search = document.getElementById('search');
const content = document.querySelector('.content');
const contentBox = document.querySelectorAll('.content .content-item');
const allContent = document.querySelectorAll('.content .content-item');
const menuItems = document.querySelectorAll('.menu a');

let contentArr = [];


search.addEventListener('input', (e) => {

    if (e.target.value.length > 2) {
        searchQuery(e.target.value.toLowerCase());
    }

    else if (e.target.value === '') {
        content.innerHTML = '';

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
    // utmArr = searchWin.split('&');
    utmArr = [searchWin];
  

    utmArr.forEach(el => {
        let replaceText = decodeURIComponent(el).replace(/_/g, ' ');
        document.querySelector('h1').textContent = replaceText.replace(/search=/g, ' ');
        searchQuery(replaceText.replace(/search=/g, ' ').replace(' ', ''));
        menuItems.forEach(item => {
            item.parentElement.classList.remove('active');

            if (item.getAttribute('data-search') === (replaceText.replace(/search=/g, ' ').replace(' ', ''))) {
                console.log('test');
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
        if (item.children[0].children[0].innerText.toLowerCase().indexOf(query.toLowerCase()) !== -1 || item.children[0].children[1].innerText.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
            contentArr.push(item);
        }
    })

    if (contentArr[0]) {
        let resBlock = contentArr;
    
        content.innerHTML = '';
        content.append(...resBlock);
    }

    else {
        content.innerHTML = 'Нифига не найдено! Попробуйте сменить запрос!';
    }
}


