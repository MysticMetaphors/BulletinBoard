<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnnouncementController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/Announcement');
    }

    public function create()
    {
        return Inertia::render('Dashboard/Event/CreateAnnounce');
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'title' => 'required|string|max:50',
                'content' => 'required|string',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return Inertia::render('Dashboard/Event/CreateAnnounce', [
                'errors' => $e->errors(),
            ]);
        }

        $validatedData['author'] = 1;

        Announcement::create($validatedData);
        return Inertia::render('Dashboard/Event/CreateAnnounce', [
            'flash' => ['success' => true],
        ]);
    }
}
