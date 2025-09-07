<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'root',
            'email' => 'root@gmail.com',
            'role' => 'admin',
            'avatar' => 'event_1756870408.jpg',
            'password' => bcrypt('12345678')
        ]);

        User::factory()->create([
            'name' => 'member',
            'email' => 'member@gmail.com',
            'role' => 'member',
            'avatar' => 'event_1756870408.jpg',
            'password' => bcrypt('12345678')
        ]);

        $this->call([
            AnnouncementSeeder::class,
            EventSeeder::class,
            OrganizationSeeder::class
        ]);
    }
}
