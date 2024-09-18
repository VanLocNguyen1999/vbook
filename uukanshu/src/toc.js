load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var response = fetch(url);

    if (response.ok) {
        var doc = response.html()
        var el = doc.select(".book chapterlist").select("a")
        const data = [];
        for (var i = el.size() - 1; i >= 0; i--) {
            var e = el.get(i);
            data.push({
                name: e.text(),
                url: e.attr("href"),
                host: BASE_URL,
            })
        }
    
        return Response.success(data);

    }

    return null;

}