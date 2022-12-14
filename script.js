function getdata(){
    $.ajax({
        "url" : "https://jsonplaceholder.typicode.com/users",
        "method" : "get",
        "success" : function(){

            $(arguments[0]).each(function(i,e1){

                $(".userDiv").append("<div class= spanCell id="+ e1.id +">"+ e1.name +"</div>");
                //console.log(e1);
            });

            $(".spanCell").click(function(){

                $(".spanCell").each(function(){
                    $(".spanCell").removeClass("Active");
                });
                $(".postsDiv").text("");
                $(".postsDiv").hide();
                getPosts(this.id);
            });
        }
    });
}

function getPosts(id){
    $.ajax({
        "url" : "https://jsonplaceholder.typicode.com/posts?userId="+id,
        "method" : "get",
        "success" : function(){
            $(arguments[0]).each(function(i,posts){

                $(".postsDiv").slideDown(1000);
                $("#"+id+"").addClass("Active");
                $(".postsDiv").append("<li>"+ posts.title +"</li>");
                //console.log(e1);
            });
        }
    });
}

getdata();