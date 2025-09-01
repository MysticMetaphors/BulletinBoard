<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/Event');
    }

    public function dashboard()
    {
        $events = Event::all();
        return Inertia::render('Dashboard/Event', [
            'event' => $events]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Event/CreateEvent');
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'title' => 'required|string|max:50',
                'content' => 'required|string',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return Inertia::render('Dashboard/Event/CreateEvent', [
                'errors' => $e->errors(),
            ]);
        }

        $validatedData['author'] = 1;

        Event::create($validatedData);
        return Inertia::render('Dashboard/Event/CreateEvent', [
            'flash' => ['success' => true],
        ]);
    }

    public function show($id) {
        $event = Event::findOrFail($id);
        if ($event == null) return dd($event);
        return Inertia::render('EventView', $event);
    }
}
