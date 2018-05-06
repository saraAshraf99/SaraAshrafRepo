
// constants

   var mainNavTabs_ar = 
   [
    "الدعم و المساندة","المركز الإعلامي","مكتبة المؤسسة", "دليل الخدمات","الأخبار" ,"عن المؤسسة"
   ]

   var mainNavTabs_en =
   [
    "About" ,"news" ,"services guide" ,"library","advertising center" ,"Help & Support"
   ]


   var bodyNavTabs_ar = [
       {
           title: "خدمات قطاع الأعمال",
           iconUrl: "business-Services.png"
       },
       {
           title: "خدمات الأفراد",
           iconUrl: "group.png"
       },
       {
           title: "الخدمات الأكثر إستخداما",
           iconUrl: "papularServices.png"
       },
       {
           title: "جميع الخدمات",
           iconUrl: "allServices.png"
       },
       {
           title: "خدمات جديدة",
           iconUrl: "newServices.png"
       }
   ];

   var bodyNavTabs_en = [
          {
              title: "Business services",
              iconUrl: "business-Services.png"
          },
          {
              title: "Personnel Services",
              iconUrl: "group.png"
          },
          {
              title: "Most used services",
              iconUrl: "papularServices.png"
          },
          {
              title: "All services",
              iconUrl: "allServices.png"
          },
          {
              title: "New services",
              iconUrl: "newServices.png"
          }
   ];

// Functions

function initMainbar() {
    // events
    $(window).on('resize', function () {
        $(".pre-scrollable").css("max-height", $(this).height());
        
    }).resize();

    $('#servicesTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    document.addEventListener("touchstart", function () { }, true);

    $(".item-card").on("mouseover", function (e) {
        $(e).css("box-shadow", " 0 0 5px -1px rgba(146, 6, 6, 1)");
    });

    // Init main menue

    var lang = $("#localizationBtn").text();
    var mainBarContainer = $("#main-navbar");
    mainBarContainer.empty();
    var tabs = (lang === "AR") ? mainNavTabs_ar : mainNavTabs_en;
    for (var tabIndex in tabs) {
        mainBarContainer.append(createMainbarTab(tabs[tabIndex], '#'));
    }

    // init bottom Tab bar items
    var tabsContainer = $("#servicesTab");
    tabs = (lang === "AR") ? bodyNavTabs_ar : bodyNavTabs_en;
    tabsContainer.empty();
    var isActive = true;
    for (var tabIndex in tabs) {
        tabsContainer.append(createBodyNavTab(tabs[tabIndex].title, "tb" + tabIndex + "-tab", "tb" + tabIndex, isActive, tabs[tabIndex].iconUrl));
        isActive = false;
    }

    // Init container sizes
    $(".pre-scrollable").css("max-height", $(this).height());
    

}


function createMainbarTab(tabName,tabTraget) {
    return "<li><a  href='" + tabTraget + "' class='navbar-item font-light'>" + tabName + "</a></li>"
}

/*
   args:
     [1] tab Name
     [2] tab id
     [3] id of content li
     [4] Is active tab
     [5] tab icon

*/
function createBodyNavTab(tabName, tabId, contentId, isActive,tabIcon) {
    var className = (isActive === true) ? "nav-link active" : "nav-link";
  
    return '<li class="nav-item">' +
         '<a data-toggle="tab" href="#' + contentId + '" >'+
            '<div class="codepen-container">' +
             '<div class="outer-circle">'+
                 '<div class="inner-circle">'+
                         '<img src="../styles/icons/' + tabIcon + '" class="icon"/>' +
                  '</div>'+
             '</div>' +
          '</div><span class="tab-title">'+ tabName + '</span></a>'+
      '</li>';
}


function onLoadHomePage() {
    initMainbar();
}


function onCollapseclicked() {
    $("#img-slider-row").toggle();
}

