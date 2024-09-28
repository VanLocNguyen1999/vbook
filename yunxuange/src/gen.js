load('config.js');
function execute(url, page) {
    if(!page) page = '1';
    url = BASE_URL + url + page + ".html";
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        const data = [];
        doc.select(".list").select("li").forEach(e => {
            data.push({
                name: e.select("p.bookname").text(),
                link: e.select("p.bookname").select("a").attr("href"),
                description:e.select("p.intro").text(),
                cover: e.get(0).attr("src"),
                host: BASE_URL,
            });
        });
        let next_page = page + 1 ;
        let next = BASE_URL + url + next_page + ".html";
        return Response.success(data,next);
    }
    return null;
}