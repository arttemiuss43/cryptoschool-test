<script setup lang="ts">
    import type {Lesson} from '@/types/Lesson';
    import LessonCard from './LessonCard.vue';

    defineProps<{
        lessons: Lesson[]
    }>();
</script>

<template>
    <div class="flex flex-wrap gap-4 justify-center">
        <LessonCard
            v-for="lesson in lessons"
            :key="lesson.id"
            :lesson="lesson"
        />
        <div v-if="!lessons.length" class="w-full mt-2 px-5 py-4 rounded bg-blue-900 text-white shadow-lg">
            There is nothing yet to learn. Check back later!
        </div>
    </div>
</template>
