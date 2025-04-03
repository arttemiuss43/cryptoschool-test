<script setup lang="ts">
    import { Link } from "@inertiajs/vue3";

    const appName: string = import.meta.env.VITE_APP_NAME || '';
</script>

<template>
    <footer class="bg-gray-100 text-gray-600 mt-12">
        <div class="max-w-screen-xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm">
            <div class="mb-4 sm:mb-0">
                © {{ new Date().getFullYear() }} {{ appName }}. All rights reserved.
            </div>

            <div class="flex gap-4">
                <Link href="#" class="hover:text-gray-800 transition">Privacy Policy</Link>
                <Link href="#" class="hover:text-gray-800 transition">Terms</Link>
                <Link href="#" class="hover:text-gray-800 transition">Contact</Link>
            </div>
        </div>
    </footer>
</template>
