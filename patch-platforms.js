module.exports = function($logger, $projectData, $injector, hookArgs) {
    var path = require("path");

    const $platformsData = getPlatformsData($injector);
    const platformName = (hookArgs.checkForChangesOpts && hookArgs.checkForChangesOpts.platform) || (hookArgs.prepareData && hookArgs.prepareData.platform);
    const patchNpmPackage = require("./patch-npm-packages.js");

    patchNpmPackage($logger, $projectData, hookArgs.changesInfo);
}


function getPlatformsData($injector) {
    try {
        return $injector.resolve("platformsData");
    } catch (err) {
        return $injector.resolve("platformsDataService");
    }
}
