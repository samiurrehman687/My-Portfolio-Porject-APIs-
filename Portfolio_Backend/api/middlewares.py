from django.http import JsonResponse
from api.models import UnderConstruction


class UnderConstMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):

        uc = UnderConstruction.objects.first()

        if uc and uc.is_under_const:

            # staff bypass
            if request.user.is_authenticated and request.user.is_staff:
                return self.get_response(request)

            # allow API routes (VERY IMPORTANT)
            if request.path.startswith("/api/"):
                return self.get_response(request)

            # block everything else
            return JsonResponse({
                "maintenance": True,
                "message": uc.uc_note
            }, status=503)

        return self.get_response(request)