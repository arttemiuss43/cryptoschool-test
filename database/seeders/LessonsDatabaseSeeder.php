<?php

namespace Database\Seeders;

use App\Models\Lesson;
use Illuminate\Database\Seeder;

class LessonsDatabaseSeeder extends Seeder
{
    public function run() : void
    {
        Lesson::factory(100)->create();
    }
}
