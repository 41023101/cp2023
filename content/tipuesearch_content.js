var tipuesearch = {"pages": [{'title': 'About', 'text': '41023101 王怡婷 \n 倉儲: https://github.com/41023101/cp2023 \xa0 \n 網站: https://41023101.github.io/cp2023/content/index.html \xa0 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'weekly progress', 'text': "w1 : \n 建立帳號與網站 \n 利用已經帶有 Brython 執行環境的倉儲, 在設定學員 Github Classroom 首次作業時, 即經由 template 置入, 因此學員只要: \n 利用學校 email 帳號, 建立 Github 帳號, 以英文姓名縮寫加上一組數字, 選擇最短帳號名稱 例如: jfk40723199, jfk 為其自選的姓名縮寫, 而隨後則加上各自的學號. \n 擁有 Github 帳號後, 即可透過 Github Classroom assignment 連結取得作業倉儲, 自行在倉儲中設定 Github Pages 後, 即可啟用作業網站 (以下 \xa0 所謂 網站均指靜態網站 \xa0 , 而用來編輯網站內容的 動態網站, 則統稱為網際內容編輯器 , 使用動態網站的目的在編輯靜態網站的內容). 網站內容經過編輯之後, 必須建立新的網站內容 (使用 generate_pages), 然後將新的網站內容更新到對應的 Github 倉儲中 (稱為改版, 其過程經歷 git add, git commit 與 git push 等階段). \n git 為分散式版次管理系統工具. \n git add \n git commit \n git push \n w2 : \n 說明安裝 Apps, 如何設定網路, 查驗是否正確連網 \n 說明如何利用近端可攜系統執行 C 程式, 如何利用 ChatGPT 進行對話 \n 說明如何利用 Replit 協助編輯網頁內容 \n 說明如何 connect Replit to Github, 如何建立個人網站並利用 Replit 啟動編輯網站 \n w3 : \n 有關電腦輔助設計室網路設定說明 \n 處理 .replit 與 replit.nix 中的舊 Python 設定問題 \n 說明如何為 site-個人github帳號 倉儲設定 Github Pages \n 採用 Github Classroom 建立作業倉儲的問題: \n 2023/09/26 在 1a w3 課程進行到建立各學員 site 作業時發現, 將 Replit 導入 Github 倉儲的流程中, 所產生的系統間權限設定, 必須由 Github Classroom 管理帳號 (以 cp2023 為例, 附屬在 mdecp2023 帳號下), 針對各用戶所提出的個別 Replit 權限 requests (以 site-scrum-1 倉儲為例, 只能透過 Replit 提出控管 mdecp2023/site-scrum-1 倉儲的權限) \xa0 逐一進行設定 . \n \n (上圖顯示共有三名用戶針對 mdecp2023 帳號下的 Github Classroom 倉儲提出 Replit 連線要求, 其中只有最上方用戶的 request 取得 mdecp2023/site-scrum-1 倉儲的維護權限, 其餘兩則 requests 則仍處於待審核階段. 意即若要讓各用戶整合 Replit, \xa0 每一個 Github Classroom 作業, 管理者都必須手動處理超過兩百則的 requests ) \n 為去除管理者的手動設定負擔, 決定 2023 cp 與 cad 等課程將放棄使用 Github Classroom. 改為由各學員自行針對課程建立用來評分的課程倉儲與網站 (cp 課程建立 cp2023 倉儲, cad 課程則建立 cad2023 倉儲), 直接附屬在學員的 Github 帳號下, 後續的 submodule 設定與倉儲協同權限則統一由各學員自行負責 \n w4 : \n 各學員自行建立線上考試帳號 \n 依據 \xa0 112 學年度第一學期教師授課表 中的學員修課名單, 利用 Teams 中的 Excel 取學員 Github 帳號. \n 各學員自行建立 Github 評分倉儲 cp2023, 並設定 Github Pages \n 登入 Github 後, 以\xa0 https://github.com/mdecycu/cmsite \xa0作為 Template 建立 cp2023 倉儲 \n 在 Replit IDE 上啟動 cp2023 內容編輯網站, 並將改版內容推送至 Github \n 在同時登入 Github 與 Replit 的情況下, 將 Replit 帳號 connect 至 Github 帳號 \n 利用 import 將 cp2023 倉儲導入 Replit \n 設定 .replit 為 python3 main.py \n 根據 cp2023 倉儲中的 README.md 在 Shell 區執行 git submodule 與 pip install \n 以 Run 執行 main.py 啟動倉儲內容編輯網頁 \n 利用 密碼產生程式 將所選定的管理者密碼字串存入 Tool - Secrets 頁面中的 config 變數 (若無 config 環境變數設定, 動態網站登入管理者密碼將交由倉儲中的 config/config 字串進行驗證) \n 重新啟倉儲內容編輯網頁後, 以新管理者密碼登入後改版並 Convert 為靜態內容後, 在 Git 頁面中將改版內容推至 Github \n w5 : \n 在 Replit cp2023 專案中設定 C 程式與 Gnuplot 執行環境, 完成 上課內容中的練習 \n replit.nix \xa0 納入 gnuplot 套件 \n w5 1b cp2023 與 Replit C 程式執行環境說明影片.mp4 \n 設定過程使用的參考網站:\xa0 https://scrum-1.github.io/cp2023/content/w5.html \xa0 \n 設定過程使用的 Repl: \xa0 https://replit.com/@scrum1/cp2023 \xa0(包含 \xa0 replit.nix \xa0 設定檔案) \n 蒐集牛頓第二運動定律、mass-spring-damper 系統、Euler's Method 數值分析相關資料 \n 將 \xa0 euler_gnuplot_msd_ex1.c \xa0放入 downloads 目錄中, 以 cc\xa0euler_gnuplot_msd_ex1.c -o euler_gnuplot_msd_ex1 產生\xa0euler_gnuplot_msd_ex1 可執行檔案後, 以 ./euler_gnuplot_msd_ex1 執行 \n 最後可以在 images 目錄中得到 \xa0 motion_plot.png \xa0 模擬結果 \n jsliu_c_programming.pdf \xa0 (需要下載密碼) \n Introduction to C \xa0(經由校園網路或 VPN 下載) \n 改由學員自行利用\xa0 https://github.com/mdecycu/cmsite \xa0倉儲作為 template, 建立名稱為 cp2023 的評分倉儲 \n w6 : \n 評分網站與倉儲 : \n cp2023 1a 學員網站與倉儲連結 \n 建立線上考試題目 \n 各學員評分倉儲與網站的內容維護 \n SMap \n EditA \n Edit \n Config \n Search \n IUpload \n IList \n FUpload \n FList \n Logout \n Convert \n C 程式練習一: \n 請從\xa0 https://www.w3resource.com/c-programming-exercises/ \xa0 網頁中自選 10 個練習範例, 分別在 Replit, Windows 與 Linux (or macOS) 中執行後, 取下執行畫面放入個人的 Github Pages 網頁 (即帳號.github.io 網站), 以 \xa0 ANSIC \xa0 作為頁面標題並詳細說明每一行的程式語法. \n C 程式練習二: \n 請從\xa0 jsliu_c_programming.pdf \xa0 (需要下載密碼)與\xa0 Introduction to C \xa0(經由校園網路或 VPN 下載)電子書中各擷取 10 個\xa0C 程式範例, 分別: \n 1. 在可攜程式環境中以 SciTE + Tiny C Compiler 編譯系統, 使用 Tools - Go 類編譯方式執行. \n 2. 在可攜程式環境中以 SciTE + Tiny C Compiler 編譯系統, 使用 Tools - Compile 編譯連結後取得 a.out, 然後在命令列中以 a.out 執行. \n 3. 在 Replit 全球資訊網 IDE 環境中的 Shell 頁面, 以 cc ex1.c 產生可執行檔案 a.out, 並以 ./a.out 執行, 或者以 cc ex1.c -o ex1 指定編譯連結後的可執行檔案名稱為 ex1 後, 以 ./ex1 執行. \n 最後將所選擇的 C 程式範例執行過程與相關說明內容, 整理在 個人 github 帳號下的 cp2023 倉儲網頁 中的 \xa0 c_ex \xa0 頁面中 \n w7 : \n 進行九人一排分組, 期中成績預計送出個人期望成績. \n", 'tags': '', 'url': 'weekly progress.html'}, {'title': '課程評分', 'text': '課程評分 : \n 線上測驗、期中網站與簡報、期末網站與簡報. \n 線上測驗 : \n 建立帳號後 ( 請將密碼寫入手機的備忘錄 ), 每週不定時進行. \n 期中網站評分與簡報 : \n 期中考前兩週開始進行. \n 期末網站評分與簡報 : \n 期末考前兩週開始進行. \n 期中成績計算 : \n 期中考與之前各週線上測驗成績平均 \n 學期成績計算 : \n (期中成績與之後各週線上測驗成績平均)*60%+(期中網站與簡報成績)*20%+(期末網站與簡報成績)*20% \n', 'tags': '', 'url': '課程評分.html'}, {'title': 'HW1', 'text': 'C 程式練習一: \n 請從\xa0 https://www.w3resource.com/c-programming-exercises/ \xa0 網頁中自選 10 個練習範例, 分別在 Replit, Windows 與 Linux (or macOS) 中執行後, 取下執行畫面放入個人的 Github Pages 網頁 (即帳號.github.io 網站), 以 \xa0 ANSIC \xa0 作為頁面標題並詳細說明每一行的程式語法. \n', 'tags': '', 'url': 'HW1.html'}, {'title': '練習一', 'text': '1. 將攝氏度轉換為華氏度 \n \n 溫度轉換.txt \n 2. 計算球體體積 \n \n 球體體積.txt \n 3. 寫一個 C 程序，使用矩形的高度和寬度作為輸入來列印矩形的周長 \n \n 周長.txt \n 4. 將公里每小時轉換為英哩每小時 \n \n 公里轉英哩.txt \n 5. 以小時和分鐘為輸入，併計算總分鐘數 \n \n 總分鐘數.txt \n 6. 計算一行輸入的三個數字的和，並用逗號分隔 \n \n 三個數字和.txt \n 7. 如果給定兩個角，請寫一個 C 程式來求三角形的第三個角 \n \n 三角形.txt \n 8. 用 C 語言寫一個程式來列印目前日期和時間 \n \n 列印現在日期.txt \n 9. 用 C 語言寫一個程式來計算自月初以來經過的秒數 \n \n 月初秒數.txt \n 10. 用 C 寫一個程序，將 tm 物件轉換為自訂文字表示形式 \n \n tm物件.txt \n', 'tags': '', 'url': '練習一.html'}, {'title': 'w5', 'text': '', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '\n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w13', 'text': '心得 \n 因為是重修，加上去年有了replit及chatgpt的問世，這次學的內容比之前一年級更充實，甚至可以透過chatgpt來繪製國旗及編譯c語言的程式。跟著學弟妹們互相學習，對網頁的編輯還有程式的運用能更快的上手，且有問題我們也能一起提出意見找到最快最適合的解決方法。', 'tags': '', 'url': 'w13.html'}, {'title': 'INFO', 'text': "牛頓第二定律 \n 資料來源: 牛頓第二運動定律 \n 牛頓第二運動定律 （ Newton's second law of motion ）表明，物體所受到的 外力 等於動量對時間的一階 導數 (一次微分值)。當物體在運動中質量不變時，牛頓第二定律也可以用質量與加速度的乘積表示。 \n 1687年， 英國 物理學家 艾薩克‧牛頓 在巨著《 自然哲學的數學原理 》裏，提出了 牛頓運動定律 ，其中有三條定律，分別為 牛頓第一定律 、牛頓第二定律與 牛頓第三定律 。牛頓第二定律又稱為「加速度定律」。 \n 牛頓第二定律被譽為 古典力學 的靈魂。在古典力學裡，它能夠主導千變萬化的物體運動與精彩有序的物理現象。牛頓第二定律的用途極為廣泛，它可以用來設計平穩地聳立於雲端的 台北101 摩天大廈，也可以用來計算從地球發射火箭登陸月球的運動軌道。 \n 牛頓第二定律是一個涉及到物體運動的理論，根據這定律，任意物體的運動所出現的改變，都是源自於外力的施加於這物體。這理論導致了 古典力學 的誕生，是科學史的一個里程碑，先前只是描述自然現象的理論不再被採納，取而代之的是這個創立了一種理性的 因果關係 架構的新理論。實際而言，古典力學的嚴格的因果屬性，對於西方思想與文明的發展，產生了很大的影響。 \n mass-spring-damper (質量彈簧阻尼器) \n 資料來源: mass-spring-damper \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 阻尼器 \n \n 阻尼器 （英語：shock absorber 或 damper）是一種利用 阻尼 特性來吸收或抑制衝量，藉以減緩力學 振動 及消耗 動能 的機械或液壓裝置。大部分的阻尼器都是以 黏壺 （dashpot）的形式，透過黏滯流體的阻尼來吸收或抑制衝量。 \n 常用在汽車的 懸吊系統 及 摩托車 中，有些 腳踏車 也有避震器。另外 掀背車 或 貨車 的後車門、部份汽車的引擎蓋以及 鐵路車輛 的 轉向架 等也都裝有阻尼器。有些 摩天大樓 為了減緩 地震 或強風吹襲時的搖晃，也會設有阻尼器，例如 台北101 、 高雄85大樓 、 上海中心大廈 、 上海環球金融中心 、 平安金融中心 、 川普大樓 、 花旗集團中心 等。 \n Euler's Method 數值分析 \n 資料來源: 歐拉方法 \n 歐拉方法 （英語： Euler method ），是一種一階 數值 方法，用以對給定初值的 常微分方程 求解。 \n 歐拉方法是 常微分方程數值方法 中最基本的 顯式方法 ；也是一個一 階 方法，意味著其局部截斷誤差 正比於 步長的平方，並且其全局截斷誤差正比於步長。 \n \n \xa0 歐拉方法的圖示。待求的曲線為藍色，它的折線近似為紅色。 \n \n \n \xa0 圖示為方程 的數值積分。藍色為歐拉法，綠色為 中點法 ，紅色為精確解 。所用步長為 ℎ = 1.0 。 \n \n \xa0 圖示為同一個方程在步長 時的結果。可以看出中點法比歐拉法收斂更快。 \n", 'tags': '', 'url': 'INFO.html'}, {'title': 'note', 'text': '帳號連接 : \n 利用 命令提示字元 (小黑窗) 連接個人倉儲 編輯網頁: \n 開啟小黑窗ipv6 \n 打\xa0git clone --recurse-submodules 空格 複製貼上下列圖片網址 \n 完成後enter \n \n \n token設定 \n Personal access tokens \n 開啟github帳號點選右上頭像並點選Settings 點選Developer settings 點選Personal access tokens 點選Generate new token(classic) Note 名稱(任意) Expiration 到期(建議90天) 勾選repo(第一個) 點選最下面的Generate token 複製產生出來的token 開啟可攜系統 開啟欲設Personal access tokens的資料夾 點開 .git (要開隱藏項目才看的到) 將裡面的 congif拉到SciTE (灰色圓球) 將複製的字串貼在github.com的前面再加上 @並存檔(CTRL+S) Personal access tokens就設定完成 \n 最後再回到可攜系統打cms enter後，即可順利開啟近端編輯個人網頁', 'tags': '', 'url': 'note.html'}]};