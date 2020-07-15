from django.db import models

class Member(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    phone = models.CharField(max_length=100, blank=True, null=None)
    email = models.EmailField()
    address = models.CharField(max_length=200, blank=True, null=True)
    photo = models.ImageField(upload_to='members_profile', blank=True, null=True)

    def __str__(self):
        return self.name + " " + self.surname