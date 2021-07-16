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

        if (e.target.localName === 'a') {
            search.value = e.target.getAttribute('data-search');
            searchQuery(e.target.getAttribute('data-search'))
        }

        else if (e.target.localName === 'span') {
            search.value = e.target.parentElement.getAttribute('data-search');
            searchQuery(e.target.parentElement.getAttribute('data-search'));
        }
    })
})






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