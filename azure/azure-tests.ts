/// <reference path="./azure.d.ts" />

import * as azure from "azure";

let blobClient: azure.BlobService;
blobClient = new azure.BlobService();
blobClient = azure.createBlobService();
blobClient = azure.createBlobServiceAnonymous();
blobClient = azure.createBlobServiceWithSas("hostname", "?sastooken");
