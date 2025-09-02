<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class AnnouncementSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create();

        $announcements = [];

        for ($i = 0; $i < 10; $i++) {
            $announcements[] = [
                'title' => 'Announcement: Campus Clean-Up Day on September 10, 2025',
                'content' => '<p>Dear Students,</p><p>We are excited to announce a <span style="font-weight: bold;">Campus Clean-Up Day</span> happening on <span style="font-weight: bold;">September 10, 2025, at 8:00 AM</span>. This event aims to promote cleanliness, responsibility, and teamwork among students.</p><p><span style="font-weight: bold;">Details:</span></p><ul><li><p><span style="font-weight: bold;">Date:</span> September 10, 2025</p></li><li><p><span style="font-weight: bold;">Time:</span> 8:00 AM – 12:00 PM</p></li><li><p><span style="font-weight: bold;">Location:</span> Main Quadrangle</p></li><li><p><span style="font-weight: bold;">What to Bring:</span> Gloves, water bottle, and a positive attitude!</p></li></ul><p>Join us as we make our school a cleaner and greener place. <span style="font-weight: bold;">Certificates of participation will be provided.</span></p><p>Thank you for your cooperation!</p><p><span style="font-weight: bold;">– Student Affairs Office</span></p>',
                'author' => $faker->randomElement([1, 2]),
                'status' => $faker->randomElement(['Draft', 'Released', 'Cancelled', 'Deprecated']),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        DB::table('announcement')->insert($announcements);
    }
}
