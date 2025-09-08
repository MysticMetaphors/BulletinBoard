<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'admin']);
    }

    public function index()
    {
        $users = User::all();
        return Inertia::render('Dashboard/User', [
            'users' => $users
        ]);
    }

    // public function create()
    // {
    //     return Inertia::render('Dashboard/Event/CreateEvent');
    // }

    // public function store(Request $request)
    // {
    //     try {
    //         $validatedData = $request->validate([
    //             'title' => 'required|string|max:50',
    //             'content' => 'required|string',
    //         ]);
    //     } catch (\Illuminate\Validation\ValidationException $e) {
    //         return Inertia::render('Dashboard/Event/CreateEvent', [
    //             'errors' => $e->errors(),
    //         ]);
    //     }

    //     $validatedData['author'] = 1;

    //     Event::create($validatedData);
    //     return Inertia::render('Dashboard/Event/CreateEvent', [
    //         'flash' => ['success' => true],
    //     ]);
    // }

    public function show($id) {
        $user = User::findOrFail($id);
        if ($user == null) return dd($user);
        return Inertia::render('Dashboard/Profile', ['user' => $user]);
    }
}
