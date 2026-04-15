from django.db import models
from django.core.exceptions import ValidationError
# Create your models here.


#..........................................................................
#                        Contact Model
#..........................................................................
class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    location = models.CharField(max_length=150)
    budget = models.CharField(max_length=50)
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    

#..........................................................................
#                        Homedata Model
#..........................................................................

class HomeData(models.Model):
    heading = models.CharField(max_length=200)
    paragraph = models.TextField()
    image = models.ImageField(upload_to='home/', default='default.jpg')

    def clean(self):
        if HomeData.objects.exists() and not self.pk:
            raise ValidationError("Only one Home record is allowed.")

    def __str__(self):
        return self.heading
    
#..........................................................................
#                        AboutModel Model
#..........................................................................


class AboutModel(models.Model):
    heading = models.CharField(max_length=200)
    paragraph = models.TextField()
    image = models.ImageField(upload_to='about/')
    cv_file = models.FileField(upload_to='cv/')
    linkedin = models.URLField(blank=True, null=True)
    github = models.URLField(blank=True, null=True)

    def clean(self):
        if AboutModel.objects.exists() and not self.pk:
            raise ValidationError("Only one Home record is allowed.")

    def __str__(self):
        return self.heading



#..........................................................................
#                       ContactInfo Model
#..........................................................................

class ContactInfo(models.Model):
    email = models.EmailField()
    address = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=20)
    
    def clean(self):
        if ContactInfo.objects.exists() and not self.pk:
            raise ValidationError("Only one Home record is allowed.")

    
    def __str__(self):
        return self.email
    



#..........................................................................
#                       Project Model
#..........................................................................

class Project(models.Model):
    image = models.ImageField(upload_to='projects/')
    category = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    description = models.TextField()
    link = models.URLField()  

    def __str__(self):
        return self.title
    


#..........................................................................
#                       Blog Model
#..........................................................................

class Blog(models.Model):
    image = models.ImageField(upload_to='blog/')
    date = models.DateField()
    comments = models.PositiveIntegerField(default=0)
    title = models.CharField(max_length=255)
    link = models.CharField(max_length=255)

    def __str__(self):
        return self.title
    



#..........................................................................
#                       Testimonial Model
#..........................................................................

class Testimonial(models.Model):
    message = models.TextField()
    quote = models.TextField()
    name = models.CharField(max_length=100)
    designation = models.CharField(max_length=200)

    def __str__(self):
        return self.name
    
#..........................................................................
#                       InformationSummary Model
#..........................................................................

class InformationSummary(models.Model):
    experience = models.CharField(max_length=100)
    project_complete = models.CharField(max_length=50)
    happy_clients = models.CharField(max_length=1000)

    def clean(self):
        if InformationSummary.objects.exists() and not self.pk:
            raise ValidationError('Only One Record Allow')
        

    def __str__(self):
        return self.experience
    



#..........................................................................
#                       UnderConstruction Model
#..........................................................................

class UnderConstruction(models.Model):
    is_under_const = models.BooleanField(default=False)
    uc_note = models.TextField(blank=True, null=True, help_text='Note for under construction..')
    uc_duration = models.DateTimeField(blank=True, null=True, help_text='End duration for under construction..')
    uc_update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Under Construction : {self.is_under_const}'