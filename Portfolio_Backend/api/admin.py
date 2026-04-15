from django.contrib import admin
from api import models as m1
# Register your models here.

#           Contact Admin
#.............................................................

@admin.register(m1.Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'email','created_at']
    search_fields = ('name', 'created_at',)



#           HomeData Admin
#.............................................................

@admin.register(m1.HomeData)
class HomeDataAdmin(admin.ModelAdmin):
    list_display = ['heading','paragraph']
    search_fields = ('heading',)



#           AboutModel Admin
#.............................................................
@admin.register(m1.AboutModel)
class AboutDataAdmin(admin.ModelAdmin):
    list_display = ['heading','paragraph','image','cv_file']
    search_fields = ('heading',)



#           Contact Info Admin
#.............................................................

@admin.register(m1.ContactInfo)
class ContactInfoAdmin(admin.ModelAdmin):
    list_display = ['email','address']
    search_fields = ('email',)



#            Project Admin
#.............................................................
@admin.register(m1.Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'description', 'link', 'image']
    search_fields = ('title',)




#           Blog  Admin
#.............................................................
@admin.register(m1.Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ['id','title', 'link', 'image','date']
    search_fields = ('title',)


#           Testimonial  Admin
#.............................................................
@admin.register(m1.Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['id','name', 'quote', 'message','designation']
    search_fields = ('name',)



#           InformationSummary  Admin
#.............................................................
@admin.register(m1.InformationSummary)
class InformationSummaryAdmin(admin.ModelAdmin):
    list_display = ['id','experience', 'project_complete', 'happy_clients']
    search_fields = ('experience',)


#           UnderConstruction  Admin
#.............................................................
@admin.register(m1.UnderConstruction)
class UnderConstrutAdmin(admin.ModelAdmin):
    list_display = ('is_under_const','uc_duration')
    search_fields = ('is_under_const',)
