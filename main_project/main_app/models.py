from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)  # For storing hashed password
    created_on = models.DateTimeField(auto_now_add=True)  # Automatically set on creation

    def __str__(self):
        return self.email
