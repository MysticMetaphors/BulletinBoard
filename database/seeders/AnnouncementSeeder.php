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
                'title' => $faker->sentence(6),
                'content' => $faker->paragraphs(rand(5, 15), true),
                'author' => $faker->randomElement([1, 2]),
                'status' => $faker->randomElement(['Draft', 'Released', 'Cancelled', 'Deprecated']),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        DB::table('announcement')->insert($announcements);
    }
}
