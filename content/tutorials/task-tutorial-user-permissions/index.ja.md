<iframe width="800" height="450" src="https://www.youtube.com/embed/9YzDdchEeGs?si=_paXXB3JbO-CZ6fd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

チームコラボレーションでは、すべての人が自分の役割と権限を明確に理解することが重要で、スムーズな進行を確保します。今日は、役割の作成と権限の管理について学び、チームワークをより効率的で整理されたものにします。

心配いりません。このプロセスはシンプルです。一歩一歩ガイドしますので、重要な各段階で指導を行います。問題が発生した場合は、お気軽に公式フォーラムにお問い合わせください。

### 要件分析

タスク管理に参加するために、特定の権限を持つ「パートナー」役割が必要ですが、他の人のタスクを自由に変更する権限は与えません。このアプローチにより、タスクを柔軟に割り当て、共同作業が可能となります。

![役割構造図](https://static-docs.nocobase.com/Solution/WSy8bi0zOozbBKxzlimcyje4n7f.png)

> **役割と権限の紹介：** 役割と権限は、ユーザーのアクセスと操作を管理するための重要なメカニズムです。各ユーザーは複数の役割を持つことができます。
>
> 役割の権限を設定することで、システム内でのユーザーの行動や操作を制御し、表示される機能を制限することができ、アクセス制御にとって重要です。
> 役割と権限を使用してユーザーを結びつけることで、システムの管理をより効率的に行うことができます。管理者として、必要に応じて権限を割り当てて調整できます。

### 6.1 **役割の作成と割り当て**

#### 6.1.1 **「パートナー」役割の作成**

- インターフェースの右上の[「ユーザーと権限」](https://docs.nocobase.com/handbook/users)をクリックし、[「役割と権限」](https://docs.nocobase.com/handbook/acl)を選択します。ここで、役割を設定して権限を管理します。
- 「**役割を作成**」ボタンをクリックするとダイアログボックスが表示されます。ここで、役割の名前を**パートナー**とし、確認して保存します。

![](https://static-docs.nocobase.com/Solution/demov3N-28N.gif)

新しい役割を成功裏に作成しました！次に、この役割に権限を割り当てて、タスク管理に参加できるようにします。

#### 6.1.2 **自分への新しい役割の割り当て**

役割権限が期待通りに機能することを確認するために、まずこの役割を自分のアカウントに割り当ててテストします。これは簡単です：

- ユーザー管理セクションで自分のアカウントを見つけ、入って、[「役割と権限」]を選択し、「**パートナー**」を選びます。

![](https://static-docs.nocobase.com/Solution/demov3N-29.gif)

これでお使いのアカウントを使って「パートナー」の役割をシミュレートできます。次に、役割の切り替え方法を見てみましょう。

#### 6.1.3 **「パートナー」役割への切り替え**

「パートナー」役割を自分に割り当てたので、その切り替え方法を探ってみましょう。

- 右上の**個人センター**をクリックし、「**役割を切り替える**」を選択します。
- 「パートナー」役割がリストに表示されない場合があります。心配しないでください。**ページを更新/キャッシュをクリア**すれば、その役割が表示されるはずです。

![](https://static-docs.nocobase.com/Solution/demov3N-30.gif)

### 6.2 役割へのページ権限の割り当て

「パートナー」役割に切り替えると、可視ページやメニューがないことに気付くかもしれません。これは、その役割に特定のページへのアクセス権が割り当てられていないためです。問題なし、次は「パートナー」役割のアクセス権を設定します。

#### 6.2.1 **「パートナー」役割へのタスクページ権限の割り当て**

- まず、**ルート**役割（スーパー管理者）に戻り、「**役割と権限**」ページに行きます。
- 「パートナー」役割をクリックして構成ページを開きます。ここでは、システム内のすべてのページを示す「**メニュー**」タブがあります。
- 「**タスク管理**」ページの権限にチェックを入れて、「パートナー」役割がタスク管理ページにアクセスできるようにします。

**個人センター**に戻り、「パートナー」役割に切り替えれば、タスク管理メニューが表示されるはずです。

![](https://static-docs.nocobase.com/Solution/demov3N-31N.gif)

#### 6.2.2 コレクションアクションと操作権限の設定

「パートナー」役割がタスク管理ページにアクセスできるようになりましたが、操作権限をさらに制限する必要があります。「パートナー」が：

- **自分に割り当てられたタスクを表示および編集すること**、
- **タスクの進捗を更新すること**、
- しかし、**タスクを作成または削除できないこと**。

これを達成するために、「タスク」の権限を設定する必要があります。進みましょう！

##### 6.2.2.1 **「パートナー」役割へのコレクションアクション権限の設定**

- 「**役割と権限**」ページに戻り、「パートナー」役割をクリックし、「データソース」タブに切り替えます。
- ここには「アクション権限」の設定があります。**タスク**を見つけ、「パートナー」に「表示」および「編集」権限を割り当てます。
- 他の役割に「追加」または「削除」権限を割り当てないため、最初から割り当てる必要はありません。

![](https://static-docs.nocobase.com/Solution/demov3N-32.gif)

ここで、「パートナー」役割はタスクデータを表示および編集する権限を持っています。次に、彼らが割り当てられたタスクのみを編集できるように、さらに制御を加えます。

### 6.3 タスクへの「責任者」フィールドの追加

次に、各タスクに責任者を割り当てます。責任者を指定することで、タスクの責任者のみがタスクを変更でき、他の人はそれを表示することしかできません。これを実現するために、**関係フィールド**を使用してタスクコレクションをユーザーコレクションにリンクします。

#### 6.3.1 **「責任者」フィールドの作成**

1. 「**タスクコレクション**」に移動し、「**フィールドを追加**」をクリックして「**関係フィールド**」を選択します。
2. **多対一**の関係を選択します（各タスクには1人の責任者しかいることができないですが、1人のユーザーは複数のタスクを担当できます）。
3. フィールド名を「**責任者（Assignor）**」にします。今のところ、逆関係を選択する必要はありません。

![](https://static-docs.nocobase.com/Solution/202410262307101729955230.png)

#### 6.3.2 **「責任者」フィールドの表示**

次に、「責任者」フィールドがタスク管理ページのコレクションとフォームに表示されることを確認する必要があります。これにより、各タスクに責任者を簡単に割り当てることができます（デフォルトの表示フィールドがIDに設定されている場合は、単にタイトルフィールドを「ニックネーム」に変更して名前を表示してください）。

![](https://static-docs.nocobase.com/Solution/202410262311441729955504.png)

### 6.4 **権限管理を使用してアクセスを制御する**

ここが重要です！NocoBaseの[**権限管理**](https://docs-cn.nocobase.com/handbook/acl)を使用して、 **タスクの責任者と作成者だけが編集できる**という強力な機能を実装します。他のユーザーは表示のみ可能です。これがNocoBaseの柔軟性が真に発揮されるところです。

#### 6.4.1 **簡単な試み — 責任者のみがフォームを編集できる**

私たちは、タスクの責任者のみがそれを編集できることを望んでいます。次の条件を設定します：

- 「パートナー」役割のデータコレクション権限に戻り、タスクコレクションの設定を開き、「編集権限」の「データ範囲」でカスタムルール「責任者が編集可能」を作成します：
  **「責任者/ID」が「現在のユーザー/ID」と等しい場合、編集が許可されます。**;
  これは、タスクの責任者のみがタスクを編集でき、他のユーザーはそれを表示するだけであることを意味します。
- これは、責任者フィールドをユーザーコレクションとして使用し、ログインユーザーもユーザーコレクションにいるため、このルールは最初の要件を完全に満たしています。

追加をクリックして確認します。

![](https://static-docs.nocobase.com/Solution/demov3N-45N.gif)

ページに戻って確認してみましょう：

完璧！「パートナー」役割に切り替えてページを再訪すると、責任者であるタスクのみが編集オプションを表示します。

#### 6.4.2 **作成者に対する条件の追加**

ほとんどのタスクの責任者でない限り、フォームを編集できず、他の同僚もタスクの詳細を表示できない新たな問題に気付くかもしれません。

心配しないでください — 以前に「パートナー」役割に**すべてのデータの表示権限**を割り当てたことを忘れないでください。

- ページ設定に戻り、「表示」を選択して表示操作を追加します。

![](https://static-docs.nocobase.com/Solution/202410270221581729966918.png)

- 編集権限ダイアログと同様に、表示ダイアログを作成し、「詳細」セクションを選択します。

![](https://static-docs.nocobase.com/Solution/202410270224221729967062.png)

![](https://static-docs.nocobase.com/Solution/202410270229421729967382.png)

完了です！

### 6.5 **権限管理を検証する**

異なるユーザーを切り替えてフォームを表示すると、各ユーザーに許可された操作のみが表示されることに気付くでしょう。ユーザーが責任を持っているタスクは編集オプションを表示し、それ以外は表示オプションのみが表示されます。

ルート役割に戻ると、すべての権限が復元されます。これがNocoBaseの強力な権限管理システムです！

次に、タスクの責任を自由に割り当て、チームメンバーを招待し、設定した権限をテストできます。

#### 6.5.1 **新しいユーザーを作成し、役割を割り当てる**

- 新しいユーザーを作成します。例えば、**トム**を作成し、「**パートナー**」役割を割り当てます。

![](https://static-docs.nocobase.com/Solution/202410270239121729967952.png)

![](https://static-docs.nocobase.com/Solution/202410270242581729968178.png)

- タスク管理ページで、いくつかのタスクを**トム**に割り当てます。

#### 6.5.2 **ログインテスト**

トムがシステムにログインして、彼に割り当てられたタスクを表示および編集できるかどうかを確認してください。権限ルールに基づいて、トムは責任を持っているタスクのみを編集でき、他のすべてのタスクは読み取り専用です。

編集フォームの権限がすべてのページで正常に同期されました！

---

### まとめ

おめでとうございます！これで、NocoBaseで役割を作成し、権限を割り当て、自カスタム権限を設定する方法を学び、チームメンバーが自分に割り当てられたタスクのみを編集できるようにしました。これらの手順を通じて、チームコラボレーションのための明確で整理された権限管理システムを確立しました。

### チャレンジタスク

現在、トムは責任を持つタスクを表示および編集できますが、**コメントを残せない**ことに注意してください。トムが自由にコメントし、タスクについて議論できるようにするにはどうすればよいのでしょうか？非常に興味深いチャレンジになります！

**チャレンジヒント：**

役割の権限設定に戻り、「パートナー」役割を調整して、コメント権限を付与しつつ、タスクの他の制限が保持されるように確認してみましょう。

試してみてください！次のセクションで解決策を明かします。

次の章では、「チームメンバーの活動機能」を実装し、もう一つの強力なモジュールである[**ワークフロー**](https://docs-nocobase.com/handbook/workflow)を紹介します。このワークフローを使用すると、データフローを有効にし、さまざまなアクションをトリガーし、ビジネスプロセスを自動化することができます。引き続き探索しましょう！次は[第7章：ワークフロー](https://www.nocobase.com/en/blog/task-tutorial-workflow)でお会いしましょう。

---

さらに探索し、創造力を発揮してください！問題が生じた場合は、[NocoBase公式ドキュメント](https://docs.nocobase.com/)を参照するか、[NocoBaseコミュニティ](https://forum.nocobase.com/)に参加してディスカッションしてください。
