from .views import CategoryListAPIView, ProductListAPIView
from django.urls import path, include
    
urlpatterns = [
    path('products/', ProductListAPIView.as_view(), name='product-list'),
    path('categories/', CategoryListAPIView.as_view(), name='category-list'),
]
