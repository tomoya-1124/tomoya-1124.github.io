# SE Portfolio Starter (静的サイト)
名刺代わりのシンプルなポートフォリオ + 最小ブログ。HTML/CSS/JSのみ。

## 使い方
1. `index.html` をブラウザで開く（ローカル確認OK）
2. `blog/index.html` に記事リンクを追加
3. `posts/` に新規記事を `*.html` で作成

### 記事テンプレ
`posts/your-article.html` を作成し、`blog/index.html` にカードを追加してください。

## デプロイ（GitHub Pages の例）
1. GitHubでリポジトリを作成（例: `se-portfolio`）
2. このフォルダの中身をコミット＆プッシュ
3. Repository Settings → Pages → Branch を `main` / `/ (root)` に設定
4. 数分で発行される URL にアクセス

※ うまく表示されない場合は `.nojekyll` がルートにあるか確認してください。

## カスタム
- `styles.css`：色や余白、グリッド枚数などを調整
- `script.js`：ナビ開閉や年表示などミニマルJS
- `assets/`：`favicon.ico`, `og-image.png` を差し替え
