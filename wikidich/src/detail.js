load('config.js');


function execute(url) {

    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let paragraphs = doc.querySelectorAll(".cover-info > p");
        return Response.success(
            {
                name: doc.select(".book-info > h2").text(),
                cover: doc.select(".cover-warpper").attr("src"),
                author: paragraphs[2].select("> a").text(),
                description: doc.select(".book-desc-detail > p").first().html(),
                detail: "Thời gian đổi mới: " + paragraphs[5].select("> span").text(),
                ongoing: paragraphs[3].select("> a").text(),
                host: "BASE_URL"
        }
    );
}
    return null;
}

