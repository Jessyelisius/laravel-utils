<?php

use App\Models\UserModel;
use Illuminate\Support\Facades\Route;
use App\Helpers\helperClass;
use Illuminate\Support\Facades\Cache as FacadesCache;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/command', function () {
    // return greetings();
    // return helperClass::greetings();

    $user = UserModel::all();

    FacadesCache::add('users', $user); // it would be "Cache" in laravel 10

    return FacadesCache::get('users');
});
