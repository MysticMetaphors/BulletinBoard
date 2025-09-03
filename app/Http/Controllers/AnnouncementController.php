<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnnouncementController extends Controller
{
    public function index()
    {
        $announcements = Announcement::all();
        return Inertia::render('Announcement', ['anno' => $announcements]);
    }

    public function dashboard()
    {
        $announcements = Announcement::all();
        return Inertia::render('Dashboard/Announcement', [
            'anno' => $announcements
        ]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Event/CreateAnnounce');
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'title' => 'required|string|max:100',
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

    public function show($id) {
        $announce = Announcement::findOrFail($id);
        if ($announce == null) return dd($announce);
        return Inertia::render('AnnoView', ['anno' => $announce]);
    }
}
