<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'admin']);
    }

    public function index()
    {
        $users = User::all();
        return Inertia::render('Dashboard/User', [
            'users' => $users
        ]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Event/CreateUser');
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:50',
                'email' => 'required|string',
                'role'   => 'required|in:admin,member',
                'password' => 'required|string|min:8',
                'avatar' => 'required|image'
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return Inertia::render('Dashboard/Event/CreateUser', [
                'errors' => $e->errors(),
            ]);
        }

        $file = $request->file('avatar');
        $fileName = 'avatar_' . time() . '.' . $file->getClientOriginalExtension();
        $file->storeAs('uploads', $fileName, 'public');

        $validatedData['avatar'] = $fileName;
        $validatedData['password'] = Hash::make($validatedData['password']);

        User::create($validatedData);
        return Inertia::render('Dashboard/Event/CreateUser', [
            'flash' => ['success' => true],
        ]);
    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        if ($user == null) return dd($user);
        if ($user->id != Auth::user()->id) {
            abort(403, 'Forbidden');
        }
        return Inertia::render('Dashboard/Profile', ['user' => $user]);
    }

    public function edit($id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('Dashboard/Event/Edit/User', ['user' => $user]);
    }

    public function update(Request $request, User $user)
    {
        try {
            dd($request->all());
            $validatedData = $request->validate([
                'name'     => 'required|string|max:50',
                'email'    => 'required|string',
                'role'     => 'required|in:admin,member',
                'password' => 'nullable|string|min:8',
                'avatar'   => 'nullable|image',
            ]);

            if ($request->hasFile('avatar')) {
                $file = $request->file('avatar');
                $fileName = 'avatar_' . time() . '.' . $file->getClientOriginalExtension();
                $file->storeAs('uploads', $fileName, 'public');

                $validatedData['avatar'] = $fileName;
            } else {
                unset($validatedData['avatar']);
            }

            if (!empty($validatedData['password'])) {
                $validatedData['password'] = Hash::make($validatedData['password']);
            } else {
                unset($validatedData['password']);
            }

            $user->update($validatedData);
            dd($user);
            return redirect()->route('user.index')->setStatusCode(303);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return Inertia::render('Dashboard/Event/Edit/User', [
                'errors' => $e->errors(),
            ]);
        }
    }
}
