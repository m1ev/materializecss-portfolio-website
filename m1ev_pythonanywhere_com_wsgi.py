# This file contains the WSGI configuration required to serve up your
# web application at http://<your-username>.pythonanywhere.com/
# It works by setting the variable 'application' to a WSGI handler of some
# description.
#
# The below has been auto-generated for your Flask project

# Setting up environment variables
import os
from dotenv import load_dotenv
project_folder = os.path.expanduser('~/')
load_dotenv(os.path.join(project_folder, '.env'))

# import flask app but need to call it "application" for WSGI to work
import sys

# add your project directory to the sys.path
path = '/home/m1ev/main-directory'
if path not in sys.path:
    sys.path.insert(0, path)

from send import app as application