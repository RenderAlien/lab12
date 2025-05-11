# lab12

Лабораторная работа №12

## Home.vue

Имеет общую информацию о работе

## Cats.vue

С помощью store.GetApiData() гет-запросом с https://api.thecatapi.com/v1/images/search получает ссылку на случайное изображение с котом и выводит его с помощью тега img

## Forms.vue

Имеет форму отправки, при нажатии кнопки с помощью store.send() отправляет пост-запрос с данными формы в json формате на https://jsonplaceholder.typicode.com/posts. Выводит в консоль респонс.
