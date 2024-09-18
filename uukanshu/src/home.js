load('config.js');

function execute() {
    return Response.success([

        {title: "Huyền Huyễn", input: BASE_URL + "class_1_1.html" , script: "gen.js"}, 
        {title: "Võ Hiệp", input: BASE_URL + "class_2_1.html" , script: "gen.js"},
        {title: "Đô Thị", input: BASE_URL + "class_3_1.html" , script: "gen.js"},    
        {title: "Lịch Sử Quân Sự", input: BASE_URL + "class_4_1.html" , script: "gen.js"}, 
        {title: "Khoa Học Huyễn Tưởng", input: BASE_URL + "class_5_1.html" , script: "gen.js"},
        {title: "Trò Chơi", input: BASE_URL + "class_6_1.html" , script: "gen.js"},    
        {title: "Khinh Dị", input: BASE_URL + "class_7_1.html" , script: "gen.js"},
        {title: "Lãng Mạn", input: BASE_URL + "class_8_1.html" , script: "gen.js"},  
        {title: "Anime", input: BASE_URL + "class_9_1.html" , script: "gen.js"},
        {title: "Thể Loại Khác", input: BASE_URL + "class_10_1.html" , script: "gen.js"}, 
    ]);
}

