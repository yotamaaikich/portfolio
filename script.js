(() => {
  const copy = {
    "ページ名を入力してEnterで移動": ["Enter a page name and press Enter to navigate", "输入页面名称并按 Enter 跳转"],
    "Windows・Androidアプリ.": ["Windows & Android app.", "Windows 和 Android 应用。"],
    "Teamsやスマートフォンに届く通知を予定候補に変換し、WindowsとAndroidで共有する個人制作アプリです。": ["A personal app that turns notifications delivered to Teams and smartphones into calendar candidates, then shares saved events between Windows and Android.", "这是一款个人应用，可将 Teams 和手机收到的通知转换为日程候选项，并在 Windows 与 Android 之间共享已保存的日程。"],
    "通知文から予定候補を作成する月間カレンダーと登録済み予定の一覧": ["Monthly calendar and saved events list for creating candidates from notification text", "从通知文本创建日程候选项的月历和已保存日程列表"],
    "TeamsやAndroidの通知から予定候補を作り、PCとスマートフォンで同期する通知カレンダー": ["Notification Calendar turns Teams and Android notifications into calendar candidates and syncs events between PC and phone", "通知日历可将 Teams 和 Android 通知转换为日程候选项，并在电脑与手机之间同步"],
    "Teams・Chrome・Androidの通知から予定候補を作り、PCとスマートフォンで同期する個人制作アプリです。通知の原文は端末内に残します。": ["A personal app that turns Teams, Chrome, and Android notifications into calendar candidates and syncs events between PC and phone. Original notification text stays on each device.", "这是一款个人应用，可将 Teams、Chrome 和 Android 通知转换为日程候选项，并在电脑与手机之间同步。原始通知文本保留在设备上。"],
    "受信から端末間の同期まで": ["From notifications to cross-device sync", "从接收通知到跨设备同步"],
    "通知アクセスを許可した端末でTeamsなどの通知を受信": ["Receive Teams and other app notifications on devices where notification access is enabled", "在已启用通知访问权限的设备上接收 Teams 等应用通知"],
    "通知文からタイトルや日付を読み取り、予定候補を作成": ["Extract titles and dates from notification text to create event candidates", "从通知文本提取标题和日期并创建日程候选项"],
    "候補を確認・編集して、カレンダーに登録": ["Review or edit candidates before adding them to the calendar", "确认或编辑候选项后将其添加到日历"],
    "Firebase Authenticationでログインし、予定をPCとAndroidで同期": ["Sign in with Firebase Authentication to sync events between PC and Android", "使用 Firebase Authentication 登录并在电脑与 Android 之间同步日程"],
    "同期するのは登録済みの予定だけ": ["Only saved events are synced", "仅同步已保存的日程"],
    "通知の原文は端末内で処理し、クラウドへ送信しません。クラウドに同期するのは登録した予定の日付・タイトル・元アプリです。同期にはFirebaseのメールアドレスとパスワードでログインします。": ["Original notification text is processed on-device and is not sent to the cloud. Only saved event dates, titles, and source apps are synced. Sign in with your Firebase email and password to enable sync.", "通知原文在设备上处理，不会发送到云端。云端仅同步已保存日程的日期、标题和来源应用。使用 Firebase 邮箱和密码登录即可启用同步。"],
    "Windows版はWindows 10 version 2004以降とNode.js 20以降、Android版はAndroid 8以降が対象です。OSが通知として受け取り、通知アクセスを許可したアプリが取得できる内容を処理します。端末の電源が切れている間の通知や、過去のTeamsチャンネル履歴を取得する機能はありません。": ["The Windows app requires Windows 10 version 2004 or later and Node.js 20 or later. The Android app requires Android 8 or later. Each app can process notifications delivered by the OS while notification access is enabled; it cannot retrieve notifications from when a device was powered off or historical Teams channel posts.", "Windows 版需要 Windows 10 version 2004 或更高版本及 Node.js 20 或更高版本；Android 版需要 Android 8 或更高版本。应用只能处理系统送达且已授权读取的通知，无法读取设备关机期间的通知或历史 Teams 频道帖子。"],
    "通知は端末内・登録予定のみ同期": ["Notifications stay on-device; only saved events sync", "通知保留在设备上；仅同步已保存日程"],
    "本文へスキップ": ["Skip to content", "跳转到正文"], "AIKICHIN PORTFOLIO ホーム": ["AIKICHIN PORTFOLIO home", "AIKICHIN 作品集首页"], "メインナビゲーション": ["Main navigation", "主导航"],
    "PROJECT DETAILS": ["PROJECT DETAILS", "项目详情"], "DETAILS": ["DETAILS", "详情"], "OPEN NOTEBOOK": ["OPEN NOTEBOOK", "打开笔记本"],
    "TYPE": ["TYPE", "类型"], "TECHNOLOGY": ["TECHNOLOGY", "技术"], "HOSTING": ["HOSTING", "托管平台"], "STATUS": ["STATUS", "状态"], "SHOWCASE": ["SHOWCASE", "展示"], "ROLE": ["ROLE", "形式"],
    "SCHOOL": ["SCHOOL", "学校"], "COURSE": ["COURSE", "专业方向"], "INTERESTS": ["INTERESTS", "兴趣"], "PROJECT INFO": ["PROJECT INFO", "项目信息"], "ENDPOINTS": ["ENDPOINTS", "链接"],
    "プロフィール情報": ["Profile information", "个人资料"], "コマンドを実行": ["Run command", "运行命令"], "IDをコピー": ["Copy ID", "复制 ID"],
    "ページが見つかりません": ["Page not found", "找不到页面"], "お探しのページは移動または削除された可能性があります。": ["The page may have moved or been removed.", "该页面可能已移动或删除。"], "ホームへ戻る": ["Back home", "返回首页"], "ページ内を検索": ["Search this portfolio", "搜索此作品集"], "作品名やプロフィールを検索": ["Search projects or profile", "搜索作品或个人资料"], "検索": ["Search", "搜索"], "URLをコピー": ["Copy URL", "复制网址"], "help を入力": ["Type help", "输入 help"],
    "混雑状況、10分後と20分後の予測、今日のメニューをまとめた利用者向け画面の再現図": ["Mockup of the user view with crowd levels, 10- and 20-minute forecasts, and today's menu", "用户界面示意图，包含拥挤情况、10 分钟和 20 分钟后预测及今日菜单"],
    "現在人数、AI人数認識、メニューの販売状況、お知らせ欄をまとめた管理画面の再現図": ["Mockup of the admin view with current count, AI people detection, menu availability, and announcements", "管理界面示意图，包含当前人数、AI 人数识别、菜单销售状态和通知"],
    "東方風シューティングゲームのプレイ画面。黒い画面上にマゼンタ色の弾幕が広がり、下部に自機が表示されている": ["Gameplay from a Touhou-inspired shooter, with magenta bullets on a black field and the player craft near the bottom", "东方风格射击游戏画面：黑色背景上布满洋红色弹幕，玩家机体位于下方"],
    "混雑状況": ["Crowd level", "拥挤情况"], "公開中": ["Live", "已上线"], "公開サイトを見る": ["View live site", "查看已发布的网站"], "プロフィールを見る →": ["View profile →", "查看个人资料 →"],

    "あいきちのプロフィールアイコン": ["Aikichin's profile icon", "Aikichin 的头像"],
    "食堂混雑状況確認サイトの詳細": ["Cafeteria crowd monitor details", "食堂拥挤情况查询网站详情"],  "ポートフォリオサイトの詳細": ["Portfolio website details", "作品集网站详情"],
    "タートルグラフィックスのノートブックをGoogle Colabで開く": ["Open the turtle graphics notebook in Google Colab", "在 Google Colab 中打开海龟绘图笔记本"], "東方風シューティングゲームのノートブックをGoogle Colabで開く": ["Open the Touhou-inspired shooter notebook in Google Colab", "在 Google Colab 中打开东方风格射击游戏笔记本"],
    "Personal Portfolio": ["Personal Portfolio", "个人作品集"], "Web Application": ["Web Application", "网页应用"], "Mobile Application": ["Mobile Application", "移动应用"], "In development": ["In development", "开发中"], "Live": ["Live", "已上线"],
    "Arduino言語": ["Arduino", "Arduino 语言"], "授業・電子工作": ["Coursework / electronics projects", "课程 / 电子制作"], "授業": ["Coursework", "课程"], "Webサイト・Webアプリ制作": ["Website and web app development", "网站与网页应用开发"],  "ソース管理・公開": ["Version control and publishing", "版本管理与发布"], "Python開発": ["Python development", "Python 开发"], "Arduino開発": ["Arduino development", "Arduino 开发"], "回路シミュレーション": ["Circuit simulation", "电路仿真"], "授業・制作": ["Coursework / projects", "课程 / 项目"], "3D / 回路設計": ["3D / circuit design", "3D / 电路设计"], "開発環境": ["Development environment", "开发环境"], "授業・実験": ["Coursework / lab work", "课程 / 实验"], "Webアプリのデータ連携": ["Web app data integration", "网页应用数据集成"], "Webサイト公開・自動デプロイ": ["Website publishing and automated deployment", "网站发布与自动部署"],
    "HOME": ["HOME", "首页"], "PROJECTS": ["PROJECTS", "作品"], "ABOUT": ["ABOUT", "关于我"], "CONTACT": ["CONTACT", "联系"],
    "開発者について": ["About the developer", "关于开发者"], "作ること、試すこと、改善すること。": ["Building, experimenting, and improving.", "创作、尝试、不断改进。"], "あいきちん": ["Aikichin", "Aikichin"],
    "大阪公立大学工業高等専門学校・知能情報コース2年": ["Year 2, Intelligent Information Course, Osaka Metropolitan University College of Technology", "大阪公立大学工业高等专门学校智能信息课程二年级"],
    "学友会執行部に所属しています。": ["I am a member of the Student Council Executive Committee.", "我属于学生会执行部。"],
    "授業で制作したモノや個人制作の成果物、取得した資格などを紹介しています。": ["This portfolio features class projects, personal work, and certifications.", "这里介绍课程作品、个人项目和获得的资格证书。"],
    "作って終わりにせず、試したことや学んだことを次の制作に活かすことを大切にしています。": ["I carry what I learn from each experiment into my next project.", "我重视把每次尝试和学到的经验运用到下一个项目中。"],
    "これまでの歩み": ["My journey", "成长经历"], "大阪公立大学工業高等専門学校に入学": ["Entered Osaka Metropolitan University College of Technology", "进入大阪公立大学工业高等专门学校"], "高専での学びをスタート。": ["Started my studies at a college of technology.", "开始在高等专门学校学习。"],
    "学友会書記局に配属": ["Joined the Student Council Secretariat", "加入学生会秘书局"], "自分専用のノートPCを導入。Microsoft製品への苦手意識もあり、Linuxとのデュアルブート環境を構築。": ["Got my own laptop and set up dual boot with Linux, partly because I preferred not to rely on Microsoft products.", "购入了自己的笔记本电脑，并安装了 Linux 双系统，也因为不太喜欢使用 Microsoft 产品。"],
    "知能情報コースに配属": ["Joined the Intelligent Information Course", "进入智能信息课程"], "学友会では展電に配属。": ["Assigned to the exhibitions and electronics team in the Student Council.", "在学生会中加入展电组。"],   "第2級陸上特殊無線技士を取得": ["Earned the Second-Class Land Special Radio Operator License", "取得陆上特殊无线技士二级资格"], "ハッカソンに出展予定": ["Preparing a project for a hackathon showcase", "准备在黑客松展示项目"], "食堂の混雑状況を表示するアプリを制作し、ハッカソンで展示予定。": ["Building a cafeteria crowd-level app for a planned hackathon showcase.", "正在制作食堂拥挤情况应用，计划在黑客松上展示。"],
    "興味のある分野": ["Areas of interest", "感兴趣的领域"], "HTML、CSS、JavaScriptを使い、使いやすく個性のあるWebサイトを作ること。": ["Creating distinctive, easy-to-use websites with HTML, CSS, and JavaScript.", "使用 HTML、CSS 和 JavaScript 制作易用且有特色的网站。"], "Webアプリやアプリの画面と機能を組み合わせ、アイデアを形にすること。": ["Turning ideas into working web and mobile apps.", "将创意转化为可用的网页和移动应用。"], "試作と改善を重ねながら、見た目と使いやすさの両方を工夫すること。": ["Iterating on both visual design and usability.", "通过反复试作和改进，兼顾视觉效果与易用性。"], "制作で使っている技術": ["Tools and technologies", "使用的技术与工具"], "授業・個人制作・活動で使用した経験のある言語やツールです。": ["Languages and tools I have used in classes, personal projects, and activities.", "在课程、个人项目和活动中使用过的语言与工具。"],
    "つながる": ["Get in touch", "联系我"], "プロフィールやポートフォリオはこちら。": ["Find my profile and portfolio here.", "查看我的个人资料和作品集。"], "制作物と活動を": ["Projects and activities", "作品与活动"], "公開しています。": ["are shared here.", "均在此公开。"], "作品の更新やソースコードはGitHubで公開しています。ポートフォリオでは、制作物と開発の過程を紹介しています。": ["I share source code and project updates on GitHub. This portfolio also documents the projects and how they were made.", "我在 GitHub 上分享源码和项目更新，并在作品集中介绍项目及其开发过程。"], "プロフィールと公開リポジトリ": ["Profile and public repositories", "个人资料与公开仓库"], "GitHubを開く ↗": ["Open GitHub ↗", "打开 GitHub ↗"], "公開中のWebサイト": ["Live website", "已发布的网站"], "サイトを開く ↗": ["Open website ↗", "打开网站 ↗"], "日々の投稿はこちら": ["My posts", "日常动态"], "Xを開く ↗": ["Open X ↗", "打开 X ↗"], "学校用メール": ["School email", "学校邮箱"], "個人用メール": ["Personal email", "个人邮箱"], "メールをコピー": ["Copy email", "复制邮箱"], "メールを送る ↗": ["Send email ↗", "发送邮件 ↗"], "Discordプロフィール": ["Discord profile", "Discord 个人资料"], "Discordを開く ↗": ["Open Discord ↗", "打开 Discord ↗"],
    "進取、共生。": ["Initiative. Collaboration.", "进取，共生。"], "実践。": ["Practice.", "实践。"], "現役高専生の成果物とこれから作るモノ": ["Projects by a college of technology student", "高等专门学校学生的作品与创作"], "授業で作成したモノや、個人製作の成果物に加えて、取得した資格等を載せています。": ["A collection of class projects, personal work, and certifications.", "这里展示课程作品、个人项目以及获得的资格证书。"], "制作物を見る": ["Explore projects", "查看作品"], "プロフィール": ["Profile", "个人资料"], "ターミナルコマンド": ["Terminal commands", "终端命令"], "制作物": ["Projects", "作品"], "すべて見る": ["View all", "查看全部"],
    "食堂混雑状況確認サイト": ["Cafeteria Crowd Monitor", "食堂拥挤情况查询网站"], "食堂の混雑状況を見える化するWebアプリ。JavaScriptとSupabaseを使い、2026年11月のハッカソン展示に向けて制作中。": ["A web app visualizing cafeteria crowd levels, built with JavaScript and Supabase for a planned November 2026 hackathon showcase.", "使用 JavaScript 和 Supabase 制作的食堂拥挤情况可视化应用，计划参加 2026 年 11 月的黑客松展示。"],   "掲載内容は授業等で制作したモノも含まれます。": ["Some featured work was created as part of coursework.", "部分作品是在课程中完成的。"], "自己紹介": ["About me", "自我介绍"], "アイデアを、動く作品に。": ["Turning ideas into working projects.", "让创意成为可运行的作品。"], "Pythonのタートルグラフィックスや東方風シューティングゲーム、通知カレンダーなど、授業や個人開発で制作した作品を紹介しています。現在は食堂の混雑状況確認サイトにも取り組み、制作の背景や工夫した点もまとめています。": ["I feature class and personal projects, including Python turtle graphics, a Touhou-inspired shooter, and Notification Calendar. I am currently working on a cafeteria crowd-monitoring site and share the ideas behind each project.", "这里介绍课程和个人作品，包括 Python 海龟绘图、东方风格弹幕射击游戏和通知日历。目前我也在开发食堂拥挤情况查询网站，并记录项目背景与设计思路。"], "大阪公立大学工業高等専門学校": ["Osaka Metropolitan University College of Technology", "大阪公立大学工业高等专门学校"], "知能情報コース": ["Intelligent Information Course", "智能信息课程"], "プロフィールを詳しく見る": ["View full profile", "查看完整个人资料"],
    "ポートフォリオ": ["Portfolio", "作品集"], "サイト.": ["site.", "网站。"], "授業や個人開発で制作した作品と、活動の記録を紹介するためのWebサイトです。": ["A website showcasing projects from classes and personal development, along with my activities.", "用于展示课程与个人开发作品及活动记录的网站。"], "作品を伝える場所": ["A place to share my work", "展示作品的空间"], "授業や個人開発で制作したものを、制作の背景やプロフィールとあわせて見られるようにまとめています。作品や情報をページごとに整理しました。": ["Projects from classes and personal development are organized alongside their context and my profile.", "我将课程和个人开发的作品按页面整理，并附上项目背景和个人资料。"], "設計と工夫": ["Design and features", "设计与特色"], "緑を基調にしたターミナル風のデザインで、ページ全体の印象を統一": ["A green, terminal-inspired visual theme ties the pages together.", "以绿色终端风格统一各页面的视觉设计。"], "HOMEのターミナル欄にコマンドを入力すると、作品やプロフィールの位置へ移動": ["Enter commands in the HOME terminal to jump to projects or the profile section.", "在首页终端输入命令，可跳转到作品或个人资料。"], "スマートフォンでも見やすいように、ナビゲーションやカード配置を調整": ["Navigation and cards adapt for easier viewing on smartphones.", "调整导航和卡片布局，方便在手机上浏览。"], "GitHub ActionsでGitHub Pagesへ自動デプロイ": ["GitHub Actions automatically deploys the site to GitHub Pages.", "通过 GitHub Actions 自动部署到 GitHub Pages。"], "初回起動とページ移動に、Windows風の画面演出を追加": ["Windows-inspired animations play on first launch and during page transitions.", "首次启动和页面切换时会显示 Windows 风格动画。"], "制作の進め方": ["How it was made", "制作过程"], "まず紹介する作品や活動を整理し、一覧から各作品の詳細へ移動できる構成にしました。HTML / CSS / JavaScriptで制作し、Codexも補助として活用しています。ブラウザーで表示や動作を確認し、気づいた点を修正してからGitHubへ反映し、GitHub Pagesで公開しています。": ["I first selected the projects and activities to feature, then organized them so visitors can open each project from the listing. I built the site with HTML, CSS, and JavaScript, using Codex as a development aid. I check the layout and behavior in a browser, make revisions, and publish updates to GitHub Pages.", "我先整理要介绍的作品和活动，再设计从列表进入各作品详情的结构。网站使用 HTML、CSS 和 JavaScript 制作，并借助 Codex 辅助开发。我会在浏览器中检查显示效果和功能，修改后提交到 GitHub，并发布到 GitHub Pages。"],
    "食堂混雑状況": ["Cafeteria crowd levels", "食堂拥挤情况"], "確認サイト.": ["monitor.", "查询网站。"], "食堂の混雑状況を見える化するWebアプリです。JavaScriptとSupabaseを使い、2026年11月のハッカソン展示に向けて制作しています。": ["A web app that shows cafeteria crowd levels. It is being built with JavaScript and Supabase for a planned November 2026 hackathon showcase.", "使用 JavaScript 和 Supabase 制作的食堂拥挤情况可视化应用，计划参加 2026 年 11 月的黑客松展示。"], "画面イメージ": ["Screen concept", "界面示意图"], "ポートフォリオの配色に合わせ、利用者向けと管理者向けの機能をコンパクトにまとめました。": ["The user and administrator views are presented compactly in the portfolio's color palette.", "按照作品集的配色，简洁展示用户端和管理端的功能。"], "利用者向け": ["User view", "用户界面"], "混雑状況・予測・メニュー": ["Crowd levels, forecasts, and menu", "拥挤情况、预测与菜单"], "管理者向け": ["Admin view", "管理员界面"], "人数確認・メニュー・お知らせ管理": ["People count, menu, and announcements", "人数、菜单与通知管理"], "実際の機能構成をもとにしたSVG再現図です。人数や表示内容はレイアウト例です。": ["SVG mockup based on the planned features. Counts and content are examples.", "根据计划功能绘制的 SVG 示意图。人数和内容仅为布局示例。"], "概要": ["Overview", "项目简介"], "食堂の混雑状況を利用者が確認できるようにするWebアプリです。利用者向けページでは現在の混雑度や少し先の予測、メニュー、お知らせを表示します。": ["A web app that lets visitors check cafeteria crowd levels. The user view shows the current level, a short-term forecast, the menu, and announcements.", "这款网页应用可供用户查询食堂拥挤情况。用户界面显示当前拥挤程度、短期预测、菜单和通知。"], "取り組んでいること": ["Current work", "目前的开发内容"], "混雑状況と10分後・20分後の予測を伝える画面づくり": ["Designing a view for current crowd levels and 10- and 20-minute forecasts.", "设计展示当前拥挤情况及 10 分钟、20 分钟后预测的界面。"], "現在人数とAI人数認識の結果を管理画面で確認": ["Showing the current count and AI people-detection results in the admin view.", "在管理界面查看当前人数和 AI 人数识别结果。"], "メニューの販売状況やお知らせを管理画面から更新": ["Updating menu availability and announcements from the admin view.", "通过管理界面更新菜单销售状态和通知。"], "JavaScriptとSupabaseを使ったデータ連携": ["Connecting data with JavaScript and Supabase.", "使用 JavaScript 和 Supabase 连接数据。"], "これから": ["Next steps", "后续计划"], "展示に向けて実際のデータ連携や各画面の動作を確認し、利用者が混雑状況をひと目で把握できるよう改善します。": ["Before the showcase, I will verify data connections and screen behavior, then improve how clearly users can understand crowd levels.", "展示前将检查数据连接和各界面的运行情况，并改进拥挤信息的呈现，让用户一目了然。"], "ハッカソン展示に向けて制作中": ["In development for a hackathon showcase", "正在为黑客松展示进行开发"], "2026年11月予定": ["Planned for November 2026", "计划于 2026 年 11 月展示"], "← 制作物一覧に戻る": ["← Back to projects", "← 返回作品列表"],
    "アプリ.": ["app.", "应用。"],                                               "カレンダー": ["Calendar", "日历"],                      "実装内容": ["Implementation", "实现内容"],       "開発・改善": ["In development and refinement", "开发与改进中"], "個人制作": ["Personal project", "个人项目"], "前の作品：食堂混雑状況 →": ["Previous: Cafeteria Crowd Monitor →", "上一个作品：食堂拥挤情况 →"], "前の作品：食堂混雑状況": ["Previous: Cafeteria Crowd Monitor", "上一个作品：食堂拥挤情况"], "前の作品：ポートフォリオ →": ["Previous: Portfolio →", "上一个作品：作品集 →"],   "次の作品：ポートフォリオ →": ["Next: Portfolio →", "下一个作品：作品集 →"], "次の作品：食堂混雑状況 →": ["Next: Cafeteria Crowd Monitor →", "下一个作品：食堂拥挤情况 →"], "作ったもの、試したこと、これから改善したいこと。": ["What I have built, tried, and plan to improve.", "展示已完成的作品、尝试过的内容和后续改进方向。"], "ポートフォリオサイト": ["Portfolio website", "作品集网站"], "作品や活動を紹介するために、企画・デザイン・実装・公開まで行ったWebサイトです。": ["A website I planned, designed, built, and published to showcase my projects and activities.", "为展示作品和活动而规划、设计、开发并发布的网站。"], "授業の成果物": ["Coursework", "课程作品"], "タートルグラフィックス": ["Turtle graphics", "海龟绘图"], "タートルグラフィックスで線や図形を描き、組み合わせて模様を作る課題です。描画の命令を通して、コードで絵を表現しました。": ["A coursework project using turtle graphics commands to draw lines and shapes and combine them into patterns.", "通过海龟绘图命令绘制线条和图形，并组合成图案的课程作业。"], "課題04_40YC.ipynb": ["Assignment 04_40YC.ipynb", "作业04_40YC.ipynb"], "図形描画": ["Drawing", "图形绘制"], "東方風シューティングゲーム": ["Touhou-inspired bullet-hell shooter", "东方风格弹幕射击游戏"], "東方Projectの弾幕シューティングをイメージした作品です。キャラクターや弾の動きをコードで組み立て、ゲームの形にしました。": ["A project inspired by Touhou Project's bullet-hell shooters, with character and projectile movement built in code.", "灵感来自东方 Project 弹幕射击游戏的作品，通过代码实现角色和弹幕的运动。"], "PG1-第04回講義.ipynb": ["PG1-Lecture 04.ipynb", "PG1-第04回讲义.ipynb"], "シューティングゲーム": ["Shooter", "射击游戏"], "プログラミング": ["Programming", "编程"], "Colabの閲覧にはGoogleへのログインや、ノートブックの共有設定が必要な場合があります。": ["Viewing a Colab notebook may require signing in to Google and enabling link sharing.", "查看 Colab 笔记本可能需要登录 Google，并设置共享权限。"], "制作について": ["About these projects", "关于这些作品"], "授業等で制作したモノも含め、目的や取り組んだことを紹介しています。": ["Some projects were created for coursework; each entry explains its purpose and what I worked on.", "部分作品是在课程中完成的；页面会介绍作品目的和制作内容。"],
    "通知カレンダー": ["Notification Calendar", "通知日历"],  "通知カレンダーの詳細": ["Notification Calendar details", "通知日历详情"], "完成画面": ["Finished app screen", "应用完成界面"],    "TeamsやAndroidの通知から予定候補を作成し、Windowsとスマートフォンで予定を同期する個人制作アプリです。通知の原文は端末内に残します。": ["A personal app that turns Teams and Android notifications into calendar candidates and syncs events between Windows and your phone. Original notification text stays on each device.", "这是一款个人应用，可将 Teams 和 Android 通知转换为日历候选事项，并在 Windows 和手机之间同步日程。原始通知文本保留在设备上。"],
    "通知を予定候補に変える": ["Turn notifications into calendar candidates", "将通知转换为日历候选事项"], "Windowsに届くTeams・Chrome通知やAndroid端末のアプリ通知から課題の期限や予定を読み取り、候補を作ります。候補を確認・編集して登録でき、予定はPCとスマートフォンで同期できます。": ["The app reads Teams and Chrome notifications delivered to Windows plus Android app notifications, then turns deadlines and dates into calendar candidates. Review and edit each candidate before saving; saved events sync between PC and phone.", "应用读取 Windows 收到的 Teams 和 Chrome 通知，以及 Android 应用通知，并将截止日期和日期转换为日程候选项。确认或编辑后保存，已保存的日程可在电脑与手机之间同步。"], "受信からカレンダー登録まで": ["From notification to calendar", "从接收通知到添加日历"],   "登録前に内容と日付を確認・編集": ["Review and edit each candidate before adding it.", "添加前确认并编辑候选内容和日期。"], "予定を月間カレンダーと一覧で管理": ["Manage plans in the monthly calendar and list.", "通过月历和列表管理日程。"],   "動作環境と制限": ["Requirements and limitations", "运行环境与限制"],  "SOURCE CODE": ["SOURCE CODE", "源代码"],  "次の作品：通知カレンダー →": ["Next: Notification Calendar →", "下一个作品：通知日历 →"], "前の作品：通知カレンダー": ["Previous: Notification Calendar", "上一个作品：通知日历"],
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
      if (element.closest("[data-no-translate]")) return;
      let attributes = originalAttributes.get(element);
      if (!attributes) { attributes = {}; originalAttributes.set(element, attributes); }
      for (const attribute of ["aria-label", "alt", "title", "placeholder"]) {
        if (!(attribute in attributes)) attributes[attribute] = element.getAttribute(attribute);
        const original = attributes[attribute];
        if (original && copy[original]) element.setAttribute(attribute, language === "ja" ? original : copy[original][language === "en" ? 0 : 1]);
      }
    });
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement?.closest("[data-no-translate]")) continue;
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
      "project-notification-calendar.html": ["NOTIFICATION CALENDAR — AIKICHIN PORTFOLIO", "通知日历 — AIKICHIN 作品集"],
      "project-portfolio.html": ["PORTFOLIO SITE — AIKICHIN PORTFOLIO", "作品集网站 — AIKICHIN 作品集"],
      "404.html": ["404 — PAGE NOT FOUND — AIKICHIN PORTFOLIO", "404 — 页面未找到 — AIKICHIN 作品集"]
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
      "project-notification-calendar.html": ["A Windows and Android app that turns notifications into calendar candidates and syncs saved events.", "一款将通知转换为日程候选项并同步已保存日程的 Windows 和 Android 应用。"],
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
  pageTransition.setAttribute("data-no-translate", "");
  pageTransition.setAttribute("aria-hidden", "true");
  pageTransition.innerHTML = '<div class="page-transition-window"><div class="page-transition-titlebar"><span>AIKICHIN PORTFOLIO</span><span aria-hidden="true">▰</span></div><div class="page-transition-content"><span class="page-transition-mark" aria-hidden="true">▣</span><div><strong>Loading page...</strong><span>PLEASE WAIT / SYSTEM READY</span></div></div><div class="page-transition-progress"><span></span></div></div>';
  document.body.append(pageTransition);

  const scrollProgress = document.createElement("div");
  scrollProgress.className = "scroll-progress";
  scrollProgress.setAttribute("role", "progressbar");
  scrollProgress.setAttribute("aria-label", "Page scroll progress");
  scrollProgress.setAttribute("aria-valuemin", "0");
  scrollProgress.setAttribute("aria-valuemax", "100");
  scrollProgress.setAttribute("aria-valuenow", "0");
  scrollProgress.dataset.noTranslate = "";
  document.body.append(scrollProgress);
  let scrollProgressFrame = 0;
  const updateScrollProgress = () => {
    if (scrollProgressFrame) return;
    scrollProgressFrame = window.requestAnimationFrame(() => {
      scrollProgressFrame = 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
      scrollProgress.style.transform = `scaleX(${ratio})`;
      scrollProgress.setAttribute("aria-valuenow", String(Math.round(ratio * 100)));
      scrollProgress.classList.toggle("is-visible", maxScroll > 0);
    });
  };
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  window.addEventListener("resize", updateScrollProgress, { passive: true });
  updateScrollProgress();

  const revealTargets = document.querySelectorAll(".page-hero > *, .section-heading, .project-grid .project-card, .content-section, .history-entry, .detail-sidebar");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const siblingOrder = new Map();
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });
    revealTargets.forEach((element) => {
      const parent = element.parentElement;
      const index = siblingOrder.get(parent) || 0;
      siblingOrder.set(parent, index + 1);
      element.style.setProperty("--reveal-delay", `${Math.min(index, 4) * 75}ms`);
      element.classList.add("reveal-on-scroll");
      revealObserver.observe(element);
    });
  }

  document.querySelectorAll(".project-grid .project-card").forEach((card, index) => {
    const visual = card.querySelector(".project-visual");
    const body = card.querySelector(".project-card-body");
    if (!visual || !body) return;
    const title = body.querySelector(".card-title-row h2, .card-title-row h3")?.textContent.trim() || "Project";
    const description = body.querySelector(":scope > p:not(.notebook-file)")?.textContent.trim() || "Open project details";
    const preview = document.createElement("div");
    preview.className = "project-console-preview";
    preview.setAttribute("aria-hidden", "true");
    [`PROJECT FOUND / ${String(index + 1).padStart(2, "0")}`, title, description, "OPEN DETAILS ↗"].forEach((text, lineIndex, lines) => {
      const line = document.createElement("span");
      line.className = lineIndex === 0 ? "project-console-label" : lineIndex === lines.length - 1 ? "project-console-action" : "";
      line.textContent = text;
      preview.append(line);
    });
    visual.append(preview);

    const toggle = document.createElement("button");
    toggle.className = "project-console-toggle";
    toggle.type = "button";
    toggle.textContent = "VIEW PROJECT LOG";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", `作品ログを表示: ${title}`);
    toggle.addEventListener("click", () => {
      const isOpen = card.classList.toggle("show-console");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "HIDE PROJECT LOG" : "VIEW PROJECT LOG";
    });
    body.append(toggle);
  });
  languageSelect.addEventListener("change", () => {
    document.querySelectorAll(".project-grid .project-card").forEach((card) => {
      const preview = card.querySelector(".project-console-preview");
      const body = card.querySelector(".project-card-body");
      if (!preview || !body) return;
      const title = body.querySelector(".card-title-row h2, .card-title-row h3")?.textContent.trim();
      const description = body.querySelector(":scope > p:not(.notebook-file)")?.textContent.trim();
      if (title) preview.children[1].textContent = title;
      if (description) preview.children[2].textContent = description;
    });
  });

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
    document.querySelectorAll(".project-grid .project-card.show-console").forEach((card) => {
      card.classList.remove("show-console");
      const toggle = card.querySelector(".project-console-toggle");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "VIEW PROJECT LOG";
      }
    });
    if (document.activeElement?.closest?.(".project-grid .project-card")) document.activeElement.blur();

    // The pointer can still be positioned over the same card after Back,
    // which would immediately reopen its CSS :hover preview. Keep previews
    // hidden until the pointer leaves the card (or the user uses the keyboard).
    document.documentElement.classList.add("suppress-project-preview");
    const releasePreviewSuppression = () => {
      document.documentElement.classList.remove("suppress-project-preview");
      window.removeEventListener("pointermove", releaseWhenPointerLeavesCard);
      window.removeEventListener("keydown", releasePreviewSuppression);
    };
    const releaseWhenPointerLeavesCard = (pointerEvent) => {
      const cardUnderPointer = document.elementFromPoint(pointerEvent.clientX, pointerEvent.clientY)?.closest(".project-grid .project-card");
      if (cardUnderPointer) return;
      releasePreviewSuppression();
    };
    window.addEventListener("pointermove", releaseWhenPointerLeavesCard);
    window.addEventListener("keydown", releasePreviewSuppression, { once: true });
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

  const header = document.querySelector(".site-header");
  if (header) {
    const updateHeaderOffset = () => document.documentElement.style.setProperty("--header-offset", `${Math.ceil(header.getBoundingClientRect().height) + 12}px`);
    new ResizeObserver(updateHeaderOffset).observe(header);
    updateHeaderOffset();
  }
  const headerForm = document.querySelector(".header-command-form");
  if (headerForm) {
    const input = headerForm.querySelector(".header-command");
    const feedback = headerForm.querySelector(".header-command-feedback");
    const currentLabel = input.defaultValue;
    const routes = {
      home: "index.html", index: "index.html",
      project: "projects.html", projects: "projects.html",
      about: "about.html", profile: "about.html", contact: "contact.html",
      cafeteria: "project-cafeteria.html",
      calendar: "project-notification-calendar.html", portfolio: "project-portfolio.html"
    };
    const clearFeedback = () => { feedback.hidden = true; input.removeAttribute("aria-invalid"); };
    const resetCommand = () => { input.value = currentLabel; clearFeedback(); };
    input.addEventListener("focus", () => input.select());
    input.addEventListener("input", clearFeedback);
    input.addEventListener("keydown", (event) => {
      if (event.key === "Escape") { resetCommand(); input.blur(); }
    });
    input.addEventListener("blur", () => { if (!input.value.trim()) resetCommand(); });
    window.addEventListener("pageshow", resetCommand);
    headerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const command = input.value.trim().toLowerCase().replace(/^cd\s+/, "").replace(/^\/?(?:\.\/)?/, "").replace(/\/?(?:\.html)?$/, "");
      const destination = routes[command];
      if (!destination) {
        input.setAttribute("aria-invalid", "true");
        feedback.textContent = "Use HOME / PROJECTS / ABOUT / CONTACT, then Enter.";
        feedback.hidden = false;
        return;
      }
      clearFeedback();
      if (new URL(destination, location.href).pathname === location.pathname) {
        resetCommand(); input.blur(); window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigateWithTransition(destination);
      }
    });
  }

  const startup = document.querySelector("#startup-screen");
  if (startup) {
    const skipButton = startup.querySelector("[data-startup-skip]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isReload = performance.getEntriesByType("navigation")[0]?.type === "reload";
    if (isReload) startup.classList.add("is-reload");
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

    if ((alreadyStarted && !isReload) || reducedMotion) {
      startup.remove();
    } else if (isReload) {
      skipButton?.addEventListener("click", finishStartup, { once: true });
      window.setTimeout(finishStartup, 1500);
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
    let hackConfirmationPending = false;
    let hackRunning = false;
    const commandNames = ["help", "whoami", "ls", "projects", "cafeteria", "calendar", "profile", "about", "contact", "matrix", "to hack", "clear"];
    const commandHistory = [];
    let historyIndex = 0;
    let historyDraft = "";
    let completionMatches = [];
    let completionIndex = -1;
    let lastCompletion = "";
    let suppressFocusSuggestions = false;
    const suggestions = document.createElement("div");
    suggestions.className = "terminal-command-suggestions";
    suggestions.setAttribute("aria-live", "polite");
    suggestions.hidden = true;
    terminalForm.insertAdjacentElement("afterend", suggestions);
    const renderSuggestions = (matches, selected = -1) => {
      suggestions.replaceChildren();
      if (!matches.length) {
        suggestions.hidden = true;
        return;
      }
      matches.forEach((name, index) => {
        const option = document.createElement("button");
        option.type = "button";
        option.className = "terminal-suggestion-option";
        option.textContent = name;
        option.setAttribute("aria-label", `コマンドを入力: ${name}`);
        if (index === selected) option.setAttribute("aria-current", "true");
        option.addEventListener("mousedown", (event) => event.preventDefault());
        option.addEventListener("click", () => {
          commandInput.value = name;
          lastCompletion = "";
          completionMatches = [];
          completionIndex = -1;
          suggestions.hidden = true;
          suppressFocusSuggestions = document.activeElement !== commandInput;
          commandInput.focus({ preventScroll: true });
        });
        suggestions.append(option);
      });
      suggestions.hidden = false;
    };

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

    const runDeveloperMode = () => {
      hackRunning = true;
      terminalForm.querySelectorAll("input, button").forEach((control) => { control.disabled = true; });
      const overlay = document.createElement("div");
      overlay.className = "developer-simulation";
      overlay.dataset.noTranslate = "";
      overlay.setAttribute("role", "status");
      overlay.setAttribute("aria-live", "polite");
      overlay.innerHTML = '<div class="developer-simulation-window"><div class="developer-simulation-bar"><span>DEVELOPER CONSOLE / SYSTEM ACCESS</span><span class="developer-simulation-clock">00:00:00</span></div><div class="developer-simulation-body"><p class="developer-simulation-label">INITIALIZING LOCAL VISUAL SIMULATION // PORTFOLIO BUILD 001</p><div class="developer-simulation-grid"><aside class="developer-simulation-sidebar"><span>MODULES</span><b>01&nbsp; CORE</b><b>02&nbsp; NETWORK</b><b>03&nbsp; SECURITY</b><b>04&nbsp; UI LAYER</b></aside><div class="developer-simulation-main"><div class="developer-simulation-log"></div><p class="developer-simulation-success" hidden>The hacking was successful!</p></div></div><div class="developer-simulation-progress"><span></span></div><p class="developer-simulation-status">SIMULATION ONLY — NO SYSTEM ACCESS</p></div><div class="developer-simulation-footer"><span>LOCAL SANDBOX</span><span>CONNECTION: SIMULATED</span><span>END OF SEQUENCE</span></div></div>';
      document.body.append(overlay);
      const log = overlay.querySelector(".developer-simulation-log");
      const lines = ["$ initializing developer interface...", "$ checking page modules ................ OK", "$ opening secure local channel .......... OK", "$ scanning portfolio assets ............. OK", "$ loading developer diagnostics ........ OK", "$ authorization sequence complete"];
      lines.forEach((line, index) => window.setTimeout(() => {
        const entry = document.createElement("p");
        entry.textContent = line;
        log.append(entry);
      }, 250 + index * 620));
      window.setTimeout(() => {
        overlay.querySelector(".developer-simulation-clock").textContent = "00:00:04";
        overlay.querySelector(".developer-simulation-status").textContent = "ACCESS SEQUENCE COMPLETE // LOCAL VISUAL SIMULATION";
        overlay.querySelector(".developer-simulation-success").hidden = false;
      }, 4100);
      window.setTimeout(() => {
        overlay.classList.add("is-closing");
        window.setTimeout(() => overlay.remove(), 240);
        terminalForm.querySelectorAll("input, button").forEach((control) => { control.disabled = false; });
        hackRunning = false;
        showResponse("", "developer mode simulation complete.");
        suppressFocusSuggestions = document.activeElement !== commandInput;
        commandInput.focus({ preventScroll: true });
      }, 5200);
    };

    commandInput.addEventListener("input", () => {
      completionMatches = [];
      completionIndex = -1;
      lastCompletion = "";
      const prefix = commandInput.value.trim().toLowerCase();
      renderSuggestions(prefix ? commandNames.filter((name) => name.startsWith(prefix)) : []);
    });

    commandInput.addEventListener("focus", () => {
      if (suppressFocusSuggestions) {
        suppressFocusSuggestions = false;
        return;
      }
      const prefix = commandInput.value.trim().toLowerCase();
      renderSuggestions(prefix ? commandNames.filter((name) => name.startsWith(prefix)) : commandNames);
    });

    commandInput.addEventListener("keydown", (event) => {
      if (event.key === "Tab") {
        const current = commandInput.value.trim().toLowerCase();
        if (completionMatches.length && current === lastCompletion) {
          completionIndex = (completionIndex + 1) % completionMatches.length;
        } else {
          completionMatches = commandNames.filter((name) => name.startsWith(current));
          completionIndex = completionMatches.length ? 0 : -1;
        }
        if (!completionMatches.length) {
          suggestions.hidden = true;
          return;
        }
        event.preventDefault();
        const selected = completionMatches[completionIndex];
        commandInput.value = selected;
        lastCompletion = selected;
        renderSuggestions(completionMatches, completionIndex);
        return;
      }

      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        if (!commandHistory.length) return;
        event.preventDefault();
        if (event.key === "ArrowUp") {
          if (historyIndex === commandHistory.length) historyDraft = commandInput.value;
          historyIndex = Math.max(0, historyIndex - 1);
          commandInput.value = commandHistory[historyIndex];
        } else if (historyIndex < commandHistory.length - 1) {
          historyIndex += 1;
          commandInput.value = commandHistory[historyIndex];
        } else {
          historyIndex = commandHistory.length;
          commandInput.value = historyDraft;
        }
        suggestions.hidden = true;
        commandInput.setSelectionRange(commandInput.value.length, commandInput.value.length);
      }
    });

    terminalForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const command = commandInput.value.trim().toLowerCase();
      if (!command || hackRunning) return;
      commandHistory.push(commandInput.value.trim());
      if (commandHistory.length > 30) commandHistory.shift();
      historyIndex = commandHistory.length;
      historyDraft = "";
      completionMatches = [];
      completionIndex = -1;
      lastCompletion = "";
      suggestions.hidden = true;

      terminalCard.classList.remove("is-matrix");
      if (hackConfirmationPending) {
        hackConfirmationPending = false;
        if (command === "y") {
          showResponse(command, "starting developer mode simulation...");
          runDeveloperMode();
        } else if (command === "n") {
          showResponse(command, "cancelled.");
        } else {
          hackConfirmationPending = true;
          showResponse(command, "Do you want to hack this page? y/n");
        }
        commandInput.value = "";
        if (!hackRunning) {
          suppressFocusSuggestions = document.activeElement !== commandInput;
          commandInput.focus({ preventScroll: true });
        }
        return;
      }
      switch (command) {
        case "help":
          showResponse(command, "commands: whoami / ls / projects / cafeteria / calendar / profile / contact / matrix / to hack / clear  |  Tab: complete / ↑↓: history");
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
          jumpTo("project-notification-calendar", "opening notification calendar …");
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
        case "to hack":
          hackConfirmationPending = true;
          showResponse(command, "Do you want to hack this page? y/n");
          break;
        case "clear":
          response.replaceChildren();
          response.hidden = true;
          break;
        default:
          showResponse(command, `command not found: ${command}. Type "help" for commands.`);
      }

      commandInput.value = "";
      suppressFocusSuggestions = document.activeElement !== commandInput;
      commandInput.focus({ preventScroll: true });
    });
  }

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const siteSearch = document.querySelector("[data-site-search]");
  if (siteSearch) {
    const input = siteSearch.querySelector("input");
    const results = document.querySelector("[data-site-search-results]");
    const destinations = [
      { href: "index.html", labels: ["ホーム", "Home", "首页"], terms: ["home", "トップ", "ホーム"] },
      { href: "projects.html", labels: ["制作物一覧", "All projects", "作品列表"], terms: ["project", "作品", "制作物", "一覧"] },
      { href: "project-cafeteria.html", labels: ["食堂混雑状況確認サイト", "Cafeteria crowd monitor", "食堂拥挤情况查询"], terms: ["cafeteria", "食堂", "混雑"] },
      { href: "project-notification-calendar.html", labels: ["通知カレンダー", "Notification Calendar", "通知日历"], terms: ["notification", "teams", "通知", "予定"] },
      { href: "project-portfolio.html", labels: ["ポートフォリオサイト", "Portfolio website", "作品集网站"], terms: ["portfolio", "ポートフォリオ", "作品集"] },
      { href: "projects.html#project-turtle-graphics", labels: ["タートルグラフィックス", "Turtle graphics", "海龟绘图"], terms: ["turtle", "タートル", "graphics", "グラフィックス"] },
      { href: "projects.html#project-touhou-shooter", labels: ["東方風シューティングゲーム", "Touhou-inspired shooter", "东方风格射击游戏"], terms: ["touhou", "東方", "shooter", "シューティング"] },
      { href: "about.html", labels: ["プロフィール", "Profile", "个人资料"], terms: ["about", "profile", "自己紹介", "プロフィール"] },
      { href: "contact.html", labels: ["連絡先", "Contact", "联系"], terms: ["contact", "連絡", "連絡先"] }
    ];
    const renderSearchResults = () => {
      const query = input.value.trim().toLocaleLowerCase();
      results.replaceChildren();
      if (!query) {
        results.hidden = true;
        return;
      }
      const matched = destinations.filter((item) => [...item.labels, ...item.terms].some((term) => term.toLocaleLowerCase().includes(query) || query.includes(term.toLocaleLowerCase())));
      if (!matched.length) {
        const empty = document.createElement("p");
        empty.textContent = document.documentElement.lang === "en" ? "No matching page. Try another keyword." : document.documentElement.lang === "zh-CN" ? "没有匹配的页面，请尝试其他关键词。" : "見つかりませんでした。別のキーワードを試してください。";
        results.append(empty);
      } else {
        const languageIndex = document.documentElement.lang === "en" ? 1 : document.documentElement.lang === "zh-CN" ? 2 : 0;
        matched.forEach((item) => {
          const link = document.createElement("a");
          link.className = "site-search-result";
          link.href = item.href;
          link.textContent = `${item.labels[languageIndex]}　↗`;
          results.append(link);
        });
      }
      results.hidden = false;
    };
    input.addEventListener("input", renderSearchResults);
    siteSearch.addEventListener("submit", (event) => {
      event.preventDefault();
      renderSearchResults();
    });
    languageSelect.addEventListener("change", renderSearchResults);
  }

  document.querySelectorAll("[data-copy-value]").forEach((button) => {
    const status = button.parentElement.querySelector("[data-copy-status]");
    const getCopyLabel = () => {
      const kind = button.dataset.copyKind === "url" ? "URL" : button.dataset.copyKind === "email" ? "email" : "ID";
      return document.documentElement.lang === "en" ? `Copy ${kind}` : document.documentElement.lang === "zh-CN" ? (kind === "URL" ? "复制网址" : kind === "email" ? "复制邮箱" : "复制 ID") : (kind === "URL" ? "URLをコピー" : kind === "email" ? "メールをコピー" : "IDをコピー");
    };
    let resetTimer;
    button.addEventListener("click", async () => {
      const value = button.dataset.copyValue;
      let copied = false;
      const fallbackCopy = () => {
        const field = document.createElement("textarea");
        field.value = value;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.append(field);
        field.select();
        let result = false;
        try { result = document.execCommand("copy"); } catch { result = false; }
        field.remove();
        return result;
      };
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(value);
          copied = true;
        } else {
          copied = fallbackCopy();
        }
      } catch {
        copied = fallbackCopy();
      }
      const language = document.documentElement.lang;
      const itemName = button.dataset.copyKind === "url" ? "URL" : button.dataset.copyKind === "email" ? "email address" : "ID";
      const messages = language === "en" ? ["Copied!", `Could not copy ${itemName}. Select it manually.`] : language === "zh-CN" ? ["已复制！", `无法复制${button.dataset.copyKind === "email" ? "邮箱" : button.dataset.copyKind === "url" ? "网址" : "ID"}，请手动选择。`] : ["コピーしました！", `${button.dataset.copyKind === "email" ? "メールアドレス" : itemName}をコピーできません。手動で選択してください。`];
      if (status) status.textContent = messages[copied ? 0 : 1];
      button.textContent = copied ? (language === "en" ? "COPIED" : language === "zh-CN" ? "已复制" : "コピー済み") : getCopyLabel();
      window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(() => {
        button.textContent = getCopyLabel();
        if (status) status.textContent = "";
      }, 2200);
    });
  });
})();
