<?php

use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\OrgController;
use App\Http\Controllers\OrgMemberController;
use App\Http\Controllers\Organization\FoundationController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [AnnouncementController::class, 'index'])->name('home');

Route::middleware(['auth', 'admin'])->group(function () {
    // ================= ANNOUNCEMENT =================
    Route::get('announcement/dashboard', [AnnouncementController::class, 'dashboard'])
        ->name('announcement.dashboard');
    Route::post('announcement/update_status/{id}/{stat}', [AnnouncementController::class, 'update_status'])
        ->name('announcement.update_stat');

    // ================= EVENT =================
    Route::post('event/update_status/{id}/{stat}', [EventController::class, 'update_status'])
        ->name('event.update_stat');
    Route::get('event/dashboard', [EventController::class, 'dashboard'])
        ->name('event.dashboard');

    // // ================= ORGANIZATIONS(EVENT) =================
    // Route::get('org/foundation', [OrgController::class, 'foundation'])
    //     ->name('org.foundation');
    // Route::get('org/foundation/{id}', [OrgController::class, 'foundation'])
    //     ->name('org.foundation');

    Route::get('/history', function () {
        return Inertia::render('Dashboard/History');
    })->name('history');
});

Route::resource('announcement', AnnouncementController::class);
Route::resource('user', UserController::class);
Route::resource('event', EventController::class);
Route::resource('org', OrgController::class);
Route::resource('foundation', FoundationController::class);
Route::resource('member', OrgMemberController::class);

// Route::post('/upload-temp-image', [RichTextController::class, 'uploadTemp'])
//     ->name('upload.temp.image');
