/**
 * Device detection and quality configuration utilities
 * Used to optimize 3D rendering based on device capabilities
 */

/**
 * Detects if the current device is mobile
 * @returns {boolean} True if mobile device
 */
export const isMobile = () => {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};

/**
 * Gets optimal quality settings based on device
 * @returns {Object} Quality configuration object
 */
export const getDeviceQuality = () => {
    const mobile = isMobile();
    const pixelRatio = window.devicePixelRatio || 1;

    return {
        isMobile: mobile,
        // Lower pixel ratio on mobile for better performance
        dpr: mobile ? [1, 1.5] : [1, 2],
        // Reduce shadow quality on mobile
        shadowMapSize: mobile ? 512 : 1024,
        // Smaller textures on mobile
        textureSize: mobile ? 1024 : 2048,
        // Quality preset
        quality: mobile ? 'low' : 'high',
    };
};
