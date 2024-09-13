load("config.js");

function execute(url, page) {
    if (!page) page = '1';
    let tocUrl = API_URL.replace("https://", "https://backend.") + url + "&limit=20&page=" + page;

    let response = fetch(tocUrl, {
        headers: {
            "X-App": "vTruyen.Com"
        },
    });
    if (response.ok) {
        let json = response.json();
        let novelList = [];
        let next = json.pagination.next + "";
        json.data.forEach(book => {
            let description = "";
            if (book.author) {
                description = book.author.name;
            } else if (book.creator) {
                description = book.creator.name;
            }
            novelList.push({
                name: book.name,
                link: book.link,
                description: description,
                cover: book.poster['default'],
                host: BASE_URL
            })
        });
        return Response.success(novelList, next);
    }

    return null;
}