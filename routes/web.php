<?php

use App\Http\Controllers\LessonsController;
use Illuminate\Support\Facades\Route;

Route::get('/', [LessonsController::class, 'index'])->name('lessons.index');
Route::get('/lessons/{lesson}', [LessonsController::class, 'show'])->name('lessons.show');
