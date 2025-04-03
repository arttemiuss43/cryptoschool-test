<?php

namespace App\Repositories;

use App\Models\Lesson;
use Illuminate\Database\Eloquent\Collection;

class LessonsRepository
{
    public function getTrendingLessons(int $limit = 20) : Collection
    {
        return Lesson::latest()->take($limit)->get();
    }
}
