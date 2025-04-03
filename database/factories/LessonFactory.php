<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class LessonFactory extends Factory
{
    protected array $videos = ['lighthouse', 'tree', 'wind-station'];

    protected static int $nextVideo = 0;

    public function definition(): array
    {
        $video = $this->videos[self::$nextVideo];
        self::$nextVideo = self::$nextVideo >= count($this->videos) - 1 ? 0 : self::$nextVideo + 1;

        return [
            'title' => ucfirst(implode(' ', fake()->words(rand(2, 4)))),
            'description' => fake()->realText(rand(500, 1000)),
            'video' => "/videos/$video.mp4",
            'preview' => "/images/$video.jpeg",
        ];
    }
}
