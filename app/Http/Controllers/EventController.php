<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EventController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth'])->except(['index', 'show']);
    }

    public function index()
    {
        $event = Event::where('status', 'Released')
            ->where('start', '>', now())
            ->get();

        $event_past = Event::where('status', 'Released')
            ->where('start', '<', now())
            ->get();

        return Inertia::render('Event', [
            'event' => $event,
            'event_past' => $event_past
        ]);
    }

    public function dashboard()
    {
        $events = Event::all();
        foreach ($events as $event) {
            $author = User::find($event->author);
            $event->author = $author ? $author->name : null;
        }
        return Inertia::render('Dashboard/Event', [
            'event' => $events
        ]);
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
                'start' => 'required|date',
                'time' => 'required|date_format:H:i',
                'location' => 'required|string',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return Inertia::render('Dashboard/Event/CreateEvent', [
                'errors' => $e->errors(),
            ]);
        }

        $validatedData['author'] = Auth::user()->id;

        Event::create($validatedData);
        return Inertia::render('Dashboard/Event/CreateEvent', [
            'flash' => ['success' => true],
        ]);
    }

    public function show($id)
    {
        $event = Event::findOrFail($id);
        if ($event == null) return dd($event);
        return Inertia::render('EventView', ['event' => $event]);
    }

    public function update_status($id, $set)
    {
        try {
            $item = Event::findOrFail($id);
            $item->status = $set;
            $item->save();
            return redirect()->back()->with(['flash' => ['success' => true],]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return redirect()->back()->withErrors(['errors' => 'Announcement not found']);
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['errors' => 'An unexpected error occurred']);
        }
    }
}
