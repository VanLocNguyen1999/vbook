load('config.js');

function execute() {
    return Response.success([

        {title: "Huyền Huyễn", input: class_1, script: "gen.js"}, 
        {title: "Võ Hiệp", input: class_2 , script: "gen.js"},
        {title: "Đô Thị", input: class_3 , script: "gen.js"},    
        {title: "Lịch Sử Quân Sự", input: class_4  , script: "gen.js"}, 
        {title: "Khoa Học Huyễn Tưởng", input: class_5  , script: "gen.js"},
        {title: "Trò Chơi", input: BASE_URL + class_6  , script: "gen.js"},    
        {title: "Khinh Dị", input: BASE_URL + class_7  , script: "gen.js"},
        {title: "Lãng Mạn", input: BASE_URL + class_8  , script: "gen.js"},  
        {title: "Anime", input: BASE_URL + class_9  , script: "gen.js"},
        {title: "Thể Loại Khác", input: BASE_URL + class_10  , script: "gen.js"}, 
    ]);
}

