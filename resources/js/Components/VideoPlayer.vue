<script setup lang="ts">
    import { VideoPlayer } from '@videojs-player/vue';
    import 'video.js/dist/video-js.css';

    defineOptions({
        name: 'VideoPlayer'
    });

    defineProps<{
        src: string
        thumbnail?: string
    }>();

    defineExpose({
        pause: () => player?.pause(),
        play: () => player?.play(),
        currentTime: () => player?.currentTime(),
        seek: (time: number) => player?.currentTime(time),
        player: () => player,
    });

    const emit = defineEmits<{
        (event: 'progress', currentTime: number, duration: number): void
    }>();

    let player: any = null;

    const onReady = (el: any) => {
        player = el.target.player;
    };

    const onTimeUpdate = () => {
        emit('progress', player.currentTime(), player.duration());
    };
</script>

<template>
    <div class="max-w-4xl mx-auto w-full px-4">
        <div class="rounded-xl overflow-hidden shadow-md bg-black aspect-video relative">
            <div class="absolute top-3 left-3 z-10 w-16 h-16" v-if="$slots.logo">
                <slot name="logo"></slot>
            </div>

            <VideoPlayer
                class="video-js vjs-default-skin h-full w-full"
                ref="playerRef"
                :src="src"
                :thumbnail="thumbnail"
                controls
                playsinline
                @ready="onReady"
                @timeupdate="onTimeUpdate"
            />
        </div>
    </div>
</template>
