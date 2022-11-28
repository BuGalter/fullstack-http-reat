# Api on http lib NodeJs to To Do list on React

## Список основных технологий проекта

Стандартная библиотека http NodeJs

Для более простого конфигурирования приложения dotenv

## Структура проекта

Проект разбит на папки в соответствие с их зоной ответственности:

config - содержит конфигурацию сервера

controllers - хранит контролеры, которые посредством сервисов, возвращают данные через запросы к определенным роутам

interfaces - хранит общие интерфейсы, часть интерфейсов храниться там где они применяются для создания контроллеро, сервисов, репозиториев

models - хранит модели сущностей, которые используются для генерации данных

repositories - хранит данные, которые были сгенерированы на основе моделей и статических данных из storage

routes - хранит роуты, которые доступны для запросов

### Были реализованны следующие конечные точки

Префикс 'http://localhost:8000/api/v1'

endpoints: /users, /weekdays, /months, /year

services - реализуют логику работы с репозиториями, поиск и возврат данных в контроллеры

storage - хранит статические данные

## Instruction

### Getting started

To get started with the project, the developer has to perform the following steps to get
the server up and running, the steps are carefully explained below.

### Installing dependencies

To install the dependencies required in the project, the developer should navigate to the project folder and run the
following command in the terminal.

In the terminal run:

```shell
$npm install
```

## Available Scripts

In the project directory, you can run:

### `npm run start:dev`

### `npm run build`

## Authors

Nick - **BuGalter**

Name - _Valery Yakubchik_

## License

Этот проект лицензируется в соответствии с лицензией Apache License 2.0 — подробности
см. в файле LICENSE.

## Copyright

Copyright © 2022 [BuGalter](github).
