import {createPosts} from './data.js';


// DOM-элемент - список миниатюр
const thumbnailsList = document.querySelector('.pictures');
// DOM-элемент - шаблон для постов
const postTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
// DOM-элемент - фрагмент документа, который не виден на странице
const postsFragment = document.createDocumentFragment();
// Набор рандомных данных о 25 постах, которые необходимо добавить на страницу
const postsData = createPosts(25);

// Создание DOM-элементов, соответствующих фотографиям
postsData.forEach(({id, url, description, likes, comments}) => {
  // Клонирование элемента поста из шаблона
  const postElement = postTemplate.cloneNode(true);

  // Наполнение полученного элемента данными
  postElement.querySelector('.img').src = url;
  postElement.querySelector('.picture__likes').textContent = likes;
  postElement.querySelector('.picture__comments').textContent = comments;

  // Добавление элемента во фрагмент документа
  postsFragment.appendChild(postElement);
});

// Добавление полученных постов в список миниатюр из фрагмента документа
thumbnailsList.appendChild(postsFragment);
