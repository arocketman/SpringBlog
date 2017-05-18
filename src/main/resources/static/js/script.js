var app = new Vue({
    el: '#root',
    data: {
        username: '',
        password: ''
    },
    methods: {
        login(){
            axios({
                method:'post',
                url:'oauth/token?grant_type=password&username='+this.username+'&password='+this.password,
                auth:{username:'my-trusted-client',password:'secret'}
            }).then(function(response){
                    console.log(response.data);
                }.bind(this));
        }
    }

});