var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁: https://spirit0224.github.io/wcm2024/ \n 網誌: https://spirit0224.github.io/wcm2024/blog \n 簡報: https://spirit0224.github.io/wcm2024/reveal \n 倉儲: https://github.com/Spirit0224/wcm2024 \n', 'tags': '', 'url': 'About.html'}, {'title': 'week', 'text': '', 'tags': '', 'url': 'week.html'}, {'title': 'w1', 'text': '1.必須自行建立 Github 帳號, 主要用來建立並維護個人的課程倉儲與網站. \n 2.網際內容管理的個人課程網站名稱為 wcm2024 \n 3. 建立github個人網頁 \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '1.要確認各學員是否完成 Github 中個人倉儲與網站的建立 \n 2.採用 Github Codespaces 維護網站的好處是, Visual Studio code 介面提供多終端機與多 ports 開啟功能 \n 3.在 mdewcm2024 帳號下, 期中分組作業名稱為 1a, 若第一組組長建立 Team 名稱為 midag1, 則分組倉儲名稱將為 1a-midag1 \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '1.利用Github Classroom 分組 \n 2.利用github Codespaces維護倉儲且說明如何利用 Codespaces 維護分組倉儲 \n 3.說明如何將組員的個人倉儲納入分組倉儲成為子模組 \n 4.說明如何在 Replit 維護分組倉儲 \n', 'tags': '', 'url': 'w3.html'}, {'title': 'w4', 'text': '1.建立網站的網址 指的是 Web site, 也就是 WWW (World Wide Web)\xa0 \n 2. 網際內容管理的網際指的並非網際網路的 Internet, 而是指 Web-based, 也就是針對網頁瀏覽器檢視的內容加以管理 \n 3. 下載\xa0 main2.txt \xa0與\xa0 static.txt ,  \n \xa0 \xa0其中包含 main2.py 與 static.py,  \n \xa0 \xa0只要在 Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視.  \n \xa0 \xa0若要取消先前執行 python3 main2.py,  \n \xa0 \xa0只需要在 Shell 頁面按下 ctrl + c, (c 代表 cancle 也就是取消.  ) \n \xa0 \xa0若要執行動態網站，可以在 Shell 執行 python3 main.py \n 4.說明 如何在 Replit 檢視靜態網站 教學影片 \n 5.Replit 上的免費帳號僅允許與一個 Github 帳號對應， \n \xa0 \xa0必須自行在 /home/runner/.ssh 目錄下建立 id_rsa 與 config\xa0 內容為: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n Host github.com \n User git \n Hostname github.com \n \n \n \n \n \n \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w6', 'text': '', 'tags': '', 'url': 'w6.html'}, {'title': 'Git 歷史與希望解決的問題', 'text': '問題: 請簡述一下 Git 的發展歷史, 以及當時的背景如何? Git 想要解決甚麼問題? \n ChatGPT 回答: \n Git 是由 Linus Torvalds 在 2005 年開始開發的分散式版本控制系統。在此之前，像 CVS 和 Subversion 等集中式版本控制系統存在著一些問題，比如需要與中央存儲庫保持連接、分支和合併操作複雜等。在 Linux 核心程式開發過程中，Torvalds 和其他開發者開始感受到集中式版本控制系統的種種限制和不便，這促使他開始開發一個更適合分散式開發的工具。 \n Git 的目標是解決集中式版本控制系統的一些瓶頸，包括： \n \n 性能問題：集中式版本控制系統在大型專案中操作效率低，尤其是在提交和合併時。 \n 分支和合併操作的複雜性：在集中式系統中，分支和合併操作可能會變得耗時且複雜，過程中容易出現錯誤。 \n 依賴中央存儲庫：集中式系統需要即時與資料伺服器連線，一旦斷線或伺服器故障，可能會導致開發過程中的中斷。 \n \n 在這些問題的背後，是軟體開發過程的變化和複雜性增加。隨著項目變得越來越大，開發團隊變得分散，需要更靈活和高效率的工具來管理代碼。Git 的分散式架構允許開發人員在沒有連接到中央伺服器的情況下進行本地端操作，並且提供了高效的分支和合併機制，從而更有效滿足了協同需求。 \n 因此，Git 的發展是在不斷變化和擴大的軟體開發生態系統中的一個自然回應，旨在解決集中式版本控制系統所遇到的種種挑戰，並為開發人員提供更好的工具和流程。 \n 再問: 集中式版本控制系統為何在提交與合併上有性能問題? \n ChatGPT 回答: \n 集中式版本控制系統在提交和合併上可能會遇到性能問題，主要是由於以下幾個原因： \n \n \n 單一伺服器負載：在集中式版本控制系統中，所有的提交和合併操作都需要與中央伺服器進行連線。當開發人員數量增加，或者在大型項目中進行大量提交和合併操作時，這個中央伺服器可能會成為性能瓶頸，導致提交和合併操作的速度變慢。 \n \n \n 網路延遲：因為提交和合併操作需要與中央伺服器進行連線，因此網路延遲也會影響操作的速度。特別是當開發人員分佈在不同的地理位置時，距離和網路品質都可能擴大延遲。 \n \n \n 資料傳輸量：提交和合併操作可能涉及大量的資料傳輸，尤其是當提交或合併的檔案很大或者進行多次修改時。這些大量的資料傳輸需要消耗時間與頻寬，進一步影響操作的性能。 \n \n \n 鎖定操作：有些集中式版本控制系統在提交和合併時可能會對文件或資料夾進行鎖定，以避免同時進行衝突的操作。這種鎖定操作可能會導致等待時間增加，特別是在多人同時進行操作的情況下。 \n \n \n 因此，集中式版本控制系統的性能問題主要是由於其架構設計所導致，即所有操作都必須通過中央伺服器進行。因而限制了系統的擴展性和彈性，特別是在大型或分散式團隊中。 \n 再問: 為何使用 Git 沒有單一伺服器負載問題? \n ChatGPT 回答: \n 使用 Git 沒有單一伺服器負載問題的主要原因是 Git 的分散式架構。在 Git 中，每一位開發人員都擁有一個完整的本地儲存庫（repository），這使得提交和合併操作不需要依賴於單一的中央伺服器。如此一來，就不會出現單一伺服器負載問題。 \n 換言之，當開發人員在本地進行提交時，各協同人員只需將變更提交到自己的本地儲存庫中，而不是向中央伺服器提交。使得提交操作的速度不再受到中央伺服器的限制，而是受到本地計算機的性能限制，一般情況下會比提交到單一伺服器的執行速度快上許多。 \n 當需要與其他開發人員共享變更時，Git 提供了分支和合併的機制，開發人員可以在本地進行分支和合併操作，而不需要直接與中央伺服器連線。使得提交和合併操作可以在本地進行，不受網路延遲和頻寬限制，從而更加快速並提高協同效率。 \n 另外，即使在多人協作的情況下，由於每個開發人員都有自己的本地儲存庫，這些操作可以同步進行，而不會互相干擾或造成壓力集中在單一伺服器上。 \n 因此，Git 的分散式架構使得提交和合併操作不再依賴於單一的中央伺服器，從而消除了單一伺服器負載問題，提高了系統的性能與彈性。 \n', 'tags': '', 'url': 'Git 歷史與希望解決的問題.html'}, {'title': 'Git 如何解決產品設計問題', 'text': '問題: 身為產品開發人員, 使用的是商用封閉的 CAD 套件, 該如何使用 Git 來提升工作效率? \n ChatGPT 回答: \n 即使使用商用封閉的 CAD 套件，仍然可以使用 Git 來提升工作效率。以下是一些使用 Git 的方式： \n \n \n 版本控制: 使用 Git 對 CAD 項目進行版本控制，可以跟蹤每個版本的變更，並輕鬆地回溯到先前的版本。這對於保留歷史記錄、管理修改和恢復意外更改非常有用。 \n \n \n 分支管理: 在 Git 中使用分支來進行不同功能或版本的開發。你可以在不同的分支上同時進行不同的實驗和開發工作，而不會影響主要版本的開發。 \n \n \n 協作與共享: 透過 Git，團隊成員可以輕鬆地共享各自的工作成果，進行協作開發。每個人可以在自己的分支上工作，然後通過合併請求（pull request）將修改合併到主分支中。 \n \n \n 程式審查: 利用 Git 的分支和合併功能進行程式審查。團隊成員可以在專門的分支上提交各自編寫的程式變更，然後其他成員可以查看這些變更，提供意見和建議，最終通過合併到主分支中。 \n \n \n 自動化流程: 使用 Git 配合持續集成（CI）和持續部署（CD）工具，自動化 CAD 項目的測試、構建和部署流程。這樣可以節省時間並降低錯誤，同時確保項目的品質和穩定性。 \n \n \n 文檔和問題追蹤: 將 CAD 專案的文檔和問題追蹤整合到 Git 庫中，以便於跟蹤和管理。例如: 可以使用 Git 提供的 Wiki 功能來撰寫文檔，並使用 Issue 跟蹤功能來追蹤問題和任務。 \n \n \n 因此，即使使用商用封閉的 CAD 套件，Git 仍然可以成為提升工作效率的強大工具，幫助團隊更好地協作、管理和追蹤 CAD 開發專案。 \n 再問: 可是商用 CAD 採用 binary 格式的零件檔案, 在協同產品設計流程中, 該如何使用 Git 提升協同效能? \n ChatGPT 回答: \n 即使 CAD 文件是以 binary 格式保存的，你仍然可以使用 Git 來提升協同效能。以下是一些方法： \n \n \n 使用 LFS（Large File Storage）: Git LFS 是一個 Git 擴增模組，專門用於管理大型文件，包括 CAD 文件等二進制文件。透過 Git LFS，可以將大型 CAD 文件存儲在單獨的存儲庫中，而不會將它們放在 Git 存儲庫中，從而減少存儲庫大小和傳輸時間。 \n \n \n 拆分項目: 將 CAD 項目拆分為更小的部分，每個部分都是可獨立開發和測試的。這樣可以降低對於 binary 文件的變更衝突，並使得協同開發更加順暢。 \n \n \n 定期同步: 要求團隊成員定期將他們的工作同步到 Git 存儲庫中，以便及時發現和解決衝突。透過定期同步，可以最大程度地減少衝突和重複工作。 \n \n \n 使用分支: 在 Git 中使用分支來進行不同功能或版本的開發。每個團隊成員可以在自己的分支上工作，而不會影響主要的生產環境。這樣可以提高彈性，同時減少對於 binary 文件的同時修改。 \n \n \n 程式審查: 使用 Git 的分支和合併功能進行程式審查。每個成員在完成工作後，可以提交程式變更到自己的分支，然後發起合併請求。其他成員可以查看這些變更，提供意見和建議，確保程式的品質和穩定性。 \n \n \n 文件管理: 使用 Git 存儲庫中的 Wiki 功能來管理 CAD 文件的相關文檔，包括設計文檔、變更日誌等。這樣可以使得團隊成員更容易地找到並理解 CAD 文件的相關訊息。 \n \n \n 因此，即使 CAD 文件是以 binary 格式保存的，仍然可以通過合理使用 Git 和相應的工具來提升協同效能，降低衝突和重複工作，從而更加高效地進行協同產品設計流程。 \n 再問: 若設計流程採用 Siemens NX 設計零組件, 若將每一個零組件的設計過程採 NXOpen Python 程式存檔, 並且透過設計參數進行零組件調控, 就採用 Git 分散式版本管理系統上, 會比直接使用 binary 格式更有效率嗎? \n ChatGPT 回答: \n 在將每個零組件的設計過程以 NXOpen Python 程式存檔的情況下，使用 Git 分散式版本管理系統相比直接使用 binary 格式可能會更有效率。這主要是因為： \n \n \n 可讀性和可比較性：使用 NXOpen Python 程式存檔可以使得零組件的設計過程更具有可讀性和可比較性。相比於 binary 格式，Python 程式碼可以被版本控制系統更好地管理，使得團隊成員可以更容易地查看、比較和理解每個零組件的設計過程。 \n \n \n 易於跟蹤和管理：Python 程式存檔可以更輕鬆地跟蹤和管理設計過程中的變更。Git 可以記錄每次提交的修改，包括添加、刪除和修改的程式碼行數，從而使得團隊可以清楚地了解每個零組件的設計歷史和演變過程。 \n \n \n 設計參數的調控：使用 Python 程式存檔可以更靈活地調控零組件的設計參數。可以使用程式碼來自動化設計過程，並且通過修改參數來調整零組件的性能和外觀，從而更有效地進行重複性流程設計以及最佳化。 \n \n \n 協同開發與程式審查：與 binary 格式相比，Python 程式存檔更適合進行協同開發與程式碼的審查。團隊成員可以在版本控制系統中查看並評論每個零組件的設計程式碼，提供意見和建議，從而確保設計的品質和一致性。 \n \n \n 因此，使用 NXOpen Python 程式存檔並結合 Git 分散式版本管理系統可以更有效地管理和控制零組件的設計過程，提高團隊的協同效率和設計品質。 \n', 'tags': '', 'url': 'Git 如何解決產品設計問題.html'}, {'title': '期中整理', 'text': '', 'tags': '', 'url': '期中整理.html'}, {'title': '學習重點', 'text': '1. 網際內容管理課程的英文名稱為 Web-based Content Management, 課程目標是讓學員得以運用網頁來管理與個人或專業領域應用相關的內容 \n', 'tags': '', 'url': '學習重點.html'}, {'title': '網頁式內容管理', 'text': '1. 網際內容管理課程將網頁內容管理系統與網頁資料放在同一個倉儲中, 且讓使用者寄存在 Github 中 \n 2. 只要能夠執行 Python 的雲端或近端環境都能開啟網頁編輯程式進行改版, 而編輯完成的網頁資料則可在 Github 倉儲中透過 Pages 的全球資訊網伺服器功能呈現網站內容. \n 3.如何利用電腦輔助設計室的舊 Python 建立新的可攜環境?\xa0 \n \xa0 \xa0AI:利用舊的 Python 程式建立新的可攜環境可以透過虛擬環境管理工具如  virtualenv  或  conda  來實現。 \n 4.AI:精密機械設計流程 ：您可以利用網頁技術來構建基於瀏覽器的機械設計工具或界面，其中可以包含使用 Python 執行的後端運算。 \n 5. 設計運算 ：對於需要大量數學運算或模擬的任務，您可以使用 Python 來編寫算法並將其嵌入到網頁中，以便在用戶的瀏覽器中執行。 \n 6. 特定系統模擬 ：使用 Python 可以方便地進行特定系統的模擬，例如控制系統、信號處理、人工智慧算法等。 \n', 'tags': '', 'url': '網頁式內容管理.html'}, {'title': 'AI工具', 'text': '\n \n \n \n \n \n \n \n \n \n \n AI 工具曾經協助我們解決甚麼問題? \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n ChatGPT \n \n \n \n \n \n \n \n \n \n \n \n 自然語言處理 (NLP) ：NLP 技術使得文本分析、情感分析、語言翻譯等工作更加自動化和高效。例如，搜索引擎使用 NLP 技術來理解用戶的查詢並提供相應的搜索結果。 \n \n \n 圖像識別和圖像分類 ：圖像識別技術使得機器可以識別圖像中的對象、場景、人物等。這在自動駕駛、安全監控、醫學影像分析等領域都有廣泛的應用。 \n \n \n 推薦系統 ：AI 技術被廣泛應用於推薦系統，通過分析用戶的歷史行為和偏好來提供個性化的推薦。這在電子商務、視頻串流平台、社交媒體等領域都是常見的應用。 \n \n \n 醫療診斷 ：AI 技術在醫療領域的應用包括圖像分析、病理學分析、基因組學等，可以幫助醫生更準確地進行診斷和治療。 \n \n \n 金融風險管理 ：金融業利用 AI 技術來分析大量的數據，預測金融市場的趨勢和風險，從而制定更有效的投資策略和風險管理方案。 \n \n \n 自動化生產 ：在製造業中，AI 技術被用於優化生產流程、預測設備故障、自動化機器人操作等，從而提高生產效率和產品質量。 \n \n \n 這些只是 AI 技術所解決問題的一小部分。隨著 AI 技術的不斷發展和普及，它將在更多的領域中發揮作用，幫助我們解決更多的問題。 \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'AI工具.html'}, {'title': 'Replit', 'text': '', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n \n \n \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}]};