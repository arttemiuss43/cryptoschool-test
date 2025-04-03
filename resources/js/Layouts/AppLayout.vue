<script setup lang="ts">
    import { Head } from '@inertiajs/vue3';
    import Header from '@/Components/Header.vue';
    import Footer from '@/Components/Footer.vue';

    defineProps({
        title: String,
    });
</script>

<template>
    <div>
        <Head :title="title" />

        <div class="min-h-screen bg-gray-100">
            <Header />

            <main>
                <div class="py-12">
                    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                            <div class="max-w-4xl mx-auto py-10 px-4">
                                <h1 class="text-3xl font-bold mb-6">{{ title }}</h1>

                                <slot />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    </div>
</template>
