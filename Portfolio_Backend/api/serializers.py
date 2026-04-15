from rest_framework import serializers
from api import models as m1



#              Contact Serializer
#.......................................................................
class ContactSerializers(serializers.ModelSerializer):
    class Meta:
        model = m1.Contact
        fields = ['name','email','location','budget','subject','message']



#              HomeData Serializer
#.......................................................................
class HomeDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = m1.HomeData
        fields = '__all__'



#              AboutModel Serializer
#.......................................................................
class AboutModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = m1.AboutModel
        fields = '__all__'



#              ContactInfo Serializer
#.......................................................................
class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = m1.ContactInfo
        fields = '__all__'



#              Project Serializer
#.......................................................................
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = m1.Project
        fields = '__all__'


#              Blog Serializer
#.......................................................................
class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = m1.Blog
        fields = '__all__'


#              Testimonial Serializer
#.......................................................................
class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = m1.Testimonial
        fields = '__all__'



#              InformationSummary Serializer
#.......................................................................
class InformationSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = m1.InformationSummary
        fields = '__all__'


#              UnderConstruction Serializer
#.......................................................................
class UnderConstructionSerializer(serializers.ModelSerializer):
    class Meta:
        model = m1.UnderConstruction
        fields = "__all__"