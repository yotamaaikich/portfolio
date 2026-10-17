(() => {
  const copy = {
    "本文へスキップ": ["Skip to content", "跳转到正文"], "AIKICHIN PORTFOLIO ホーム": ["AIKICHIN PORTFOLIO home", "AIKICHIN 作品集首页"], "メインナビゲーション": ["Main navigation", "主导航"],
    "PROJECT DETAILS": ["PROJECT DETAILS", "项目详情"], "DETAILS": ["DETAILS", "详情"], "OPEN NOTEBOOK": ["OPEN NOTEBOOK", "打开笔记本"],
    "TYPE": ["TYPE", "类型"], "TECHNOLOGY": ["TECHNOLOGY", "技术"], "HOSTING": ["HOSTING", "托管平台"], "STATUS": ["STATUS", "状态"], "SHOWCASE": ["SHOWCASE", "展示"], "ROLE": ["ROLE", "形式"],
    "SCHOOL": ["SCHOOL", "学校"], "COURSE": ["COURSE", "专业方向"], "INTERESTS": ["INTERESTS", "兴趣"], "PROJECT INFO": ["PROJECT INFO", "项目信息"], "ENDPOINTS": ["ENDPOINTS", "链接"],
    "プロフィール情報": ["Profile information", "个人资料"], "コマンドを実行": ["Run command", "运行命令"],
    "混雑状況、10分後と20分後の予測、今日のメニューをまとめた利用者向け画面の再現図": ["Mockup of the user view with crowd levels, 10- and 20-minute forecasts, and today's menu", "用户界面示意图，包含拥挤情况、10 分钟和 20 分钟后预测及今日菜单"],
    "現在人数、AI人数認識、メニューの販売状況、お知らせ欄をまとめた管理画面の再現図": ["Mockup of the admin view with current count, AI people detection, menu availability, and announcements", "管理界面示意图，包含当前人数、AI 人数识别、菜单销售状态和通知"],
    "東方風シューティングゲームのプレイ画面。黒い画面上にマゼンタ色の弾幕が広がり、下部に自機が表示されている": ["Gameplay from a Touhou-inspired shooter, with magenta bullets on a black field and the player craft near the bottom", "东方风格射击游戏画面：黑色背景上布满洋红色弹幕，玩家机体位于下方"],
    "混雑状況": ["Crowd level", "拥挤情况"], "公開中": ["Live", "已上线"], "公開サイトを見る": ["View live site", "查看已发布的网站"], "プロフィールを見る →": ["View profile →", "查看个人资料 →"],
    "PDFを選択するホーム画面": ["Home screen for selecting a PDF", "选择 PDF 的主页"], "⌂ ホーム": ["⌂ Home", "⌂ 首页"], "▦ カレンダー": ["▦ Calendar", "▦ 日历"], "読み取った課題内容の確認画面": ["Review extracted assignment screen", "确认识别出的作业信息界面"], "2025年5月20日": ["May 20, 2025", "2025 年 5 月 20 日"], "課題の登録完了画面": ["Assignment added confirmation screen", "作业添加完成界面"], "課題が登録されたカレンダー画面": ["Calendar with an assignment", "已添加作业的日历界面"],
    "あいきちのプロフィールアイコン": ["Aikichin's profile icon", "Aikichin 的头像"],
    "食堂混雑状況確認サイトの詳細": ["Cafeteria crowd monitor details", "食堂拥挤情况查询网站详情"], "課題カレンダーアプリの詳細": ["Assignment calendar app details", "作业日历应用详情"], "ポートフォリオサイトの詳細": ["Portfolio website details", "作品集网站详情"],
    "タートルグラフィックスのノートブックをGoogle Colabで開く": ["Open the turtle graphics notebook in Google Colab", "在 Google Colab 中打开海龟绘图笔记本"], "東方風シューティングゲームのノートブックをGoogle Colabで開く": ["Open the Touhou-inspired shooter notebook in Google Colab", "在 Google Colab 中打开东方风格射击游戏笔记本"],
    "Personal Portfolio": ["Personal Portfolio", "个人作品集"], "Web Application": ["Web Application", "网页应用"], "Mobile Application": ["Mobile Application", "移动应用"], "In development": ["In development", "开发中"], "Live": ["Live", "已上线"],
    "Arduino言語": ["Arduino", "Arduino 语言"], "授業・電子工作": ["Coursework / electronics projects", "课程 / 电子制作"], "授業": ["Coursework", "课程"], "Webサイト・Webアプリ制作": ["Website and web app development", "网站与网页应用开发"], "課題カレンダーアプリ": ["Assignment calendar app", "作业日历应用"], "ソース管理・公開": ["Version control and publishing", "版本管理与发布"], "Python開発": ["Python development", "Python 开发"], "Arduino開発": ["Arduino development", "Arduino 开发"], "回路シミュレーション": ["Circuit simulation", "电路仿真"], "授業・制作": ["Coursework / projects", "课程 / 项目"], "3D / 回路設計": ["3D / circuit design", "3D / 电路设计"], "開発環境": ["Development environment", "开发环境"], "授業・実験": ["Coursework / lab work", "课程 / 实验"], "Webアプリのデータ連携": ["Web app data integration", "网页应用数据集成"], "Webサイト公開・自動デプロイ": ["Website publishing and automated deployment", "网站发布与自动部署"],
    "HOME": ["HOME", "首页"], "PROJECTS": ["PROJECTS", "作品"], "ABOUT": ["ABOUT", "关于我"], "CONTACT": ["CONTACT", "联系"],
    "開発者について": ["About the developer", "关于开发者"], "作ること、試すこと、改善すること。": ["Building, experimenting, and improving.", "创作、尝试、不断改进。"], "あいきちん": ["Aikichin", "Aikichin"],
    "大阪公立大学工業高等専門学校・知能情報コース2年": ["Year 2, Intelligent Information Course, Osaka Metropolitan University College of Technology", "大阪公立大学工业高等专门学校智能信息课程二年级"],
    "学友会執行部に所属しています。": ["I am a member of the Student Council Executive Committee.", "我属于学生会执行部。"],
    "授業で制作したモノや個人制作の成果物、取得した資格などを紹介しています。": ["This portfolio features class projects, personal work, and certifications.", "这里介绍课程作品、个人项目和获得的资格证书。"],
    "作って終わりにせず、試したことや学んだことを次の制作に活かすことを大切にしています。": ["I carry what I learn from each experiment into my next project.", "我重视把每次尝试和学到的经验运用到下一个项目中。"],
    "これまでの歩み": ["My journey", "成长经历"], "大阪公立大学工業高等専門学校に入学": ["Entered Osaka Metropolitan University College of Technology", "进入大阪公立大学工业高等专门学校"], "高専での学びをスタート。": ["Started my studies at a college of technology.", "开始在高等专门学校学习。"],
    "学友会書記局に配属": ["Joined the Student Council Secretariat", "加入学生会秘书局"], "自分専用のノートPCを導入。Microsoft製品への苦手意識もあり、Linuxとのデュアルブート環境を構築。": ["Got my own laptop and set up dual boot with Linux, partly because I preferred not to rely on Microsoft products.", "购入了自己的笔记本电脑，并安装了 Linux 双系统，也因为不太喜欢使用 Microsoft 产品。"],
    "知能情報コースに配属": ["Joined the Intelligent Information Course", "进入智能信息课程"], "学友会では展電に配属。": ["Assigned to the exhibitions and electronics team in the Student Council.", "在学生会中加入展电组。"], "課題カレンダーアプリを制作": ["Built an assignment calendar app", "制作课程作业日历应用"], "Flutterを用いた個人開発に取り組む。": ["Developed it as a personal project with Flutter.", "使用 Flutter 进行个人开发。"], "第2級陸上特殊無線技士を取得": ["Earned the Second-Class Land Special Radio Operator License", "取得陆上特殊无线技士二级资格"], "ハッカソンに出展予定": ["Preparing a project for a hackathon showcase", "准备在黑客松展示项目"], "食堂の混雑状況を表示するアプリを制作し、ハッカソンで展示予定。": ["Building a cafeteria crowd-level app for a planned hackathon showcase.", "正在制作食堂拥挤情况应用，计划在黑客松上展示。"],
    "興味のある分野": ["Areas of interest", "感兴趣的领域"], "HTML、CSS、JavaScriptを使い、使いやすく個性のあるWebサイトを作ること。": ["Creating distinctive, easy-to-use websites with HTML, CSS, and JavaScript.", "使用 HTML、CSS 和 JavaScript 制作易用且有特色的网站。"], "Webアプリやアプリの画面と機能を組み合わせ、アイデアを形にすること。": ["Turning ideas into working web and mobile apps.", "将创意转化为可用的网页和移动应用。"], "試作と改善を重ねながら、見た目と使いやすさの両方を工夫すること。": ["Iterating on both visual design and usability.", "通过反复试作和改进，兼顾视觉效果与易用性。"], "制作で使っている技術": ["Tools and technologies", "使用的技术与工具"], "授業・個人制作・活動で使用した経験のある言語やツールです。": ["Languages and tools I have used in classes, personal projects, and activities.", "在课程、个人项目和活动中使用过的语言与工具。"],
    "つながる": ["Get in touch", "联系我"], "プロフィールやポートフォリオはこちら。": ["Find my profile and portfolio here.", "查看我的个人资料和作品集。"], "制作物と活動を": ["Projects and activities", "作品与活动"], "公開しています。": ["are shared here.", "均在此公开。"], "作品の更新やソースコードはGitHubで公開しています。ポートフォリオでは、制作物と開発の過程を紹介しています。": ["I share source code and project updates on GitHub. This portfolio also documents the projects and how they were made.", "我在 GitHub 上分享源码和项目更新，并在作品集中介绍项目及其开发过程。"], "プロフィールと公開リポジトリ": ["Profile and public repositories", "个人资料与公开仓库"], "GitHubを開く ↗": ["Open GitHub ↗", "打开 GitHub ↗"], "公開中のWebサイト": ["Live website", "已发布的网站"], "サイトを開く ↗": ["Open website ↗", "打开网站 ↗"], "日々の投稿はこちら": ["My posts", "日常动态"], "Xを開く ↗": ["Open X ↗", "打开 X ↗"], "Discordプロフィール": ["Discord profile", "Discord 个人资料"], "Discordを開く ↗": ["Open Discord ↗", "打开 Discord ↗"],
    "進取、共生。": ["Initiative. Collaboration.", "进取，共生。"], "実践。": ["Practice.", "实践。"], "現役高専生の成果物とこれから作るモノ": ["Projects by a college of technology student", "高等专门学校学生的作品与创作"], "授業で作成したモノや、個人製作の成果物に加えて、取得した資格等を載せています。": ["A collection of class projects, personal work, and certifications.", "这里展示课程作品、个人项目以及获得的资格证书。"], "制作物を見る": ["Explore projects", "查看作品"], "プロフィール": ["Profile", "个人资料"], "ターミナルコマンド": ["Terminal commands", "终端命令"], "制作物": ["Projects", "作品"], "すべて見る": ["View all", "查看全部"],
    "食堂混雑状況確認サイト": ["Cafeteria Crowd Monitor", "食堂拥挤情况查询网站"], "食堂の混雑状況を見える化するWebアプリ。JavaScriptとSupabaseを使い、2026年11月のハッカソン展示に向けて制作中。": ["A web app visualizing cafeteria crowd levels, built with JavaScript and Supabase for a planned November 2026 hackathon showcase.", "使用 JavaScript 和 Supabase 制作的食堂拥挤情况可视化应用，计划参加 2026 年 11 月的黑客松展示。"], "課題カレンダー": ["Assignment Calendar", "作业日历"], "課題を日付ごとに整理するアプリ。2026年8月にFlutterとDartで個人開発しました。": ["A personal app for organizing assignments by due date, built with Flutter and Dart in August 2026.", "使用 Flutter 和 Dart 于 2026 年 8 月制作的个人应用，可按日期整理作业。"], "掲載内容は授業等で制作したモノも含まれます。": ["Some featured work was created as part of coursework.", "部分作品是在课程中完成的。"], "自己紹介": ["About me", "自我介绍"], "アイデアを、動く作品に。": ["Turning ideas into working projects.", "让创意成为可运行的作品。"], "Pythonのタートルグラフィックスや東方風シューティングゲーム、Flutterの課題カレンダーなど、授業や個人開発で制作した作品を紹介しています。現在は食堂の混雑状況確認サイトにも取り組み、制作の背景や工夫した点もまとめています。": ["I feature class and personal projects, including Python turtle graphics, a Touhou-inspired bullet-hell game, and a Flutter assignment calendar. I am currently working on a cafeteria crowd-monitoring site, and share the ideas and decisions behind each project.", "这里介绍课程和个人作品，包括 Python 海龟绘图、东方风格弹幕射击游戏，以及 Flutter 作业日历。目前我也在开发食堂拥挤情况查询网站，并记录项目背景与设计思路。"], "大阪公立大学工業高等専門学校": ["Osaka Metropolitan University College of Technology", "大阪公立大学工业高等专门学校"], "知能情報コース": ["Intelligent Information Course", "智能信息课程"], "プロフィールを詳しく見る": ["View full profile", "查看完整个人资料"],
    "ポートフォリオ": ["Portfolio", "作品集"], "サイト.": ["site.", "网站。"], "授業や個人開発で制作した作品と、活動の記録を紹介するためのWebサイトです。": ["A website showcasing projects from classes and personal development, along with my activities.", "用于展示课程与个人开发作品及活动记录的网站。"], "作品を伝える場所": ["A place to share my work", "展示作品的空间"], "授業や個人開発で制作したものを、制作の背景やプロフィールとあわせて見られるようにまとめています。作品や情報をページごとに整理しました。": ["Projects from classes and personal development are organized alongside their context and my profile.", "我将课程和个人开发的作品按页面整理，并附上项目背景和个人资料。"], "設計と工夫": ["Design and features", "设计与特色"], "緑を基調にしたターミナル風のデザインで、ページ全体の印象を統一": ["A green, terminal-inspired visual theme ties the pages together.", "以绿色终端风格统一各页面的视觉设计。"], "HOMEのターミナル欄にコマンドを入力すると、作品やプロフィールの位置へ移動": ["Enter commands in the HOME terminal to jump to projects or the profile section.", "在首页终端输入命令，可跳转到作品或个人资料。"], "スマートフォンでも見やすいように、ナビゲーションやカード配置を調整": ["Navigation and cards adapt for easier viewing on smartphones.", "调整导航和卡片布局，方便在手机上浏览。"], "GitHub ActionsでGitHub Pagesへ自動デプロイ": ["GitHub Actions automatically deploys the site to GitHub Pages.", "通过 GitHub Actions 自动部署到 GitHub Pages。"], "初回起動とページ移動に、Windows風の画面演出を追加": ["Windows-inspired animations play on first launch and during page transitions.", "首次启动和页面切换时会显示 Windows 风格动画。"], "制作の進め方": ["How it was made", "制作过程"], "まず紹介する作品や活動を整理し、一覧から各作品の詳細へ移動できる構成にしました。HTML / CSS / JavaScriptで制作し、Codexも補助として活用しています。ブラウザーで表示や動作を確認し、気づいた点を修正してからGitHubへ反映し、GitHub Pagesで公開しています。": ["I first selected the projects and activities to feature, then organized them so visitors can open each project from the listing. I built the site with HTML, CSS, and JavaScript, using Codex as a development aid. I check the layout and behavior in a browser, make revisions, and publish updates to GitHub Pages.", "我先整理要介绍的作品和活动，再设计从列表进入各作品详情的结构。网站使用 HTML、CSS 和 JavaScript 制作，并借助 Codex 辅助开发。我会在浏览器中检查显示效果和功能，修改后提交到 GitHub，并发布到 GitHub Pages。"],
    "食堂混雑状況": ["Cafeteria crowd levels", "食堂拥挤情况"], "確認サイト.": ["monitor.", "查询网站。"], "食堂の混雑状況を見える化するWebアプリです。JavaScriptとSupabaseを使い、2026年11月のハッカソン展示に向けて制作しています。": ["A web app that shows cafeteria crowd levels. It is being built with JavaScript and Supabase for a planned November 2026 hackathon showcase.", "使用 JavaScript 和 Supabase 制作的食堂拥挤情况可视化应用，计划参加 2026 年 11 月的黑客松展示。"], "画面イメージ": ["Screen concept", "界面示意图"], "ポートフォリオの配色に合わせ、利用者向けと管理者向けの機能をコンパクトにまとめました。": ["The user and administrator views are presented compactly in the portfolio's color palette.", "按照作品集的配色，简洁展示用户端和管理端的功能。"], "利用者向け": ["User view", "用户界面"], "混雑状況・予測・メニュー": ["Crowd levels, forecasts, and menu", "拥挤情况、预测与菜单"], "管理者向け": ["Admin view", "管理员界面"], "人数確認・メニュー・お知らせ管理": ["People count, menu, and announcements", "人数、菜单与通知管理"], "実際の機能構成をもとにしたSVG再現図です。人数や表示内容はレイアウト例です。": ["SVG mockup based on the planned features. Counts and content are examples.", "根据计划功能绘制的 SVG 示意图。人数和内容仅为布局示例。"], "概要": ["Overview", "项目简介"], "食堂の混雑状況を利用者が確認できるようにするWebアプリです。利用者向けページでは現在の混雑度や少し先の予測、メニュー、お知らせを表示します。": ["A web app that lets visitors check cafeteria crowd levels. The user view shows the current level, a short-term forecast, the menu, and announcements.", "这款网页应用可供用户查询食堂拥挤情况。用户界面显示当前拥挤程度、短期预测、菜单和通知。"], "取り組んでいること": ["Current work", "目前的开发内容"], "混雑状況と10分後・20分後の予測を伝える画面づくり": ["Designing a view for current crowd levels and 10- and 20-minute forecasts.", "设计展示当前拥挤情况及 10 分钟、20 分钟后预测的界面。"], "現在人数とAI人数認識の結果を管理画面で確認": ["Showing the current count and AI people-detection results in the admin view.", "在管理界面查看当前人数和 AI 人数识别结果。"], "メニューの販売状況やお知らせを管理画面から更新": ["Updating menu availability and announcements from the admin view.", "通过管理界面更新菜单销售状态和通知。"], "JavaScriptとSupabaseを使ったデータ連携": ["Connecting data with JavaScript and Supabase.", "使用 JavaScript 和 Supabase 连接数据。"], "これから": ["Next steps", "后续计划"], "展示に向けて実際のデータ連携や各画面の動作を確認し、利用者が混雑状況をひと目で把握できるよう改善します。": ["Before the showcase, I will verify data connections and screen behavior, then improve how clearly users can understand crowd levels.", "展示前将检查数据连接和各界面的运行情况，并改进拥挤信息的呈现，让用户一目了然。"], "ハッカソン展示に向けて制作中": ["In development for a hackathon showcase", "正在为黑客松展示进行开发"], "2026年11月予定": ["Planned for November 2026", "计划于 2026 年 11 月展示"], "← 制作物一覧に戻る": ["← Back to projects", "← 返回作品列表"], "次の作品：課題カレンダー →": ["Next: Assignment Calendar →", "下一个作品：作业日历 →"],
    "アプリ.": ["app.", "应用。"], "課題を日付ごとに整理し、提出予定を見渡せるようにすることを目指して、2026年8月にFlutter / Dartで制作した個人開発アプリです。": ["A personal Flutter and Dart app built in August 2026 to organize assignments by date and keep track of due dates.", "这是一款于 2026 年 8 月使用 Flutter 和 Dart 开发的个人应用，用于按日期整理作业并查看截止日期。"], "PDFから課題登録まで": ["From PDF to calendar", "从 PDF 到日历"], "PDFを選ぶとAIが課題の内容を読み取り、確認してからカレンダーへ登録できます。": ["Select a PDF and AI extracts assignment details for review before adding them to the calendar.", "选择 PDF 后，AI 会提取作业信息，确认后即可添加到日历。"], "PDFを選択": ["Select a PDF", "选择 PDF"], "ホーム画面から課題のPDFを選びます。": ["Choose an assignment PDF from the home screen.", "在主页选择作业 PDF。"], "課題をカレンダーに": ["Add assignments", "将作业添加到"], "登録しよう": ["to your calendar", "日历"], "PDFを選ぶとAIが": ["Choose a PDF and AI", "选择 PDF 后，AI 将"], "内容を読み取り、": ["reads its contents and", "读取内容并"], "課題を登録します。": ["adds the assignment.", "添加作业。"], "PDFファイルを選ぶ": ["Choose a PDF file", "选择 PDF 文件"], "ファイルピッカーから読み込むPDFを指定。": ["Select a PDF using the file picker.", "在文件选择器中指定 PDF。"], "PDFファイルを選択する画面": ["PDF file picker screen", "PDF 文件选择界面"], "‹　ファイルを選択": ["‹　Choose a file", "‹　选择文件"], "最近のファイル": ["Recent files", "最近的文件"], "課題一覧.pdf": ["assignments.pdf", "作业列表.pdf"], "レポート.pdf": ["report.pdf", "报告.pdf"], "資料.pdf": ["materials.pdf", "资料.pdf"], "選択": ["Select", "选择"], "AIが内容を解析": ["AI analyzes the PDF", "AI 正在分析内容"], "Node.js経由でGeminiにPDFを送信します。": ["The PDF is sent to Gemini through Node.js.", "通过 Node.js 将 PDF 发送给 Gemini。"], "AIがPDFを解析中の画面": ["PDF analysis screen", "PDF 分析界面"], "PDFを解析中です": ["Analyzing PDF", "正在分析 PDF"], "Node.jsを経由して": ["Using Node.js", "通过 Node.js"], "Geminiが内容を読み取ります": ["Gemini reads the content", "Gemini 读取内容"], "しばらくお待ちください…": ["Please wait…", "请稍候…"], "読み取り結果を確認": ["Review extracted details", "确认识别结果"], "AIが抽出した課題の情報を確認します。": ["Review the assignment details extracted by AI.", "确认 AI 提取的作业信息。"], "課題の確認": ["Review assignment", "确认作业"], "解析結果": ["Analysis results", "分析结果"], "科目": ["Course", "科目"], "データベース": ["Database", "数据库"], "課題名": ["Assignment", "作业名称"], "第3回レポート": ["Report 3", "第 3 次报告"], "締切日": ["Due date", "截止日期"], "カレンダーに登録": ["Add to calendar", "添加到日历"], "キャンセル": ["Cancel", "取消"], "内容を確定すると、課題が登録されます。": ["Confirm the details to add the assignment.", "确认信息后即可添加作业。"], "登録が完了しました！": ["Added successfully!", "添加成功！"], "課題をカレンダーに登録しました。": ["The assignment was added to the calendar.", "作业已添加到日历。"], "科目　データベース": ["Course　Database", "科目　数据库"], "課題　第3回レポート": ["Assignment　Report 3", "作业　第 3 次报告"], "締切　2025年5月20日": ["Due　May 20, 2025", "截止日期　2025 年 5 月 20 日"], "カレンダーを確認する": ["View calendar", "查看日历"], "カレンダーで確認": ["View in calendar", "在日历中查看"], "登録した課題を日付から見つけられます。": ["Find assignments by date.", "按日期查看已添加的作业。"], "カレンダー": ["Calendar", "日历"], "2025年5月": ["May 2025", "2025 年 5 月"], "日　月　火　水　木　金　土": ["Sun　Mon　Tue　Wed　Thu　Fri　Sat", "日　一　二　三　四　五　六"], "今日の課題": ["Today's assignments", "今日作业"], "締切：2025年5月20日": ["Due: May 20, 2025", "截止日期：2025 年 5 月 20 日"], "締切前に通知": ["Get deadline reminders", "截止日期提醒"], "設定したリマインダーで締切をお知らせ。": ["A reminder notifies you before the due date.", "设置提醒后会在截止日期前通知。"], "締切前に届くリマインダー通知": ["Deadline reminder notification", "截止日期提醒通知"], "5月19日（月）": ["Mon, May 19", "5 月 19 日（周一）"], "明日が締切の課題があります": ["An assignment is due tomorrow", "有一项作业明天截止"], "データベース：第3回レポート": ["Database: Report 3", "数据库：第 3 次报告"], "1時間前": ["1 hour ago", "1 小时前"], "通知などを設定": ["Configure settings", "设置选项"], "通知やカレンダー連携を調整できます。": ["Configure notifications and calendar integration.", "可调整通知和日历同步。"], "通知、カレンダー連携などの設定画面": ["Settings screen for notifications and calendar sync", "通知与日历同步设置界面"], "設定": ["Settings", "设置"], "通知設定": ["Notifications", "通知设置"], "カレンダー連携": ["Calendar sync", "日历同步"], "ファイル保存先": ["File storage", "文件保存位置"], "アプリ情報": ["App information", "应用信息"], "アプリの機能と画面構成をもとにしたSVGイメージです。実際のアプリ画面のスクリーンショットではありません。": ["SVG mockup based on the app's features and layout; it is not a screenshot of the actual app.", "根据应用功能和界面结构制作的 SVG 示意图，并非实际应用截图。"], "2026年8月に個人開発した、課題を日付ごとに整理するFlutterアプリです。カレンダーで予定を見渡し、課題を管理することを目指して制作しました。": ["A Flutter app I built as a personal project in August 2026 to organize assignments by date and manage them in a calendar.", "这是一款我于 2026 年 8 月个人开发的 Flutter 应用，用于按日期整理作业并通过日历进行管理。"], "実装内容": ["Implementation", "实现内容"], "Flutter / Dartを使った画面づくり": ["UI built with Flutter and Dart", "使用 Flutter / Dart 构建界面"], "日付ごとに課題を確認するカレンダー画面": ["Calendar view for assignments by date", "按日期查看作业的日历界面"], "課題をカレンダー上で整理するUI": ["Calendar UI for organizing assignments", "用于整理作业的日历界面"], "使いやすさを意識した画面と操作の改善": ["UI and interaction refinements focused on usability", "以易用性为目标改进界面和操作"], "次に加えたい情報": ["Planned additions", "计划补充的内容"], "操作例の動画などを追加し、機能と使い方が伝わる紹介に更新する予定です。": ["I plan to add a video walkthrough to better explain the features and how to use the app.", "计划添加操作演示视频，让功能和使用方法更清晰。"], "開発・改善": ["In development and refinement", "开发与改进中"], "個人制作": ["Personal project", "个人项目"], "前の作品：食堂混雑状況 →": ["Previous: Cafeteria Crowd Monitor →", "上一个作品：食堂拥挤情况 →"], "作ったもの、試したこと、これから改善したいこと。": ["What I have built, tried, and plan to improve.", "展示已完成的作品、尝试过的内容和后续改进方向。"], "ポートフォリオサイト": ["Portfolio website", "作品集网站"], "作品や活動を紹介するために、企画・デザイン・実装・公開まで行ったWebサイトです。": ["A website I planned, designed, built, and published to showcase my projects and activities.", "为展示作品和活动而规划、设计、开发并发布的网站。"], "授業の成果物": ["Coursework", "课程作品"], "タートルグラフィックス": ["Turtle graphics", "海龟绘图"], "タートルグラフィックスで線や図形を描き、組み合わせて模様を作る課題です。描画の命令を通して、コードで絵を表現しました。": ["A coursework project using turtle graphics commands to draw lines and shapes and combine them into patterns.", "通过海龟绘图命令绘制线条和图形，并组合成图案的课程作业。"], "課題04_40YC.ipynb": ["Assignment 04_40YC.ipynb", "作业04_40YC.ipynb"], "図形描画": ["Drawing", "图形绘制"], "東方風シューティングゲーム": ["Touhou-inspired bullet-hell shooter", "东方风格弹幕射击游戏"], "東方Projectの弾幕シューティングをイメージした作品です。キャラクターや弾の動きをコードで組み立て、ゲームの形にしました。": ["A project inspired by Touhou Project's bullet-hell shooters, with character and projectile movement built in code.", "灵感来自东方 Project 弹幕射击游戏的作品，通过代码实现角色和弹幕的运动。"], "PG1-第04回講義.ipynb": ["PG1-Lecture 04.ipynb", "PG1-第04回讲义.ipynb"], "シューティングゲーム": ["Shooter", "射击游戏"], "プログラミング": ["Programming", "编程"], "Colabの閲覧にはGoogleへのログインや、ノートブックの共有設定が必要な場合があります。": ["Viewing a Colab notebook may require signing in to Google and enabling link sharing.", "查看 Colab 笔记本可能需要登录 Google，并设置共享权限。"], "制作について": ["About these projects", "关于这些作品"], "授業等で制作したモノも含め、目的や取り組んだことを紹介しています。": ["Some projects were created for coursework; each entry explains its purpose and what I worked on.", "部分作品是在课程中完成的；页面会介绍作品目的和制作内容。"],
    "ページを開いています…": ["Loading page…", "正在加载页面…"]
  };
  const localeNames = { ja: "日本語", en: "English", zh: "简体中文" };
  const originalTextNodes = new WeakMap();
  const originalAttributes = new WeakMap();
  const japaneseTitle = document.title;
  const descriptionElement = document.querySelector('meta[name="description"]');
  const japaneseDescription = descriptionElement?.content;
  const translate = (language) => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : language;
    const switcher = document.querySelector(".language-switch");
    if (switcher) switcher.setAttribute("aria-label", language === "ja" ? "言語" : language === "en" ? "Language" : "语言");
    document.querySelectorAll("body *").forEach((element) => {
      let attributes = originalAttributes.get(element);
      if (!attributes) { attributes = {}; originalAttributes.set(element, attributes); }
      for (const attribute of ["aria-label", "alt", "title"]) {
        if (!(attribute in attributes)) attributes[attribute] = element.getAttribute(attribute);
        const original = attributes[attribute];
        if (original && copy[original]) element.setAttribute(attribute, language === "ja" ? original : copy[original][language === "en" ? 0 : 1]);
      }
    });
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const original = originalTextNodes.get(node) ?? node.nodeValue;
      originalTextNodes.set(node, original);
      const trimmed = original.trim();
      if (!trimmed || !copy[trimmed]) continue;
      const leading = original.match(/^\s*/)?.[0] ?? "";
      const trailing = original.match(/\s*$/)?.[0] ?? "";
      node.nodeValue = `${leading}${language === "ja" ? trimmed : copy[trimmed][language === "en" ? 0 : 1]}${trailing}`;
    }
    const page = location.pathname.split("/").pop() || "index.html";
    const titles = {
      "index.html": ["HOME — AIKICHIN PORTFOLIO", "首页 — AIKICHIN 作品集"],
      "projects.html": ["PROJECTS — AIKICHIN PORTFOLIO", "作品 — AIKICHIN 作品集"],
      "about.html": ["ABOUT — AIKICHIN PORTFOLIO", "关于我 — AIKICHIN 作品集"],
      "contact.html": ["CONTACT — AIKICHIN PORTFOLIO", "联系 — AIKICHIN 作品集"],
      "project-cafeteria.html": ["CAFETERIA CROWD MONITOR — AIKICHIN PORTFOLIO", "食堂拥挤情况查询 — AIKICHIN 作品集"],
      "project-task-calendar.html": ["ASSIGNMENT CALENDAR — AIKICHIN PORTFOLIO", "作业日历 — AIKICHIN 作品集"],
      "project-portfolio.html": ["PORTFOLIO SITE — AIKICHIN PORTFOLIO", "作品集网站 — AIKICHIN 作品集"]
    };
    if (language === "ja") {
      document.title = japaneseTitle;
    } else if (titles[page]) document.title = titles[page][language === "en" ? 0 : 1];
    const descriptions = {
      "index.html": ["Aikichin's portfolio featuring projects, profile, and activities.", "Aikichin 的作品集，展示项目、个人资料与活动。"],
      "projects.html": ["Class projects, personal apps, and coursework by Aikichin.", "Aikichin 的课程作品、个人应用与学习成果。"],
      "about.html": ["Profile, education, interests, and experience of Aikichin.", "Aikichin 的个人资料、学习经历、兴趣与经验。"],
      "contact.html": ["Links to Aikichin's GitHub, portfolio, X, and Discord.", "Aikichin 的 GitHub、作品集、X 和 Discord 链接。"],
      "project-cafeteria.html": ["A cafeteria crowd-monitoring web app project built with JavaScript and Supabase.", "使用 JavaScript 和 Supabase 开发的食堂拥挤情况查询网页应用。"],
      "project-task-calendar.html": ["A Flutter and Dart assignment calendar app project.", "使用 Flutter 和 Dart 制作的作业日历应用。"],
      "project-portfolio.html": ["Design, features, and development process of Aikichin's portfolio website.", "Aikichin 作品集网站的设计、功能与开发过程。"]
    };
    if (descriptionElement && descriptions[page]) descriptionElement.content = language === "ja" ? japaneseDescription : descriptions[page][language === "en" ? 0 : 1];
  };

  const languageSelect = document.createElement("select");
  languageSelect.className = "language-switch";
  languageSelect.setAttribute("aria-label", "Language / 言語");
  Object.entries(localeNames).forEach(([value, label]) => languageSelect.add(new Option(label, value)));
  document.querySelector(".site-nav")?.after(languageSelect);
  let savedLanguage = "ja";
  try { savedLanguage = localStorage.getItem("aikichin-portfolio-language") || "ja"; } catch { /* Japanese remains the default. */ }
  if (!Object.hasOwn(localeNames, savedLanguage)) savedLanguage = "ja";
  languageSelect.value = savedLanguage;
  translate(savedLanguage);
  languageSelect.addEventListener("change", () => {
    const language = languageSelect.value;
    try { localStorage.setItem("aikichin-portfolio-language", language); } catch { /* The language still changes for this page. */ }
    translate(language);
  });

  const transitionKey = "aikichin-portfolio-page-transition";
  const pageTransition = document.createElement("div");
  pageTransition.className = "page-transition";
  pageTransition.setAttribute("aria-hidden", "true");
  pageTransition.innerHTML = '<div class="page-transition-window"><div class="page-transition-titlebar"><span>AIKICHIN PORTFOLIO</span><span aria-hidden="true">▰</span></div><div class="page-transition-content"><span class="page-transition-mark" aria-hidden="true">▣</span><div><strong>Loading page...</strong><span>PLEASE WAIT / SYSTEM READY</span></div></div><div class="page-transition-progress"><span></span></div></div>';
  document.body.append(pageTransition);

  const showPageTransition = () => pageTransition.classList.add("is-active");
  const navigateWithTransition = (url) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.location.assign(url);
      return;
    }
    try { sessionStorage.setItem(transitionKey, "true"); } catch { /* Navigation still works without storage. */ }
    showPageTransition();
    window.setTimeout(() => window.location.assign(url), 420);
  };

  let arrivingFromPage = false;
  try {
    arrivingFromPage = sessionStorage.getItem(transitionKey) === "true";
    sessionStorage.removeItem(transitionKey);
  } catch { /* Skip the arrival animation when storage is unavailable. */ }
  if (arrivingFromPage) {
    showPageTransition();
    window.setTimeout(() => pageTransition.classList.remove("is-active"), 260);
  }

  // Browsers can restore the previous page from the back-forward cache with
  // its outgoing overlay still visible. Always clear that stale state on return.
  window.addEventListener("pageshow", (event) => {
    if (!event.persisted) return;
    pageTransition.classList.remove("is-active");
    try { sessionStorage.removeItem(transitionKey); } catch { /* Nothing else is needed. */ }
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target || link.hasAttribute("download")) return;
    const destination = new URL(link.href, window.location.href);
    if (destination.origin !== window.location.origin || !/\.html?$/i.test(destination.pathname) || (destination.pathname === window.location.pathname && !destination.search)) return;
    event.preventDefault();
    navigateWithTransition(destination.href);
  });

  const startup = document.querySelector("#startup-screen");
  if (startup) {
    const skipButton = startup.querySelector("[data-startup-skip]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sessionKey = "aikichin-portfolio-started";
    let alreadyStarted = false;

    try {
      alreadyStarted = sessionStorage.getItem(sessionKey) === "true";
      if (!alreadyStarted && !reducedMotion) sessionStorage.setItem(sessionKey, "true");
    } catch {
      // If session storage is unavailable, the intro still works for this page.
    }

    const finishStartup = () => {
      startup.classList.add("is-finished");
      window.setTimeout(() => startup.remove(), 600);
    };

    if (alreadyStarted || reducedMotion) {
      startup.remove();
    } else {
      skipButton?.addEventListener("click", finishStartup, { once: true });
      window.setTimeout(finishStartup, 4000);
    }
  }

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
      const symbol = toggle.querySelector("span");
      if (symbol) symbol.textContent = isOpen ? "＋" : "－";
    });
  }

  const terminalForm = document.querySelector("[data-terminal-form]");
  if (terminalForm) {
    const terminalCard = terminalForm.closest(".terminal-card");
    const commandInput = terminalForm.querySelector(".terminal-input");
    const response = document.querySelector("[data-terminal-response]");
    let matrixTimer;

    const showResponse = (command, message) => {
      response.replaceChildren();
      response.hidden = false;

      if (command) {
        const echo = document.createElement("p");
        echo.className = "terminal-echo";
        echo.textContent = `yotamaaikich@portfolio:~$ ${command}`;
        response.append(echo);
      }

      if (message) {
        const result = document.createElement("p");
        result.className = "terminal-result-line";
        result.textContent = message;
        response.append(result);
      }
    };

    const jumpTo = (id, message) => {
      const target = document.getElementById(id);
      if (!target) {
        showResponse("", "destination not found.");
        return;
      }

      showResponse(commandInput.value.trim(), message);
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start"
      });
      target.classList.remove("terminal-jump-highlight");
      void target.offsetWidth;
      target.classList.add("terminal-jump-highlight");
      window.setTimeout(() => target.classList.remove("terminal-jump-highlight"), 1450);
    };

    terminalForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const command = commandInput.value.trim().toLowerCase();
      if (!command) return;

      terminalCard.classList.remove("is-matrix");
      switch (command) {
        case "help":
          showResponse(command, "commands: whoami / ls / projects / cafeteria / calendar / profile / contact / matrix / clear");
          break;
        case "whoami":
          showResponse(command, "@yotamaaikich — student developer");
          break;
        case "ls":
          showResponse(command, "projects/  profile/  contact/");
          break;
        case "projects":
          jumpTo("projects", "opening projects/ …");
          break;
        case "cafeteria":
          jumpTo("project-cafeteria", "opening cafeteria project …");
          break;
        case "calendar":
          jumpTo("project-task-calendar", "opening task calendar …");
          break;
        case "profile":
        case "about":
          jumpTo("profile", "opening profile/ …");
          break;
        case "contact":
          showResponse(command, "opening contact/ …");
          window.setTimeout(() => navigateWithTransition("contact.html"), 400);
          break;
        case "matrix": {
          showResponse(command, "initializing green mode … system ready.");
          void terminalCard.offsetWidth;
          terminalCard.classList.add("is-matrix");
          window.clearTimeout(matrixTimer);
          matrixTimer = window.setTimeout(() => terminalCard.classList.remove("is-matrix"), 1000);
          break;
        }
        case "clear":
          response.replaceChildren();
          response.hidden = true;
          break;
        default:
          showResponse(command, `command not found: ${command}. Type "help" for commands.`);
      }

      commandInput.value = "";
      commandInput.focus({ preventScroll: true });
    });
  }

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
})();
