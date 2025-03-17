module.exports = {
    preset: 'ts-jest/presets/js-with-ts-esm',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['./jest.setup.cjs'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
    },
    transform: {
        '^.+\\.[tj]sx?$': [
            'ts-jest',
            {
                useESM: true,
            },
            {
                useESM: true,
                diagnostics: {
                    ignoreCodes: ['TS151001'],
                },
            },
        ]
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    transformIgnorePatterns: [
        'node_modules/(?!(whatwg-fetch)/)'
    ]
};