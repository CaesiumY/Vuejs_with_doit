var app = new Vue({
    data: {
        message: 'Hello Vue.js',
        message2: 'I am message2',
        uid: 20,

        flag: true
    },
    methods: {
        clickBtn() {
            console.log('hi')
            this.flag = !this.flag
        },
        plusUid() {
            this.uid += 10
        }
    },
}).$mount('#app')