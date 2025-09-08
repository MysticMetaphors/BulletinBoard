<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AnnouncementController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'admin'])->except(['index', 'show']);
    }

    public function index()
    {
        $announcements = Announcement::where('status', 'Released')->get();
        foreach ($announcements as $announcement) {
            $author = User::find($announcement->author);
            $announcement->author = $author ? $author->name : null;
        }
        return Inertia::render('Announcement', ['anno' => $announcements]);
    }

    public function dashboard()
    {
        $announcements = Announcement::all();
        foreach ($announcements as $announcement) {
            $author = User::find($announcement->author);
            $announcement->author = $author ? $author->name : null;
        }
        return Inertia::render('Dashboard/Announcement', [
            'anno' => $announcements,
            'user' => Auth::user()
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

    public function show($id)
    {
        $announce = Announcement::findOrFail($id);
        if ($announce == null) return dd($announce);
        return Inertia::render('AnnoView', ['anno' => $announce]);
    }

    public function update_status($id)
    {
        try {
            $item = Announcement::findOrFail($id);
            $item->status = $item->status === 'Released' ? 'Draft' : 'Released';
            $item->save();
            return redirect()->back()->with(['flash' => ['success' => true]]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return redirect()->back()->withErrors(['errors' => 'Announcement not found']);
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['errors' => 'An unexpected error occurred']);
        }
    }
}
