<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function login()
    {
        return Inertia::render('Auth/Login');
    }

    public function register()
    {
        return Inertia::render('Auth/Register');
    }

    // public function authenticate() {

    // }

    // public function store() {

    // }

    // public function store(Request $request)
    // {
    //     try {
    //         $validatedData = $request->validate([
    //             'title' => 'required|string|max:50',
    //             'content' => 'required|string',
    //         ]);
    //     } catch (\Illuminate\Validation\ValidationException $e) {
    //         return Inertia::render('Auth/Register', [
    //             'errors' => $e->errors(),
    //         ]);
    //     }

    //     $validatedData['author'] = 1;

    //     Event::create($validatedData);
    //     return Inertia::render('Auth/Register', [
    //         'flash' => ['success' => true],
    //     ]);
    // }
}
