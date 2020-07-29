var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name: "Desert Mesa", 
        image: "https://images.squarespace-cdn.com/content/v1/5a577574d0e628a6394c4795/1524575883628-AE809HNCWCNQGTOAYO46/ke17ZwdGBToddI8pDm48kAXzM8ero5F6C6xtE4EtPf4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcXE6-KKZ2WgSqy8Zp3dkU4bSnQHs5uGcVhvDJyCAlxmypLmlSxv_uFZycnPY9t0HO/camping.jpg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        // if(err){ 
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
         //add a few campgrounds
        // data.forEach(function(seed){
            // Campground.create(seed, function(err, campground){
            //     if(err){
            //         console.log(err)
            //     } else {
            //         console.log("added a campground");
            //         //create a comment
            //         Comment.create(
            //             {
            //                 text: "This place is great, but I wish there was internet",
            //                 author: "Homer"
            //             }, function(err, comment){
            //                 if(err){
            //                     console.log(err);
            //                 } else {
            //                     campground.comments.push(comment);
            //                     campground.save();
            //                     console.log("Created new comment");
            //                 }
            //             });
            //     }
            // });
        // });
    }); 
}

module.exports = seedDB;