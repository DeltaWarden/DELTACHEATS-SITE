# DELTACHEATS – Онлайн-магазин на React + Django

DELTACHEATS — это современный онлайн-магазин с API на Django и интерфейсом на React. Проект включает рабочую админку, каталог товаров и полностью адаптивный интерфейс.

---

## Скриншот

![Главная страница](https://storage.yandexcloud.net/fotora.ru/uploads/bea2536ab597e8b4.png)

---

## Стек технологий

- Django (REST API, админка)
- React (TypeScript)
- CSS Modules
- SQLite (по умолчанию)

---

## Возможности

- Каталог товаров с категориями
- Рабочее API для фронтенда
- Адаптивный дизайн (для ПК и мобильных)
- Django Admin для управления товарами и категориями

---

## Установка и запуск

### 1. Клонировать репозиторий
Backend
```bash
git clone https://github.com/DeltaWarden/DELTACHEATS-SITE.git
cd DELTACHEATS-SITE

cd Backend

python -m venv venv
# Linux/macOS
source venv/bin/activate
# Windows
venv\Scripts\activate

pip install -r requirements.txt

cd deltaCheats

python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Django API и админка будут доступны:

API: http://127.0.0.1:8000/api/

Admin: http://127.0.0.1:8000/admin/

---

Frontend
```bash
git clone https://github.com/DeltaWarden/DELTACHEATS-SITE.git
cd DELTACHEATS-SITE

cd Frontend/deltaCheats

npm install

npm run dev
```



