from .views import ArticleViewSet, UserViewSet #ArticleList, ArticleDetails  article_list, article_details
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='articles')
router.register('users', UserViewSet)

urlpatterns = [
    path('api/', include(router.urls)),

    #path('articles/', ArticleList.as_view()),
    #path('articles/<int:id>/', ArticleDetails.as_view()),

    # path('articles/', article_list),
    # path('articles/<int:pk>/', article_details),
]
