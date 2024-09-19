load('config.js');

function execute(url, page) {
    if (!page) {
        page = '1';
    }

    let response = fetch(url.replace("1.html", page + ".html"));

    if (response.ok) {
        let doc = response.html();
        var booklist = [];
        var next = doc.select("div#pagelink.pagelik").select(">strong").text() ;
        let img = 'https://raw.githubusercontent.com/VanLocNguyen1999/vbook/refs/heads/Loc_nv/uukanshu/icon.png' ;
        doc.select("div#fengtui.content.book").forEach(e => {
            booklist.push({
                name: e.select("div.bookbox").select("h4.bookname > a").text(),
                link: e.select("div.bookbox").select("h4.bookname > a").attr("href"),
                description: e.select("div.bookbox").select(".bookinfo .update").html(),
                cover: img,
                host: BASE_URL,
            });
        });
        return response.success(booklist, next);
        }
    return null;
}
