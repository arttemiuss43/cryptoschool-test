<script setup lang="ts">
    import { Link } from '@inertiajs/vue3';
    import type { Lesson } from '@/types/Lesson';
    import { Play } from 'lucide-vue-next';

    defineProps<{
        lesson: Lesson
    }>();
</script>

<template>
    <Link
        :href="route('lessons.show', { lesson: lesson.id })"
        class="w-full sm:w-[48%] md:w-[31%] xl:w-[23%] flex flex-col bg-white rounded-xl shadow hover:shadow-lg transition duration-200 overflow-hidden relative"
    >
        <Play
            class="absolute top-2 left-2 z-10 w-5 h-5 p-1 rounded-full bg-black/60 text-white shadow-md"
        />
        <img
            :src="lesson.preview"
            :alt="lesson.title"
            class="w-full h-40 object-cover"
        />
        <div class="p-4">
            <h2 class="text-xl font-semibold mb-2 truncate">{{ lesson.title }}</h2>
            <p class="text-sm line-clamp-4">{{ lesson.description }}</p>
        </div>
    </Link>
</template>
