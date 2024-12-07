var $ = jQuery;
$( function() {
    var availableTags = [
      {value:"Arijit Singh", link:'arijit.html'},
      {value:"Atif Aslam",link:'atifaslam.html'},
      {value:"Shreya Ghoshal",link:'shreya.html'},
      {value:"Jubin Nautiyal",link:'jubin.html'},
      {value:"Ajay-Atul",link:'ajayatul.html'},
      {value:"A.R Rahman",link:'ar.html'},
      {value:"Sonu Nigam",link:'sonu.html'},
      {value:"Shankar Mahadevan",link:'shankar.html'},
      {value:"Momina Mustehsan",link:'momina.html'},
      {value:"Shaan",link:''},
      {value:"Guru Randhawa",link:''},
      {value:"Groovy",link:''},
      {value:"Darshan Raval",link:''},
     
    ];
    $( "#tags" ).autocomplete({
      source: availableTags,
      select: function( event, ui ) {
        console.log(ui.item.link);
        window.location.replace(ui.item.link)
      }
    });
  } );