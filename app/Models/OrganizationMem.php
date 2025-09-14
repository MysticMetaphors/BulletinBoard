<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrganizationMem extends Model
{
    use HasFactory;
    protected $table = 'organization_member';

    protected $fillable = [
        'name',
        'organization_id',
        'role',
        'contact',
        'avatar',
        'bio',
        'description',
        'experience',
    ];
}
