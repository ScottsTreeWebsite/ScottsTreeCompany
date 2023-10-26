function TravelToPage(Page){
    
    if(Page == 'About Us'){
        window.location="file:///C:/Users/Damion/Documents/.NetProjects/ScottsTreeCompanySite/pages/About%20Us/AboutIndex.html"
        console.log("About Us Page");
    }
    else if(Page == "Home"){
        window.location="file:///C:/Users/Damion/Documents/.NetProjects/ScottsTreeCompanySite/index.html"
        console.log("Home Page");
    }
    else if(Page == "Facebook"){
        window.location.href='www.facebook.com/profile.php?id=100094753545629';
        console.log("Facebook Page");
    }
}

