@php
    $config = [
        'appName' => config('app.name'),
        'baseUrl' => config('app.url'),
        'apiUrl' => config('app.api_url'),
        'locale' => $locale = app()->getLocale(),
        'csrfToken' => csrf_token()
    ];
@endphp

<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full bg-gray-100">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
        <link href="{{ mix('dist/css/app.css') }}" rel="stylesheet">
        
        <title>{{ config('app.name') }}</title>
    </head>
    <body class="h-full">

        <div id="app" class="h-full"></div>

        {{-- Global configuration object --}}
        <script>
            window.config = @json($config);
        </script>
        <script src="{{mix('dist/js/app.js')}}"></script>
        
    </body>
</html>
