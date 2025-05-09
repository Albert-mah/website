# Глубокое понимание

## Снимок данных при отправке на утверждение

Данные в процессе утверждения следуют принципу неизменности транзакционных данных, и каждый раз при отправке создается снимок данных, который передается по процессу. Процесс выглядит следующим образом:

![Схема процесса снимка данных утверждения](https://static-docs.nocobase.com/62a545a85d9e72c6b47e4b52707c4380.png)

В случае действий "Отзыв" или "Возврат" в рамках одного заявления сохраняются снимки данных для уже выполненных этапов процесса:

![Пример процесса снимков данных утверждения](https://static-docs.nocobase.com/62800d88772c88f1eaa11f6f493aea55.png)

Как показано на рисунке выше, данные, отправленные повторно после отзыва, сохраняются в текущем процессе.

## Статус обработки утверждения

Для инициатора заявки на утверждение существует поле статуса в данных документа, которое указывает текущий статус утверждения. Обычно бывают следующие статусы:

| Статус | Описание |
| --- | --- |
| Черновик | Заявитель только сохранил данные формы заявки временно и еще не отправил её для запуска процесса. |
| Отправлено | Заявка отправлена, ожидает рассмотрения утверждающим лицом. На данный момент результат ещё не обработан ни одним из утверждающих. Если это предусмотрено настройками, заявитель может отозвать заявку. |
| В процессе | Прошел хотя бы один этап утверждения, и хотя бы один утверждающий предоставил результат рассмотрения данного этапа. В этот момент заявитель больше не может отозвать заявку. |
| Возвращено | Заявка была возвращена одним из утверждающих, заявитель может внести изменения и отправить заново. |
| Одобрено | Все этапы утверждения были успешно пройдены, процесс завершен. |
| Отклонено | Заявка была отклонена на одном из этапов утверждения, процесс завершен. |

Для каждого этапа утверждения создаются записи обработки для назначенных утверждающих лиц. В каждой записи обработки содержится поле статуса, указывающее текущий статус обработки утверждающего лица. Обычно бывают следующие статусы:

| Статус | Описание |
| --- | --- |
| Назначено | Запись обработки соответствующего утверждающего лица создана, но из-за настроек правил обработки (последовательная обработка) текущий утверждающий должен ждать завершения обработки предыдущим утверждающим. |
| Ожидает обработки | Ожидает рассмотрения текущим утверждающим лицом. |
| Возвращено | Текущий утверждающий вернул заявку на доработку. |
| Одобрено | Текущий утверждающий утвердил заявку. |
| Отклонено | Текущий утверждающий отклонил заявку. |
| Не обработано | Согласно правилам обработки, установленным для данного этапа, другой утверждающий уже довел процесс до конечного состояния, либо рабочий процесс был отменён, и текущему утверждающему больше не нужно принимать решение. |