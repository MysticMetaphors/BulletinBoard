<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/dashboard', function(){
    return Inertia::render('Dashboard/Dashboard');
})->name('dashboard');

Route::get('/createAnno', function(){
    return Inertia::render('Dashboard/Event/CreateAnnounce');
})->name('createAnno');

Route::get('/announce', function(){
    return Inertia::render('Dashboard/Announcement');
})->name('announce');

Route::get('/event', function(){
    return Inertia::render('Dashboard/Event');
})->name('event');
