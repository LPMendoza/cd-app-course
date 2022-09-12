module.exports = {
    branches: 'master',
    repositoryUrl: 'https://github.com/LPMendoza/cd-app-course',
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/npm',
        [
            '@semantic-release/github',
            {
                assets: [
                    { path: 'build.zip', label: 'Build' },
                    { path: 'coverage.zip', label: 'Coverage' },
                    {
                        path: './coverage/badge-statements.svg',
                        label: 'statementsBadge',
                    },
                    { path: './coverage/badge-lines.svg', label: 'linesBadge' },
                    {
                        path: './coverage/badge-functions.svg',
                        label: 'functionsBadge',
                    },
                    {
                        path: './coverage/badge-statements.svg',
                        label: 'statementsBadge',
                    },
                ],
            },
        ],
    ],
};
