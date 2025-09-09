<?php

namespace App\Http\Controllers\Organization;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FoundationController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'admin']);
    }

    public function index()
    {
        $organization = Organization::where('org_type', 'foundation')->get();
        return Inertia::render('Dashboard/Foundation/Organization', ['org' => $organization]);
    }

    public function create() {
        return Inertia::render('Dashboard/Event/CreateOrg');
    }
}
