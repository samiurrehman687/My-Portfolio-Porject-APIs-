from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api import views as v1
# For Media upload
from django.conf import settings
from django.conf.urls.static import static


# Router Object
router = DefaultRouter()


# Router urls of View 
router.register('contact', v1.ContactView, basename= 'contact')
router.register('homedata', v1.HomeDataView, basename='homedata')
router.register('about', v1.AboutView, basename='about')
router.register('contactinfo', v1.ContactInfoView, basename='contactinfo')
router.register('project', v1.ProjectView , basename='project')
router.register('blog', v1.BlogView, basename='blog')
router.register('testimonial', v1.TestimonialView , basename='testimonial')
router.register('infosummary', v1.InformationSummaryView, basename='infosummary')
router.register("maintenance", v1.UnderConstructionViewSet, basename="maintenance")


#URLs 
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
