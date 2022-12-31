from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics
from .serializers import LocationSerializer, MachineSerializer, CommentSerializer, UserSerializer
from .models import Location, Machine, User, Comment
from django.utils.deprecation import MiddlewareMixin

# Create your views here.


class LocationList(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer


class LocationDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer


class MachineList(viewsets.ModelViewSet):
    queryset = Machine.objects.all()
    serializer_class = MachineSerializer


class MachineDetails(generics.RetrieveUpdateDestroyAPIView):
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


class CommentDetails(generics.RetrieveUpdateDestroyAPIView
                     ):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class CORSMiddleware(MiddlewareMixin):
    def process_response(self, request, response):

        response['Access-Control-Allow-Origin'] = "*"
        return response

# class CarouselList(viewsets.ModelViewSet):
#     queryset = Carousel.objects.all()
#     serializer_class = CarouselSerializer


# class CarouselDetails(viewsets.ModelViewSet):
#     queryset = Carousel.objects.all()
#     serializer_class = CarouselSerializer
