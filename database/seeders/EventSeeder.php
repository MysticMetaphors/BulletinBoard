<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class EventSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create();
        $events = [];

        for ($i = 0; $i < 10; $i++) {
            $startDate = $faker->dateTimeBetween('now', '+1 month');
            $events[] = [
                'title' => $faker->sentence(4),
                'content' => $faker->paragraphs(rand(3, 10), true),
                'author' => $faker->randomElement([1, 2]),
                'start' => $startDate,
                'end' => (clone $startDate)->modify('+2 hours'),
                'status' => $faker->randomElement(['Draft', 'Released', 'Cancelled', 'Deprecated']),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        DB::table('event')->insert($events);
    }
}
