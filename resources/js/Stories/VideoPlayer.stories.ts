import VideoPlayer from '../Components/VideoPlayer.vue'

export default {
    title: 'VideoPlayer',
    component: VideoPlayer,
    tags: ['autodocs'],
    argTypes: {
        src: {
            control: 'text',
            description: 'Video file URL (e.g., /videos/lighthouse.mp4)',
            table: {
                type: { summary: 'string (URL)' },
            },
        },
        thumbnail: {
            control: 'text',
            description: 'Preview image shown before video playback',
            table: {
                type: { summary: 'string (URL)' },
            },
        },
        progress: {
            action: 'progress',
            description: 'Emitted during video playback with currentTime and duration',
            table: {
                category: 'Events',
                type: { summary: '(currentTime: number, duration: number) => void' },
            },
        },
        logo: {
            description: 'Slot for displaying a logo in the top-left corner',
            table: {
                category: 'Slots',
                type: { summary: 'HTML or Component' },
            },
            control: false,
        },
        play: {
            description: 'Starts video playback',
            table: {
                category: 'Expose',
                type: { summary: '() => void' },
            },
            control: false,
        },
        pause: {
            description: 'Pauses video playback',
            table: {
                category: 'Expose',
                type: { summary: '() => void' },
            },
            control: false,
        },
        seek: {
            description: 'Seeks to a specific time in seconds',
            table: {
                category: 'Expose',
                type: { summary: '(seconds: number) => void' },
            },
            control: false,
        },
        currentTime: {
            description: 'Returns the current playback time',
            table: {
                category: 'Expose',
                type: { summary: '() => number' },
            },
            control: false,
        },
        player: {
            description: 'Returns the raw video.js player instance',
            table: {
                category: 'Expose',
                type: { summary: '() => videojs.Player' },
            },
            control: false,
        },
    },
}

export const Primary = {
    args: {
        src: '/videos/lighthouse.mp4',
        thumbnail: '/images/lighthouse.jpeg',
    },
}
