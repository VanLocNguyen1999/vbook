load('config.js');

function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        return Response.success({
            name: doc.select("div.detail").select("p.name >strong").text(),
            cover: doc.select("div.detail").attr("src"),
            author: doc.select("div.detail").select("p.author >font >a").text(),
            description: doc.select("div.info").html(),
            detail: doc.select("div.detail").select(p.new).text(),
            ongoing: doc.select("div.info > p").html().get(2).get(1).text(),
            host: "BASE_URL"
        });
    }
    return null;
}