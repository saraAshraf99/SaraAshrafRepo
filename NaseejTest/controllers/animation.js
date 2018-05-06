
var IndividualServiceCard =
{
    Title: "نص لوريم إيبسوم القياسي والمستخدم",
    Description: "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار"
};

var cardsNo = 10;
$(document).ready(function () {
    $(".tab-prev").click(function (e) {
        var tabName = $(this).attr("tabid");
        var divsClass = "." + tabName + "_items";
        var allDivs = $(".item-card" + divsClass);

        $(allDivs).each(function () {
            $(this).animate({
                left: '-=285px'
            });
        });

    });

    $(".tab-next").click(function (e) {
        var tabName = $(this).attr("tabid");
        var divsClass = "." + tabName + "_items";
        var allDivs = $(".item-card" + divsClass);

        $(allDivs).each(function () {
            $(this).animate({
                left: '+=285px'
            });
        });

    });

    // Bind cards
    for (var i = 0; i < cardsNo; i++) {
        $("#tab-contents").append(createCard());
    }
});

function createCard() {
    return '<div class="panel panel-default card-container tab0_items item-card">'
  +'<div class="panel-heading font-light cardHeader">'+ IndividualServiceCard.Title +'</div>'
  + '<div class="panel-body font-light cardBody"><p>' + IndividualServiceCard.Description + '</p></div>'
  +'<div class="panel-footer font-light cardFooter">'
                                       +'   <span class="item-hint">                '
                                       +'       <a href="#" class="linkPanel">      '
                                       +'           إستفد من الخدمة               '
                                       +'       </a>                                '
                                       +'   </span>                                 '
                                       +'   <span class="item-actions">             '
             +'<a href="#"><img src="../styles/icons/mouse.png"></a><a href="#"><img src="../styles/icons/building.png"></a></span></div>'
  +' </div>';
}