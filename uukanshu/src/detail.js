load('config.js');


function execute(url) {

    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        return Response.success(
            {
                name: doc.select(".booktitle").text(),
                cover: doc.select(".bookcover hidden-xs").select("img").first().attr("src"),
                author: doc.select(".booktag > a").text(),
                description: doc.select(".bookintro").first().html(),
                detail: doc.select(".booktime").first().html(),
                ongoing: "Chương Mới Nhất" + doc.select(".bookchapter").text(),
                host: "BASE_URL"
        }
    );
}
    return null;
}

