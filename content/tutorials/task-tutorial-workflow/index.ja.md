おめでとうございます！最終章に到達しました！ここでは、**NocoBase**の強力なワークフロー機能を紹介し、簡単に探ります。この機能を使うことで、システム内のタスクを自動化し、時間を節約して効率を向上させることができます。

### 前章の課題解決

始める前に、前回の課題の解決策を簡単に振り返りましょう。次のように、**パートナー**役割に対して**コメント権限**を正常に設定しました。

1. **追加権限**：ユーザーがコメントを投稿できるようにします。
2. **表示権限**：ユーザーがすべてのコメントを表示できるようにします。
3. **編集権限**：ユーザーは自分のコメントのみを編集できます。
4. **削除権限**：ユーザーは自分のコメントのみを削除できます。

![](https://static-docs.nocobase.com/Solution/202410270004241729958664.png)

これらの権限をもとに、Tomは自由にコメントを投稿し、他のコメントを確認し、自分のコメントのみを編集または削除できることを確保しています。

![](https://static-docs.nocobase.com/Solution/202410270011181729959078.png)

---

さて、次は自動化を実装しましょう：**タスクの割り当てが変更されると、システムは自動的に新しい担当者に通知を送信し、タスクの移行を知らせます**。

> **ワークフロー**：ワークフロープラグインは、ビジネスプロセスマネジメント（BPM）で一般的に使用される強力な自動化ツールであり、データモデルに基づいてビジネスプロセスを設計および構成するために使用されます。
>
> トリガーを定義し、プロセスノードを構成することで、このプラグインはビジネスプロセスの流れを自動化し、効率的なタスク管理とデータ駆動型の運用を可能にします。

### 7.1 ワークフローの作成

#### 7.1.1 管理ページでのワークフローの設定

まず、**ルートロール**に切り替えます。これは、すべての権限を持つシステム管理者の役割です。それから、[**ワークフローモジュール**](https://docs.nocobase.com/handbook/workflow)に進みます。

![](https://static-docs.nocobase.com/Solution/202410270015231729959323.png)

右上隅の**「追加」**ボタンをクリックして新しいワークフローを作成し、基本情報を入力します。

- **名前**：担当者が変更されたときにシステム通知を送信します。
- **トリガータイプ**：’コレクションイベント’を選択します。

![](https://static-docs.nocobase.com/Solution/202410270018231729959503.png)

#### 7.1.2 トリガータイプの説明

1. [**コレクションイベント**](https://docs.nocobase.com/handbook/workflow/triggers/collection)：コレクション内で変更が発生したときにトリガーされます（追加、修正、削除）。これは、担当者が変更されたときのように、タスクフィールドの更新を追跡するのに理想的です。
2. [**スケジュールタスク**](https://docs.nocobase.com/handbook/workflow/triggers/schedule)：指定された時間に自動的にトリガーされ、スケジュールに基づく自動化に適しています。
3. [**ポストアクションイベント**](https://docs.nocobase.com/handbook/workflow/triggers/post-action)：アクションボタンにバインドし、ユーザーアクションの後にトリガーされます。たとえば、フォームで「保存」をクリックしたときです。

将来的には、”プレアクションイベント”、”カスタムアクションイベント”、および”承認”などのトリガータイプも見つけることができ、追加のプラグインを使用してこれらをアンロックできます。

このシナリオでは、[**コレクションイベント**](https://docs.nocobase.com/handbook/workflow/triggers/collection)を使用して、「タスク」コレクションの「タスクアサイナー」フィールドの変更を監視します。ワークフローを送信した後、**構成**をクリックしてワークフロー設定ページに入ります。

![demov3N-37.gif](https://static-docs.nocobase.com/Solution/demov3N-37.gif)

---

### 7.2 ワークフローノードの設定

#### 7.2.1 トリガー条件の設定

自動通知フローの構築を始めましょう。まずは第一ノードを設定し、特定の状況で自動的にワークフローが開始される条件を設定します。

- **コレクション**：’タスク’を選択します。（このコレクションがワークフローをトリガーし、関連データを取得します。タスクコレクションが更新されたときにワークフローが開始することを望みます。）
- **トリガー時**：’データの追加または更新後’を選択します。
- **トリガーフィールド**：’タスクアサイナー’を選択します。
- **条件に一致する場合のみトリガー**：’タスクアサイナー/ID’が’存在’する場合を選択し、タスクが割り当てられたときにだけ通知が送信されることを確認します。
- **関連をプリロード**：’タスクアサイナー’を選択し、次のステップでその情報が使用できるようにします。

![](https://static-docs.nocobase.com/Solution/demov3N-38.gif)

---

#### 7.2.2 「アプリ内メッセージ」チャネルの有効化

次に、通知を送信するノードを作成します。

その前に、通知のための[「アプリ内メッセージ」チャネル](https://docs.nocobase.com/handbook/notification-in-app-message)を作成する必要があります。

- プラグイン管理に戻り、「通知管理」を選択し、タスク通知（task_message）を作成します。
- チャネルを作成したら、ワークフローに戻って「通知」ノードを追加します。

![](https://static-docs.nocobase.com/Solution/demov3N-47N2RN.gif)

- **ノード設定**：
  - **チャネル**：’タスク通知’を選択します。
  - **受信者**：’トリガー変数/トリガーデータ/タスクアサイナー/ID’を選択して、新しい担当者をターゲットにします。
  - **メッセージタイトル**：’担当者変更のリマインダー’を入力します。
  - **メッセージ内容**：’あなたは新しいタスクアサイナーに指定されました。’と入力します。

完了したら、右上のトグルをクリックしてこのワークフローを有効化します。

![](https://static-docs.nocobase.com/Solution/demov3N-48RN.gif)

設定完了！

#### 7.2.3 通知のテスト

エキサイティングな瞬間です。ページに戻って、任意のタスクを編集し、担当者を変更して、送信ボタンをクリックします。システムが通知を送信しました！

![](https://static-docs.nocobase.com/Solution/202410270402331729972953.png)

![](https://static-docs.nocobase.com/Solution/202410270359501729972790.png)

---

これが基本的なワークフローの設定です。しかし、もう一つ改善点があります：

通知にタスク情報を動的に挿入する必要があります。そうすれば、ユーザーはどのタスクが再割り当てされたのかを知ることができます。

### 7.3 ワークフローの改善

#### 7.3.1 バージョン管理

ワークフロー設定に戻ります。インターフェイスがグレーアウトし編集できなくなっていることに気付くでしょう。

心配しないでください。右上の省略記号をクリックし、[**新バージョンに複製**](https://docs.nocobase.com/handbook/workflow/advanced/revisions)を選択すると、新しいバージョンの構成ページが表示されます。前のバージョンは保持されるので、**バージョン**ボタンをクリックすると、過去のバージョンに切り替えることができます（注意：実行されたワークフローバージョンは変更できません）。

![](https://static-docs.nocobase.com/Solution/demov3N-49.gif)

#### 7.3.2 通知内容の強化

では、タスクの移行に関する詳細を追加して通知を個別化しましょう。

- **通知ノードを編集します。**

メッセージ内容を次のように変更します：’タスク《【タスク名】》が：【タスクアサイナー/ニックネーム】に再割り当てされました。’。

- 右の変数パネルを使用してタスク名とタスクアサイナーのフィールドを追加します。
- その後、右上のトグルをクリックしてこのバージョンを有効化します。

![](https://static-docs.nocobase.com/Solution/demov3N-50RN.gif)

更新されたワークフローバージョンを有効にすると、次のテスト時にタスク名がシステム通知に表示されます。

![](https://static-docs.nocobase.com/Solution/demov3N-51.gif)

---

### まとめ

素晴らしい！タスク所有権の変更に基づいてトリガーされる自動ワークフローを正常に作成しました。この機能は、手動操作による時間を節約するだけでなく、チームの協力を強化します。これで、タスク管理システムは強力な機能を獲得しました。

---

### 結論と次のステップ

ゼロから完全に機能するタスク管理システムを完成させました。タスクの作成、コメント、役割権限、ワークフロー、システム通知をカバーしています。

NocoBaseの柔軟性と拡張性は無限の可能性を提供します。将来的には、さらに多くのプラグインを探求したり、機能をカスタマイズしたり、複雑なビジネスロジックを作成したりできます。この知識を持って、NocoBaseの基本とコアコンセプトを習得しました。

次の革新を楽しみにしています！何か質問があれば、[NocoBase公式ドキュメント](https://docs.nocobase.com/)を参照するか、[NocoBaseコミュニティ](https://forum.nocobase.com/)に参加してディスカッションしてください。

探求を続け、無限の可能性を解き放ちましょう！
