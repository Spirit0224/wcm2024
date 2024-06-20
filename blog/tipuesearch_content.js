var tipuesearch = {"pages":[{"title":"About","text":"CMSimfly 內容管理網誌 課程倉儲: https://github.com/Spirit0224/wcm2024 內容管理: https://spirit0224.github.io/wcm2024/content/index.html 課程投影片: https://chiamingyen.github.io/cmsimfly/reveal 課程網誌: https://spirit0224.github.io/wcm2024/blog","tags":"misc","url":"./pages/about/"},{"title":"WCM2024 W8 課程","text":"2024 WCM 如何建立課程倉儲 https://www.youtube.com/watch?v=3XDoYSvsvOA&t=1s","tags":"W8","url":"./2024-WCM-W8-blog-tutorial.html"},{"title":"期中課程整理","text":"網際內容管理課程的英文名稱為 Web-based Content Management, 課程目標是讓學員得以運用網頁來管理與個人或專業領域應用相關的內容. 當然, 我們還想啟發學員對於網頁與內容管理發展趨勢的思考, 並且針對學員選課, 評定出一個合理的修課成績! 網頁式內容管理 目前無論是 Github 的 Codespaces, Gitpod 或 Replit 都讓使用者可以直接在網頁瀏覽器中維護網站內容. 其中 Replit 還提供手機 App 讓使用者透過手機或平板管理網頁內容. 網際內容管理課程將網頁內容管理系統與網頁資料放在同一個倉儲中, 且讓使用者寄存在 Github 中, 只要能夠執行 Python 的雲端或近端環境都能開啟網頁編輯程式進行改版, 而編輯完成的網頁資料則可在 Github 倉儲中透過 Pages 的全球資訊網伺服器功能呈現網站內容. 網際內容管理課程所採用的管理系統採用 Python Flask 編寫, 其中除了章節式的網頁內容採超文件的 H 標註進行分頁外, 還導入 Pelican 與 Reveal.js 等兩個延伸套件, 其中 Pelican 可用來建立網誌, 而 Reveal.js 則可用來建立網頁上的簡報資料. 學習議題: 如何建立 Github 上的網站? 如何管理內容? 如何建立章節式網站? 能放入甚麼多媒體內容? 靜態圖文? 動態圖文? 線上遊戲? 3D 零組件展示? 如何建立網頁系統中的網誌? 如何建立網頁系統中的簡報? Python 程式系統 上課用的電腦中配置了一套舊版的可攜式 Python 程式系統, 可讓使用者建立新版的可攜式 Python 程式系統, 放入 USB 隨身碟後, 可以在任何一台 64 位元的 Winodws 操作系統中使用, 主要目的除了可用來維護位於 Github 的網頁內容之外, 也可用來開發各種 Python 程式, 或與其他 Windows 應用套件結合使用, 例如: 與 CoppeliaSim 機器人模擬場景結合, 建立機電控制系統, 或與 Siemens NX 的 API 延伸程式結合應用. 學習議題: 如何利用電腦輔助設計室的舊 Python 建立新的可攜環境? 在網頁中置入 Python 語法的程式加上對 Javascript 與超文件語法的了解後, 能夠應用在那些領域? (精密)機械設計流程? 設計運算? 特定系統模擬? 網頁上的 IDE IDE 是甚麼? 可以將 Replit、Codespaces 與 Gitpod 當成 IDE 用來開發各種程式嗎? 與近端操作系統上的開發有何不同? 多人協同? 這樣安全嗎? 學習議題: 學會使用網頁上的各種 IDE 之後, 有沒有甚麼感想或心得? AI 工具 ChatGPT 與 Gemini Pro 都可以直接利用 Gmail 帳號登入, 初級應用目前都可免費使用, 這兩個 AI 工具可以協助我們解決甚麼問題? 為什麼有人驚這些工具為天人? 有人卻覺得還好而已, 並無法從中挖出甚麼資料? 學習議題: AI 工具曾經協助我們解決甚麼問題?","tags":"期中","url":"./2024-WCM-期中-blog-tutorial.html"},{"title":"WCM2024 W6 課程","text":"A. git 的發展歷史 2005 年：Git 誕生。 Linus Torvalds 建立Git，並在Linux 核心開發中開始使用它。 2005 年：首個公開發布。 2006 年：引進GitHub。 廣泛的使用情境。 2007 年：Git 1.5 發布。這個版本引入了一些重要的特性，包括git-config等指令，以及git-svn工具。 2008 年：Git 1.6 發布。此版本引入了git-clone命令的改進，以及git-rerere工具用於解決衝突。 2009 年：Git 1.6.3 發布。這個版本引入了git bisect指令，用於二分查找引入Bug 的提交。 2012 年：Git 1.8 發布。這個版本引入了git-merge和git-push的改進，以及對子模組的改進。 2014 年：Git 2.0 發布。這個版本引入了一些重大變化，包括預設使用push.default = simple 和預設情況下移除git submodule 中的.gitmodule 檔案。 2016 年：Git 2.10 發布。這個版本引入了多種新特性，包括改進的git rebase，新的git worktree命令等。 2018 年：Git 2.19 發布。這個版本引入了git switch和git restore命令，用於替代git checkout。 2020 年：Git 2.29 發布。這個版本引入了git sparse-checkout命令，允許使用者只檢出倉庫的一部分文件。 2022 年：仍在進行中 B.創作人的相關履歷 1.Git 的創辦人是Linus Torvalds，他是一位著名的電腦程式設計師，同時也是Linux 核心的創作者 2.經歷： Linux 核心開發者（1991年至今） ⓵創建並領導Linux 核心項目，負責開發和維護Linux 核心。 ②吸引了全球數千名開發者的參與，使Linux 成為最受歡迎的開源作業系統之一。 ③建立Git 分散式版本控制系統，並在Linux 核心開發中開始使用它。 ④為了解決Linux 核心開發過程中遇到的問題，例如處理大規模程式碼庫和多人協作等，而設計了Git。 C. git 解決內容管理問題 1.對於一般的專業人士，無論是軟體開發者、寫作者、設計師或其他領域的從業者，Git 都可以作為一個強大的工具來解決內容管理問題 ①版本控制: 使用Git 可以輕鬆追蹤檔案的變更歷史，從而方便回溯到先前的版本。 ②協作合作: 多人協作時，Git 提供了分支和合併的功能，可以讓團隊成員在不干擾彼此的情況下並行工作。 ③備份與同步: 使用Git 可以輕鬆地將檔案備份到遠端倉庫，並確保資料的安全性和可靠性。 ④程式碼審查與回饋: Git 提供了程式碼審查工具，團隊成員可以透過提交程式碼並要求審查來進行程式碼品質控制 ⑤專案管理: Git 倉庫可以與專案管理工具（如Jira、Trello等）集成，幫助團隊追蹤任務、問題和進度，提高專案管 理的效率和透明度。","tags":"W6","url":"./2024-WCM-W6-blog-tutorial.html"},{"title":"WCM2024 W5 課程","text":"w5 1.複習w3的分組倉儲權限設定影片","tags":"W5","url":"./2024-WCM-W5-blog-tutorial.html"},{"title":"WCM2024 W4 課程","text":"複習前三週的課程內容, 並且介紹 git 與 cmsimde 的相關用法. 有關建立網站 這裡所謂的網站指的是 Web site, 也就是 WWW (World Wide Web) 伺服器 (Server)端的超文件 (Hypertext), 且此超文件包含 css 與 Javascript 資料, 用來定義使用者利用瀏覽器連線時所得到的資料內容. 網際內容管理的網際指的並非網際網路的 Internet, 而是指 Web-based, 也就是針對網頁瀏覽器檢視的內容加以管理, 而這些內容除了具備各種不同格式的文字外, 還包括靜態圖片與動態的影音多媒體. 因為希望所管理的網站內容, 從無到有的過程留下改版歷程, 因此使用分散式版次管理系統進行網頁的配置, 也就是利用 Github 所提供的 Pages 功能來建立網頁. 又因為直接編輯帶有各種標註符號的超文件過程較為繁瑣, 因此利用 Python 與 Javascript 編寫了一套網頁編輯系統, 也就是 cmsimde 套件, 可以在 Python 與特定模組的環境中啟動, 也就是所謂的動態編輯網站, 使用者在 cmsimde 網際管理系統中所編輯的超文件內容存入套件 config 目錄中的 content.htm, 並且利用此超文件中的 H1~H3 標註作為分頁界線, 將 content.htm 分割為具有三個階層的頁面內容, 用來展示使用者所建立的最終 Github Pages 靜態網頁內容, 此網頁資料儲存在 cmsimde 套件中的 content 目錄, 並將靜態的 css 與 Javascript 儲存在 cmsimde 套件中的 static 目錄中. cmsimde 套件有關動態與靜態網站的標題、啟動網址與埠號設定位於 init.py 程式檔案中, 若將 init.py 中的啟動網址設為外部 IP, 則此網際內容管理系統的編輯網站, 可直接連外. wcm2024_1a_w4_複習有關網站與 cmsimde 相關內容教學影片 Replit 靜態網站檢視 下載 main2.txt 與 static.txt, 其中包含 main2.py 與 static.py, 只要在 Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視. 另一方面, 若要取消先前執行 python3 main2.py, 只需要在 Shell 頁面按下 ctrl + c, c 代表 cancle 也就是取消. 然後若要執行動態網站，可以在 Shell 執行 python3 main.py 或者使用 Replit 的 Run 按鍵. 說明如何在 Replit 檢視靜態網站教學影片 說明如何下載 replit_main2.7z 並在倉儲中建立兩個檔案教學影片","tags":"W4","url":"./2024-WCM-W4-blog-tutorial.html"},{"title":"WCM2024 W3 課程","text":"除了 Replit, Github Codespaces, Gitpod 之外, 還介紹如何利用可攜系統維護個人與分組網站. 利用 Github Classroom 分組 四技期中分組作業名稱為 1a, 各組組長在取得作業連結之後, 自行建立各組 Team, 以第一組為例, Team 名稱為 ag1, 之後以每組至多 6 名組員, 透過作業連結加入 ag1 Team, 其餘各組組員則依序建立 ag2, ag3 等 Team 名稱, 讓該組組員可以加入. 以第一組為例, 完成 ag1 Team 建立後, 將取得 mdewcm2024 帳號下的 1a-ag1 倉儲, 所有第一組的組員均對此分組倉儲有管理權, 可以使用登入 Github 的帳號權限進行改版. 由於在 Replit 免費帳號下, 僅能與登入 Github 的帳號進行授權, 且在 Replit 導入的倉儲, 任何人都能夠取得倉儲下 .git 的所有資料, 因此無法利用組員的 Github 帳號 token 取得管理授權, 而必須動態在 /home/runner/.ssh 下建立 id_rsa 與 config 連線設定, 各組組員才能利用 Replit 管理分組網站內容. 利用 Github Codespaces 維護倉儲 如前所述, 使用 Replit 管理分組網站, 必須採動態建立 .ssh 目錄中的私鑰與 config, 過程比較複雜, 但若採用 Github Codespaces, 則可以在登入 Github 帳號下, 管理該帳號所有授權的倉儲, 包括分組倉儲與網站, 唯一的限制是每個月只能使用 120 core hours, 若以內定的 2 core 執行管理, 則平均每天可以使用兩個小時. 常用的 git 指令 git 的新增、提交與推送指令: git add . git commit -m \"說明字串\" git push 使用 git add . 表示要認列所進行的全部改版內容, git commit -m 執行之前, 若在近端使用, 必須先行設定 git config, 將 home_ipv6 目錄下的 .gitconfig 中明確列出改版者的身分, 其中包括: git config --global user.name \"提交者的 github 帳號名稱\" git config --global user.email \"提交者在 github 所登錄的 email address\" 使用者也可以利用 git version 查詢目前所使用的 git 版本. git status 通常用來查核目前近端的改版狀況, 例如: 是否與遠端倉儲同步, 或者遠端倉儲已經有了新版本. 若遠端倉儲已經有新的版本, 則在 git push 之前, 必須設法取下遠端資料進行合併後, 才能再提交新的版本並推送到遠端. git pull = git fetch + git merge 由於要將各組員的 wcm2024 設定為各分組倉儲的子模組, 因此必須利用 git submodule add 以各組員的學號作為子目錄名稱, 利用下列指令, 將組員倉儲新增為分組倉儲的子模組: git submodule add 倉儲網址 子目錄 若只要取下倉儲的主要內容, 可以使用下列指令: git clone 倉儲網址_協定.git 指定目錄與否 若要取下帶有子模組的倉儲, 且可能該子模組還有設定其他子模組, 則必須要加上 --recurse-submodules: git clone --recurse-submodules 倉儲網址_協定.git 指定目錄與否 說明如何將組員的個人倉儲納入分組倉儲成為子模組 說明如何在 Replit 維護分組倉儲 利用 Gitpod 維護倉儲 https://www.gitpod.io/ 的使用與 Codespaces 類似, 都可透過 Visual Studio Code 的網際介面進行倉儲的管理, 每個月有 50 小時的免費使用時間, 可以使用 Github 帳號登入, 相較於 Replit, 其給定的免費資源較多, 執行速度快且 .ssh 下的 id_rsa 與 config 僅需設定一次. 利用 Gitpod 維護倉儲 前面提到的 Replit, Codespaces 與 Gitpod 是目前利用雲端運算管理分散式版次管理系統較為有名的環境, 使用者可以直接在瀏覽器中執行各種運算與程式的開發, wcm2024 網際內容管理的第一個階段, 便利用這些目前提供免費使用的範圍內來維護個人與分組的網站. 即便如此, 免費帳號各有不銅的限制, 目前允許免費使用的 Github Pages, 也可能在未來轉為收費服務, 因此未來希望對個人或團隊的倉儲或網站掌控最大權限, 仍需學習如何利用近端或自架主機管理及部署網際內容. 首先, 透過 Windows 環境中的 USB 隨身碟, 配置可攜程式系統, 用來管理個人與分組的分組倉儲與網站, 之後再設法介紹如何利用自行建立的 Ubuntu 主機配置倉儲與網站. 利用 localhost 維護倉儲 前面提到的 Replit, Codespaces 與 Gitpod 是目前利用雲端運算管理分散式版次管理系統較為有名的環境, 使用者可以直接在瀏覽器中執行各種運算與程式的開發, wcm2024 網際內容管理的第一個階段, 便利用這些目前提供免費使用的範圍內來維護個人與分組的網站. 即便如此, 免費帳號各有不銅的限制, 目前允許免費使用的 Github Pages, 也可能在未來轉為收費服務, 因此未來希望對個人或團隊的倉儲或網站掌控最大權限, 仍需學習如何利用近端或自架主機管理及部署網際內容. 首先, 透過 Windows 環境中的 USB 隨身碟, 配置可攜程式系統, 用來管理個人與分組的分組倉儲與網站, 之後再設法介紹如何利用自行建立的 Ubuntu 主機配置倉儲與網站.","tags":"W3","url":"./2024-WCM-W3-blog-tutorial.html"},{"title":"WCM2024 W2 課程","text":"確認各學員是否完成 Github 中個人倉儲與網站的建立, 並且除了 Replit 還導入利用 Github Codespaces 維護個人與分組網站. 確認所有學員都已經建立個人網站 建立個人課程網站步驟: 1.登入 Github 2.連結到 https://github.com/mdecycu/cmsimde_site 3.利用 \"Use this template\" 下方的 \"Create a new repository\" 建立名稱為 wcm2024 的倉儲 4.在 wcm2024 倉儲上方的 Settings 設定頁面中, 左方 Pages 中的 Branch 分支區域, 選擇將 main 分支存為網頁的 root 根目錄 5.等 wcm2024 的倉儲 Github Pages 轉檔完成後, 可以看到 commits 提交區的綠色勾勾, 就完成網址為 https://帳號.github.io/wcm2024 的個人課程網站 利用上述步驟完成的倉儲內容, 同時帶有以 Python 編寫的動態網站程式, 以及位於 content 目錄中的靜態網頁資料. 確認學員已經會利用 Replit 維護網站 建議學員以 email 作為登入 Replit 的帳號, 不要依附在 Github 或 Gmail 帳號下, 以保有使用的獨立性. 由於 wcm2024 課程學員使用 Replit 免費帳號, 因此雲端 IDE 僅允許使用 Port 80 與 443 啟動網頁, 因此若要在 Replit 檢視動態網站或網誌推送到 Github 之前的內容, 必須要在動態與靜態模式中擇一使用. 如何利用 Codespaces 維護網站 Codespaces 屬於目前 Github 免費帳號下的功能之一, 與 Github 倉儲內容維護的整合度最高, 但是每個月的免費額度僅有 120 core hours, 若使用標準的 2 core 進行運算, 擇每天平均僅能使用兩個小時. 若提升至 4 core, 則每天可以使用 1 小時. 採用 Github Codespaces 維護網站的好處是, Visual Studio code 介面提供多終端機與多 ports 開啟功能, 在 Codespaces 中維護 wcm2024 的過程幾乎如同在 localhost Windows 10 或 11 的操作系統環境中進行","tags":"W2","url":"./2024-WCM-W2-blog-tutorial.html"},{"title":"WCM2024 W1 課程","text":"2024 WCM 如何建立課程倉儲 建立Github帳號 在Google搜尋Github並Sign up可用來建立並維護個人的課程倉儲與網站 建立個人課程網站 請至 cmsimde_site 倉儲,以此倉儲作為Template 建立個人的wcm2024倉儲,並設定個人的Github Pages課程網頁","tags":"W1","url":"./2024-WCM-W1-blog-tutorial.html"},{"title":"2020 Fall CP 課程","text":"2020 Fall 計算機程式的教學主要介紹 Python 與 Flutter 在機械設計流程中的應用. Python Python 可以用來開發單機版的視窗程式套件 Pyslvs-UI Python 可以用來開發網際版的內容管理系統 CMSiMDE Python 可以用來控制 CoppeliaSim 與 Webots 虛擬環境中的機電系統 Python 可以用於機器學習 Keras, Pytorch Flutter Flutter 可以用來開發跨 Apple 與 Android 手機與平板上的 Apps","tags":"Misc","url":"./2020-Fall-Intro-to-computer-programming.html"}]};