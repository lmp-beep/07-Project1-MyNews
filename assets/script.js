


$(document).ready(function() {
    console.log("ready!");
    usNewsAPI();
    worldNewsAPI();
    businessNewsAPI();
    sportsNewsAPI();
    technologyNewsAPI();
    entertainmentNewsAPI();
    healthNewsAPI();
    travelNewsAPI();
    // newscasterNewsAPI();


    // var myCarousel = document.getElementsById("myCarousel");
    // var carousel = new bootstrap.Carousel(myCarousel, {
    //   interval: 2000,
    //   wrap: false
    // })


// var categoryChoice = document.getElementById("category");
// var submitBtn = document.getElementById("submit");

// var newsAPIKey = "850cb5d6549542ee848e80d5d1910b21"

// var rapidAPIKey = "3a9751746bmsh9d6faa02ca1deccp1c1053jsnbe743b8f565e"
// "https://newscatcher.p.rapidapi.com/v1/sources?topic=news&lang=en"
// news
// sport
// tech 
// world 
// business 
// entertainment 
// travel 


// function newscasterNewsAPI() {
//     // var rapidAPIKey = "3a9751746bmsh9d6faa02ca1deccp1c1053jsnbe743b8f565e";
//     // var requestNewscasterNews = "https://newscatcher.p.rapidapi.com/v1/sources?topic=news&lang=en" + rapidAPIKey;

//     fetch("https://newscatcher.p.rapidapi.com/v1/search_free?topic=sport&lang=en", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-key": "3a9751746bmsh9d6faa02ca1deccp1c1053jsnbe743b8f565e",
//             "x-rapidapi-host": "newscatcher.p.rapidapi.com"
//         }
//     })
    
//         .then(function (response) {
//             return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })
// };



function usNewsAPI() {
    var nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR"
    var requestUSNews = "https://api.nytimes.com/svc/topstories/v2/us.json?api-key=" + nyTimesAPIKey;

    fetch(requestUSNews)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
            var usNewsFlash = document.getElementById("us-news-flash");
            usNewsFlash.addEventListener("click", function() {
                window.open(data.results[0].url,'_blank');
            })
            const usNewsPhoto = document.getElementById("us-news-flash-photo");
            usNewsPhoto.setAttribute("src",data.results[0].multimedia[0].url);
            usNewsFlash.append(usNewsPhoto);
            const usNewsHeadline = document.getElementById("us-news-flash-headline");
            usNewsHeadline.innerHTML = data.results[0].title;
            usNewsFlash.append(usNewsHeadline);
            const usNewsAbstract = document.getElementById("us-news-flash-abstract");
            usNewsAbstract.innerHTML = data.results[0].abstract;
            usNewsFlash.append(usNewsAbstract);
            const usNewsCategory = document.getElementById("us-news-flash-category");
            usNewsCategory.innerHTML = "US News"
            usNewsFlash.append(usNewsCategory);
    })
}

function worldNewsAPI() {
    var nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR"
    var requestWorldNews = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=" + nyTimesAPIKey;

    fetch(requestWorldNews)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
            var worldNewsFlash = document.getElementById("world-news-flash");
            worldNewsFlash.addEventListener("click", function() {
                window.open(data.results[0].url,'_blank');
            })
            const worldPhoto = document.getElementById("world-news-flash-photo");
            worldPhoto.setAttribute("src",data.results[0].multimedia[0].url);
            worldNewsFlash.append(worldPhoto);
            const worldHeadline = document.getElementById("world-news-flash-headline");
            worldHeadline.innerHTML = data.results[0].title;
            worldNewsFlash.append(worldHeadline);
            const worldAbstract = document.getElementById("world-news-flash-abstract");
            worldAbstract.innerHTML = data.results[0].abstract;
            worldNewsFlash.append(worldAbstract);
            const worldNewsCategory = document.getElementById("world-news-flash-category");
            worldNewsCategory.innerHTML = "World News"
            worldNewsFlash.append(worldNewsCategory);
    })
}

function businessNewsAPI() {
    var nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR"
    var requestBusinessNews = "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=" + nyTimesAPIKey;

    fetch(requestBusinessNews)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
            var businessNewsFlash = document.getElementById("business-news-flash");
            businessNewsFlash.addEventListener("click", function() {
                window.open(data.results[0].url,'_blank');
            })
            const businessPhoto = document.getElementById("business-news-flash-photo");
            businessPhoto.setAttribute("src",data.results[0].multimedia[0].url);
            businessNewsFlash.append(businessPhoto);
            const businessHeadline = document.getElementById("business-news-flash-headline");
            businessHeadline.innerHTML = data.results[0].title;
            businessNewsFlash.append(businessHeadline);
            const businessAbstract = document.getElementById("business-news-flash-abstract");
            businessAbstract.innerHTML = data.results[0].abstract;
            businessNewsFlash.append(businessAbstract);
            const businessNewsCategory = document.getElementById("business-news-flash-category");
            businessNewsCategory.innerHTML = "Business News"
            businessNewsFlash.append(businessNewsCategory);
    })
}

function sportsNewsAPI() {
    var nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR"
    var requestSportsNews = "https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=" + nyTimesAPIKey;

    fetch(requestSportsNews)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
            var sportsNewsFlash = document.getElementById("sports-news-flash");
            sportsNewsFlash.addEventListener("click", function() {
                window.open(data.results[0].url,'_blank');
            })
            const sportsPhoto = document.getElementById("sports-news-flash-photo");
            sportsPhoto.setAttribute("src",data.results[0].multimedia[0].url);
            sportsNewsFlash.append(sportsPhoto);
            const sportsHeadline = document.getElementById("sports-news-flash-headline");
            sportsHeadline.innerHTML = data.results[0].title;
            sportsNewsFlash.append(sportsHeadline);
            const sportsAbstract = document.getElementById("sports-news-flash-abstract");
            sportsAbstract.innerHTML = data.results[0].abstract;
            sportsNewsFlash.append(sportsAbstract);
            const sportsNewsCategory = document.getElementById("sports-news-flash-category");
            sportsNewsCategory.innerHTML = "Sports News"
            sportsNewsFlash.append(sportsNewsCategory);
    })
}

function technologyNewsAPI() {
    var nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR"
    var requestTechnologyNews = "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=" + nyTimesAPIKey;

    fetch(requestTechnologyNews)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
            var technologyNewsFlash = document.getElementById("technology-news-flash");
            technologyNewsFlash.addEventListener("click", function() {
                window.open(data.results[0].url,'_blank');
            })
            const technologyPhoto = document.getElementById("technology-news-flash-photo");
            technologyPhoto.setAttribute("src",data.results[0].multimedia[0].url);
            technologyNewsFlash.append(technologyPhoto);
            const technologyHeadline = document.getElementById("technology-news-flash-headline");
            technologyHeadline.innerHTML = data.results[0].title;
            technologyNewsFlash.append(technologyHeadline);
            const technologyAbstract = document.getElementById("technology-news-flash-abstract");
            technologyAbstract.innerHTML = data.results[0].abstract;
            technologyNewsFlash.append(technologyAbstract);
            const technologyNewsCategory = document.getElementById("technology-news-flash-category");
            technologyNewsCategory.innerHTML = "Technology News"
            technologyNewsFlash.append(technologyNewsCategory);
    })
}

function entertainmentNewsAPI() {
    var nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR"
    var requestEntertainmentNews = "https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=" + nyTimesAPIKey;

    fetch(requestEntertainmentNews)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
            var entertainmentNewsFlash = document.getElementById("entertainment-news-flash");
            entertainmentNewsFlash.addEventListener("click", function() {
                window.open(data.results[0].url,'_blank');
            })
            const entertainmentPhoto = document.getElementById("entertainment-news-flash-photo");
            entertainmentPhoto.setAttribute("src",data.results[0].multimedia[0].url);
            entertainmentNewsFlash.append(entertainmentPhoto);
            const entertainmentHeadline = document.getElementById("entertainment-news-flash-headline");
            entertainmentHeadline.innerHTML = data.results[0].title;
            entertainmentNewsFlash.append(entertainmentHeadline);
            const entertainmentAbstract = document.getElementById("entertainment-news-flash-abstract");
            entertainmentAbstract.innerHTML = data.results[0].abstract;
            entertainmentNewsFlash.append(entertainmentAbstract);
            const entertainmentNewsCategory = document.getElementById("entertainment-news-flash-category");
            entertainmentNewsCategory.innerHTML = "Movie News"
            entertainmentNewsFlash.append(entertainmentNewsCategory);
    })
}

function healthNewsAPI() {
    var nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR"
    var requestHealthNews = "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=" + nyTimesAPIKey;

    fetch(requestHealthNews)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
            var healthNewsFlash = document.getElementById("health-news-flash");
            healthNewsFlash.addEventListener("click", function() {
                window.open(data.results[0].url,'_blank');
            })
            const healthPhoto = document.getElementById("health-news-flash-photo");
            healthPhoto.setAttribute("src",data.results[0].multimedia[0].url);
            healthNewsFlash.append(healthPhoto);
            const healthHeadline = document.getElementById("health-news-flash-headline");
            healthHeadline.innerHTML = data.results[0].title;
            healthNewsFlash.append(healthHeadline);
            const healthAbstract = document.getElementById("health-news-flash-abstract");
            healthAbstract.innerHTML = data.results[0].abstract;
            healthNewsFlash.append(healthAbstract);
            const healthNewsCategory = document.getElementById("health-news-flash-category");
            healthNewsCategory.innerHTML = "Health News"
            healthNewsFlash.append(healthNewsCategory);
    })
}

function travelNewsAPI() {
    var nyTimesAPIKey = "VqGXtQf3PtyfZrtXwxjc54VEnZhc9QnR"
    var requestTravelNews = "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=" + nyTimesAPIKey;

    fetch(requestTravelNews)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
            var travelNewsFlash = document.getElementById("travel-news-flash");
            travelNewsFlash.addEventListener("click", function() {
                window.open(data.results[0].url,'_blank');
            })
            const travelPhoto = document.getElementById("travel-news-flash-photo");
            travelPhoto.setAttribute("src",data.results[0].multimedia[0].url);
            travelNewsFlash.append(travelPhoto);
            const travelHeadline = document.getElementById("travel-news-flash-headline");
            travelHeadline.innerHTML = data.results[0].title;
            travelNewsFlash.append(travelHeadline);
            const travelAbstract = document.getElementById("travel-news-flash-abstract");
            travelAbstract.innerHTML = data.results[0].abstract;
            travelNewsFlash.append(travelAbstract);
            const travelNewsCategory = document.getElementById("travel-news-flash-category");
            travelNewsCategory.innerHTML = "Travel News"
            travelNewsFlash.append(travelNewsCategory);
    })
}


// submitBtn.addEventListener("click", function() {
//     event.preventDefault();
//     nyTimesTopStoriesAPI();
//     console.log("ive been clicked");
// })






});












