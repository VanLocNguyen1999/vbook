load('config.js');

function execute(url, page) {
    if (!page) page = '1';

    const urlObj = new URL(url);

    // Thay đổi phần số trang cuối cùng trong đường dẫn
    // Ví dụ: 'class_1_1.html' -> 'class_1_2.html'
    let parts = urlObj.pathname.split('_');  // Chia phần đường dẫn theo dấu '_'
    parts[parts.length - 1] = `${page}.html`;  // Thay số trang cuối cùng
    urlObj.pathname = parts.join('_');  // Ghép lại thành 

    let response = fetch(urlObj.href);

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
 
        page = next;
        return response.success(booklist);
    }
    return null;
}
