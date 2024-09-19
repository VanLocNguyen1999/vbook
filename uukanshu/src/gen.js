load('config.js');

function execute(url, page) {
    if (!page) page = '1';

    let response = fetch(BASE_URL + url + '_' + page + '.html');

    if (response.ok) {
        let doc = response.html();
        var booklist = [];
        var next = doc.select(".pagelink").select(">strong").text() + 1 ;
        let img = 'https://raw.githubusercontent.com/VanLocNguyen1999/vbook/refs/heads/Loc_nv/uukanshu/icon.png' ;
        doc.select(".content book bookbox").forEach(e => {
            booklist.push({
                name: e.select(".bookname > a").text(),
                link: e.select(".bookname > a").attr("href"),
                description: e.select(".bookinfo update").html(),
                cover: img,
                host: BASE_URL,
            });
        });
        return response.success(booklist, next);
        }
    return null;
}
