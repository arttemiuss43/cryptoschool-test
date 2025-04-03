<script setup lang="ts">
    import { ref } from 'vue';
    import type { Ref } from 'vue';

    defineProps<{
        title?: string
        message?: string
    }>();

    const emit = defineEmits<{
        (event: 'close'): void
        (event: 'action'): void
    }>();

    const show: Ref<boolean> = ref(false);

    const open = () => {
        show.value = true;
    };

    const close = () => {
        show.value = false;
    };

    const cancel = () => {
        close();
        emit('close');
    };

    defineExpose({ open, close });
</script>

<template>
    <transition name="fade">
        <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4" v-if="show" @click.self="cancel">
            <div class="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 text-center animate-fade-in-up">
                <h2 class="text-xl font-bold text-gray-800 mb-2">
                    <slot name="title"></slot>
                </h2>
                <p class="text-gray-600 mb-4">
                    <slot name="content"></slot>
                </p>
                <div class="flex justify-center gap-4">
                    <button
                        @click="emit('action')"
                        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        <slot name="action">Continue</slot>
                    </button>
                    <button
                        @click="cancel"
                        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s ease;
    }
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }
</style>
