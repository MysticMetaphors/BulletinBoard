<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrgController extends Controller
{
    public function index()
    {
        $organization = Organization::all();
        return Inertia::render('Dashboard/Organization', ['orgs' => $organization]);
    }

    // public function dashboard()
    // {
    //     return Inertia::render('Dashboard/Organization');
    // }

    public function create()
    {
        return Inertia::render('Dashboard/Event/CreateOrg');
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'title' => 'required|string|max:100',
                'description' => 'required|string',
                'advisor' => 'required|string|max:100',
                'mission' => 'required|string',
                'vision' => 'required|string',
                'logo' => 'required|image|max:2048',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return Inertia::render('Dashboard/Event/CreateOrg', [
                'errors' => $e->errors(),
            ]);
        }

        $file = $request->file('logo');
        $fileName = 'event_' . time() . '.' . $file->getClientOriginalExtension();
        $file->storeAs('uploads', $fileName, 'public');

        $validatedData['logo'] = $fileName;
        Organization::create($validatedData);
        return Inertia::render('Dashboard/Event/CreateOrg', [
            'flash' => ['success' => true],
        ]);
    }
}
