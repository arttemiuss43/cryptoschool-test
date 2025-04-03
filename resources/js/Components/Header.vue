<script setup lang="ts">
    import Logo from "@/Components/Logo.vue";
    import { Link } from "@inertiajs/vue3";
</script>

<template>
    <nav class="bg-white border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <div class="shrink-0 flex items-center">
                        <Link :href="route('lessons.index')">
                            <Logo class="block h-16 w-auto" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
