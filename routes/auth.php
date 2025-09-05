<?php

use App\Http\Controllers\Partials\LoginController as PartialsLoginController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/login', [PartialsLoginController::class, 'index'])->name('login');
Route::post('/login', [PartialsLoginController::class, 'login'])->name('auth.login');
Route::post('/logout', [PartialsLoginController::class, 'logout'])->name('auth.logout');

Route::get('/register', function () {
    return Inertia::render('Auth/Register');
})->name('register');


