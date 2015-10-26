// Type definitions for azure v0.10.5
// Project: https://github.com/Azure/azure-sdk-for-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./azure-storage.d.ts" />

declare module "azure" {
	export * from "azure-storage";
}

import * as azr from "azure";
interface NodeRequireFunction {
    (id: "azure"): typeof azr;
}
