import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
    const trackRes = await fetch('/database/tracks.json')
    const trackData = await trackRes.json()
    const tracks = trackData.tracks


    return {
        tracks
    };
}) satisfies PageLoad;