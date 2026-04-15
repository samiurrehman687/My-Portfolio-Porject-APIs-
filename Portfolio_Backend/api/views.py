from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
# Import From app
from api import models as m1
from api import serializers as s1


from django.utils.decorators import method_decorator
from django.core.cache import cache
from django.views.decorators.cache import cache_page
# Create your views here.
#..............................................................................
#                   Contact API Endpoint
#..............................................................................
class ContactView(ModelViewSet):
    queryset = m1.Contact.objects.all()
    serializer_class = s1.ContactSerializers

#..............................................................................
#                      Home Data API Endpoint
#..............................................................................
class HomeDataView(ModelViewSet):

    def list(self, request):
        data = cache.get('home_data')
        if data:
            return Response(data)

        home = m1.HomeData.objects.first()
        serializer = s1.HomeDataSerializer(home)
        data = serializer.data
        cache.set('home_data', data, 60 * 5)
        return Response(data)

#...........................................................................
#                               About API Endpoint
#...........................................................................

class AboutView(ModelViewSet):
    
    def list(self , request):
        data = cache.get('about_data')
        if data:
            return Response(data)
        about = m1.AboutModel.objects.first()
        serializer = s1.AboutModelSerializer(about)
        data = serializer.data
        cache.set('about_data', data , 60 * 5)
        return Response(data)


#...........................................................................
#                               ContactInfo API Endpoint
#...........................................................................

class ContactInfoView(ModelViewSet):

    def list(self, request):
        data = cache.get('contactinfo_data')
        if data:
            return Response(data)
        contact = m1.ContactInfo.objects.first()
        serializer = s1.ContactInfoSerializer(contact)
        data = serializer.data
        cache.set('contactinfo_data', data, 60 * 5)
        return Response(data)



#...........................................................................
#                               Projectview API Endpoint
#...........................................................................
class ProjectView(ModelViewSet):
    queryset = m1.Project.objects.all().order_by('-id')
    serializer_class = s1.ProjectSerializer

    @method_decorator(cache_page(60 * 5))
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)




#...........................................................................
#                               BlogView API Endpoint
#...........................................................................
class BlogView(ModelViewSet):
    queryset = m1.Blog.objects.all().order_by('-id')
    serializer_class = s1.BlogSerializer

    @method_decorator(cache_page(60 * 5))
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)



#...........................................................................
#                               Testimonial API Endpoint
#...........................................................................
class TestimonialView(ModelViewSet):
    queryset = m1.Testimonial.objects.all().order_by('-id')
    serializer_class = s1.TestimonialSerializer

    @method_decorator(cache_page(60 * 5))
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)



#...........................................................................
#                               InformationSummary API Endpoint
#...........................................................................
class InformationSummaryView(ModelViewSet):

    def list(self, request):
        information = m1.InformationSummary.objects.first()
        serializer = s1.InformationSummarySerializer(information)
        return Response(serializer.data)






#...........................................................................
#                               Underconstuction  API Endpoint
#...........................................................................
class UnderConstructionViewSet(ModelViewSet):
    queryset = m1.UnderConstruction.objects.all()
    serializer_class = s1.UnderConstructionSerializer

    def list(self, request):
        uc = m1.UnderConstruction.objects.first()

        return Response({
            "maintenance": uc.is_under_const if uc else False
        })



