$( document ).ready(function() {
    
    function add(a, b){
        return a + b;        
    }
    $("#add").click(function(){
        let a = parseInt($("#digit1").val());
        let b =  parseInt($("#digit2").val());

        //introduce bug!
        if(isNaN(b))
            b = -1;

        $("#answer").text(add(a,b));
    })
});