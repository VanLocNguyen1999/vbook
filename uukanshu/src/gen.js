load('config.js');

function execute(url, page) {
    if (!page) {
        page = '1';
    }

    let response = fetch('https://uukanshu.cc/class_1_1.html');

    if (response.ok) {
        let doc = response.html();
        var booklist = [];
        doc.select("div#fengtui.content.book").forEach(e => {
            booklist.push({
                name: e.select("div.bookbox").select("h4.bookname > a").text(),
                link: e.select("div.bookbox").select("h4.bookname > a").attr("href"),
                description: e.select("div.bookbox").select(".bookinfo .update").html(),
                host: BASE_URL,
            });
        });
        return response.success(booklist);
        }
    return null;
}
