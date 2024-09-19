load('config.js');

function execute(url, page) {
    if (!page) page = '1';

    let response = fetch(BASE_URL + url + '_' + page + '.html');

    if (response.ok) {
        let doc = response.html();
        var booklist = [];
        var next = doc.select(".pagelink").select(">strong").text() + 1 ;
        const  link_book =  doc.select(".content book .bookbox").select(".bookname > a").first().attr("href");

        for (let i = 0; i < link_book.size(); i++) {
            let e = link_book.get(i);
            let book = fetch(e).html();
            let Img = book.select(".bookcover hidden-xs").select("img").first().attr("src");

            booklist.push({
                name: book.select(".booktitle").text(),
                link: e,
                description: book.select(".booktag").text(),
                cover: Img,
                host: BASE_URL,
            });
        }
        return response.success(booklist, next);
    }
    return null;
}
