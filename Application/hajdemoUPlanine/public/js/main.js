$(document).ready(function(){
    $('.delete-planina').on('click', function(e){
        $target = $(e.target)
        const id= $target.attr('data-id')
        console.log(id)
        $.ajax({
            type: "DELETE",
            url: "/planina/"+id,
            success: function(response){
               alert('Brisanje planine je uspesno')
               window.location.href="/"
            }, 
            error: function(err){
                console.log(err)
            }
        })
    })
})
$(document).ready(function(){
    $('.delete-smestaj').on('click', function(e){
        $target = $(e.target)
        const id= $target.attr('data-id')
        console.log(id)
        $.ajax({
            type: "DELETE",
            url: "/smestaj/"+id,
            success: function(response){
               alert('Brisanje smestaja je uspesno')
               window.location.href="/"
            }, 
            error: function(err){
                console.log(err)
            }
        })
    })
})
$(document).ready(function(){
    $('.delete-atrakcija').on('click', function(e){
        $target = $(e.target)
        const id= $target.attr('data-id')
        console.log(id)
        $.ajax({
            type: "DELETE",
            url: "/atrakcija/"+id,
            success: function(response){
               alert('Brisanje atrakcije je uspesno')
               window.location.href="/"
            }, 
            error: function(err){
                console.log(err)
            }
        })
    })
})