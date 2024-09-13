load('config.js');
function execute() {
    return Response.success([
        {title: "Bách Hợp", input: BASE_URL + "/the-loai/bach-hop", script: "gen.js"},
        {title: "Cổ Đại", input: BASE_URL + "/the-loai/co-dai", script: "gen.js"},
        {title: "Cung Đấu", input: BASE_URL + "/the-loai/cung-dau", script: "gen.js"},
        {title: "Đam Mỹ", input: BASE_URL + "/the-loai/dam-my", script: "gen.js"},
        {title: "Dị Giới", input: BASE_URL + "/the-loai/di-gioi", script: "gen.js"},
        {title: "Dị Năng", input: BASE_URL + "/the-loai/di-nang", script: "gen.js"},
        {title: "Điền Văn", input: BASE_URL + "/the-loai/dien-van", script: "gen.js"},
        {title: "Đô Thị", input: BASE_URL + "/the-loai/do-thi", script: "gen.js"},
        {title: "Đoản Văn", input: BASE_URL + "/the-loai/doan-van", script: "gen.js"},
        {title: "Đông Phương", input: BASE_URL + "/the-loai/dong-phuong", script: "gen.js"},
        {title: "Gia Đấu", input: BASE_URL + "/the-loai/gia-dau", script: "gen.js"},
        {title: "Hài Hước", input: BASE_URL + "/the-loai/hai-huoc", script: "gen.js"},
        {title: "Hệ Thống", input: BASE_URL + "/the-loai/he-thong", script: "gen.js"},
        {title: "Huyền Huyễn", input: BASE_URL + "/the-loai/huyen-huyen", script: "gen.js"},
        {title: "Khác", input: BASE_URL + "/the-loai/khac", script: "gen.js"},
        {title: "Khoa Huyễn", input: BASE_URL + "/the-loai/khoa-huyen", script: "gen.js"},
        {title: "Kiếm Hiệp", input: BASE_URL + "/the-loai/kiem-hiep", script: "gen.js"},
        {title: "Lịch Sử", input: BASE_URL + "/the-loai/lich-su", script: "gen.js"},
        {title: "Light Novel", input: BASE_URL + "/the-loai/light-novel", script: "gen.js"},
        {title: "Linh Dị", input: BASE_URL + "/the-loai/linh-di", script: "gen.js"},
        {title: "Mạt Thế", input: BASE_URL + "/the-loai/mat-the", script: "gen.js"},
        {title: "Ngôn Tình", input: BASE_URL + "/the-loai/ngon-tinh", script: "gen.js"},
        {title: "Ngược", input: BASE_URL + "/the-loai/nguoc", script: "gen.js"},
        {title: "Nữ Cường", input: BASE_URL + "/the-loai/nu-cuong", script: "gen.js"},
        {title: "Nữ Phụ", input: BASE_URL + "/the-loai/nu-phu", script: "gen.js"},
        {title: "Phương Tây", input: BASE_URL + "/the-loai/phuong-tay", script: "gen.js"},
        {title: "Quân Sự", input: BASE_URL + "/the-loai/quan-su", script: "gen.js"},
        {title: "Quan Trường", input: BASE_URL + "/the-loai/quan-truong", script: "gen.js"},
        {title: "Sắc", input: BASE_URL + "/the-loai/sac", script: "gen.js"},
        {title: "Sủng", input: BASE_URL + "/the-loai/sung", script: "gen.js"},
        {title: "Thám Hiểm", input: BASE_URL + "/the-loai/tham-hiem", script: "gen.js"},
        {title: "Tiên Hiệp", input: BASE_URL + "/the-loai/tien-hiep", script: "gen.js"},
        {title: "Trinh Thám", input: BASE_URL + "/the-loai/trinh-tham", script: "gen.js"},
        {title: "Trọng Sinh", input: BASE_URL + "/the-loai/trong-sinh", script: "gen.js"},
        {title: "Truyện Teen", input: BASE_URL + "/the-loai/truyen-teen", script: "gen.js"},
        {title: "Việt Nam", input: BASE_URL + "/the-loai/viet-nam", script: "gen.js"},
        {title: "Võng Du", input: BASE_URL + "/the-loai/vong-du", script: "gen.js"},
        {title: "Xuyên Không", input: BASE_URL + "/the-loai/xuyen-khong", script: "gen.js"},
        {title: "Xuyên Nhanh", input: BASE_URL + "/the-loai/xuyen-nhanh", script: "gen.js"}
    ]);
}