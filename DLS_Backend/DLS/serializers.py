from rest_framework import serializers
from .models import Location, Machine, User, Comment


class MachineSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Machine
        fields = ('id', 'model', 'make', 'price', 'mach_img',
                  )


class LocationSerializer(serializers.HyperlinkedModelSerializer):
    machines = serializers.HyperlinkedRelatedField(
        view_name='machine_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Location
        fields = ('id', 'name', 'street', 'city', 'state',
                  'machines', 'loc_img', 'zipcode')


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
