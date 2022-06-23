module.exports = {
   "$schema": "https://docs.renovatebot.com/renovate-schema.json",
   "extends": [
     "config:base",
     ":preserveSemverRanges",
     ":disableRateLimiting",
     ":disableVulnerabilityAlerts",
     ":rebaseStalePrs",
     ":dependencyDashboard",
     ":disableDevDependencies",
     ":combinePatchMinorReleases",
     "github>whitesource/merge-confidence:beta"
   ],
   "enabledManagers": ["nvm", "maven"],
   "maven": {
    "fileMatch": [
      "\\.pom\\.xml$",
      "(^|/)pom\\.xml$",
      "(^|/)external-dependencies\\.xml$"
    ]
  },
  "dependencyDashboardTitle": "SBG Dependency Dashboard",
  "dependencyDashboardHeader": "This issue contains a list of Renovate updates and their statuses for sbg.",
  "branchPrefix": "renovate-sbg/",
  "labels": ["renovate", "sbg", "Holiday"],
  "onboarding": false,
  "requireConfig": false,
  "dryRun": false,
  "includeForks": true,
  "platform": "github",
  "repositories": ["i333055/Spark"]
};
