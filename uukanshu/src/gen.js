load('config.js');

async function execute(url, page) {
    if (!page) page = '1';

    let response = await fetch(BASE_URL + url + '_' + page + '.html');

    if (response.ok) {
        let html = await response.text();
        let doc = new DOMParser().parseFromString(html, 'text/html');
        
        var booklist = [];
        var next = parseInt(doc.querySelector(".pagelink strong").textContent) + 1;
        let img = 'https://raw.githubusercontent.com/VanLocNguyen1999/vbook/refs/heads/Loc_nv/uukanshu/icon.png';
        
        doc.querySelectorAll(".content .book .bookbox").forEach(e => {
            booklist.push({
                name: e.querySelector(".bookname > a").textContent,
                link: e.querySelector(".bookname > a").getAttribute("href"),
                description: e.querySelector(".bookinfo .update").innerHTML,
                cover: img,
                host: BASE_URL,
            });
        });
        return response.success(booklist, next);
    }
    return null;
}

