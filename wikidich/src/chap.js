load('config.js');
function execute(url) {

    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        return  doc.select("div#bookContentBody").html();
    }
    return null;
}