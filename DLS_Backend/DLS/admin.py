from django.contrib import admin

# Register your models here.
from .models import User, Location, Machine, Comment

admin.site.register(User)
admin.site.register(Location)
admin.site.register(Machine)
admin.site.register(Comment)
