**Важные замечания:**

- `APP_KEY` — это секретный ключ приложения, который используется для генерации пользовательских токенов и других целей (если изменить `APP_KEY`, старые токены станут недействительными). Это может быть любая случайная строка. Измените её на собственную и убедитесь, что она не раскрывается.
- `DB_*` относится к базе данных. Если вы не используете базу данных из примера по умолчанию, измените эти параметры в соответствии с вашей конфигурацией.
- При использовании MySQL (или MariaDB) необходимо настроить переменную окружения `DB_TIMEZONE`, например, `DB_TIMEZONE=+08:00`.
- В рабочей среде установите `APP_ENV=production`.
- При развертывании в подкаталоге необходимо настроить `APP_PUBLIC_PATH`, например, `APP_PUBLIC_PATH=/nocobase/`.