import json
import os
import psycopg2

SCHEMA = "t_p72121757_sky_blue_project_1"

CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
}


def get_conn():
    return psycopg2.connect(os.environ["DATABASE_URL"])


def handler(event: dict, context) -> dict:
    """Регистрация и вход пользователей. Действие передаётся в поле action: register / login."""
    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": {**CORS_HEADERS, "Access-Control-Max-Age": "86400"}, "body": ""}

    body = json.loads(event.get("body") or "{}")
    action = body.get("action")
    login = (body.get("login") or "").strip()
    password = (body.get("password") or "").strip()

    if not action or not login or not password:
        return {
            "statusCode": 400,
            "headers": CORS_HEADERS,
            "body": json.dumps({"error": "Заполни все поля"}),
        }

    sl = login.replace("'", "''")
    sp = password.replace("'", "''")

    conn = get_conn()
    cur = conn.cursor()

    if action == "register":
        cur.execute("SELECT id FROM " + SCHEMA + ".users WHERE login = '" + sl + "'")
        if cur.fetchone():
            cur.close()
            conn.close()
            return {
                "statusCode": 409,
                "headers": CORS_HEADERS,
                "body": json.dumps({"error": "Логин уже занят"}),
            }
        cur.execute(
            "INSERT INTO " + SCHEMA + ".users (login, password) VALUES ('" + sl + "', '" + sp + "') RETURNING id"
        )
        user_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()
        return {
            "statusCode": 200,
            "headers": CORS_HEADERS,
            "body": json.dumps({"ok": True, "userId": user_id, "login": login}),
        }

    if action == "login":
        cur.execute(
            "SELECT id FROM " + SCHEMA + ".users WHERE login = '" + sl + "' AND password = '" + sp + "'"
        )
        row = cur.fetchone()
        cur.close()
        conn.close()
        if not row:
            return {
                "statusCode": 401,
                "headers": CORS_HEADERS,
                "body": json.dumps({"error": "Неверный логин или пароль"}),
            }
        return {
            "statusCode": 200,
            "headers": CORS_HEADERS,
            "body": json.dumps({"ok": True, "userId": row[0], "login": login}),
        }

    cur.close()
    conn.close()
    return {
        "statusCode": 400,
        "headers": CORS_HEADERS,
        "body": json.dumps({"error": "Неизвестное действие"}),
    }