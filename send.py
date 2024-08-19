from flask import Flask, request, render_template
from email.message import EmailMessage
import ssl, smtplib
import os

# Flask constructor
app = Flask(__name__)

# A decorator used to tell the application
# which URL is associated function
@app.route('/', methods =["GET", "POST"])
def get_data():
    if request.method == "POST":
        # getting the data from the POST request
        sender_name = request.form.get("name")
        sender_email = request.form.get("email")
        sender_message = request.form.get("message")

        email_sender = os.getenv("EMAIL_SENDER")
        email_password = os.getenv("EMAIL_PASSWORD")
        email_receiver = os.getenv("EMAIL_RECEIVER")

        subject = 'Новое письмо от посетителя "' + str(sender_name) + '" (' + str(sender_email) + ') с моего сайта-резюме!'
        body = sender_message

        em = EmailMessage()
        em['From'] = email_sender
        em['To'] = email_receiver
        em['Subject'] = subject
        em.set_content(body)

        context = ssl.create_default_context()

        with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
            smtp.login(email_sender, email_password)
            smtp.sendmail(email_sender, email_receiver, em.as_string())

    return render_template("index.html")

if __name__=='__main__':
   app.run()

