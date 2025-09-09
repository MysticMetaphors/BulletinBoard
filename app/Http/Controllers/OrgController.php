<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use App\Models\OrganizationMem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrgController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'admin'])->except(['index', 'show']);
    }

    public function index()
    {
        $organization = Organization::all();
        return Inertia::render('Dashboard/Organization', ['orgs' => $organization]);
    }

    // public function dashboard()
    // {
    //     $organization = Organization::all();
    //     return Inertia::render('Dashboard/Organization', ['orgs' => $organization]);
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
                'is_foundation' => 'required|boolean'
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
        if ($validatedData['is_foundation'] == true) {
            // $validatedData
        }
        Organization::create($validatedData);
        return Inertia::render('Dashboard/Event/CreateOrg', [
            'flash' => ['success' => true],
        ]);
    }

    public function show($id)
    {
        $organization = Organization::findOrFail($id);
        $org_members = OrganizationMem::where('organization_id', $id)->get();
        if ($org_members->isEmpty()) {
            $org_members = null;
        }
        return Inertia::render('Dashboard/OrgView', [
            'org' => $organization,
            'members' => $org_members,
        ]);
    }
}
