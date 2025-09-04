<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrgMemberController extends Controller
{
    // public function index()
    // {
    //     $organization = Organization::all();
    //     return Inertia::render('Dashboard/Organization', ['orgs' => $organization]);
    // }

    // public function dashboard()
    // {
    //     $organization = Organization::all();
    //     return Inertia::render('Dashboard/Organization', ['orgs' => $organization]);
    // }

    public function create(Request $request)
    {
        $orgId = $request->query('id');
        $organization = Organization::findOrFail($orgId);
        $title = $organization->title;
        return Inertia::render('Dashboard/Event/CreateOrgMember', ['id' => $orgId, 'title' => $title]);
    }

    public function store(Request $request)
    {
        dd($request->all());
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:100',
                'organization_id' => 'required|string',
                'role' => 'required|string|max:100',
                'contact' => 'required|string',
                'avatar' => 'required|image|max:2048',
                'bio' => 'required|string',
                'experience' => 'required|string',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return Inertia::render('Dashboard/Event/CreateOrgMember', [
                'errors' => $e->errors(),
            ]);
        }

        $file = $request->file('logo');
        $fileName = 'event_' . time() . '.' . $file->getClientOriginalExtension();
        $file->storeAs('uploads', $fileName, 'public');

        $validatedData['logo'] = $fileName;
        Organization::create($validatedData);
        return Inertia::render('Dashboard/Event/CreateOrgMember', [
            'flash' => ['success' => true],
        ]);
    }

    public function show($id)
    {
        $organization = Organization::findOrFail($id);
        return Inertia::render('Dashboard/OrgView', ['org' => $organization]);
    }
}
