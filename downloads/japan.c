#include <stdio.h>
#include <gd.h>
#include <math.h>

void draw_japan_flag(gdImagePtr img);
void draw_red_sun(gdImagePtr img, int x, int y, int size, int color);

int main() {
    int originalWidth = 1200;
    int originalHeight = (int)(originalWidth * 2.0 / 3.0);
    gdImagePtr img = gdImageCreateTrueColor(originalWidth, originalHeight);
    gdImageAlphaBlending(img, 0);

    draw_japan_flag(img);

    // 鏂扮殑瀹藉害鍜岄珮搴︿互閫傚簲 "images" 鏂囦欢澶�
    int newWidth = 600;
    int newHeight = (int)(newWidth * 2.0 / 3.0);

    // 鍒涘缓鏂板浘鍍忓苟杩涜缂╂斁
    gdImagePtr resizedImage = gdImageCreateTrueColor(newWidth, newHeight);
    gdImageAlphaBlending(resizedImage, 0);
    gdImageCopyResampled(resizedImage, img, 0, 0, 0, 0, newWidth, newHeight, originalWidth, originalHeight);

  FILE *outputFile = fopen("./../images/japan_flag.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "Error opening the output file.\n");
        return 1;
    }
    gdImagePng(resizedImage, outputFile);
    fclose(outputFile);
    gdImageDestroy(img);
    gdImageDestroy(resizedImage);

    return 0;
}

void draw_japan_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);

    // 鍒涘缓涓€涓櫧鑹茶儗鏅�
    int white = gdImageColorAllocate(img, 255, 255, 255);
    gdImageFilledRectangle(img, 0, 0, width - 1, height - 1, white);

    // 缁樺埗绾㈣壊鍦嗗湀锛堝お闃筹級
    int red = gdImageColorAllocate(img, 255, 0, 0);
    int center_x = width / 2;
    int center_y = height / 2;
    int radius = (int)((width * 2) / 3);
    draw_red_sun(img, center_x, center_y, radius, red);
}

void draw_red_sun(gdImagePtr img, int x, int y, int size, int color) {
  // 娓涘皬 size 鐨勫€�,渚嬪灏囦粬鐨勫€兼笡鍗�
  size = size / 2;
    gdImageArc(img, x, y, size, size, 0, 360, color);
    gdImageFillToBorder(img, x, y, color, color);
}