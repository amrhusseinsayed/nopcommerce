// applitools.config.js
export const apiKey = 'XCTPPI8fOt1108dWho9M1zC1jEK2eg1BPrAY88LW105c7Uk110';

export const browser = [
    // Add browsers with different viewports
    { width: 800, height: 600, name: 'chrome' },
    { width: 700, height: 500, name: 'firefox' },
    { width: 1600, height: 1200, name: 'ie11' },
    { width: 1024, height: 768, name: 'edgechromium' },
    { width: 800, height: 600, name: 'safari' },
    // Add mobile emulation devices in Portrait mode
    { deviceName: 'iPhone X', screenOrientation: 'portrait' },
    { deviceName: 'Pixel 2', screenOrientation: 'portrait' }
];

export const batchName = 'Applitools Demo';