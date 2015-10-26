/// <reference path="./azure-storage.d.ts" />

import * as azure from "azure-storage";

let blobClient: azure.BlobService;
blobClient = new azure.BlobService();
blobClient = azure.createBlobService();
blobClient = azure.createBlobServiceAnonymous();
blobClient = azure.createBlobServiceWithSas("hostname", "?sastooken");
