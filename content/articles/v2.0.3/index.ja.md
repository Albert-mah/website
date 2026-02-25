### 🎉 新機能

- **[undefined]**

  - 実験的な「引用ブロック」プラグインを追加し、引用とコピーの方式で既存のブロックを再利用できるようにサポートしました。 ([#7584](https://github.com/nocobase/nocobase/pull/7584)) by @gchust
  - フォーム下書き by @chenos
- **[acl]** 複数の商用プラグインをオープンソース化し、ライセンスを AGPL-3.0 から Apache-2.0 に調整しました ([#8682](https://github.com/nocobase/nocobase/pull/8682)) by @chenos
- **[client]**

  - ページ、ページタブ、モーダル、モーダルタブでブラウザのタブタイトルを設定できるようにサポートしました ([#8590](https://github.com/nocobase/nocobase/pull/8590)) by @zhangzhonghe
  - フォーム内でリレーションフィールドのフィールドを設定できるようにサポートしました ([#8578](https://github.com/nocobase/nocobase/pull/8578)) by @katherinehhh
  - データ読み込み方式を設定できるようにサポートしました ([#8551](https://github.com/nocobase/nocobase/pull/8551)) by @zhangzhonghe
  - 子テーブル（モーダル編集）フィールドコンポーネントを追加しました ([#8280](https://github.com/nocobase/nocobase/pull/8280)) by @katherinehhh
  - データテーブル作成時にプリセットidフィールド型を変更できるようにしました ([#8129](https://github.com/nocobase/nocobase/pull/8129)) by @cgyrock
  - to-many サブフォームに、データ追加を許可、既存データの選択および関連解除の設定項目サポートを追加しました ([#8099](https://github.com/nocobase/nocobase/pull/8099)) by @katherinehhh
  - テーマエディターでグローバルスタイルをカスタマイズできるようにサポートしました ([#7960](https://github.com/nocobase/nocobase/pull/7960)) by @ljmiaoo
  - 詳細ブロックでデフォルトの並び替えルールを設定できるようにサポートしました ([#8070](https://github.com/nocobase/nocobase/pull/8070)) by @katherinehhh
  - 数値フィールドのデータ型を設定できるようにサポートし、選択肢は double、float、decimal を含みます ([#8058](https://github.com/nocobase/nocobase/pull/8058)) by @chenos
  - テーブル列フィールドで並び替えを有効にできるようにサポートしました ([#7900](https://github.com/nocobase/nocobase/pull/7900)) by @katherinehhh
  - リレーションフィールドのドロップダウンセレクターにクイック追加機能を追加しました ([#7887](https://github.com/nocobase/nocobase/pull/7887)) by @katherinehhh
  - ツリー表リレーションフィールドでカスケードセレクターを使用できるようにサポートしました ([#7846](https://github.com/nocobase/nocobase/pull/7846)) by @katherinehhh
  - テーブル列アクションのドラッグをサポートしました ([#7842](https://github.com/nocobase/nocobase/pull/7842)) by @zhangzhonghe
  - 子テーブルがページネーション表示をサポートしました ([#7754](https://github.com/nocobase/nocobase/pull/7754)) by @katherinehhh
  - イベントストリーム： 新しい事前定義アクションを追加し、イベント処理のカスタムオプションを強化し、ユーザーがワークフローを簡素化して効率を高められるようにしました ([#7672](https://github.com/nocobase/nocobase/pull/7672)) by @zhangzhonghe
  - 2.0 Markdown ブロックを追加しました ([#7613](https://github.com/nocobase/nocobase/pull/7613)) by @katherinehhh
  - サブフォームに連動ルールを設定できるようにサポートしました ([#7640](https://github.com/nocobase/nocobase/pull/7640)) by @zhangzhonghe
  - テーブル行クリックイベントの監視をサポートを追加し、ユーザーがテーブルのある行をクリックした際に特定操作を実行できるようにしました ([#7622](https://github.com/nocobase/nocobase/pull/7622)) by @zhangzhonghe
  - カスタム変数のサポートを追加しました ([#7585](https://github.com/nocobase/nocobase/pull/7585)) by @zhangzhonghe
  - 「現在のデバイスタイプ」変数を追加しました ([#7576](https://github.com/nocobase/nocobase/pull/7576)) by @zhangzhonghe
- **[flow-engine]** ESM_CDN_BASE_URL 環境変数の設定をサポートしました ([#8529](https://github.com/nocobase/nocobase/pull/8529)) by @chenos
- **[server]** アプリ監督器をリファクタリングし、異なるシナリオ下のマルチアプリ管理ニーズに適合させました ([#8043](https://github.com/nocobase/nocobase/pull/8043)) by @2013xile
- **[test]** デフォルトタスクマネージャーにプロセスレベルの同時実行制御を追加しました ([#8343](https://github.com/nocobase/nocobase/pull/8343)) by @cgyrock
- **[アクション：一括編集]** 一括編集 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) by @jiannx
- **[ブロック：グリッドカード]**

  - ブロックが高さ設定をサポートしました ([#8583](https://github.com/nocobase/nocobase/pull/8583)) by @katherinehhh
  - 2.0 グリッドカードブロックを追加しました ([#7579](https://github.com/nocobase/nocobase/pull/7579)) by @katherinehhh
- **[アクション：レコード複製]** 2.0 複製アクションを追加しました ([#8580](https://github.com/nocobase/nocobase/pull/8580)) by @katherinehhh
- **[ワークフロー]**

  - ワークフローキャンバス上でノードのコピー＆ペーストと、ドラッグによるノード位置移動をサポートしました ([#8559](https://github.com/nocobase/nocobase/pull/8559)) by @mytharcher
  - ノード移動用の API を追加しました ([#8507](https://github.com/nocobase/nocobase/pull/8507)) by @mytharcher
  - 「多条件分岐」ノードを追加し、`switch` / `case` に似た制御フローを提供します ([#7878](https://github.com/nocobase/nocobase/pull/7878)) by @mytharcher
    参考文档：[“多条件分支”节点](https://v2.docs.nocobase.com/cn/workflow/nodes/multi-conditions)
- **[AI従業員]**

  - AI 会話がファイルのコピー＆ペーストをサポートしました ([#8487](https://github.com/nocobase/nocobase/pull/8487)) by @heziqiang
  - Gemini-3 モデルをサポートし、関数呼び出しの思考署名能力を含みます ([#8377](https://github.com/nocobase/nocobase/pull/8377)) by @heziqiang
  - AI プラグインのオンライン検索機能を改善しました ([#7580](https://github.com/nocobase/nocobase/pull/7580)) by @cgyrock
- **[ブロック：地図]** 2.0 地図ブロックを追加しました ([#7944](https://github.com/nocobase/nocobase/pull/7944)) by @katherinehhh
- **[データ可視化]**

  - チャート設定用の AI従業員を追加しました ([#7815](https://github.com/nocobase/nocobase/pull/7815)) by @heziqiang
  - チャート SQL データソースを追加しました ([#7830](https://github.com/nocobase/nocobase/pull/7830)) by @heziqiang
  - チャートタイプ「ドーナツチャート」を追加しました ([#7629](https://github.com/nocobase/nocobase/pull/7629)) by @heziqiang
- **[フロントエンド FlowEngine]** SQL を書く際に LiquidJS テンプレート文字列を使用できるようにサポートしました ([#7667](https://github.com/nocobase/nocobase/pull/7667)) by @2013xile
- **[データソース管理]**

  - メインデータソースがメインデータベースからデータテーブルを読み取ることをサポートし、フィールド interface の変更をサポートしました ([#7118](https://github.com/nocobase/nocobase/pull/7118)) by @aaaaaajie
  - メインデータソースがメインデータベースからデータテーブルを読み取ることをサポートし、フィールド interface の変更をサポートしました ([#7118](https://github.com/nocobase/nocobase/pull/7118)) by @aaaaaajie
- **[ブロック：リスト]** 2.0 リストブロックを追加しました ([#7574](https://github.com/nocobase/nocobase/pull/7574)) by @katherinehhh
- **[ブロック：操作パネル]** 2.0 操作パネルブロックを追加しました ([#7594](https://github.com/nocobase/nocobase/pull/7594)) by @katherinehhh
- **[テレメトリ]** 新規プラグイン：テレメトリ。OpenTelemetry ベースのアプリテレメトリプラグインで、CPU、メモリ、HTTP リクエスト等の指標を内蔵し、HTTP 経由のエクスポートをサポートします by @2013xile
- **[ワークフロー：承認]**

  - 承認処理画面でデータのスナップショットを表示するか最新状態を表示するか選択を許可します by @mytharcher
  - 誰が承認を開始できるかを制御するために、受信者設定項目を追加します by @mytharcher
- **[メール管理]** メール管理 2.0 実装 by @jiannx

### 🚀 機能改善

- **[undefined]**

  - AI従業員マニュアル文書を更新しました ([#8690](https://github.com/nocobase/nocobase/pull/8690)) by @heziqiang
  - チャートプラグインの英語文書を更新しました ([#7748](https://github.com/nocobase/nocobase/pull/7748)) by @heziqiang
  - チャート概要部分の文書を更新しました ([#7702](https://github.com/nocobase/nocobase/pull/7702)) by @heziqiang
- **[client]**

  - 時間・日付関連フィールドの値割り当て画面を最適化し、相対時間・相対日付を選択可能にしました。 ([#8630](https://github.com/nocobase/nocobase/pull/8630)) by @gchust
  - 値割り当て画面でリレーションフィールドのタイトルフィールドを指定できるようにサポートしました。 ([#8624](https://github.com/nocobase/nocobase/pull/8624)) by @gchust
  - テーブル 2.0 がドラッグ並び替えをサポートしました ([#8540](https://github.com/nocobase/nocobase/pull/8540)) by @jiannx
  - フィールド割り当てとデフォルト値関連設定をフォームレベル設定へリファクタリングしました。 ([#8596](https://github.com/nocobase/nocobase/pull/8596)) by @chenos
  - フィルターフォームのリレーションフィールドが独立したフィールド model を使用します ([#8511](https://github.com/nocobase/nocobase/pull/8511)) by @zhangzhonghe
  - 行内編集の子テーブル列幅設定方式をドロップダウン選択に調整しました ([#8561](https://github.com/nocobase/nocobase/pull/8561)) by @katherinehhh
  - 子テーブルの添付フィールドのアップロード／編集ボタンを改善し、ユーザーにアップロードを誘導します ([#8474](https://github.com/nocobase/nocobase/pull/8474)) by @katherinehhh
  - to-many サブフォームがデフォルトで 1 つのオブジェクトを含むように改善し、Add New をクリック不要で、未入力時はレコードを作成しません ([#8473](https://github.com/nocobase/nocobase/pull/8473)) by @katherinehhh
  - to-many サブフォームがデフォルトで 1 つのオブジェクトを含むように改善し、Add New をクリック不要で、未入力時はレコードを作成しません ([#8458](https://github.com/nocobase/nocobase/pull/8458)) by @katherinehhh
  - リッチテキストエディターがフォントサイズ調整、画像サイズ調整、ソフト改行をサポートしました ([#8401](https://github.com/nocobase/nocobase/pull/8401)) by @jiannx
  - イベントストリームが実行タイミング指定をサポートしました。 ([#8340](https://github.com/nocobase/nocobase/pull/8340)) by @gchust
  - セル更新によりテーブル全体が再レンダリングされる問題を修復しました ([#8349](https://github.com/nocobase/nocobase/pull/8349)) by @katherinehhh
  - AI 編集タスクフォーム内のテキスト入力欄が自動高さ調整をサポートしました。 ([#8350](https://github.com/nocobase/nocobase/pull/8350)) by @heziqiang
  - JS コードエディターがフルスクリーンをサポートしました。 ([#8294](https://github.com/nocobase/nocobase/pull/8294)) by @gchust
  - ツリーテーブルブロックの Add child 実装を改善し、対応する children 関連の Add new と同等にしました ([#8272](https://github.com/nocobase/nocobase/pull/8272)) by @katherinehhh
  - Color フィールドがデフォルト値のクリアをサポートしました ([#8268](https://github.com/nocobase/nocobase/pull/8268)) by @katherinehhh
  - アクション列の column width を Select 形式に変更しました ([#8218](https://github.com/nocobase/nocobase/pull/8218)) by @katherinehhh
  - テーブル列幅設定がカスタム幅入力をサポートしました ([#8200](https://github.com/nocobase/nocobase/pull/8200)) by @katherinehhh
  - テーブル列幅設定方式をオプション選択に調整しました ([#8188](https://github.com/nocobase/nocobase/pull/8188)) by @katherinehhh
  - データセレクターのスタイルを最適化し、maxTagCount を設定しました ([#8175](https://github.com/nocobase/nocobase/pull/8175)) by @katherinehhh
  - 設定項目を最適化（ブロック、フィールド、アクション）しました ([#8141](https://github.com/nocobase/nocobase/pull/8141)) by @katherinehhh
  - パーセンテージフィールドが数値フォーマット設定をサポートしました ([#8123](https://github.com/nocobase/nocobase/pull/8123)) by @katherinehhh
  - 子テーブルで行削除後に最後のページへ移動する問題を修復し、列レベルの検証ルール設定をサポートしました ([#8094](https://github.com/nocobase/nocobase/pull/8094)) by @katherinehhh
  - 編集モード子テーブルで大フィールドの表示を調整しました ([#8078](https://github.com/nocobase/nocobase/pull/8078)) by @katherinehhh
  - JSON フィールド内容が超過した際に省略表示をサポートしました ([#8067](https://github.com/nocobase/nocobase/pull/8067)) by @katherinehhh
  - 添付アップロードコンポーネントが「複数選択を許可」をサポートしました ([#8052](https://github.com/nocobase/nocobase/pull/8052)) by @katherinehhh
  - Select コンポーネントで折り畳まれた選択項目をホバー時に表示するよう最適化しました ([#8030](https://github.com/nocobase/nocobase/pull/8030)) by @katherinehhh
  - チャートの初回クエリ時にフィルターフィールドを選択できるようにサポートしました ([#7933](https://github.com/nocobase/nocobase/pull/7933)) by @heziqiang
  - モバイル端末コンポーネントに適配しました ([#7870](https://github.com/nocobase/nocobase/pull/7870)) by @zhangzhonghe
  - RunJS スクリプトコンテキストに Day.js ライブラリのサポートを追加し、日付と時間の操作を容易にしました。 ([#7841](https://github.com/nocobase/nocobase/pull/7841)) by @gchust
  - flow engine コンテキストにページバージョンを追加しました ([#7826](https://github.com/nocobase/nocobase/pull/7826)) by @gchust
  - Markdown エディターを最適化しました ([#7793](https://github.com/nocobase/nocobase/pull/7793)) by @katherinehhh
  - 2.0 ブロックが tableoid フィールドに適配しました ([#7809](https://github.com/nocobase/nocobase/pull/7809)) by @katherinehhh
  - JS コードエディターで jsx 構文のサポートを追加しました ([#7699](https://github.com/nocobase/nocobase/pull/7699)) by @gchust
  - JS field model がリレーションフィールドをサポートしました ([#7618](https://github.com/nocobase/nocobase/pull/7618)) by @gchust
- **[flow-engine]**

  - JS model コードエディター関連の自動補完とヒントを最適化しました。 ([#8575](https://github.com/nocobase/nocobase/pull/8575)) by @gchust
  - runjs の ctx.libs を最適化し、オンデマンド読み込みをサポートし、lodash, math, formula 事前定義ライブラリを追加しました。 ([#8468](https://github.com/nocobase/nocobase/pull/8468)) by @gchust
  - GridModel に `rowOrder` フィールドを追加し、行順序の一貫性を保証します ([#8371](https://github.com/nocobase/nocobase/pull/8371)) by @zhangzhonghe
  - runjs 環境が window.location.reload メソッドをサポートしました。 ([#8316](https://github.com/nocobase/nocobase/pull/8316)) by @gchust
  - 設定モード切替時の性能問題を最適化しました ([#8241](https://github.com/nocobase/nocobase/pull/8241)) by @zhangzhonghe
  - runjs 環境が FormData オブジェクトをサポートしました。 ([#8263](https://github.com/nocobase/nocobase/pull/8263)) by @gchust
  - 設定メニューの動的非表示をサポートしました ([#7924](https://github.com/nocobase/nocobase/pull/7924)) by @gchust
  - FlowModelRenderer に useCache オプションを追加しました ([#8072](https://github.com/nocobase/nocobase/pull/8072)) by @zhangzhonghe
  - `removeModelWithSubModels` メソッドを追加し、モデルと子モデルを再帰的に削除します ([#8064](https://github.com/nocobase/nocobase/pull/8064)) by @zhangzhonghe
  - flow model 型の動的切替をサポートしました ([#7952](https://github.com/nocobase/nocobase/pull/7952)) by @gchust
  - flow engine 層で models ツリー変更の監視をサポートしました。 ([#7905](https://github.com/nocobase/nocobase/pull/7905)) by @gchust
  - 現在レコードの変数解析を最適化し、モーダルの開く速度を向上しました ([#7895](https://github.com/nocobase/nocobase/pull/7895)) by @gchust
  - runjs コンテキストのサードパーティライブラリ api 構造を最適化し、Antd アイコンライブラリをサポートしました。 ([#7896](https://github.com/nocobase/nocobase/pull/7896)) by @gchust
  - ツールバーのスタイルを最適化し、アイコンが隠れるのを防止しました ([#7883](https://github.com/nocobase/nocobase/pull/7883)) by @zhangzhonghe
  - ページタブのツールバーのスタイルを最適化しました ([#7795](https://github.com/nocobase/nocobase/pull/7795)) by @zhangzhonghe
  - flow model の遅延操作をサポートしました ([#7786](https://github.com/nocobase/nocobase/pull/7786)) by @gchust
  - UID コピー失敗時のエラーメッセージを最適化し、より明確な解決指針を提供します。 ([#7718](https://github.com/nocobase/nocobase/pull/7718)) by @gchust
  - flow step でコンテキスト変数定義をサポートしました ([#7674](https://github.com/nocobase/nocobase/pull/7674)) by @gchust
  - URL クエリパラメータに skipRunJs=true を追加して runjs フローステップをスキップすることをサポートしました。 ([#7638](https://github.com/nocobase/nocobase/pull/7638)) by @gchust
  - モーダル変数をサポートしました ([#7583](https://github.com/nocobase/nocobase/pull/7583)) by @gchust
  - コードエディター体験を最適化し、より多くのコード片段を追加し、シーン別の補完を動的表示します ([#7559](https://github.com/nocobase/nocobase/pull/7559)) by @gchust
  - 自動フローを正規化し、統一して "beforeRender" イベントでトリガーし、フロー実行の一貫性と予測可能性を確保しました。 ([#7577](https://github.com/nocobase/nocobase/pull/7577)) by @gchust
  - ドラッグ機能を最適化しました ([#7526](https://github.com/nocobase/nocobase/pull/7526)) by @zhangzhonghe
- **[acl]** acl に generalFixedParams メソッドを追加しました ([#8363](https://github.com/nocobase/nocobase/pull/8363)) by @jiannx
- **[cli]** 環境変数で CDN ベースアドレス設定をサポートしました ([#8384](https://github.com/nocobase/nocobase/pull/8384)) by @chenos
- **[sdk]** api storage 実装を改善しました ([#8308](https://github.com/nocobase/nocobase/pull/8308)) by @chenos
- **[telemetry]**

  - 報告する指標の制御をサポートしました ([#7938](https://github.com/nocobase/nocobase/pull/7938)) by @2013xile
  - オンライン子アプリ数などのテレメトリ指標を追加しました ([#7743](https://github.com/nocobase/nocobase/pull/7743)) by @2013xile
- **[database]** フィールド暗号化プラグインをリファクタリングし、安全性を向上し、アプリ鍵の生成と交換、フィールド独立鍵をサポートしました。 ([#7769](https://github.com/nocobase/nocobase/pull/7769)) by @cgyrock
- **[ローカライズ]** i18n 欠損語条の自動作成 ([#8588](https://github.com/nocobase/nocobase/pull/8588)) by @jiannx
- **[ワークフロー：CC]** ワークフロー CC プラグインをリファクタリングして FlowModel アーキテクチャをサポートし、v1/v2 設定に互換しました ([#8405](https://github.com/nocobase/nocobase/pull/8405)) by @zhangzhonghe
- **[ワークフロー]**

  - ワークフロー子ページのルーティングパスを変更し、ワークフローページを `/admin/settings/workflow` 配下へ統一しました ([#8519](https://github.com/nocobase/nocobase/pull/8519)) by @mytharcher
  - 更新記録アクションボタンにワークフロー紐付け設定項目を補完しました ([#7668](https://github.com/nocobase/nocobase/pull/7668)) by @mytharcher
- **[ファイルマネージャー]**

  - ファイルマネージャーに拡張可能なプレビューコンポーネントを追加しました ([#8501](https://github.com/nocobase/nocobase/pull/8501)) by @mytharcher
  - OSS ストレージエンジンにリクエスト設定項目を追加し、サーバーからファイル取得時に追加リクエストパラメータを渡せるようにしました ([#8372](https://github.com/nocobase/nocobase/pull/8372)) by @mytharcher
- **[アクション：レコードエクスポート]** エクスポートボタンのデータ範囲を改善：優先は選択レコード、その次はフロントエンドのフィルター範囲 ([#8442](https://github.com/nocobase/nocobase/pull/8442)) by @katherinehhh
- **[フロントエンド FlowEngine]** 現在フォーム変数のうち編集フォームに追加されていないフィールド値の解析をサポートしました。 ([#8436](https://github.com/nocobase/nocobase/pull/8436)) by @gchust
- **[AI従業員]**

  - ワークフロー呼び出し結果を `execution.output` から取得するよう変更し、安定した結果取得のためにフロー出力ノード使用を明確化しました ([#8423](https://github.com/nocobase/nocobase/pull/8423)) by @mytharcher
  - AI従業員のメイン入口ボタンを最適化しました ([#8414](https://github.com/nocobase/nocobase/pull/8414)) by @heziqiang
  - 入口リスト内のビルド系 AI従業員を非表示；<br/> LLM 連携フローを最適化；<br/> Gemini-3 モデル関連文書を更新しました。 ([#8409](https://github.com/nocobase/nocobase/pull/8409)) by @heziqiang
  - Anthropic と Claude-4.5 をサポートしました ([#8389](https://github.com/nocobase/nocobase/pull/8389)) by @heziqiang
  - システムプロンプトのカスタム編集と自動更新をサポートしました ([#8378](https://github.com/nocobase/nocobase/pull/8378)) by @heziqiang
  - AI の LLM サービス／モデル層でのエラー処理を最適化しました ([#8351](https://github.com/nocobase/nocobase/pull/8351)) by @heziqiang
  - workflow の LLM ノードで Gemini 互換問題を修復しました。<br/>AI ツール dataSourceQuery の大データ量シーンでの処理性能を最適化しました。<br/>データモデリング関連問題を修復しました。<br/>AI 提案ツールを追加しました。<br/> ([#8249](https://github.com/nocobase/nocobase/pull/8249)) by @heziqiang
  - AI従業員の初回編集後に送信が無反応になる問題を解決<br/>不要な内蔵 AI従業員「Avery フォームアシスタント」を削除<br/>内蔵 AI従業員のデフォルト初期ロール権限を追加<br/>AI従業員のエラー処理と出力結果を最適化<br/>AI がモーダルコンテキスト変数へアクセスする能力を追加<br/>AI 外部データソースのサポートを追加<br/>大量データ処理時に会話内容が誤ってトリミングされる問題を修復<br/> ([#8191](https://github.com/nocobase/nocobase/pull/8191)) by @heziqiang
  - 内蔵 AI従業員プロンプトが編集をサポートしました。<br/>Nathan (AI従業員) のシステムプロンプトを最適化しました。<br/>サーバーが静的ファイルを読む問題を修復しました。 ([#8097](https://github.com/nocobase/nocobase/pull/8097)) by @heziqiang
  - LLM フォームに provider フィールドを追加しました ([#8049](https://github.com/nocobase/nocobase/pull/8049)) by @heziqiang
  - AI従業員プラグインに upgrade フック関数を追加しました ([#7951](https://github.com/nocobase/nocobase/pull/7951)) by @heziqiang
  - AI従業員のインタラクションとタスク設定体験を最適化しました ([#7707](https://github.com/nocobase/nocobase/pull/7707)) by @cgyrock
  - AI従業員がテーブルブロックのメタ情報に基づいて自律的にデータ照会できるようにしました ([#7703](https://github.com/nocobase/nocobase/pull/7703)) by @cgyrock
  - AI プログラミング体験を最適化し、AI従業員を使ってコードのレビュー、診断および修正を行えるようにしました。 ([#7679](https://github.com/nocobase/nocobase/pull/7679)) by @cgyrock
  - OpenAI LLM Provider をリファクタリングし、2 つの独立 Provider に分割して、OpenAI の Completions と Responses API をそれぞれサポートしました。 ([#7615](https://github.com/nocobase/nocobase/pull/7615)) by @cgyrock
  - 新しい LLM プロバイダー Ollama を追加しました ([#7612](https://github.com/nocobase/nocobase/pull/7612)) by @ReLaMi96
  - AI コード作成機能を最適化しました ([#7614](https://github.com/nocobase/nocobase/pull/7614)) by @cgyrock
  - モバイル端末レイアウトでチャットボックスに最小化ボタンを追加しました ([#7595](https://github.com/nocobase/nocobase/pull/7595)) by @cgyrock
- **[UI テンプレート]**

  - 詳細ブロックのフィールドテンプレートサポートを追加しました。 ([#8247](https://github.com/nocobase/nocobase/pull/8247)) by @gchust
  - UI テンプレートプラグインを追加し、ブロックテンプレートとモーダルテンプレートの再利用能力を提供します。 ([#8163](https://github.com/nocobase/nocobase/pull/8163)) by @gchust
- **[ブロック：操作パネル]** 設定状態でブロック／アクション／フィールドが隠されている時の表示を最適化しました ([#8174](https://github.com/nocobase/nocobase/pull/8174)) by @katherinehhh
- **[ブロック：リスト]** Table、List、Grid Card ブロックの Link ボタン設定を補完しました ([#8194](https://github.com/nocobase/nocobase/pull/8194)) by @katherinehhh
- **[ブロック：地図]** 地図フィールド表示モードがテキスト時に超過省略設定をサポートしました ([#8189](https://github.com/nocobase/nocobase/pull/8189)) by @katherinehhh
- **[ブロック：グリッドカード]**

  - グリッドカードブロックのスタイルを最適化し、レイアウトをよりコンパクトにしました ([#8152](https://github.com/nocobase/nocobase/pull/8152)) by @katherinehhh
  - グリッドカードに 1 ページ表示行数設定を追加し、pageSize 設定を削除して、pageSize を自動計算に変更しました ([#8055](https://github.com/nocobase/nocobase/pull/8055)) by @katherinehhh
- **[データテーブルフィールド：Markdown(Vditor)]** 読み取りモードで Markdown フィールドがデフォルトで変数を解析しないよう調整しました ([#8145](https://github.com/nocobase/nocobase/pull/8145)) by @katherinehhh
- **[アクション：レコードインポート]** インポート設定フィールドが ID 選択をサポートしました ([#8133](https://github.com/nocobase/nocobase/pull/8133)) by @katherinehhh
- **[非同期タスクマネージャー]** 子アプリで非同期タスク実行時、非同期プロセスが対応する子アプリだけを起動します ([#7927](https://github.com/nocobase/nocobase/pull/7927)) by @2013xile
- **[データ可視化]**

  - チャートヒントバーとイベントコードテンプレート注釈を更新しました ([#7814](https://github.com/nocobase/nocobase/pull/7814)) by @heziqiang
  - チャートの日付時刻フォーマットオプションを追加しました ([#7763](https://github.com/nocobase/nocobase/pull/7763)) by @heziqiang
  - 「まず“クエリ実行”をクリックしてからチャートオプションを設定してください」というヒントを追加しました ([#7685](https://github.com/nocobase/nocobase/pull/7685)) by @heziqiang
  - チャート設定パネルで公開プレビューをクリックした際にチャートデータを更新します ([#7678](https://github.com/nocobase/nocobase/pull/7678)) by @heziqiang
  - プラグインデータ VI 2.0 版を更新し、いくつかの問題を修復し UI を最適化しました。 ([#7597](https://github.com/nocobase/nocobase/pull/7597)) by @heziqiang
  - チャートタイプを拡張；UI とインタラクション体験を最適化しました。 ([#7581](https://github.com/nocobase/nocobase/pull/7581)) by @heziqiang
- **[マルチアプリ管理器（廃止済み）]**

  - 子アプリの非同期キュー起動をサポートしました ([#7749](https://github.com/nocobase/nocobase/pull/7749)) by @2013xile
  - app supervisor を改善しました ([#7661](https://github.com/nocobase/nocobase/pull/7661)) by @chenos
- **[データソース管理]** フィールドタイプと interface 列順を調整し、変更時に二次確認を追加しました ([#7680](https://github.com/nocobase/nocobase/pull/7680)) by @2013xile
- **[マルチワークスペース]**

  - マルチワークスペース権限制御が acl に接続しました by @jiannx
  - api.storage で localstorage を置換し、権限制御をリファクタリングし、問題を修復しました by @jiannx
- **[AI: ナレッジベース]** ビルド成果物を最適化し、AI ナレッジベースプラグインのパッケージサイズを縮小しました by @cgyrock
- **[アクション：レコードエクスポート Pro]**

  - エクスポートボタンのデータ範囲を改善：優先は選択レコード、その次はフロントエンドのフィルター範囲 by @katherinehhh
  - import pro と export pro ボタンが権限制御をサポートしました by @katherinehhh
- **[テレメトリ：Prometheus]** `@opentelemetry/exporter-prometheus` をアップグレードしました by @2013xile
- **[データテーブルフィールド：暗号化]** フィールド暗号化プラグインを最適化し、独立 IV 下のデータ検索をサポートしました by @cgyrock
- **[ワークフロー：承認]**

  - JS Field のサポートを削除しました by @zhangzhonghe
  - 本ワークフロー実行終了時に `approval.data` を承認データの最新バージョンに更新し、「最新」記録表示モードに一致させます by @mytharcher
  - 起案者データ範囲に移行後の修復ロジックを追加しました by @mytharcher
  - 単一承認伝票取得 API を調整し、コードを簡素化しました by @mytharcher
  - API へのアクセス制御を追加し、API 経由の権限超過操作を回避します by @mytharcher

### 🐛 不具合修正

- **[undefined]**

  - ダークモードでプラグイン文書トップページのスタイルが正しくない問題を修復しました。 ([#7839](https://github.com/nocobase/nocobase/pull/7839)) by @gchust
  - 引用ブロックが、引用されたブロックを元ページから削除してしまう問題を修復しました。 ([#7969](https://github.com/nocobase/nocobase/pull/7969)) by @gchust
  - ルートパスのマッチングが新しいマルチアプリをサポートしました ([#7570](https://github.com/nocobase/nocobase/pull/7570)) by @jiannx
  - カスタムアクションワークフローをトリガーした際にパラメータとペイロードデータが正しくない問題を修復しました by @mytharcher
  - コメントではないテーブルでコメントブロックを使用した際に「現在のテーブルはコメントテーブルではないため、コメントブロックを使用できません」という提示を表示します by @katherinehhh
  - コメントブロックでレコード削除に失敗する問題を修復しました by @katherinehhh
  - コメントブロックのコメント引用が無効になる問題を修復しました by @katherinehhh
- **[client]**

  - テーブルとグリッドカードのモバイル端末ページネーション挙動を統一しました ([#8691](https://github.com/nocobase/nocobase/pull/8691)) by @zhangzhonghe
  - チャートブロックのフィルターが効かない問題を修復しました ([#8671](https://github.com/nocobase/nocobase/pull/8671)) by @chenos
  - リレーションフィールド割り当て時に、to-many のリレーションフィールドへ単一レコードを割り当てると不正になる問題を修復しました。 ([#8652](https://github.com/nocobase/nocobase/pull/8652)) by @gchust
  - 公式フィールドの数値型で数値フォーマットが表示されない／日付型で日付フォーマット設定項目が表示されない問題を修復しました ([#8625](https://github.com/nocobase/nocobase/pull/8625)) by @katherinehhh
  - フォームの最初の項目の上罫線が不完全に表示される問題を修復しました ([#8623](https://github.com/nocobase/nocobase/pull/8623)) by @katherinehhh
  - フォームのリレーションフィールドコンポーネントで、タイトルフィールドに外部キーを使うとドロップダウンのデータ表示が異常になる問題を修復しました ([#8619](https://github.com/nocobase/nocobase/pull/8619)) by @katherinehhh
  - 編集フォームのリレーションフィールドデータセレクターで、選択済データ変更後に復元できない問題を修復しました ([#8610](https://github.com/nocobase/nocobase/pull/8610)) by @katherinehhh
  - JS column コードエディターで run ボタンをクリック後にテーブル列が再レンダリングされない問題を修復しました。 ([#8608](https://github.com/nocobase/nocobase/pull/8608)) by @gchust
  - 非設定モードで "read hidden" のレンダリングエラーが出る可能性がある問題を修復しました。 ([#8591](https://github.com/nocobase/nocobase/pull/8591)) by @gchust
  - 編集フォームで子テーブル（行内編集）を読み取り専用にした後、閲覧モード子テーブルへ切り替えると編集モードの列フィールドが残る問題を修復しました ([#8589](https://github.com/nocobase/nocobase/pull/8589)) by @katherinehhh
  - Grid レイアウトにプレースホルダーが残る問題を修復しました ([#8535](https://github.com/nocobase/nocobase/pull/8535)) by @zhangzhonghe
  - 子テーブル行内編集時に列幅縮小がリアルタイム更新されない／複数行テキスト列幅拡大後に入力欄が追従しない問題を修復しました ([#8573](https://github.com/nocobase/nocobase/pull/8573)) by @katherinehhh
  - ツリーテーブルを有効化した後、ページ更新しないと「子レコード追加」アクションを追加できない問題を修復しました ([#8574](https://github.com/nocobase/nocobase/pull/8574)) by @katherinehhh
  - 編集フォームでリレーションフィールドセレクターのクイック追加ボタンでデータ追加時にフォーム内データが上書きされる問題を修復しました。 ([#8567](https://github.com/nocobase/nocobase/pull/8567)) by @gchust
  - ツリー構造ではないテーブルで、テーブルブロック属性の「ツリーテーブルを有効化」「デフォルトで全行展開」を非表示にしました ([#8566](https://github.com/nocobase/nocobase/pull/8566)) by @katherinehhh
  - アクション追加モーダルにテーブル（追加）メニューが出るべきではない問題を修復しました。 ([#8562](https://github.com/nocobase/nocobase/pull/8562)) by @gchust
  - 初回モーダルを開いて閉じた後にページデータが誤って更新される問題を修復しました。 ([#8548](https://github.com/nocobase/nocobase/pull/8548)) by @gchust
  - イベントストリームがモーダルを跨いでターゲットブロックを更新する際に効かない問題を修復しました。 ([#8541](https://github.com/nocobase/nocobase/pull/8541)) by @gchust
  - 複数行テキストが改行されない問題を修復しました ([#8122](https://github.com/nocobase/nocobase/pull/8122)) by @katherinehhh
  - 演算子が「任意の 1 つを含む」「任意の 1 つを含まない」の場合に、オプションフィールドのフィルターが全オプションを列挙しない問題を修復しました。 ([#8118](https://github.com/nocobase/nocobase/pull/8118)) by @gchust
  - サブフォーム内で子テーブルをネストした際にデータがない問題を修復しました ([#8117](https://github.com/nocobase/nocobase/pull/8117)) by @katherinehhh
  - フィルターアクションで「時間の間」フィルター値をクリア後に再度フィルターを実行するとエラーになる問題を修復しました。 ([#8110](https://github.com/nocobase/nocobase/pull/8110)) by @gchust
  - フィルターフォームでリレーションフィールドの選択可能データが正しくない問題を修復しました。 ([#8109](https://github.com/nocobase/nocobase/pull/8109)) by @gchust
  - フィルターフォームのカスタムフィールド設定が正しく反映されない／一部設定が効かない問題を修復しました。 ([#8106](https://github.com/nocobase/nocobase/pull/8106)) by @gchust
  - Checkbox フィールドのフィルターが効かない問題を修復しました。 ([#8103](https://github.com/nocobase/nocobase/pull/8103)) by @gchust
  - フィルターアクションで number フィールド値が正しく反映されない問題を修復しました。 ([#8104](https://github.com/nocobase/nocobase/pull/8104)) by @gchust
  - フィルターフォームで一部フィールド演算子が正しくデータをフィルターできない問題を修復しました。 ([#8100](https://github.com/nocobase/nocobase/pull/8100)) by @gchust
  - ブロック削除後、フィルターブロックに設定済みの当該ブロックフィールドが削除されない問題を修復しました。 ([#8098](https://github.com/nocobase/nocobase/pull/8098)) by @gchust
  - ボタン非表示後、非設定モードで余分な余白が出る問題を修復しました ([#8092](https://github.com/nocobase/nocobase/pull/8092)) by @katherinehhh
  - フィルターフォームのリセットボタン文言を変更できない問題を修復しました。 ([#8089](https://github.com/nocobase/nocobase/pull/8089)) by @gchust
  - フィールドフィルター演算子が $in / $notIn の場合に入力欄が複数値入力をサポートしない問題を修復しました。 ([#8081](https://github.com/nocobase/nocobase/pull/8081)) by @gchust
  - データブロック追加後にフィルターフォームのフィールドメニューへ自動表示されない問題を修復しました。 ([#8085](https://github.com/nocobase/nocobase/pull/8085)) by @gchust
  - フィルターフォームのリレーションフィールド設定メニューにクイック作成を表示すべきではない問題。 ([#8083](https://github.com/nocobase/nocobase/pull/8083)) by @gchust
  - リストブロックでリレーション子テーブルのデータが誤る問題を修復しました ([#8082](https://github.com/nocobase/nocobase/pull/8082)) by @katherinehhh
  - データテーブルで設定した数値フィールド検証ルールがフォームで効かない問題を修復しました ([#8025](https://github.com/nocobase/nocobase/pull/8025)) by @katherinehhh
  - フィルターフォームのフィールドがバックエンド検証ルールに制限される問題を修復しました。 ([#8074](https://github.com/nocobase/nocobase/pull/8074)) by @gchust
  - 子テーブルで大フィールド編集の表示が異常になる問題を修復しました ([#8069](https://github.com/nocobase/nocobase/pull/8069)) by @katherinehhh
  - to-many リレーションのドロップダウンで「複数選択を許可」をオフにした際にクイック追加がエラーになる問題を修復しました ([#8034](https://github.com/nocobase/nocobase/pull/8034)) by @katherinehhh
  - json フィールドのクイック編集がエラーになる問題を修復しました ([#8059](https://github.com/nocobase/nocobase/pull/8059)) by @katherinehhh
  - json フィールドは送信時にオブジェクトであるべきです ([#8057](https://github.com/nocobase/nocobase/pull/8057)) by @katherinehhh
  - Enter キーでフィルターアクションを実行できない問題を修復しました。 ([#8056](https://github.com/nocobase/nocobase/pull/8056)) by @gchust
  - to-many リレーションを複数選択無効にした後に N/A と表示される問題を修復しました ([#8050](https://github.com/nocobase/nocobase/pull/8050)) by @katherinehhh
  - データセレクターブロックの一括削除が失敗する問題を修復しました ([#8023](https://github.com/nocobase/nocobase/pull/8023)) by @katherinehhh
  - コメントブロック追加時に現在レコードメニューが出る問題を修復しました。 ([#8039](https://github.com/nocobase/nocobase/pull/8039)) by @gchust
  - フィルターアクションで日付フィールドを時間フィールドへ切替後にレンダリングエラーが出る問題を修復しました。 ([#8036](https://github.com/nocobase/nocobase/pull/8036)) by @gchust
  - 編集アクション／追加アクションのモーダルのデフォルトタイトルが正しくない問題を修復しました。 ([#8033](https://github.com/nocobase/nocobase/pull/8033)) by @gchust
  - 詳細ブロックの JS field デフォルトスタイルが正しくない問題を修復しました。 ([#8031](https://github.com/nocobase/nocobase/pull/8031)) by @gchust
  - 子テーブル列幅設定が効かない問題を修復しました ([#8027](https://github.com/nocobase/nocobase/pull/8027)) by @katherinehhh
  - 子テーブル列ドラッグが効かない問題を修復しました ([#8026](https://github.com/nocobase/nocobase/pull/8026)) by @katherinehhh
- - antd コンポーネントの翻訳が効かない問題を修復しました ([#7621](https://github.com/nocobase/nocobase/pull/7621)) by @zhangzhonghe
  - 引用ブロックで現在ビュー関連変数を取得できない問題 ([#7620](https://github.com/nocobase/nocobase/pull/7620)) by @gchust
- **[server]**

  - 外部データソースで Snowflake ID (53 bits) 型フィールドの使用をサポートしました ([#8185](https://github.com/nocobase/nocobase/pull/8185)) by @2013xile
  - license-kit を最新バージョンへ更新しました ([#8173](https://github.com/nocobase/nocobase/pull/8173)) by @jiannx
  - 引用フィールド複製時に field.targetKey 値を保持します ([#7599](https://github.com/nocobase/nocobase/pull/7599)) by @chenos
  - 主キー移行スクリプトのエラー ([#7563](https://github.com/nocobase/nocobase/pull/7563)) by @2013xile
- **[database]**

  - ネスト関連の深度更新問題を修復しました ([#8492](https://github.com/nocobase/nocobase/pull/8492)) by @chenos
  - 多対多リレーションデータ検索時に through scope 条件を付与します ([#8277](https://github.com/nocobase/nocobase/pull/8277)) by @2013xile
  - 多ターゲットキー（複合ユニークキー）テーブルをクエリする際、`filterByTk` パラメータが配列入力をサポートしました ([#7986](https://github.com/nocobase/nocobase/pull/7986)) by @chenos
  - `runSQL` で SQL 実行前に `search_path` を設定します ([#7611](https://github.com/nocobase/nocobase/pull/7611)) by @2013xile
- **[sdk]** token 共有の実装方式を改善しました ([#8357](https://github.com/nocobase/nocobase/pull/8357)) by @chenos
- **[acl]** acl.allow が前倒し実行される問題を修復しました ([#8065](https://github.com/nocobase/nocobase/pull/8065)) by @chenos
- **[utils]**

  - フィルターボタンが “Invalid filter item type” とエラーになる問題を修復しました ([#7838](https://github.com/nocobase/nocobase/pull/7838)) by @zhangzhonghe
  - イベントストリームが “Unrecognized operation” とエラーになる問題を修復しました ([#7835](https://github.com/nocobase/nocobase/pull/7835)) by @zhangzhonghe
- **[ローカライズ]** i18n 欠損 key の処理ロジックを最適化しました ([#8673](https://github.com/nocobase/nocobase/pull/8673)) by @chenos
- **[AI従業員]**

  - aiTools:list API が 403 を返す ([#8672](https://github.com/nocobase/nocobase/pull/8672)) by @chenos
  - AI従業員使用時にブラウザメモリが埋まりクラッシュする問題を修復しました ([#8653](https://github.com/nocobase/nocobase/pull/8653)) by @mytharcher
  - AI従業員がオンライン検索後、対話ボックスに検索参考リンクが表示されない問題を修復しました ([#8651](https://github.com/nocobase/nocobase/pull/8651)) by @cgyrock
  - openai API 呼び出しの引数渡しエラー問題を修復しました ([#8633](https://github.com/nocobase/nocobase/pull/8633)) by @cgyrock
  - LLM ノードでメッセージ送信に失敗する問題を修復しました ([#8569](https://github.com/nocobase/nocobase/pull/8569)) by @2013xile
  - AI モデリング時にツール自動呼び出しで発生する例外を修復しました ([#8532](https://github.com/nocobase/nocobase/pull/8532)) by @cgyrock
  - ビルド後にシステムが起動できない問題を修復しました ([#8523](https://github.com/nocobase/nocobase/pull/8523)) by @cgyrock
  - AI モデリングとデータソース管理モジュールで選択可能フィールド設定が一致しない問題を修復しました ([#8488](https://github.com/nocobase/nocobase/pull/8488)) by @cgyrock
- **[データ可視化]**

  - チャートプレビュー時のみ sql データクエリで debug モードを使用します ([#7893](https://github.com/nocobase/nocobase/pull/7893)) by @heziqiang
  - チャート初期化時に sql:runById API でクエリデータをリクエストします ([#7677](https://github.com/nocobase/nocobase/pull/7677)) by @heziqiang
  - チャート SQL クエリの変数自動解析問題を修復しました ([#7642](https://github.com/nocobase/nocobase/pull/7642)) by @heziqiang
  - チャートデータリクエストパラメータ orders が欠落する問題を修復しました ([#7636](https://github.com/nocobase/nocobase/pull/7636)) by @heziqiang
  - イベント登録タイムアウトによりチャートが表示できない問題を修復しました ([#7608](https://github.com/nocobase/nocobase/pull/7608)) by @heziqiang
- **[アクション：レコードインポート]**

  - ファイルインポート時にワークスペース検証を行います ([#8285](https://github.com/nocobase/nocobase/pull/8285)) by @jiannx
  - インポートボタン内のインポートフィールド一覧表示が誤る問題を修復しました ([#7710](https://github.com/nocobase/nocobase/pull/7710)) by @katherinehhh
- **[非同期タスクマネージャー]** バックグラウンドタスク取消の提示文言を修復しました ([#8245](https://github.com/nocobase/nocobase/pull/8245)) by @mytharcher
- **[ワークフロー]**

  - 「外部データソース」を更新後に紐付けたデータテーブルイベントが失効する問題を修復しました ([#8207](https://github.com/nocobase/nocobase/pull/8207)) by @cgyrock
  - 設定でワークフロー紐付けボタンにワークフロー追加をクリックするとフリーズする問題を修復しました ([#7541](https://github.com/nocobase/nocobase/pull/7541)) by @mytharcher
- **[データテーブルフィールド：多対多（配列）]** ターゲットキー型が Snowflake ID (53 bits) の場合に作成できない問題を修復しました ([#8226](https://github.com/nocobase/nocobase/pull/8226)) by @2013xile
- **[データテーブルフィールド：数式]**

  - BigInt フィールドを詳細ブロック／フォームブロックに追加できない問題を修復しました ([#8201](https://github.com/nocobase/nocobase/pull/8201)) by @katherinehhh
- **[マルチアプリ]**

  - マルチアプリデータ移行が hooks をトリガーしない by @jiannx
  - マルチアプリのプロキシがキャッシュをサポートしました by @jiannx
- **[plugin-demo-platform]** demo がアプリを自動クローズすることをサポートしました by @jiannx
- **[ワークフロー：承認]**

  - 承認のデータが削除された後に API がエラーになる問題を修復しました by @mytharcher
  - 既有人員範囲のワークフローを無効化した後、ユーザーにロール追加する際のエラーを修復しました by @mytharcher
  - 1.x 承認記録モーダルがエラーになる問題を修復しました by @mytharcher
  - 誤ったパラメータによるデータ読み込みエラー問題を修復しました by @mytharcher
  - 承認情報ブロック作成でエラーになる問題を修復しました by @mytharcher
  - 承認者がフォーム送信時、入力済み内容が消える問題を修復しました by @mytharcher
- **[メール管理]**

  - メールボックス設定モーダルが遮られる問題を修復しました by @zhangzhonghe
  - 複数ユーザー間で同一メールボックスのメール問題を修復し、性能を最適化しました by @jiannx
  - Outlook 返信チェーンが稀に途切れる問題を修復しました by @jiannx
  - テキスト選択時に本文が折り畳まれない。添付ダウンロード失敗を修復しました by @jiannx
  - 管理にフィルターを追加しました by @jiannx
  - 会話チェーンを修復しました by @jiannx
  - メール親ノード id の修正を許可しました by @jiannx
  - 「全員に返信」ボタンを表示し、データ範囲が子メールのフィルターをサポートしました by @jiannx
  - 下書き問題を修復しました by @jiannx
  - Gmail の予約送信状態を同期しません by @jiannx
  - 異常データに対してフォールバック処理を行います by @jiannx
  - ShadowHtml の更新エラー by @jiannx
