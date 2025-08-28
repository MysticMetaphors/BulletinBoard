<?php

use App\Http\Controllers\AnnouncementController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::resource('announcement', AnnouncementController::class);

Route::get('/dashboard', function(){
    return Inertia::render('Dashboard/Dashboard');
})->name('dashboard');

Route::get('/announce', function(){
    return Inertia::render('Dashboard/Announcement');
})->name('announce');

Route::get('/ssc', function(){
    return Inertia::render('Dashboard/SSC');
})->name('ssc');

Route::get('/event', function(){
    return Inertia::render('Dashboard/Event');
})->name('event');

Route::get('/createEvent', function(){
    return Inertia::render('Dashboard/Event/CreateEvent');
})->name('createEvent');


