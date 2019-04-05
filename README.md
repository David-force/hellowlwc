# E-Bikes Lightning Web Components サンプルアプリケーション

[![CircleCI](https://circleci.com/gh/trailheadapps-jp/ebikes-lwc-jp.svg?style=svg)](https://circleci.com/gh/trailheadapps-jp/ebikes-lwc-jp)

## This is Localized Repository. Original is here.

https://github.com/trailheadapps/ebikes-lwc

![ebikes-logo](ebikes-logo.png)

E-Bikes は Lightning Web Components を使ってどの様にアプリケーションを開発するかを表したサンプルのアプリケーションです。E-Bikes か架空の自転車メーカーで、このアプリケーションはリッチーなユーザ体験を提供し、自社の製品及びリセラーの注文を管理するのに役立ちます。

## 目次

-   インストール手順

    -   [スクラッチ組織を使って E-Bikes をインストール](#スクラッチ組織を使ったE-Bikesのインストール)
    -   [ロック解除済みパッケージを使って E-Bikes をインストール](#ロック解除済みパッケージを使ったE-Bikesのインストール)

-   [追加のインストール手順](#追加のインストール手順)

-   [アプリケーションの説明](#アプリケーションの説明)

## インストール手順

E-Bikes のインストールには 2 種類の方法があります:

-   [スクラッチ組織の利用](#スクラッチ組織を使ったE-Bikesのインストール): おすすめのインストールオプションです。アプリ及びコードを体験したい開発者はこのオプションを使用して下さい。
-   [ロック解除済みパッケージの利用](#ロック解除済みパッケージを使ったE-Bikesのインストール): このオプションはサンプルアプリケーションをローカルの開発環境を使わずに、誰でも体験することができます。

## スクラッチ組織を使った E-Bikes のインストール

1. [クイックスタート: Lightning Web Components](https://trailhead.salesforce.com/ja/content/learn/projects/quick-start-lightning-web-components) Trailhead プロジェクトに従って、環境をセットアップします。このステップには以下が含まれます:

-   Trailhead Playground での Dev Hub の有効化
-   Salesforce CLI のインストール
-   Visual Studio Code のインストール
-   Visual Studio Code Salesforce extensions のインストール(Lightning Web Components extension を含む)

2. まだ実施していない場合には, Hub 組織への認証とエイリアスを設定します(以下のコマンドでは **myhuborg**):

```
sfdx force:auth:web:login -d -a myhuborg
```

3. リポジトリをクローンします:

```
git clone https://github.com/trailheadapps-jp/ebikes-lwc-jp
cd ebikes-lwc-jp
```

4. スクラッチ組織を作成し、エイリアスを設定します(以下のコマンドでは**ebikes**):

```
sfdx force:org:create -s -f config/project-scratch-def.json -a ebikes
```

5. スクラッチ組織にアプリケーションをプッシュします:

```
sfdx force:source:push
```

6. **ebikes** 権限セットをデフォルトユーザにアサインします:

```
sfdx force:user:permset:assign -n ebikes
```

7. サンプルデータをロードします:

```
sfdx force:data:tree:import --plan ./data/sample-data-plan.json
```

8. スクラッチ組織を開きます:

```
sfdx force:org:open
```

9. **設定**から、**テーマおよびブランド設定**に行き、**Lightning Lite**テーマを有効化します。

10. アプリケーションランチャーから**E-Bikes**アプリケーションを選択します。

## ロック解除済みパッケージを使った E-Bikes のインストール

1. [サインアップ](https://developer.salesforce.com/signup) から Developer Edition (DE) 組織を取得します。

2. 私のドメインを DE 組織で有効化します。手順については[こちら](https://trailhead.salesforce.com/ja/content/learn/modules/identity_login/identity_login_my_domain)を参考にして下さい。

3. [このリンク](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tB0000000KAfOIAW)をクリックして E-Bikes のロック解除済みパッケージを DE 組織にインストールします。

4. **すべてのユーザにインストール**を選択します。

5. **設定**から、**テーマおよびブランド設定**に行き、**Lightning Lite**テーマを有効化します。

6. 取引先のデータをインポートします:

-   [こちら](https://raw.githubusercontent.com/trailheadapps-jp/ebikes-lwc-jp/master/data/accounts.csv)をクリックして**accounts.csv** ファイルへアクセスします。ブラウザ上で右クリックし、ファイルを**accounts.csv**として保存します。
-   **設定**から**データインポート**とクイック検索ボックスに入力し、**データインポートウィザード**を選択します。
-   **ウィザードを起動する**をクリックします。
-   **標準オブジェクト**タブをクリックし**取引先と取引先責任者**をクリックし、**新規レコードを追加**をクリックします。
-   保存した**accounts.csv**ファイルをアップロードエリアにドロップします。
-   **次へ**、**次へ**とクリックし、**インポート開始**をクリックします。

7. 製品ファミリーデータのインポート:

-   [こちら](https://raw.githubusercontent.com/trailheadapps-jp/ebikes-lwc-jp/master/data/product_families.csv)をクリックして**product_families.csv** ファイルへアクセスします。ブラウザ上で右クリックし、ファイルを**product_families.csv**として保存します。
-   **設定**から**データインポート**とクイック検索ボックスに入力し、**データインポートウィザード**を選択します。
-   **ウィザードを起動する**をクリックします。
-   **カスタムオブジェクト**タブをクリックし**製品ファミリー**をクリックし、**新規レコードを追加**をクリックします。
-   保存した**product_families.csv**ファイルをアップロードエリアにドロップします。
-   **次へ**、**次へ**とクリックし、**インポート開始**をクリックします。

8. 製品データのインポート:

-   [こちら](https://raw.githubusercontent.com/trailheadapps-jp/ebikes-lwc-jp/master/data/products.csv)をクリックして**products.csv** ファイルへアクセスします。ブラウザ上で右クリックし、ファイルを**products.csv**として保存します。
-   **設定**から**データインポート**とクイック検索ボックスに入力し、**データインポートウィザード**を選択します。
-   **ウィザードを起動する**をクリックします。
-   **カスタムオブジェクト**タブをクリックし**製品**をクリックし、**新規レコードを追加**をクリックします。
-   **新規レコードを追加** メニューの中の _製品ファミリー参照項目を設定するためにファイルのどの製品ファミリー項目を照合しますか?_ ドロップダウンメニューから**製品ファミリー 名前**を選択します。
-   保存した**products.csv**ファイルをアップロードエリアにドロップします。
-   **次へ**、**次へ**とクリックし、**インポート開始**をクリックします。

9. アプリケーションランチャーから**E-Bikes**アプリケーションを選択します。

## 追加のインストール手順

このリポジトリトリには、モダンな Web 開発ツールを Salesforce 開発のプロセスに統合したり、継続的インテグレーション及び継続的デプロイメントプロセスを実施するのに役立ついくつかのファイルが含まれています。

### コードフォーマット

[Prettier](https://prettier.io/) はコードベースを横断して統一したフォーマットを保証するコードフォーマッタです。Prettier を Visual Studio Code と一緒に使うには[この extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)を Visual Studio Code Marketplace からインストールします。リポジトリの一部として提供されている [.prettierignore](/.prettierignore) と [.prettierrc](/.prettierrc) ファイルが Prettier フォーマッタの挙動をコントロールします。

### コードの lint

[ESLint](https://eslint.org/) は構文エラーや誤った構成要素を見つける一般的な JavaScript の lint ツールです。ESLint を Visual Studio Code と一緒に使うには[この extension](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode-lwc)を Visual Studio Code Marketplace からインストールします。 リポジトリの一部として提供されている [.eslintignore](/.eslintignore) ファイルで、Lighning Web Components 開発において不必要なファイルへの lint プロセスを除外します。

### Pre-commit hook

リポジトリには`git commit` による変更のたびに、pre-commit hook によって Prettier および ESLint を動作させコードフォーマット及び lint を行うための [package.json](./package.json) ファイルが含まれています。

フォーマット及び lint を pre-commit hook で動作させる設定を行います:

1. まだ実施していない場合には[Node.js](https://nodejs.org)をインストールします。
2. `npm install` をプロジェクトルートフォルダで実行し、ESLint 及び Prettier モジュールをインストールします (注意: Mac ユーザは Xcode command line tools がインストールされていることをこのコマンドの実行前に確認してください)。

Prettier 及び ESLint は自動的に commit による変更を行うたびに実行されます.lint エラーが検出された場合に commit は失敗します.また以下のコマンドでフォーマット及び lint をコマンドラインから実行できます ([package.json](./package.json)で完全なリストを確認できます):

```
npm run lint:lwc
npm run prettier
```

## アプリケーションの説明

### 製品エクスプローラー

1. **製品エクスプローラー** タブをクリックします。

2. 左側にあるフィルターでコンポーネントでリストをフィルタリングします。

3. タイル上のリストの製品をクリックして製品カードの詳細を確認します。

4. 製品カードの拡張アイコンをクリックして、製品レコードページへ遷移します。

### 製品レコードページ

1. 製品レコードページでは**類似製品**コンポーネントの機能があります。

2. **詳細を見る**ボタンをクリクして、類似製品のレコードページへ遷移します。

### 代理店注文

1. **代理店注文**タブの矢印メニューをクリックし**新規代理店注文**をクリックします。

2. **ホイールワーク**などの取引先を選択し**保存**を押します。

3. 右側の製品リストから中央のグレーのパネルへ製品をドラッグします。製品が注文明細として自動的に注文に追加されます。

4. 小(S), 中(M), 大(L)などの注文の数量などを変更し、保存ボタンをクリックします(チェックアイコン).

5. 3 及び 4 のステップを繰り返し、製品を注文に追加します。

6. 注文アイテムのタイルの上にマウスを置き、ごみ箱アイコンをクリックして、注文から注文明細を削除します。

### 取引先レコードページ

取引先レコードページでは**取引先地図**コンポーネントが取引先の所在地を地図上に表示する機能があります。
