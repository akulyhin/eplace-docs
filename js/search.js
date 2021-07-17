"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var search = document.getElementById('search');
var content = document.querySelector('.content');
var contentBox = document.querySelectorAll('.content .content-item');
var allContent = document.querySelectorAll('.content .content-item');
var menuItems = document.querySelectorAll('.menu a');
var contentArr = [];
search.addEventListener('input', function (e) {
  if (e.target.value.length > 2) {
    searchQuery(e.target.value.toLowerCase());
    setLocation("?search=".concat(e.target.value.replace(/ /g, '_')));
  } else if (e.target.value === '') {
    content.innerHTML = '';
    setLocation('/');
    document.querySelector('h1').textContent = '';
    allContent.forEach(function (item) {
      content.appendChild(item);
    });
  }
});
search.addEventListener('focus', function (e) {
  e.target.placeholder = 'Начните вводить, чтобы найти информацию...';
});
search.addEventListener('blur', function (e) {
  e.target.placeholder = 'Поиск';
});
menuItems.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.localName === 'a') {
      searchQuery(e.target.getAttribute('data-search'));

      if (e.target.getAttribute('data-search')) {
        setLocation("?search=".concat(e.target.getAttribute('data-search').replace(/ /g, '_')));
        document.querySelector('h1').textContent = e.target.getAttribute('data-search');
      } else {
        setLocation('/');
        document.querySelector('h1').textContent = '';
      }
    } else if (e.target.localName === 'span' || e.target.localName === 'i') {
      searchQuery(e.target.parentElement.getAttribute('data-search'));

      if (e.target.parentElement.getAttribute('data-search')) {
        document.querySelector('h1').textContent = e.target.parentElement.getAttribute('data-search');
        setLocation("?search=".concat(e.target.parentElement.getAttribute('data-search').replace(/ /g, '_')));
      } else {
        setLocation('/');
        document.querySelector('h1').textContent = '';
      }
    }
  });
});
var href = window.location.href;
var searchWin = window.location.search;

if (href.indexOf('?search=') != -1) {
  searchWin = searchWin.slice(1).toLowerCase(); // utmArr = searchWin.split('&');

  var utmArr = [searchWin];
  utmArr.forEach(function (el) {
    var replaceText = decodeURIComponent(el).replace(/_/g, ' ');
    document.querySelector('h1').textContent = replaceText.replace(/search=/g, ' ');
    searchQuery(replaceText.replace(/search=/g, ' ').replace(' ', ''));
    menuItems.forEach(function (item) {
      item.parentElement.classList.remove('active');

      if (item.getAttribute('data-search') === replaceText.replace(/search=/g, ' ').replace(' ', '')) {
        console.log('test');
        item.parentElement.classList.add('active');
      }
    });
  });
}

function setLocation(curLoc) {
  try {
    history.pushState(null, null, curLoc);
    return;
  } catch (e) {}

  location.hash = '#' + curLoc;
}

function searchQuery(query) {
  contentArr = [];
  contentBox.forEach(function (item) {
    if (item.children[0].children[0].innerText.toLowerCase().indexOf(query.toLowerCase()) !== -1 || item.children[0].children[1].innerText.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
      contentArr.push(item);
    }
  });

  if (contentArr[0]) {
    var resBlock = contentArr;
    content.innerHTML = '';
    content.append.apply(content, _toConsumableArray(resBlock));
  } else {
    content.innerHTML = 'Ничего не смогли найти! Попробуйте сменить запрос!';
  }
}