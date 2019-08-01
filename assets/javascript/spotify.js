window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQAeNl9ov5XnMFMFu7bzPb9BOBzIShpi8YfwXHZvT7l0kvVIkWk1YpVo2H4KJcU5PGWlPVs6dk0E2dUf1CfaEZ41Y406gjdlwoF9tkC2qbAa9U9Jp2Dp8iRLOpswDZ1sFzc7VrFg9Z-mdzb5plfXTY_zNBn3t4QoFcQ6HvY';
    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); }
    });

    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });

    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });

    // Ready
    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player!
    player.connect();
};