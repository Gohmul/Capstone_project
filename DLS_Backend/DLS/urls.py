from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from rest_framework import generics
from django.contrib import admin
import os
from dotenv import load_dotenv
load_dotenv()

locationList = os.getenv('LOCATIONS')
locationDetails = os.getenv('LOCATION_DETAILS')
machineList = os.getenv('MACHINE_LIST')
machineDetails = os.getenv('MACHINE_DETAILS')
commentList = os.getenv('COMMENT_LIST')
CommentDetails = os.getenv('COMMENT_DETAILS')

urlpatterns = [
    path(f"{locationList}", views.LocationList.as_view(
        {'get': 'list'}), name='location_list'),

    path(f'{locationDetails}/<int:pk>', views.LocationDetails.as_view(
        {'get': 'list'}), name='location-details'),

    path(f'{machineList}/', views.MachineList.as_view(
        {'get': 'list'}), name='machine_list'),

    path(f'{machineDetails}/<int:pk>', views.MachineDetails.as_view(
        {'get': 'list'}), name='machine-details'),


    path(f'{commentList}/', views.CommentList.as_view(
    ), name='comment_list'),



    path(f'{CommentDetails}/<int:pk>', views.CommentDetails.as_view(
    ), name='comment-details'),

    path('ngiojnfijniwrfnmdfdsfdsoiwrjfnijognre/', views.UserList.as_view(
        {'get': 'list'},
    ), name='user_list'),

    path('ewriufmwodqwoihngreiwmowef/<int:pk>', views.UserDetails.as_view(
        {'get': 'list'}), name='user-details'),

    # path('carousels/', views.MachineList.as_view(
    #     {'get': 'list'}), name='user_list'),

    # path('carousel/<int:pk>', views.MachineDetails.as_view(
    #     {'get': 'list'}), name='user-details'),
]
