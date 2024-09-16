load('config.js');

function execute(url, page) {
    if (!page) page = '0';

    const urlObj = new URL(url);
    urlObj.searchParams.set('start', page);

    let response = fetch(urlObj.href);

    if (response.ok) {
        let doc = response.html();
        var booklist = [];
        var next = doc.select(".pagination").select("li.active").select("li").select("a").text()*20 ;
        doc.select(".book-list .book-item]").forEach(e => {
            booklist.push({
                name: e.select(".info-coll > a").text(),
                link: e.select(".info-coll > a").first().attr("href"),
                description: e.select(".book-author").text(),
                cover: e.select(".cover-col").attr("href"),
                host: BASE_URL,
            });
        });
        urlObj.searchParams.set('start', next);
        return Response.success(booklist);
    }
    return null;
}
