Vue.component('sibling-component', {
    template: '<div>{{sibling}}</div>',
    props: ['sibling']
})

Vue.component('child-component', {
    props: ['propsdata'],
    template: '<p>{{propsdata}}</p>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue! passed from Parent Component',
        anotherMessage: 'sibling 입니다.'
    }
})