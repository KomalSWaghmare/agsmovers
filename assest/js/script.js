    //mega menu active on click section start//
    // Get the modal
    var modal = document.getElementById("megamodal");
    var modal2 = document.getElementById("megamodal2");

    // Get the button that opens the modal
    var btn = document.getElementById("MModal");
    var btn2 = document.getElementById("MModal2");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var span2 = document.getElementsByClassName("cls")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() 
    {
        modal.style.display = "block";
    }
    btn2.onclick = function() 
    {
        modal2.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() 
    {
        modal.style.display = "none";
    }
    span2.onclick = function()
    {
        modal2.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) 
    {
        if (event.target == modal) 
        {
            modal.style.display = "none";
        }
        if (event.target ==  modal2) 
        {
            modal2.style.display = "none";
        }
    }
    //mega menu active on click section end//





// function showhide()
// {
//     let click = document.getElementById("mega-menu")
//     if(click.style.display = "none")
//     {
//         click.style.display = "block"; 
//         // console.log("yes");
//     }
//     else
//     {
//         click.style.disply = "none";
//     }
// }

//mega menu active on click section start//
// function showhide2()
// {
//     let click = document.getElementById("mega-menu2")
//     if(click.style.display = "none")
//     {
//         click.style.display = "block"; 
//         // console.log("yes");
//     }
//     else
//     {
//         click.style.disply = "none";
//     }
// }
//mega menu active on click section end//