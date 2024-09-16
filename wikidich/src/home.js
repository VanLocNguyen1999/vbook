load('config.js');

function execute() {
    return Response.success([
        {title: "Võ Hiệp", input: BASE_URL 
            + "/tim-kiem?qs=1&gender=5794f03dd7ced228f4419196&m=9&genre=5794f03dd7ced228f44191a3&so=4&y=2024&vo=1"
            , script: "gen.js"},

        {title: "Tiên Hiệp", input: BASE_URL 
            + "/tim-kiem?qs=1&gender=5794f03dd7ced228f4419196&m=9&genre=5794f03dd7ced228f44191a4&so=4&y=2024&vo=1"
            , script: "gen.js"},  

        {title: "Huyền Huyễn", input: BASE_URL 
            + "/tim-kiem?qs=1&gender=5794f03dd7ced228f4419196&m=9&genre=57d17c94d7ced218fcd2734b&so=4&y=2024&vo=1"
            , script: "gen.js"},  

        {title: "Võng Du", input: BASE_URL 
            + "/tim-kiem?qs=1&gender=5794f03dd7ced228f4419196&m=9&genre=5794f03dd7ced228f44191a5&so=4&y=2024&vo=1"
             , script: "gen.js"},  

        {title: "Khoa Học Huyễn Tưởng", input: BASE_URL 
             + "/tim-kiem?qs=1&gender=5794f03dd7ced228f4419196&m=9&genre=5794f03dd7ced228f44191a5&so=4&y=2024&vo=1"
            , script: "gen.js"},     
    ]);
}

