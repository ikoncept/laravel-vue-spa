## About this boilerplate

Basic boilerplate to quickly and easy get started with a Laravel API and a Vue SPA frontend. 

A few notes on backend:
- API is headless
- Authentication is handled by Laravel Sanctum and Laravel Fortify
- API is by default separated on a subdomain, i.e. api.yourapp.test

A few notes on frontend:
- A few basic views are supplied, auth (login, forgot/reset password) and a home view, to illustrate the authentication flow
- `vue-router` is implemented with support for middleware. See examples in `resources/js/router/middleware`
- `vuex` is implemented with modules. The only present module at first is auth, but is fully extendable for all needs.
- A simple "layout" manager is implemented. This allows for defining the `layout` property in any Vue routed components base properties, such as: 
```
export default {
    components: {
        PrimaryButton
    },

    layout: 'basic',

    props: {
    ...
```

## Installation
