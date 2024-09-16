load('config.js');

function execute(){

    return Response.success([

        {title: "Xuyên Việt", 
            input: BASE_URL + "/tim-kiem?qs=2&gender=5794f03dd7ced228f4419196&start=0&tag=5794f03dd7ced228f44191af&so=4&vo=1",
            script: "gen.js"},
        {title: "Hệ Thống", 
            input: BASE_URL + "/tim-kiem?qs=2&gender=5794f03dd7ced228f4419196&start=0&tag=5794f03dd7ced228f44191b6&so=4&vo=1",
            script: "gen.js"},
        {title: "Hiện Đại", 
            input: BASE_URL + "/tim-kiem?qs=2&gender=5794f03dd7ced228f4419196&age=5794f03dd7ced228f441919d&start=0&so=1&vo=1",
            script: "gen.js"},
        {title: "Mạt Thế", 
            input: BASE_URL + "/tim-kiem?qs=2&gender=5794f03dd7ced228f4419196&start=0&tag=5794f03dd7ced228f44191ac&so=1&vo=1",
            script: "gen.js"},
        {title: "Huyền Huyễn", 
            input: BASE_URL + "/tim-kiem?qs=2&gender=5794f03dd7ced228f4419196&start=0&so=1&genre=57d17c94d7ced218fcd2734b&vo=1",
            script: "gen.js"}, 
        {title: "Ma Pháp", 
            input: BASE_URL + "/tim-kiem?qs=2&gender=5794f03dd7ced228f4419196&start=0&tag=5794f03dd7ced228f44191b0&so=1&vo=1",
            script: "gen.js"}, 
        {title: "Hoàn Thành", 
            input: BASE_URL + "/tim-kiem?status=5794f03dd7ced228f4419191&qs=2&gender=5794f03dd7ced228f4419196&start=0&so=1&vo=1",
            script: "gen.js"}
    ]);
}