<?php

namespace App\Http\Controllers;

use App\Models\Lesson;
use App\Repositories\LessonsRepository;
use Inertia\Inertia;
use Inertia\Response;

class LessonsController extends Controller
{
    public function index(LessonsRepository $lessonsRepository) : Response
    {
        return Inertia::render('Lessons/Index', [
            'lessons' => $lessonsRepository->getTrendingLessons(),
        ]);
    }

    public function show(Lesson $lesson) : Response
    {
        return Inertia::render('Lessons/Details', [
            'lesson' => $lesson,
        ]);
    }
}
