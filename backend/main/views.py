from django.shortcuts import render
from .models import ItemGroup, Item
from rest_framework.decorators import api_view
from .serializers import groupSerializer, ItemSerializer
from rest_framework.response import Response
# Create your views here.


@api_view(['GET', 'POST'])
def groups(request):
    if request.method == 'GET':
        groups = ItemGroup.objects.all()
        ser = groupSerializer(groups, many=True)
        return Response(ser.data)
    
    elif request.method == 'POST':
        ser = groupSerializer(data=request.data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=201)
        return Response(ser.errors, status=400)
    
@api_view(['GET', 'POST'])
def items(request):
    if request.method == 'GET':
        items = Item.objects.all().order_by('itemName')
        ser = ItemSerializer(items, many=True)
        return Response(ser.data)
    
    if request.method == 'POST':
        ser = ItemSerializer(data=request.data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=201)
        return Response(ser.errors, status=400)
    

