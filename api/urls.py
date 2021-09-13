from .views import ArticleList, ArticleDetails  #article_list, article_details
from django.urls import path

urlpatterns = [
    path('articles/', ArticleList.as_view()),
    path('articles/<int:id>/', ArticleDetails.as_view()),

    # path('articles/', article_list),
    # path('articles/<int:pk>/', article_details),
]
