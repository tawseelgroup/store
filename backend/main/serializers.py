from rest_framework import serializers
from .models import ItemGroup, Item

class groupSerializer(serializers.ModelSerializer):
    class Meta:
        model= ItemGroup
        fields = ['id','gname']
        
        
class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model= Item
        fields = ['id','itemName', 'itemPrice', 'itemGroup', 'itemUnit']