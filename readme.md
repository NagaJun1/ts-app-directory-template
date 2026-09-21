- 各要素毎にサブディレクトリを作る（commonでも）

# 構成

npm workspaces によるモノレポ構成。

- frontend ... クライアント（React + Vite）
- backend ... サーバー（Express）
- packages ... frontend / backend 共通で参照する要素

各ワークスペースのソースは `src` 配下に置く。

# ディレクトリ構成（src配下）

- common ... 共通要素
  - constants ... 定数
  - element ... Reactエレメント（frontendのみ）
  - database ... DBスキーマ等（packagesのみ）
  - types ... 型定義（TypeScript）
  - utils ... ユーティリティ関数系（pure関数を扱う）
- features ... 機能ごとの要素
  - api
  - element ... Reactエレメント（frontendのみ）
  - database ... （packagesのみ）
  - schema ... （packagesのみ）
  - types ... 型定義（TypeScript）
  - utils ... ユーティリティ関数系（pure関数を扱う）
  - route.ts ... ルーターが必要な場合（backendではExpressのRouterを配置）

# 実行方法

ルートで `npm install` した後、ルートの package.json から各ワークスペースを操作する。

- `npm run client:dev` ... frontend (Vite) を起動
- `npm run client:build` ... frontend をビルド
- `npm run client:lint` ... frontend の lint
- `npm run server:dev` ... backend (Express, tsx watch) を起動
- `npm run server:start` ... backend を起動

# packages の参照

packages は npm workspaces で frontend / backend にリンクされており、`packages/common/constants` のようにパッケージ名から直接 import できる。
（`packages/package.json` の `exports` で `src/*/index.ts` を公開している）
