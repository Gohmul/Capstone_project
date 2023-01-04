from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=16, unique=True)
    password = models.CharField(max_length=300)
    firstName = models.CharField(max_length=50, unique=False)
    lastName = models.CharField(max_length=50, unique=False)
    email = models.CharField(max_length=50, unique=True)
    userId = models.IntegerField(unique=True)
    isLoggedIn = models.BooleanField(default=False)
    isAdmin = models.BooleanField(default=False)

    def __str__(self):
        return self.username


class Comment(models.Model):
    uid = models.CharField(max_length=500, unique=False,
                           default="please find user id")
    displayName = models.CharField(
        max_length=500, unique=False, default="default")
    photoURL = models.CharField(
        max_length=500, unique=False, default="default")
    content = models.TextField()
    likes = models.IntegerField(default=0)

    def __str__(self):
        return self.id


# class Carousel(models.Model):
#     name = models.CharField(max_length=100, unique=True, default="Carousel")
#     car_img1 = models.ImageField(
#         upload_to='carousel', height_field=None, width_field=None, default="null")
#     car_img2 = models.ImageField(
#         upload_to='carousel', height_field=None, width_field=None, default="null")
#     car_img3 = models.ImageField(
#         upload_to='carousel', height_field=None, width_field=None, default="null")
#     car_img4 = models.ImageField(
#         upload_to='carousel', height_field=None, width_field=None, default="null")

#     def __str__(self):
#         return self.name


class Location(models.Model):
    name = models.CharField(max_length=100, unique=True)
    street = models.CharField(max_length=50, unique=True)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50, unique=True)
    loc_img = models.ImageField(
        upload_to='locations', height_field=None, width_field=None, default="null")
    zipcode = models.CharField(max_length=6)
    website = models.CharField(max_length=200, default="_blank")

    def __str__(self):
        return self.name


class Machine(models.Model):
    model = models.CharField(max_length=100, unique=False)
    make = models.CharField(max_length=100, unique=False)
    price = models.DecimalField(max_digits=11, decimal_places=2)
    mach_img = models.ImageField(
        upload_to='machines', height_field=None, width_field=None, default="null")
    LocationName = models.ForeignKey(
        Location, on_delete=models.CASCADE, related_name='model', default=0
    )

    def __str__(self):
        return self.model
