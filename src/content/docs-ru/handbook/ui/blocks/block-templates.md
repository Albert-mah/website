# Шаблоны блоков

<PluginInfo name="ui-schema-storage"></PluginInfo>

## Введение

Шаблон блока позволяет сохранить блок данных определенного типа, чтобы в будущем при добавлении нового блока можно было просто скопировать или использовать этот шаблон. Например, если форма таблицы данных используется как для добавления новых записей, так и для их редактирования, то эту форму можно сохранить как шаблон и затем использовать в интерфейсах для добавления и редактирования данных.

## Как добавлять и использовать шаблоны?

1. Сохраните блок данных как шаблон блока.

![](https://static-docs.nocobase.com/b7718cea8784587d53524ade3c5b0a82.png)

2. При добавлении блока выберите копирование или использование шаблона.

![](https://static-docs.nocobase.com/135df7344e0f3080199e4bb1071c2fa6.png)

## Разница между копированием и использованием шаблона

Копирование создает полностью новый блок на основе шаблона. Изменения в этом новом блоке не повлияют на шаблон.  
Использование шаблона означает прямое применение самого шаблона: любые изменения в блоке также изменят сам шаблон, и все блоки, ссылающиеся на этот шаблон, будут автоматически обновлены.