new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log("async task");
        resolve()
    } , 1000*5)

}).then(function() {
    console.log("resolved complete");
})


promise2 = new Promise(function(resolved , reject){
    setTimeout(function(){
        resolved({username: "aman" , email: "amanbam6040@gmail.com"})
    }, 1000)
})

promise2.then(function(user){
console.log(user);

})