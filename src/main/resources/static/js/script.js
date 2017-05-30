function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

var vueLog = new Vue({
    el : '#loggedIn',
    data: {logged_in_msg : ""},
    mounted(){
        var isLoggedIn = false;
        if(! (getCookie("access_token") == null)){
            axios.get("/getUsername?access_token=" + getCookie("access_token"))
                .then(function(response){
                    this.logged_in_msg = "Welcome back , " + response.data;
                }.bind(this))
                .catch(function(error){
                    //delete the cookie?
                });
        }
    }
});