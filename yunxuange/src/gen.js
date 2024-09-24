load('config.js');
function execute() {
    if (!page) page = '1';

    let response = fetch("https://m.yunxuange.org/yxg/sort_wuxia_1.html");
    if (response.ok) {
        let doc = response.html();
        var novelList = [];
 //       var next = doc.select("div.pagelist");
 //       next = next[2].text();
        doc.select("ul.list").select(".li").forEach(e => {
            novelList.push({
                name: e.select("p.bookname").text(),
                link: e.select("a").attr("href"),
                description:e.select("p.intro").select("div.rtList").select("a.bookIntro").text(),
                cover: e.select("a").attr("src"),
                host: BASE_URL,
            });
        });
        return Response.success(novelList);
    }
    return null;
}