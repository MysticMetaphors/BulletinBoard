<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Organization;

class OrganizationSeeder extends Seeder
{
    public function run(): void
    {
        Organization::create([
            'title' => 'Tech Innovators Club',
            'advisor' => 'Dr. John Smith',
            'description' => 'A student-led organization focusing on emerging technologies and innovation.',
            'mission' => 'To foster innovation and provide learning opportunities in technology.',
            'vision' => 'To become a hub for future innovators and leaders in the tech industry.',
            'logo' => 'event_1756870408.jpg',
        ]);

        Organization::create([
            'title' => 'Creative Arts Society',
            'advisor' => 'Prof. Jane Doe',
            'description' => 'Promotes artistic expression through various mediums.',
            'mission' => 'To inspire creativity among students.',
            'vision' => 'To cultivate a vibrant art community within the campus.',
            'logo' => 'event_1756870408.jpg',
        ]);
    }
}
