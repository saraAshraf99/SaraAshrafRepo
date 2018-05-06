

// Declarations



// Initialize events



//handlers
function onChangeLocalization(e) {
    // toogle text
    e.textContent  = e.textContent === "EN" ? "AR" : "EN";
    // change main bar text 
    initMainbar();
    // change buttons texts

    //[1] Read more btn
    $("#btn-readmore").text(($("#localizationBtn").text()) === "EN" ? "Read more" : "إقرأ المزيد");

    var lang =  $("#localizationBtn").text();

    if (lang === "EN") {
        //[2] change all services label
        $("#allservicesBtn").text("All services");

    } else {
        //[2] change all services label
        $("#allservicesBtn").text("جميع الخدمات");
    }
   
}