## About this boilerplate

Basic boilerplate to quickly and easy get started with a Laravel API and a Vue SPA frontend. Nothing has been done, so everything is possible!
This is just a scaffolding to avoid a lot of copypasting in the beginning of projects.

A few notes on backend:
- Laravel 8
- API is headless and by default separated on a subdomain, i.e. api.yourapp.test
- Authentication is handled by Laravel Sanctum and Laravel Fortify
- Only a simple seeder is provided to create a test user

A few notes on frontend:
- Vue 3 + Vue Router + Vuex with TailwindCSS/PostCSS
- ESLint with Babel+Vue extensions
- A few basic views are supplied, auth (login, forgot/reset password) and a home view, to illustrate the authentication flow
- `vue-router` is implemented with support for middleware. See examples in `resources/js/router/middleware`
- `vuex` is implemented with modules. The only present module at first is auth, but is fully extendable for all needs.
- A simple "layout" manager is implemented. This allows for defining the `layout` property in any Vue routed components base properties, such as: 
```js
export default {
    components: {
        PrimaryButton
    },

    layout: 'basic',

    props: {
    ...
```

## Installation
Clone this repo, and run:

```sh
composer install
cp .env.example .env
```
Edit the .env to reflect your setup in regards of DB and APP_URL (Using Laravel Valet is highly recommended), then run: 
```sh
php artisan key:generate
php artisan migrate --seed

yarn && yarn production
```
See `package.json` for Laravel Mix-scripts for development.