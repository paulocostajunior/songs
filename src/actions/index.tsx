export const selectSong = (song: string) => { 
    //return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};