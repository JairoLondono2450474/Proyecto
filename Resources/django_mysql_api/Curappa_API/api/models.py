from django.db import models

# Create your models here.

class User(models.Model):
    email = models.EmailField(max_length=60)
    password = models.CharField(max_length=100)
    nick = models.CharField(max_length=30)
    name = models.CharField(max_length=50)