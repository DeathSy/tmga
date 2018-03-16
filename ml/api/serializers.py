from rest_framework import serializers
from .models import Bucketlist

class BucketlistSerializer(serializers.ModelSerializer):
  class Meta:
    model = Bucketlist
    fields = ('id', 'name', 'createdAt', 'updatedAt')
    read_only_fields = ('createdAt', 'updatedAt')