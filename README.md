# あいきちんのポートフォリオ

大阪公立大学工業高等専門学校・知能情報コース2年で、学友会執行部にも所属しています。授業や個人制作で作ったものを紹介するポートフォリオです。

**公開サイト:** [https://yotamaaikich.github.io/portfolio/](https://yotamaaikich.github.io/portfolio/)

## 掲載作品

- **食堂混雑状況確認サイト** — JavaScriptとSupabaseを使い、混雑状況・予測・メニューを確認できるWebアプリです。管理画面から人数や販売状況、お知らせを更新する構成です。2026年11月のハッカソン展示に向けて制作しています。
- **通知カレンダー** — WindowsとAndroidに届く通知から予定候補を作り、登録した予定を端末間で同期する個人制作アプリです。通知の原文は端末内に残し、クラウドには登録済みの予定だけを同期します。作品一覧では、月間カレンダーと通知由来の予定を見渡せる専用の横長SVGサムネイルを使っています。詳細ページではアプリ画面全体の図を掲載しています。
- **ポートフォリオサイト** — 掲載内容の企画、デザイン調整、HTML / CSS / JavaScriptでの実装、GitHub Pagesでの公開に取り組んだWebサイトです。
- **課題04：タートルグラフィックス** — PythonのTurtle Graphicsで線や図形を描き、組み合わせて模様を作る課題です。[Google Colabで開く](https://colab.research.google.com/drive/12e1rPLhru1LintmAEWf_n2jAMvPAyR8Q?usp=sharing&classId=bfb5d42f-49e1-49a9-a762-5922349606fb&assignmentId=0931f89e-a22e-4a29-94b4-4fd6e249cd9b&submissionId=c1ac5e8e-0037-dd9d-5972-5b535dbb869f)
- **東方風シューティングゲーム** — 弾幕を避けるシューティングゲームを制作しました。[プレイ画面](images/danmaku-gameplay.png)と[Google Colabノートブック](https://colab.research.google.com/drive/1mszZP3claVdcpjpPBnKFoTo_eJZt6kwi?usp=sharing&classId=bfb5d42f-49e1-49a9-a762-5922349606fb&assignmentId=070d88ea-a294-43a5-8615-27e77100fdf7&submissionId=be01c13d-fbe5-96a9-ce4f-75c78880aa6a)を掲載しています。

## プロフィール・経験

ABOUTページに学校での活動や制作履歴、取得資格、興味のある分野を掲載しています。Python、Arduino言語、Scratch、HTML / CSS / JavaScript、Kotlinなどの言語と、Git / GitHub、VSCode、Arduino IDE、Deeds-DCS、MakeCode for micro:bit、Tinkercad、WSL、Ambient、RealVNCなど、授業や制作で使用した経験のあるツールを紹介しています。

## 技術と構成

HTML、CSS、JavaScriptで作った静的サイトです。GitHub Actionsを使ってGitHub Pagesへデプロイしています。

- index.html — ホーム
- projects.html — 作品一覧と授業の成果物
- project-cafeteria.html — 食堂混雑状況確認サイト
- project-notification-calendar.html — 通知カレンダー
- project-portfolio.html — ポートフォリオサイト
- about.html — プロフィール、活動履歴、技術・ツール
- contact.html — 連絡先・SNS
- images/ — プロフィール画像、プレイ画面、SVG図版（通知カレンダーの一覧用サムネイルを含む）
- style.css — ページデザインとレスポンシブ対応
- script.js — ターミナル風コマンドやモバイルナビゲーション
- .github/workflows/pages.yml — GitHub Pagesのデプロイ設定

## 画像について

東方風シューティングゲームの画像は、実際のプレイ画面です。食堂サイトと通知カレンダーの画面は、機能構成を説明するために作ったSVG再現図で、実アプリのスクリーンショットではありません。

## ローカルで確認する

リポジトリ内のindex.htmlをブラウザーで開くと確認できます。Colabのノートブックを開く際は、Googleへのログインや共有設定が必要になる場合があります。

## GitHub Pagesへのデプロイ

mainブランチへのpushでGitHub Actionsがサイトをデプロイします。Pages用の成果物名にはワークフローの実行回数を含め、再実行時に同名成果物が重複しないようにしています。リポジトリの **Settings → Pages → Build and deployment** で、Sourceを **GitHub Actions** に設定してください。
