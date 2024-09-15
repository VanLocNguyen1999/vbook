load('config.js');
function execute() {
    return Response.success([
        {title: "Đề cử", input: BASE_URL + "/reader/recent-promote", script: "tab.js"},
        {title: "Tiên hiệp", input: BASE_URL + "/reader/theloai/tien-hiep", script: "tab.js"},
        {title: "Đồng nhân", input: BASE_URL + "/reader/theloai/dong-nhan", script: "tab.js"},
        {title: "Hoàn thành", input: BASE_URL + "/reader/recent-hoanthanh", script: "tab.js"},
    ]);
}
