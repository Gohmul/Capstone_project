from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=16, unique=True)
    passwordDigest = models.CharField(max_length=300)
    firstName = models.CharField(max_length=50, unique=False)
    lastName = models.CharField(max_length=50, unique=False)
    email = models.CharField(max_length=50, unique=True)
    userId = models.IntegerField(unique=True)
    isLoggedIn = models.BooleanField(default=False)
    isAdmin = models.BooleanField(default=False)


class Comment(models.Model):
    username = models.CharField(max_length=16, unique=False)
    content = models.TextField()
    likes = models.IntegerField()
    UserID = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='userID'
    )


class Carousel(models.Model):
    name = models.CharField(max_length=100, unique=True, default="Carousel")
    car_img1 = models.ImageField(
        upload_to='carousel', height_field=None, width_field=None, default="null")
    car_img2 = models.ImageField(
        upload_to='carousel', height_field=None, width_field=None, default="null")
    car_img3 = models.ImageField(
        upload_to='carousel', height_field=None, width_field=None, default="null")
    car_img4 = models.ImageField(
        upload_to='carousel', height_field=None, width_field=None, default="null")


class Location(models.Model):
    name = models.CharField(max_length=100, unique=True)
    street = models.CharField(max_length=50, unique=True)
    city = models.CharField(max_length=50, unique=True)
    state = models.CharField(max_length=50, unique=True)
    loc_img = models.ImageField(
        upload_to='locations', height_field=None, width_field=None, default="null")
    zipcode = models.CharField(max_length=5, unique=True)


class Machine(models.Model):
    model = models.CharField(max_length=100, unique=True)
    make = models.CharField(max_length=100, unique=True)
    price = models.DecimalField(max_digits=11, decimal_places=2)
    mach_img = models.ImageField(
        upload_to='machines', height_field=None, width_field=None, default="null")
    LocationID = models.ForeignKey(
        Location, on_delete=models.CASCADE, related_name='locationID'
    )
