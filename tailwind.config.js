/* global tailwind */
tailwind.config = {
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            screens: {
                'desktop': '1600px'
            },
            colors: {
                'primary': '#0D1B2A',
                'accent': '#B08953',
                'link': '#624c2e',
                'background': '#f8f9fa',
                'heading': '#4d688a',
                'text': '#1B263B',
            },
            spacing: {
                'form-height': '4rem',
            }
        },
    }
}
