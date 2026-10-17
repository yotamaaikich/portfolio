# あいきちんのポートフォリオ

大阪公立大学工業高等専門学校で学びながら制作したWebサイトやアプリ、これまでの活動を紹介するポートフォリオです。

**公開サイト:** https://yotamaaikich.github.io/portfolio/

## 掲載内容

- **食堂混雑状況確認サイト** — JavaScriptとSupabaseを使ったWebアプリ。2026年11月のハッカソン展示に向けて制作中です。
- **課題カレンダーアプリ** — 2026年8月にFlutter / Dartで制作した個人開発アプリです。
- **プロフィール** — 学校での活動、制作の歩み、興味のある分野を掲載しています。

作品ページの画面イメージは、実アプリのスクリーンショットではなく、レイアウトを紹介するためのCSSモックアップです。

## 技術

HTML、CSS、JavaScriptで構成した静的サイトです。GitHub ActionsからGitHub Pagesへデプロイしています。

## ページ構成

- `index.html` — ホーム、作品概要、プロフィールの抜粋
- `projects.html` — 作品一覧
- `project-cafeteria.html` — 食堂混雑状況確認サイト
- `project-task-calendar.html` — 課題カレンダーアプリ
- `about.html` — プロフィールと活動履歴
- `contact.html` — GitHub、X、Discord、ポートフォリオへのリンク
- `style.css` — デザインとスマートフォン対応
- `script.js` — ターミナル風コマンド、モバイルメニュー、フッター表示
- `.github/workflows/pages.yml` — GitHub Pagesへのデプロイ設定

## ローカルで確認する

リポジトリを開き、`index.html`をブラウザーで開くと確認できます。ページ間の移動には同じフォルダー内のHTMLファイルを使っています。

## GitHub Pagesへのデプロイ

`main`ブランチへのpushでGitHub Actionsがサイトをデプロイします。リポジトリの **Settings → Pages → Build and deployment** では、Sourceを **GitHub Actions** に設定してください。
