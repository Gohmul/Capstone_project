from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics

from .serializers import LocationSerializer, MachineSerializer, CommentSerializer, UserSerializer
from .models import Location, Machine, User, Comment
# Create your views here.


class LocationList(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer


class LocationDetails(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer


class MachineList(viewsets.ModelViewSet):
    queryset = Machine.objects.all()
    serializer_class = MachineSerializer


class MachineDetails(viewsets.ModelViewSet):
    queryset = Machine.objects.all()
    serializer_class = MachineSerializer


class UserList(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetails(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class CommentDetails(viewsets.ModelViewSet
                     ):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


# class CarouselList(viewsets.ModelViewSet):
#     queryset = Carousel.objects.all()
#     serializer_class = CarouselSerializer


# class CarouselDetails(viewsets.ModelViewSet):
#     queryset = Carousel.objects.all()
#     serializer_class = CarouselSerializer
