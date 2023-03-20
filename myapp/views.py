from django.shortcuts import render
import openai

from django.http import JsonResponse

def index(request):
    return render(request,"myapp/index.html")

API_KEY="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"

def get_explanation(request):
    topic = request.GET.get('topic')

    openai.api_key = API_KEY
    
    response = openai.Completion.create(
        engine='text-davinci-002',
        prompt='Explain ' + topic+'after that add a <br> tag and please provide some website and youtube links with <a href> tag to study this topic and please bold the important lines and words by adding <b> tag',
        temperature=0.7,
        max_tokens=2048,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    explanation = response.choices[0].text.strip()
    return JsonResponse({'explanation': explanation})

def get_answer(request):
    query = request.GET.get('query')

    openai.api_key = API_KEY
    
    response = openai.Completion.create(
        engine='text-davinci-002',
        prompt=query,
        temperature=0.7,
        max_tokens=2048,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    
    explanation = response.choices[0].text
    return JsonResponse({'explanation': explanation})

def tests(request):
    
    return render(request,"myapp/tests.html")


def get_questions(request):
    topic = request.GET.get('topic')

    openai.api_key = API_KEY
    
    response = openai.Completion.create(
        engine='text-davinci-002',
        prompt=topic,
        temperature=0.7,
        max_tokens=2048,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    
    questions = response.choices[0].text
    return JsonResponse({'questions': questions})