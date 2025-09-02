<?php

use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [AnnouncementController::class, 'index'])->name('home');

Route::get('announcement/dashboard', [AnnouncementController::class, 'dashboard'])
    ->name('announcement.dashboard');
Route::get('event/dashboard', [EventController::class, 'dashboard'])
    ->name('event.dashboard');

Route::resource('announcement', AnnouncementController::class);
Route::resource('user', UserController::class);
Route::resource('event', EventController::class);
Route::get('/history', function () {
    return Inertia::render('Dashboard/History');
})->name('history');

Route::get('/testview', function () {
    return Inertia::render('AnnoView');
});

Route::get('/dashboard', function(){
    return Inertia::render('Dashboard/Dashboard');
})->name('dashboard');

Route::get('/announce', function(){
    return Inertia::render('Dashboard/Announcement');
})->name('announce');

Route::get('/ssc', function(){
    return Inertia::render('Dashboard/SSC');
})->name('ssc');

Route::get('/createEvent', function(){
    return Inertia::render('Dashboard/Event/CreateEvent');
})->name('createEvent');


