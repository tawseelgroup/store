from django.contrib import admin
from .models import ItemGroup, Item

# Register your models here.

admin.site.register(ItemGroup)


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ['id', 'itemName', 'itemPrice', 'itemGroup', 'itemUnit']

