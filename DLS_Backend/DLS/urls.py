from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from django.contrib import admin

urlpatterns = [
    path('fwjyhrthtrhtegegrgerge/', views.LocationList.as_view(
        {'get': 'list'}), name='location_list'),

    path('rgergergsdvsdqderni4wmowqjg/<int:pk>', views.LocationDetails.as_view(
        {'get': 'list'}), name='location-details'),

    path('yjytwdbfmgygjytkyege/', views.MachineList.as_view(
        {'get': 'list'}), name='machine_list'),

    path('thuktthrgbryhtyjgeget/<int:pk>', views.MachineDetails.as_view(
        {'get': 'list'}), name='machine-details'),

    path('hryhryjrwnyfjgter/', views.CommentList.as_view(
        {'get': 'list'}), name='comment_list'),

    path('rfoiujnfwomfwufneglort/<int:pk>', views.CommentDetails.as_view(
        {'get': 'list'}), name='comment-details'),


    path('ngiojnfijniwrfnmoiwrjfnijognre/', views.UserList.as_view(
        {'post': 'list'},
    ), name='user_list'),

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
