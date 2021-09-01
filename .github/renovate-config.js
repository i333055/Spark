module.exports = {
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["local>i333055/renovate-presets:base(actiontest)"],
  "onboarding": false,
  "requireConfig": false,
  "dryRun": false,
  "includeForks": true,
  "platform": "github",
  "repositories": ["i333055/Spark"],
  "includePaths": [
    "distribution/**",
    "core/**",
    "emoticons/**",
    "plugins/**"
  ],
  "packageRules": [
    {
      "matchUpdateTypes": ["major"],
      "dependencyDashboardApproval": true
    }
  ]
};
