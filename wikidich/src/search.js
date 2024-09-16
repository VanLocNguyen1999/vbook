load('config.js');

function execute(key, page) {
    if (!page) page = '0';

    let response = fetch(BASE_URL + "/tim-kiem?q=" + key + "&qs=1" + "&start=" + page + "&vo=1");

    if (response.ok) {
        let doc = response.html();
        let booklist = [];
        let  next = doc.select(".pagination").select("li.active").select("li").select("a").text()*20 ;
        doc.select(".book-list .book-item]").forEach(e => {
            booklist.push({
                name: e.select(".info-coll > a").text(),
                link: e.select(".info-coll > a").first().attr("href"),
                description: e.select(".book-author").text(),
                cover: e.select(".cover-col").attr("href"),
                host: BASE_URL,
            });
        });
        return Response.success(booklist, next);
    }
    return null;
}