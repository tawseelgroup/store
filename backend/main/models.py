from django.db import models

# Create your models here.

class ItemGroup(models.Model):
    gname = models.CharField(max_length=40)
    

    class Meta:
        verbose_name = ("ItemGroup")
        verbose_name_plural = ("ItemGroups")

    def __str__(self):
        return self.gname
    
    
class Item(models.Model):
    UNIT = [
        ('kg', 'kilogram'),
        ('lt', 'ltre'),
        ('lt', 'liter'),
        ('bx', 'box'),
        ('tk', 'tank'),
    ]
    itemName = models.CharField(max_length=40)
    itemPrice = models.DecimalField(max_digits=10, decimal_places=2)
    itemGroup = models.ForeignKey(ItemGroup, on_delete=models.SET_NULL, null=True, blank=True)
    itemUnit = models.CharField(max_length=2, choices=UNIT)
    
    def __str__(self):
        return self.itemName
        




