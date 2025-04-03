<script setup lang="ts">
    import AppLayout from '@/Layouts/AppLayout.vue';
    import { usePage } from "@inertiajs/vue3";
    import type { Lesson } from '@/Types/Lesson.ts';
    import VideoPlayer from '@/components/VideoPlayer.vue';
    import Modal from '@/Components/Modal.vue';
    import Logo from "@/Components/Logo.vue";
    import { ref } from 'vue';
    import type { Ref } from 'vue';

    const player: Ref<InstanceType<typeof VideoPlayer> | null> = ref(null);
    const ctaModal: Ref<InstanceType<typeof Modal> | null> = ref(null);

    const lesson = usePage().props.lesson as Lesson;

    let modalWasShown: boolean = false;

    const handleProgress = (currentTime: number, duration: number) => {
        if (!modalWasShown && duration - currentTime < 10) {
            ctaModal.value.open();
            player.value.pause();
            modalWasShown = true;
        }
    }

    const onPopupClose = () => {
        player.value.play();
    };
</script>

<template>
    <AppLayout :title="lesson.title">
        <VideoPlayer
            :src="lesson.video"
            :thumbnail="lesson.preview"
            ref="player"
            class="mb-5"
            @progress="handleProgress"
        >
            <template #logo>
                <Logo />
            </template>
        </VideoPlayer>

        <p class="px-5" v-text="lesson.description"></p>

        <Modal ref="ctaModal" @close="onPopupClose">
            <template #title>
                Rate the video
            </template>

            <template #content>
                Did you like the video so far?
            </template>

            <template #action>
                Rate
            </template>
        </Modal>
    </AppLayout>
</template>
