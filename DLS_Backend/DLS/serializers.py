from rest_framework import serializers
from .models import Location, Machine, User, Comment


class MachineSerializer(serializers.HyperlinkedModelSerializer):
    mach_img = serializers.SerializerMethodField()

    class Meta:
        model = Machine
        fields = ('id', 'model', 'make', 'price', 'mach_img')

    def get_mach_img(self, machine):
        return "http://localhost:8000" + machine.mach_img.url


class LocationSerializer(serializers.HyperlinkedModelSerializer):
    machines = serializers.SerializerMethodField()

    class Meta:
        model = Location
        fields = ('id', 'name', 'street', 'city', 'state',
                  'machines', 'loc_img', 'zipcode', 'website')

    def get_machines(self, location):
        # Get the list of machines attached to the location
        machines = location.model.all()

        # Use the MachineSerializer to serialize the list of machines
        serializer = MachineSerializer(machines, many=True)
        return serializer.data


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'uid', 'displayName', 'photoURL', 'content', 'likes')


class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'firstName', 'lastName',
                  'email', 'userID', 'isLoggedIn', 'isAdmin')


# class CarouselSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Comment
#         fields = ('id', 'name', 'car_img1', 'car_img2', 'car_img3',
#                   'car_img4')
