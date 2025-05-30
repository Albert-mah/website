## Sambrukについて

**スウェーデンの自治体の半数がSambrukのメンバーであり、スウェーデン住民の61％がSambrukの協力に参加している自治体地域に住んでいます。**

![Sambruk.png](https://static-docs.nocobase.com/bdb18ec7f179a4df9ec97f67b5bcf44d.png)

Sambrukはスウェーデンに本拠を置く非営利組織で、全国の自治体部門のデジタル変革を推進し支援することに専念しています。その主な使命は、協働と資源の共有を通じて、スウェーデンの自治体がより効率的にデジタル化を進める手助けをすることです。

Sambrukの作業範囲には、スウェーデンのさまざまな自治体が開発したデジタルソリューションを収集し管理した後、それを必要とする他の都市に展開し、共同資金調達を通じてシステムを維持・改善することが含まれます。さらに、Sambrukは新しいデジタルソリューションの開発を組織し、主導します。時には、Sambrukもこれらのデジタルソリューションのいくつかをオープンソースにします。

たとえば、[Bibblix](https://sambruk.se/bibblix-barnbiblioteksapp/)は、スウェーデンの6歳から12歳の子供向けに設計されたデジタル図書館アプリです。[EGIL](https://sambruk.se/egil-dnp/)は、学校の生徒のデジタルアカウントを管理するための自動化システムです。そして、[Tillarbetslivet](https://sambruk.se/prao/)は、生徒の職業体験プログラムを管理するシステムです。

**これらのプロジェクトはすべてSambrukが開発または推進しています。**

## デジタル学習リソースがGDPRに準拠していることを確保する方法

現在の教育において、学校は電子書籍、オンラインコース、教育ソフトウェア、指導ビデオ、インタラクティブ教材などのデジタル学習リソースに大きく依存しています。これらのデータリソースは、学生のデータを保護するためにGDPR（一般データ保護規則）の要件を遵守する必要があります。

### GDPRについて

GDPRは、2018年5月に欧州連合によって施行された重要なプライバシーおよびセキュリティ規制で、EU住民の個人データを処理するすべての組織に適用されます。

教育分野において、GDPRは次のような特有の課題をもたらしました。

1. **データ最小化原則**：学校は必要な学生データのみを収集・処理でき、各デジタル学習リソースに対して厳格なデータ収集の見直しが求められます。
2. **知情同意**：学校は、デジタル学習リソースを使用する際に学生またはその保護者から明示的な許可を得る必要があります。
3. **データ主体の権利**：学生は自分のデータにアクセスし、修正し、削除する権利を有しており、学校は使用するデジタル学習リソースがこれらの機能をサポートしていることを確認しなければなりません。
4. **データ保護影響評価**：学校は高リスクのデータ処理活動に対してデータ保護影響評価を実施する必要があります。
5. **ベンダー管理**：学校は、すべてのデジタル学習リソースの供給者がGDPRに準拠していることを確認する必要があります。

### プロジェクトTjänstekatalogについて

![42ac799bf25a73683ea530ea868bc87a.png](https://static-docs.nocobase.com/42ac799bf25a73683ea530ea868bc87a.png)

プロジェクト[Tjänstekatalog](https://sambruk.se/tjanstekollen/)は、デジタル学習リソースのGDPR準拠性を評価するためのデータを収集することを目的としていました。Sambrukは、27のスウェーデンの自治体とともに2023年にこのプロジェクトを開始しました。

プロジェクトには特に次の3つの主要な目標がありました。

1. **情報収集とコンプライアンス評価**：システムはデジタル学習リソースに関する情報を収集し、学校の管理者がGDPR準拠性を評価するのを支援します。
2. **リソースの共有と意思決定支援**：学校の管理者は、他のユーザーが参照できるようにシステム内で評価結果を共有でき、重複作業を削減して効率を向上させます。
3. **サプライヤー情報の問い合わせ**：サプライヤーは、約100の質問に回答し、学校が評価するために必要な情報を提供するよう求められました。

しかし、プロジェクトを実施する中で、技術的な障害に直面しました。

1. **大量のデータと高い複雑性**：大量のデジタル学習リソースを管理するには、効率的な管理と評価が必要です。
2. **厳格な準拠ルール**：すべてのリソースがGDPRに厳密に準拠し、特に学生データの取り扱いについて確認する必要があります。
3. **多様な利害関係者が関与**：複数の自治体や学校の調整が必要で、システム設計と実施がすべての関係者のニーズに応えるようにする必要があります。

Sambrukは、これらの課題に対処するための技術ソリューションを求め、プロジェクト要件を満たし、高コストパフォーマンスでスケーラブルなソリューションを見つける必要がありました。

## NocoBaseを使った迅速なMVP

Sambrukは、従来のコーディング手法を使用して、ソリューションを開発するために必要なコストと時間を最初に評価しました。**プロジェクトチームは、コストが高すぎると結論しました**。したがって、Sambrukは他の選択肢を探し始めました。チームはインドの低コードプラットフォーム会社と提携しましたが、プラットフォームは完全にはニーズを満たすことができませんでした。

2023年、チームはNocoBaseについて耳にし、試してみることにしました。

> 「私たちは、プラットフォームを学びながら、数週間でソリューションの核を開発しました。NocoBaseは非常に直感的で学びやすいことがわかりました。私たちはこのプラットフォームの「無駄のない」アプローチを本当に評価しています。非常に迅速にMVPを構築し、その基盤から開発を続けています。」
>
> —— トーマス・ヴェンナーシュテン、Sambruk CTO

トーマス・ヴェンナーシュテンは、試行後にNocoBaseを選択した理由について説明しました。

1. **データモデル主導**：NocoBaseのデータモデルを先に確立することへの焦点は、Sambrukにとって後続の開発をスムーズにし、異なる役割のニーズに合わせたさまざまなインターフェースを簡単に作成できるようにしました。
2. **セルフホスティング**：Sambrukは、NocoBaseを使用して開発したアプリケーションをホストできます。セルフホスティングは、データ制御を強化し、データセキュリティとプライバシー保護のニーズを満たすために、重要なプロジェクト要件です。
3. **ユーザーフレンドリー**：NocoBaseは、機能を犠牲にせずに使いやすい体験を提供し、CRUDアプリケーションを開発するチームにとって理想的なプラットフォームです。
4. **迅速な配信**：NocoBaseを使用することで、Sambrukは迅速に最小限の実用的な製品（MVP）を開発・発表し、プロジェクトの迅速なバリデーションと反復が可能です。

**プロジェクトTjänstekatalogのシステムスクリーンショット：**

![Tjänstekatalog 1.PNG](https://static-docs.nocobase.com/c06f5fab82d96a323a4658f44783539e.PNG)

![Tjänstekatalog 2.PNG](https://static-docs.nocobase.com/95d25163c09d69777c033361a2ea078f.PNG)

![Tjänstekatalog 3.PNG](https://static-docs.nocobase.com/37e042f7635cc0100a0f93dd3965655b.PNG)

## 結果：試行段階からの即時の利点

> 「NocoBaseの無コードプラットフォームを使用しての経験は素晴らしいものでした。信じられないほどユーザーフレンドリーで、私たちの開発プロセスはスムーズで効率的です。この効率化されたアプローチにより、数週間で数百の組織で使用できる完全なシステムを開発できました。
>
> NocoBaseは、高機能なシステムが完成までに数ヶ月または数年かかるという誤解を払拭しています。私は、品質を犠牲にすることなく迅速な開発サイクルを求める任意の組織に強く推薦します。」
>
> —— トーマス・ヴェンナーシュテン、Sambruk CTO

NocoBaseに基づくプロジェクトの開発は順調に進んでおり、プロジェクトのコア機能は成功裏にライブ運用されています。プロジェクトチームは、NocoBaseの機能を効率的に活用し、数週間でMVPを開発・発表しました。このプロセスの中で、Sambrukチームは従来の方法と比較して**開発時間を約30％、予算をほぼ40％削減しました**。

自治体と学校は、NocoBaseの使いやすさと柔軟性を高く評価しています。彼らはデータ処理やインターフェース生成の容易さを評価し、迅速なアプリケーション開発を可能にしています。一部の学校は、特にデータ管理や意思決定支援の分野で、試行段階においてNocoBaseの便益を享受しています。

我々は、プロジェクトが今後数ヶ月で完全に展開されて広く展開されることを期待しています。プロジェクトが進むにつれて、Sambrukチームはすべての関係者のニーズにより良く応えるために、プラグインでNocoBaseの機能を引き続き改善・拡張していくでしょう。

**関連読み物：**

* [Excel 管理からの脱却――Classmethod が NocoBase で実現した従業員情報管理システムの進化](https://www.nocobase.com/ja/blog/classmethod)
* [ノーコードでここまでできる！家具工場のERP構築ストーリー](https://www.nocobase.com/ja/blog/olmon)
* [奥雅の新たなデジタル化版図：NocoBase を用いて精緻化管理の新たな可能性を探求する](https://www.nocobase.com/ja/blog/l-a)
* [オープンソースで実現する、アニメマスク製造のスケール化](https://www.nocobase.com/ja/blog/kigland)
* [400名超の弁護士事務所、NocoBaseで報酬管理を最適化](https://www.nocobase.com/ja/blog/how-400-lawyer-firm-streamlines-commission-management-with-nocobase)
* [NocoBaseで迅速開発！建設業DXの成功事例](https://www.nocobase.com/ja/blog/rapid-development-with-nocobase)
* [ローコードでスマート製造を加速！蘭之天が選んだのは NocoBase](https://www.nocobase.com/ja/blog/Orchisky)
