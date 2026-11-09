import requests
from django.conf import settings


def send_brevo_email(to_email, subject, message):

    url = "https://api.brevo.com/v3/smtp/email"

    headers = {
        "accept": "application/json",
        "api-key": settings.BREVO_API_KEY,
        "content-type": "application/json"
    }

    data = {
        "sender": {
            "name": "SamiNuxIT",
            "email": settings.BREVO_SENDER_EMAIL
        },
        "to": [
            {
                "email": to_email
            }
        ],
        "subject": subject,
        "textContent": message
    }

    response = requests.post(
        url,
        headers=headers,
        json=data,
        timeout=20
    )

    response.raise_for_status()

    return response.json()