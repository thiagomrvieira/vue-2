<?php

use App\Http\Controllers\ProjectsController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('skills', function () {
    return ['Laravel', 'vue', 'PHP', 'JavaScript', 'Tooling'];
});

Route::get('/projects/create', [ProjectsController::class, 'create']);
Route::get('/projects', [ProjectsController::class, 'index']);
Route::post('/projects', [ProjectsController::class, 'store']);