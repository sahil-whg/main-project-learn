from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@api_view(['GET'])
def home(request):
    return Response({"message": "Hello, world! yay integrated frontend angular!!"})


@csrf_exempt  # Disable CSRF for development (not recommended for production)
def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')
        # Perform signup logic here, such as saving to the database

        # Return a JSON response
        return JsonResponse({'message': 'Signup successful!', 'name': name, 'email': email})
    return JsonResponse({'error': 'Invalid request'}, status=400)