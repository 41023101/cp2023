void draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {
    // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位
    // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉換為徑度
    float deg = M_PI/180;
    // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度
    // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小
    float sr = sun_radius / tan(75 * deg);
    int ax, ay, bx, by, dx, dy, ex, ey;
    gdPoint points[4];

    ax = center_x;
    ay = center_y - sun_radius;
    printf("%d,%d\n", ax, ay);
    bx = center_x - sun_radius * tan(15 * deg);
    by = center_y;
    ex = center_x;
    ey = center_y + sun_radius;
    dx = center_x + sun_radius * tan(15 * deg);
    dy = center_y;

    // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域
    for (int i = 1; i <= 6; i++) {
        // A
        points[0].x = ax + sun_radius * sin(30 * deg * i);
        points[0].y = ay + sun_radius - sun_radius * cos(30 * deg * i);
        // B
        points[1].x = bx + sr - sr * cos(30 * deg * i);
        points[1].y = by - sr * sin(30 * deg * i);
        // E
        points[2].x = ex - sun_radius * sin(30 * deg * i);
        points[2].y = ey - (sun_radius - sun_radius * cos(30 * deg * i));
        // D
        points[3].x = dx - (sr - sr * cos(30 * deg * i));
        points[3].y = dy + sr * sin(30 * deg * i);

        // 對菱形區域範圍塗色
        gdImageFilledPolygon(img, points, 4, color);
        // 在菱形區域外圍畫線, 明確界定菱形範圍
        gdImagePolygon(img, points, 4, color);

        // 直線連接第二組 ABED 點
        gdImageLine(img, points[0].x, points[0].y, points[1].x, points[1].y, color);
        gdImageLine(img, points[1].x, points[1].y, points[2].x, points[2].y, color);
        gdImageLine(img, points[2].x, points[2].y, points[3].x, points[3].y, color);
        gdImageLine(img, points[3].x, points[3].y, points[0].x, points[0].y, color);
    }
}
