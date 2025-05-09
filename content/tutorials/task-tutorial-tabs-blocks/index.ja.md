こんにちは、皆さん！第5章へようこそ！この章は、タスク管理ページの機能を拡張し、さまざまな表示オプションを利用できるエキサイティングな内容が盛りだくさんです。これを楽しみにしていたことでしょう？大丈夫です — 一歩一歩ガイドしますので、いつものように一緒に乗り越えましょう！

### 5.1 ブロック整理のためのタブコンテナ

既にタスク管理ページを設定しましたが、システムをさらに直感的にするためには、タスクをさまざまなモードで表示できるようにしたいと考えています。たとえば、[**テーブル**](https://docs-cn.nocobase.com/handbook/ui/blocks/data-blocks/table)、[**かんばん**](https://docs-cn.nocobase.com/handbook/block-kanban)、[**カレンダー**](https://docs.nocobase.com/handbook/calendar)、さらには[**ガントチャート**](https://docs.nocobase.com/handbook/block-gantt)のようにです。NocoBaseのタブ機能を使用すると、同じページで異なるブロックレイアウトを切り替えることができます。手順を見ていきましょう。

- **タブの作成**
  まずはタブを作成します。

1. **サブタブの追加**
   - 既存のタスク管理ページを開き、その中でサブタブを作成します。最初のタブを**「テーブルビュー」**と名付け、そこで以前設定したタスクリストブロックを表示します。
2. **別の新しいタブの追加**
   - 次に、2つ目のタブを追加し、**「かんばんビュー」**と名付けます。ここで、タスクを管理するためのかんばんブロックを作成します。

準備はいいですか？それぞれのブロックタイプの作成に進みましょう！

### 5.2 かんばんブロック：タスク状況が一目瞭然

[**かんばん**](https://docs.nocobase.com/handbook/block-kanban)は、タスク管理システムにおいて重要な機能であり、ドラッグ＆ドロップでタスクを直感的に管理できます。たとえば、タスクの状況でグループ化することで、各タスクの現在のステージを瞬時に把握できます。

#### 5.2.1 かんばんブロックの作成

1. **かんばんブロックを作成開始**
   - **かんばんビュー**タブ内で「ブロックを作成」をクリックし、タスクコレクションを選択すると、タスクグループ化に使用するフィールドを選ぶオプションが表示されます。
2. **グループ化フィールドの選択**
   - タスクの状況に基づいてタスクをグループ化するために、**ステータス**フィールドを選択します。（グループ化フィールドは「ドロップダウン（単一選択）」または「ラジオグループ」である必要があります。）
3. **ソートフィールドの追加**
   - かんばんビュー内では、カードをソートフィールドによって整理できます。これを設定するために、**ステータスソート（status_sort）**という名称のソートフィールドを新しく作成します。このフィールドを使うことで、各ステータスグループ内のカードを垂直に整理できます。後で、カードをドラッグ＆ドロップすると、ソート値は自動的に更新され、フォームで確認できるようになります。

### 5.3 テンプレートの使用：コピーおよび参照

かんばんブロックを作成した後、**追加フォーム**を設定する必要があります。ここで、NocoBaseは非常に便利な機能を提供しています — 以前に作成したフォームテンプレートを[**コピーまたは参照**](https://docs.nocobase.com/handbook/ui/blocks/block-templates#%E5%A4%8D%E5%88%B6%E5%92%8C%E5%BC%95%E7%94%A8%E7%9A%84%E5%8C%BA%E5%88%AB)することができるので、毎回新しいフォームを再設定する必要はありません。

#### 5.3.1 **フォームをテンプレートとして保存**

- 既存の追加フォームで、フォーム設定にカーソルを合わせて「テンプレートとして保存」を選択します。このテンプレートに**「タスクフォーム_追加」**という名前を付けることができます。

#### 5.3.2 **テンプレートのコピーまたは参照**

かんばんビューでフォームを作成する際、「**テンプレートをコピー**」と「**テンプレートを参照**」の2つのオプションが表示されます。それらの違いは何ですか？

- [**テンプレートをコピー**](https://docs.nocobase.com/handbook/ui/blocks/block-templates#%E5%A4%8D%E5%88%B6%E5%92%8C%E5%BC%95%E7%94%A8%E7%9A%84%E5%8C%BA%E5%88%AB)：これによりフォームの複製が作成され、元のフォームに影響を与えることなく、独立して変更を加えることができます。
- [**テンプレートを参照**](https://docs.nocobase.com/handbook/ui/blocks/block-templates#%E5%A4%8D%E5%88%B6%E5%92%8C%E5%BC%95%E7%94%A8%E7%9A%84%E5%8C%BA%E5%88%AB)：こちらは元のフォームを「借用」するため、変更はすべてこのテンプレートを参照している他のフォームにも自動的に適用されます。

### 5.4 カレンダーブロック：タスクスケジュールの明確な管理

次に、タスクのスケジュールをより効率的に管理するために[**カレンダーブロック**](https://docs.nocobase.com/handbook/calendar)を作成しましょう。

#### 5.4.1 カレンダーの作成

##### 5.4.1.1 **日付フィールドの追加**

カレンダー表示を使用するには、タスクコレクションに**開始日**と**終了日**フィールドが必要です：

- **開始日（start_date）**：タスクの開始日を示します。
- **終了日（end_date）**：タスクの終了日を示します。

#### 5.4.2 カレンダーブロックの作成

カレンダービューに移り、カレンダーブロックを作成し、タスクコレクションを選択し、**開始日**と**終了日**フィールドを使って設定します。この設定により、タスクはカレンダー上で時間帯として表示され、タスクのタイムラインが一目でわかります。

### 5.5 ガントブロック：タスク管理の究極のツール

最後に探索するブロックは[**ガントブロック**](https://docs.nocobase.com/handbook/block-gantt)で、タスクの進捗と依存関係を追跡するために広く使用されているツールです。

#### 5.5.1 “ガントビュー”タブの作成

#### 5.5.2 **完了率フィールドの追加**

ガントチャートでタスクの進捗を効果的に示すために、**完了率（complete_percent）**という新しいフィールドを追加し、デフォルト値を0%に設定します。

#### 5.5.3 ガントブロックの作成

ガントビュー内でガントブロックを作成し、タスクコレクションを選択し、開始日、終了日、完了率フィールドで設定します。

### まとめ

素晴らしい！NocoBaseでさまざまなブロックを使用してタスクデータを表示する方法を学びました。これにより、タスク管理が直感的になり、大きな柔軟性が得られます。

しかし、これは始まりに過ぎません！異なるメンバーが異なる役割を持つチームを想像してみてください。どのようにしてシームレスなコラボレーションを確保し、データの安全性を確保しつつ、各自が関連のあるコンテンツのみを表示・編集できるようにするのでしょうか？

準備はいいですか？次の章に進みましょう：[第6章：ユーザーと権限](https://www.nocobase.com/en/tutorials/task-tutorial-user-permissions)。

探求を続け、自分の創造力を解き放ちましょう！