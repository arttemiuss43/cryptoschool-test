<script setup lang="ts">
    import AppLayout from '@/Layouts/AppLayout.vue';
    import LessonList from '@/Components/Lessons/LessonList.vue';
    import { usePage } from "@inertiajs/vue3";
    import type { Lesson } from '@/types/Lesson';

    const lessons = usePage().props.lessons as Lesson[];
</script>

<template>
    <AppLayout title="Featured Video Lessons">
        <LessonList :lessons="lessons" />
    </AppLayout>
</template>
