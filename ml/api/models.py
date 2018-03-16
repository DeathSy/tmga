from django.db import models


class Bucketlist(models.Model):
    name = models.CharField(max_length=255, blank=False, unique=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now_add=True)

def __str__(self):
  return '{}'.format(self.name)