<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use App\Models\OrganizationMem;
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
        // dd($request->all());
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:100',
                'organization_id' => 'required|numeric',
                'role' => 'required|string|max:100',
                'contact' => 'required|string',
                'avatar' => 'required|image|max:2048',
                'description' => 'required|string',
                // 'experience' => 'required|string',
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return Inertia::render('Dashboard/Event/CreateOrgMember', [
                'errors' => $e->errors(),
            ]);
        }

        $file = $request->file('avatar');
        $fileName = 'event_mem' . time() . '.' . $file->getClientOriginalExtension();
        $file->storeAs('uploads', $fileName, 'public');

        $validatedData['avatar'] = $fileName;
        OrganizationMem::create($validatedData);
        $orgId = $request->query('id');
        $organization = Organization::findOrFail($orgId);
        $title = $organization->title;
        return Inertia::render('Dashboard/Event/CreateOrgMember', [
            'flash' => ['success' => true],
            'id' => $orgId,
            'title' => $title
        ]);
    }

    // public function show($id)
    // {
    //     $organization = OrganizationMem::findOrFail($id);
    //     return Inertia::render('Dashboard/OrgView', ['org' => $organization]);
    // }
}
