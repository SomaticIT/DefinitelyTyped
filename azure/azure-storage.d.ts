// Type definitions for azure-storage v0.6.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare namespace AzureStorage {
    export type ENUM<T> = string | T;

    export type ErrorOrResponse = (err: Error, response: any) => void;
    export type ErrorOrResult<T> = (err: Error, result: T, response: any) => void;

    /** Defines constants, enums, and utility functions for use with the Blob service. */
    export namespace BlobUtilities {

        /** Blob access conditions. */
        export const AccessConditions: {
            /**
             * If the blob has been modified since the specified date.
             * @default HeaderConstants.IF_MODIFIED_SINCE
             */
            DATE_MODIFIED_SINCE: string;
            /**
             * If the blob has not been modified since the specified date.
             * @default HeaderConstants.IF_UNMODIFIED_SINCE
             */
            DATE_UNMODIFIED_SINCE: string;
            /**
             * If the ETag for the blob matches the specified ETag.
             * @default HeaderConstants.IF_MATCH
             */
            ETAG_MATCH: string;
            /**
             * If the ETag for the blob does not match the specified ETag;
             * @default HeaderConstants.IF_NONE_MATCH
             */
            ETAG_NONE_MATCH: string;
        };

        /** Blobs and container public access types. */
        export const BlobContainerPublicAccessType: {
            /**
             * No public access type.
             * @default NULL
             */
            OFF: string;
            /**
             * Public access for both container and blob level.
             * @default container
             */
            CONTAINER: string;
            /**
             * Public access for blob level.
             * @default blob
             */
            BLOB: string;
        };

        /** Blob listing details. */
        export const BlobListingDetails: {
            /**
             * @default snapshots
             */
            SNAPSHOTS: string;
            /**
             * @default metadata
             */
            METADATA: string;
            /**
             * @default uncommittedblobs
             */
            UNCOMMITTED_BLOBS: string;
        };

        /** Type of block list to retrieve. */
        export enum BlockListFilter {
            /**
             * @default all
             */
            ALL,
            /**
             * @default comitted
             */
            COMITTED,
            /**
             * @default uncommitted
             */
            UNCOMMITTED
        }

        /** Describes actions that can be performed on a page blob sequence number. */
        export enum SequenceNumberAction {
            /**
             * @default max
             */
            MAX,
            /**
             * @default update
             */
            UPDATE,
            /**
             * @default increment
             */
            INCREMENT
        }

        /** Permission types. */
        export const SharedAccessPermissions: {
            /**
             * @default r
             */
            READ: string;
            /**
             * @default w
             */
            WRITE: string;
            /**
             * @default d
             */
            DELETE: string;
            /**
             * @default l
             */
            LIST: string;
        };

        /** Deletion options for blob snapshots. */
        export const SnapshotDeleteOptions: {
            /**
             * @default only
             */
            SNAPSHOTS_ONLY: string;
            /**
             * @default include
             */
            BLOB_AND_SNAPSHOTS: string;
        };
    }

    /** Defines constants, enums, and utility functions for use with the File service. */
    export namespace FileUtilities {

        /** Listing details. */
        export const ListingDetails: {
            /**
             * @default metadata
             */
            METADATA: string;
        };

        /** Permission types. */
        export const SharedAccessPermissions: {
            /**
             * @default r
             */
            READ: string;
            /**
             * @default w
             */
            WRITE: string;
            /**
             * @default d
             */
            DELETE: string;
            /**
             * @default l
             */
            LIST: string;
        };

        /** File and share public access types. */
        export const SharePublicAccessType: {
            /**
             * @default NULL
             */
            OFF: string;
            /**
             * @default share
             */
            SHARE: string;
            /**
             * @default file
             */
            FILE: string;
        };
    }

    /** Defines constants, enums, and utility functions for use with the Queue service. */
    export namespace QueueUtilities {

        /** Permission types. */
        export const SharedAccessPermissions: {
            /**
             * @default r
             */
            READ: string;
            /**
             * @default a
             */
            ADD: string;
            /**
             * @default u
             */
            UPDATE: string;
            /**
             * @default p
             */
            PROCESS: string;
        };
    }

    /** Defines constants, enums, and utility functions for use with the Table service. */
    export namespace TableUtilities {
        /** Edm types. */
        export const EdmType: {
            /**
             * @default Edm.String
             */
            STRING: string;
            /**
             * @default Edm.Binary
             */
            BINARY: string;
            /**
             * @default Edm.Int64
             */
            INT64: string;
            /**
             * @default Edm.Int32
             */
            INT32: string;
            /**
             * @default Edm.Double
             */
            DOUBLE: string;
            /**
             * @default Edm.DateTime
             */
            DATETIME: string;
            /**
             * @default Edm.Guid
             */
            GUID: string;
            /**
             * @default Edm.Boolean
             */
            BOOLEAN: string;
        };

        /** Wrapper for Table Entities properties */
        export interface Entity<T> {
            /** Contains property value. */
            _: T;
            /** Contains property type. */
            $: string;
        }
        /** Wrapper for Table Entities properties */
        export interface EntityConstructor {
            <T>(value: T): Entity<T>;
            <T>(value: T, type: string): Entity<T>;

            new <T>(value: T): Entity<T>;
            new <T>(value: T, type: string): Entity<T>;
        }

        /** A helper to create table entities. */
        export interface EntityGenerator {
            Entity: EntityConstructor;
            Int32<T>(value: T): Entity<T>;
            Int64<T>(value: T): Entity<T>;
            Binary<T>(value: T): Entity<T>;
            Boolean<T>(value: T): Entity<T>;
            String<T>(value: T): Entity<T>;
            Guid<T>(value: T): Entity<T>;
            Double<T>(value: T): Entity<T>;
            DateTime<T>(value: T): Entity<T>;
        }

        /** A helper to create table entities. */
        export const entityGenerator: EntityGenerator;

        /** Payload Format. */
        export const PayloadFormat: {
            /**
             * @default application/json;odata=fullmetadata
             */
            FULL_METADATA: string;
            /**
             * @default application/json;odata=minimalmetadata
             */
            MINIMAL_METADATA: string;
            /**
             * @default application/json;odata=nometadata
             */
            NO_METADATA: string;
        };

        /** Filter property comparison operators. */
        export const QueryComparisons: {
            /**
             * @default eq
             */
            EQUAL: string;
            /**
             * @default ne
             */
            NOT_EQUAL: string;
            /**
             * @default gt
             */
            GREATER_THAN: string;
            /**
             * @default ge
             */
            GREATER_THAN_OR_EQUAL: string;
            /**
             * @default lt
             */
            LESS_THAN: string;
            /**
             * @default le
             */
            LESS_THAN_OR_EQUAL: string;
        };

        /** Permission types. */
        export const SharedAccessPermissions: {
            /**
             * @default r
             */
            QUERY: string;
            /**
             * @default a
             */
            ADD: string;
            /**
             * @default u
             */
            UPDATE: string;
            /**
             * @default d
             */
            DELETE: string;
        };

        /** Defines the set of Boolean operators for constructing queries. */
        export const TableOperators: {
            /**
             * @default and
             */
            AND: string;
            /**
             * @default not
             */
            NOT: string;
            /**
             * @default or
             */
            OR: string;
        };
    }

    /** Defines constants, enums, and utility functions for use with storage. */
    export namespace StorageUtilities {

        /** Specifies the location mode used to decide which location the request should be sent to. */
        export enum LocationMode {
            /** The primary location only */
            PRIMARY_ONLY = 0,
            /** The primary location first, then the secondary */
            PRIMARY_THEN_SECONDARY = 1,
            /** The secondary location only */
            SECONDARY_ONLY = 2,
            /** The secondary location first, then the primary */
            SECONDARY_THEN_PRIMARY = 3
        }
    }

    /** Defines constants, enums, and utility functions for use with storage access condition. */
    export namespace AccessCondition {
        export interface AccessConditions {
            [header: string]: string;
        }

        /** Constructs an empty access condition. */
        export function generateEmptyCondition(): AccessConditions;

        /**
         * Constructs an access condition such that an operation will be performed only if the resource does not exist on the service.
         * Setting this access condition modifies the request to include the HTTP If-None-Match conditional header.
         */
        export function generateIfNotExistsCondition(): AccessConditions;

        /**
         * Constructs an access condition such that an operation will be performed only if the resource exists on the service.
         * Setting this access condition modifies the request to include the HTTP If-Match conditional header.
         */
        export function generateIfExistsCondition(): AccessConditions;

        /**
         * Constructs an access condition such that an operation will be performed only if the resource's ETag value does not match the specified ETag value.
         * Setting this access condition modifies the request to include the HTTP If-None-Match conditional header
         * @param etag - The ETag value to check against the resource's ETag
         */
        export function generateIfNoneMatchCondition(etag: string): AccessConditions;

        /**
         * Constructs an access condition such that an operation will be performed only if the resource's ETag value matches the specified ETag value.
         * Setting this access condition modifies the request to include the HTTP If-Match conditional header
         * @param etag - The ETag value to check against the resource's ETag
         */
        export function generateIfMatchCondition(etag: string): AccessConditions;

        /**
         * Constructs an access condition such that an operation will be performed only if the resource has been modified since the specified time.
         * Setting this access condition modifies the request to include the HTTP If-Modified-Since conditional header
         * @param time -  A date object specifying the time since which the resource must have been modified
         */
        export function generateIfModifiedSinceCondition(time: string | Date): AccessConditions;

        /**
         * Constructs an access condition such that an operation will be performed only if the resource has not been modified since the specified time.
         * Setting this access condition modifies the request to include the HTTP If-Unmodified-Since conditional header
         * @param time -  A date object specifying the time since which the resource must have not been modified
         */
        export function generateIfNotModifiedSinceCondition(time: string | Date): AccessConditions;
    }

    /** Fake namespace to defines some filters interfaces. */
    export namespace Filters {
        export interface IRetryPolicyFilter {
            /**
             * Handles an operation with a retry policy.
             * @param requestOptions - The original request options.
             * @param next - The next filter to be handled.
             */
            handle(requestOptions: Object, next: Function): void;

            /**
             * Determines if the operation should be retried and how long to wait until the next retry.
             * @param statusCode - The HTTP status code.
             * @param requestOptions - The request options.
             * @returns - Information about whether the operation qualifies for a retry and the retryInterval.
             */
            shouldRetry(statusCode: number, requestOptions: Object): Filters.RetryInfo;
        }

        export interface IProxy {
            host?: string;
            port?: number;
            proxyAuth?: string;
            headers?: { [key: string]: string };
            key?: string;
            ca?: string;
            cert?: string;
        }

        export interface RetryInfo {

        }
    }

    /** Fake namespace to defines some service clients interfaces. */
    export namespace Common {
        export interface IStorageCredentials {
            signRequest(webResource: Internal.WebResource, next: Function): void;
        }

        export interface StorageServiceSettings {

        }

        export interface ServiceProperties {
        }
        export interface ServicePropertiesResult {
        }

        export interface ServiceStatsResult {

        }

        export interface SpeedSummary {
        }

        export interface SignedIdentifier {
            /** The signed identifier. */
            Id?: string;
            AccessPolicy?: {
                /** The permission type. */
                Permissions?: string;
                /** The time at which the Shared Access Signature becomes valid (The UTC value will be used). */
                Start?: Date | string;
                /** The time at which the Shared Access Signature becomes expired (The UTC value will be used). */
                Expiry: Date | string;
            }
        }

        export interface ContinuationToken {
            nextMarker: string;
            targetLocation: string;
        }

        export interface Metadata {
            [key: string]: string;
        }

        export interface HostConfiguration {
            primaryHost: string;
            secondaryHost: string;
        }

        export interface DefaultOptions {
            /** 
             * Specifies the location mode used to decide which location the request should be sent to.
             * Please see StorageUtilities.LocationMode for the possible values.
             */
            locationMode?: StorageUtilities.LocationMode;
            /** The server timeout interval, in milliseconds, to use for the request. */
            timeoutIntervalInMs?: number;
            /** 
             * The maximum execution time, in milliseconds, across all potential retries, to use when making this request.
             * The maximum execution time interval begins at the time that the client begins building the request.
             * The maximum execution time is checked intermittently while performing requests, and before executing retries.
             */
            maximumExecutionTimeInMs?: number;
            /** A string that represents the client request ID with a 1KB character limit. */
            clientRequestId?: string;
            /**
             * Determines whether the Nagle algorithm is used;
             * true to use the Nagle algorithm;  otherwise, false.
             * The default value is false.
             */
            useNagleAlgorithm?: boolean;
        }

        export interface AccessConditionsOptions extends DefaultOptions {
            /** The access conditions. See http://msdn.microsoft.com/en-us/library/dd179371.aspx for more information. */
            accessConditions?: AccessCondition.AccessConditions;
        }
    }

    /** Fake namespace to defines some internal classes. */
    export namespace Internal {
        export type Dictionary<T> = { [key: string]: T };

        export class WebResource {
            rawResponse: boolean;
            queryString: Dictionary<string>;

            constructor();

            get(path: string): WebResource;
            put(path: string): WebResource;
            post(path: string): WebResource;
            merge(path: string): WebResource;
            head(path: string): WebResource;
            del(path: string): WebResource;

            withProperty(name: string, value: string): WebResource;
            withRawResponse(rawResponse: boolean): WebResource;
            withHeadersOnly(headersOnly: boolean): WebResource;
            withQueryOption(name: string, value: string, defaultValue: string): WebResource;
            withQueryOptions(queryOptions: Dictionary<string>): WebResource;
            withHeader(name: string, value: string): WebResource;
            withHeaders(headers: Dictionary<string>): WebResource;
            withBody(body: any): WebResource;
            addOptionalMetadataHeaders(metadata: Common.Metadata): WebResource;

            validResponse(statusCode: number): boolean;
            pipeInput(inputStream: NodeJS.ReadableStream, destStream: NodeJS.WritableStream): NodeJS.ReadableStream;
        }
    }

    /**
     * The ExponentialRetryPolicyFilter allows you to retry operations, using an exponential back-off interval between retries. 
     * To apply a filter to service operations, use withFilter and specify the filter to be used when creating a service.
     */
    export class ExponentialRetryPolicyFilter implements Filters.IRetryPolicyFilter {
        /** Represents the default maximum retry interval, in milliseconds. */
        static DEFAULT_CLIENT_MAX_RETRY_INTERVAL: number;
        /** Represents the default minimum retry interval, in milliseconds. */
        static DEFAULT_CLIENT_MIN_RETRY_INTERVAL: number;
        /** Represents the default client retry count. */
        static DEFAULT_CLIENT_RETRY_COUNT: number;
        /** Represents the default client retry interval, in milliseconds. */
        static DEFAULT_CLIENT_RETRY_INTERVAL: number;

        /** 
         * Creates a new 'ExponentialRetryPolicyFilter' instance. 
         * @param retryCount=3 - The client retry count.
         * @param retryInterval=30000 - The client retry interval, in milliseconds.
         * @param minRetryInterval=3000 - The minimum retry interval, in milliseconds.
         * @param maxRetryInterval=90000 - The maximum retry interval, in milliseconds.
         */
        constructor(retryCount?: number, retryInterval?: number, minRetryInterval?: number, maxRetryInterval?: number);

        /**
         * Handles an operation with an exponential retry policy.
         * @param requestOptions - The original request options.
         * @param next - The next filter to be handled.
         */
        handle(requestOptions: Object, next: Function): void;

        /**
         * Determines if the operation should be retried and how long to wait until the next retry.
         * @param statusCode - The HTTP status code.
         * @param requestOptions - The request options.
         * @returns - Information about whether the operation qualifies for a retry and the retryInterval.
         */
        shouldRetry(statusCode: number, requestOptions: Object): Filters.RetryInfo;
    }

    /**
     * The LinearRetryPolicyFilter allows you to retry operations, using an linear back-off interval between retries.
     * To apply a filter to service operations, use withFilter and specify the filter to be used when creating a service.
     */
    export class LinearRetryPolicyFilter implements Filters.IRetryPolicyFilter {
        /** Represents the default client retry count. */
        static DEFAULT_CLIENT_RETRY_COUNT: number;
        /** Represents the default client retry interval, in milliseconds. */
        static DEFAULT_CLIENT_RETRY_INTERVAL: number;

        /** 
         * Creates a new 'LinearRetryPolicyFilter' instance. 
         * @param retryCount=3 - The client retry count.
         * @param retryInterval=30000 - The client retry interval, in milliseconds.
         */
        constructor(retryCount?: number, retryInterval?: number);

        /**
         * Handles an operation with an linear retry policy.
         * @param requestOptions - The original request options.
         * @param next - The next filter to be handled.
         */
        handle(requestOptions: Object, next: Function): void;

        /**
         * Determines if the operation should be retried and how long to wait until the next retry.
         * @param statusCode - The HTTP status code.
         * @param requestOptions - The request options.
         * @returns - Information about whether the operation qualifies for a retry and the retryInterval.
         */
        shouldRetry(statusCode: number, requestOptions: Object): Filters.RetryInfo;
    }

    /**
     * The RetryPolicyFilter allows you to retry operations, using a custom retry policy.
     * Users are responsible to define the shouldRetry method.
     * To apply a filter to service operations, use withFilter and specify the filter to be used when creating a service.
     */
    export class RetryPolicyFilter implements Filters.IRetryPolicyFilter {
        /** Represents the default client retry count. */
        static DEFAULT_CLIENT_RETRY_COUNT: number;
        /** Represents the default client retry interval, in milliseconds. */
        static DEFAULT_CLIENT_RETRY_INTERVAL: number;

        /** 
         * Creates a new 'LinearRetryPolicyFilter' instance. 
         * @param retryCount=3 - The client retry count.
         * @param retryInterval=30000 - The client retry interval, in milliseconds.
         */
        constructor(retryCount?: number, retryInterval?: number);

        /**
         * Handles an operation with an retry policy.
         * @param requestOptions - The original request options.
         * @param next - The next filter to be handled.
         */
        static _handle(self: Filters.IRetryPolicyFilter, requestOptions: Object, next: Function): void;

        /**
         * Handles an operation with an retry policy.
         * @param requestOptions - The original request options.
         * @param next - The next filter to be handled.
         */
        handle(requestOptions: Object, next: Function): void;

        /**
         * Determines if the operation should be retried and how long to wait until the next retry.
         * Should be provided by subclass or by user.
         * @param statusCode - The HTTP status code.
         * @param requestOptions - The request options.
         * @returns - Information about whether the operation qualifies for a retry and the retryInterval.
         */
        shouldRetry: (statusCode: number, requestOptions: Object) => Filters.RetryInfo;
    }

    /** Base class for Blob, File, Queue and Table storage services */
    export class StorageServiceClient implements NodeJS.EventEmitter {
        /** Get if Storage Service Client is in anonymous state, only available when no other credentials are found. */
        anonymous: boolean;
        /** Get SAS token, only available when a SAS Token was provided to contructor. */
        sasToken: string;
        /** Get storage account name, only available if provided to contructor. */
        storageAccount: string;
        /** Get storage account key, only available if provided to contructor. */
        storageAccessKey: string;
        /** Get current storage credentials. */
        storageCredentials: Common.IStorageCredentials;
        /** Hosts informations */
        host: Common.HostConfiguration;

        apiVersion: string;
        usePathStyleUri: boolean;

        logger: any;
        xml2jsSettings: any;
        defaultLocationMode: StorageUtilities.LocationMode;

        constructor(storageAccount: string, storageAccessKey: string, host: string | Common.HostConfiguration, usePathStyleUri: boolean, sasToken: string);

        addListener(event: string, listener: Function): StorageServiceClient;
        on(event: string, listener: Function): StorageServiceClient;
        once(event: string, listener: Function): StorageServiceClient;
        removeListener(event: string, listener: Function): StorageServiceClient;
        removeAllListeners(event?: string): StorageServiceClient;
        setMaxListeners(n: number): void;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;

        /**
         * Associate a filtering operation with this StorageServiceClient. Filtering operations
         * can include logging, automatically retrying, etc. Filter operations are objects
         * that implement a method with the signature:
         *
         *     "function handle (requestOptions, next)".
         *
         * After doing its preprocessing on the request options, the method needs to call
         * "next" passing a callback with the following signature:
         * signature:
         *
         *     "function (returnObject, finalCallback, next)"
         *
         * In this callback, and after processing the returnObject (the response from the
         * request to the server), the callback needs to either invoke next if it exists to
         * continue processing other filters or simply invoke finalCallback otherwise to end
         * up the service invocation.
         *
         * @param filter - The new filter object.
         */
        withFilter(filter: Filters.IRetryPolicyFilter): StorageServiceClient;

        /**
         * Sets proxy object specified by caller.
         * @param proxy proxy to use for tunneling. If null or undefined, clears proxy.
         */
        setProxy(proxy: Filters.IProxy): void;

        /** Gets the storage settings. */
        static getStorageSettings(storageAccount: string, storageAccessKey: string, host: string | Common.HostConfiguration, sasToken: string): Common.StorageServiceSettings;
    }

    /**
     * The BlobService class is used to perform operations on the Microsoft Azure Blob Service.
     * The Blob Service provides storage for binary large objects, and provides functions for working with data stored in blobs as either streams or pages of data.
     *
     * For more information on the Blob Service, as well as task focused information on using it in a Node.js application, see How to Use the Blob Service from Node.js.
     * The following defaults can be set on the blob service. 
     * - singleBlobPutThresholdInBytes The default maximum size, in bytes, of a blob before it must be separated into blocks. 
     * - defaultTimeoutIntervalInMs The default timeout interval, in milliseconds, to use for request made via the Blob service.
     * - defaultMaximumExecutionTimeInMs The default maximum execution time across all potential retries, for requests made via the Blob service.
     * - defaultLocationMode The default location mode for requests made via the Blob service.
     * - parallelOperationThreadCount The number of parallel operations that may be performed when uploading a blob that is greater than the value specified by the singleBlobPutThresholdInBytes property in size.
     * - useNagleAlgorithm Determines whether the Nagle algorithm is used for requests made via the Blob service; true to use the Nagle algorithm; otherwise, false. The default value is false.
     */
    export class BlobService extends StorageServiceClient {
        /** Creates a new BlobService object using the AZURE_STORAGE_CONNECTION_STRING or AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_ACCESS_KEY environment variables. */
        constructor();
        /** 
         * Creates a new BlobService object using the specified connection string.
         * @param connectionString - The storage account connection string.
         */
        constructor(connectionString: string);
        /** 
         * Creates a new BlobService object using the specified storage account name and storage account key.
         * @param storageAccount - The storage account name.
         * @param storageAccessKey - The storage access key.
         * @param host - The host address. To define primary only, pass a string. Otherwise 'host.primaryHost' defines the primary host and 'host.secondaryHost' defines the secondary host.
         * @param storageAccessKey - The Shared Access Signature token.
         */
        constructor(storageAccount: string, storageAccessKey: string, host?: string | Common.HostConfiguration, sasToken?: string);

        /** 
         * Abort a blob copy operation.
         * @param container - The destination container name.
         * @param blob - The destination blob name.
         * @param copyid - The copy operation identifier.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        abortCopyBlob(container: string, blob: string, copyid: string, callback: ErrorOrResult<BlobService.BlobResult>): void;
        /** 
         * Abort a blob copy operation.
         * @param container - The destination container name.
         * @param blob - The destination blob name.
         * @param copyid - The copy operation identifier.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        abortCopyBlob(container: string, blob: string, copyid: string, options: BlobService.LeaseIdOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;

        /** 
         * Acquires a new lease. If container and blob are specified, acquires a blob lease.
         * Otherwise, if only container is specified and blob is null, acquires a container lease.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the lease information. response will contain information related to this operation.
         */
        acquireLease(container: string, blob: string, callback: ErrorOrResult<BlobService.LeaseResult>): void;
        /** 
         * Acquires a new lease. If container and blob are specified, acquires a blob lease.
         * Otherwise, if only container is specified and blob is null, acquires a container lease.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the lease information. response will contain information related to this operation.
         */
        acquireLease(container: string, blob: string, options: BlobService.AcquireLeaseOptions, callback: ErrorOrResult<BlobService.LeaseResult>): void;

        /** 
         * Creates a new block from a read stream to be appended to an append blob.
         * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
         * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param readStream - The read stream.
         * @param streamLength - The stream length.
         * @param callback - error will contain information if an error occurs; otherwise response will contain information related to this operation.
         */
        appendBlockFromStream(container: string, blob: string, readStream: NodeJS.ReadableStream, streamLength: number, callback: ErrorOrResponse): void;
        /** 
         * Creates a new block from a read stream to be appended to an append blob.
         * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
         * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param readStream - The read stream.
         * @param streamLength - The stream length.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise response will contain information related to this operation.
         */
        appendBlockFromStream(container: string, blob: string, readStream: NodeJS.ReadableStream, streamLength: number, options: BlobService.AppendBlockOptions, callback: ErrorOrResponse): void;

        /** 
         * Creates a new block from a text to be appended to an append blob.
         * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
         * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param content - The block text, as a string or in a Buffer.
         * @param callback - error will contain information if an error occurs; otherwise response will contain information related to this operation.
         */
        appendBlockFromText(container: string, blob: string, content: string | Buffer, callback: ErrorOrResponse): void;
        /** 
         * Creates a new block from a text to be appended to an append blob.
         * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
         * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param content - The block text, as a string or in a Buffer.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise response will contain information related to this operation.
         */
        appendBlockFromText(container: string, blob: string, content: string | Buffer, options: BlobService.AppendBlockOptions, callback: ErrorOrResponse): void;

        /** 
         * Appends to an append blob from a local file. Assumes the blob already exists on the service.
         * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
         * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param localFileName - The local path to the file to be uploaded.
         * @param callback - The callback function.
         */
        AppendFromLocalFile(container: string, blob: string, localFileName: string, callback: ErrorOrResult<BlobService.BlobResult>): Common.SpeedSummary;
        /** 
         * Appends to an append blob from a local file. Assumes the blob already exists on the service.
         * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
         * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param localFileName - The local path to the file to be uploaded.
         * @param options - The request options.
         * @param callback - The callback function.
         */
        AppendFromLocalFile(container: string, blob: string, localFileName: string, options: BlobService.AppendFromFileOptions, callback: ErrorOrResult<BlobService.BlobResult>): Common.SpeedSummary;

        /** 
         * Appends to an append blob from a stream. Assumes the blob already exists on the service.
         * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
         * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param stream - The read stream.
         * @param streamLength - The stream length.
         * @param callback - The callback function.
         */
        AppendFromStream(container: string, blob: string, stream: NodeJS.ReadableStream, streamLength: number, callback: ErrorOrResult<BlobService.BlobResult>): Common.SpeedSummary;
        /** 
         * Appends to an append blob from a stream. Assumes the blob already exists on the service.
         * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
         * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param stream - The read stream.
         * @param streamLength - The stream length.
         * @param options - The request options.
         * @param callback - The callback function.
         */
        AppendFromStream(container: string, blob: string, stream: NodeJS.ReadableStream, streamLength: number, options: BlobService.AppendFromStreamOptions, callback: ErrorOrResult<BlobService.BlobResult>): Common.SpeedSummary;

        /** 
         * Appends to an append blob from a text string. Assumes the blob already exists on the service.
         * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
         * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param text - The blob text, as a string or in a Buffer.
         * @param callback - The callback function.
         */
        AppendFromText(container: string, blob: string, text: string | Buffer, callback: ErrorOrResult<BlobService.BlobResult>): void;
        /** 
         * Appends to an append blob from a text string. Assumes the blob already exists on the service.
         * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
         * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param text - The blob text, as a string or in a Buffer.
         * @param options - The request options.
         * @param callback - The callback function.
         */
        AppendFromText(container: string, blob: string, text: string | Buffer, options: BlobService.AppendFromTextOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;

        /** 
         * Breaks the lease but ensures that another client cannot acquire a new lease until the current lease period has expired. If container and blob are specified, breaks the blob lease.
         * Otherwise, if only container is specified and blob is null, breaks the container lease.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the lease information. response will contain information related to this operation.
         */
        breakLease(container: string, blob: string, callback: ErrorOrResult<BlobService.LeaseResult>): void;
        /** 
         * Breaks the lease but ensures that another client cannot acquire a new lease until the current lease period has expired. If container and blob are specified, breaks the blob lease.
         * Otherwise, if only container is specified and blob is null, breaks the container lease.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the lease information. response will contain information related to this operation.
         */
        breakLease(container: string, blob: string, options: BlobService.BreakLeaseOptions, callback: ErrorOrResult<BlobService.LeaseResult>): void;

        /** 
         * Changes the lease ID of an active lease. If container and blob are specified, changes the blob lease.
         * Otherwise, if only container is specified and blob is null, changes the container lease.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param leaseId - The current lease identifier.
         * @param proposedLeaseId - The proposed lease identifier. Must be a GUID.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the lease information. response will contain information related to this operation.
         */
        changeLease(container: string, blob: string, leaseId: string, proposedLeaseId: string, callback: ErrorOrResult<BlobService.LeaseResult>): void;
        /** 
         * Changes the lease ID of an active lease. If container and blob are specified, changes the blob lease.
         * Otherwise, if only container is specified and blob is null, changes the container lease.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param leaseId - The current lease identifier.
         * @param proposedLeaseId - The proposed lease identifier. Must be a GUID.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the lease information. response will contain information related to this operation.
         */
        changeLease(container: string, blob: string, leaseId: string, proposedLeaseId: string, options: Common.AccessConditionsOptions, callback: ErrorOrResult<BlobService.LeaseResult>): void;

        /** 
         * Clears a range of pages.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param rangeStart - The range start.
         * @param rangeEnd - The range end.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the lease information. response will contain information related to this operation.
         */
        clearPageRange(container: string, blob: string, rangeStart: number, rangeEnd: number, callback: ErrorOrResponse): void;
        /** 
         * Clears a range of pages.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param rangeStart - The range start.
         * @param rangeEnd - The range end.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the lease information. response will contain information related to this operation.
         */
        clearPageRange(container: string, blob: string, rangeStart: number, rangeEnd: number, options: BlobService.LeaseAndAccessConditionsOptions, callback: ErrorOrResponse): void;

        /** 
         * Writes a blob by specifying the list of block IDs that make up the blob.
         * In order to be written as part of a blob, a block must have been successfully written to the server in a prior createBlock operation.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param blockList - The block identifiers.
         * @param callback - The callback function.
         */
        commitBlocks(container: string, blob: string, blockList: string[], callback: ErrorOrResult<BlobService.BlockListResult>): void;
        /** 
         * Writes a blob by specifying the list of block IDs that make up the blob.
         * In order to be written as part of a blob, a block must have been successfully written to the server in a prior createBlock operation.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param blockList - The block identifiers.
         * @param options - The request options.
         * @param callback - The callback function.
         */
        commitBlocks(container: string, blob: string, blockList: string[], options: BlobService.BlobContentOptions, callback: ErrorOrResult<BlobService.BlockListResult>): void;

        /** 
         * Creates a new append blob from a local file. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
         * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you. 
         * If you want to append data to an already existing blob, please look at AppendFromLocalFile.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param localFileName - The local path to the file to be uploaded.
         * @param callback - The callback function.
         */
        createAppendBlobFromLocalFile(container: string, blob: string, localFileName: string, callback: ErrorOrResult<BlobService.BlobResult>): Common.SpeedSummary;
        /** 
         * Creates a new append blob from a local file. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
         * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you. 
         * If you want to append data to an already existing blob, please look at AppendFromLocalFile.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param localFileName - The local path to the file to be uploaded.
         * @param options - The request options.
         * @param callback - The callback function.
         */
        createAppendBlobFromLocalFile(container: string, blob: string, localFileName: string, options: BlobService.AppendFromFileOptions, callback: ErrorOrResult<BlobService.BlobResult>): Common.SpeedSummary;

        /** 
         * Uploads an append blob from a stream. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
         * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you. 
         * If you want to append data to an already existing blob, please look at AppendFromLocalFile.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param stream - The read stream.
         * @param streamLength - The stream length.
         * @param callback - The callback function.
         */
        createAppendBlobFromStream(container: string, blob: string, stream: NodeJS.ReadableStream, streamLength: number, callback: ErrorOrResult<BlobService.BlobResult>): Common.SpeedSummary;
        /** 
         * Uploads an append blob from a stream. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
         * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you. 
         * If you want to append data to an already existing blob, please look at AppendFromLocalFile.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param stream - The read stream.
         * @param streamLength - The stream length.
         * @param options - The request options.
         * @param callback - The callback function.
         */
        createAppendBlobFromStream(container: string, blob: string, stream: NodeJS.ReadableStream, streamLength: number, options: BlobService.AppendFromStreamOptions, callback: ErrorOrResult<BlobService.BlobResult>): Common.SpeedSummary;

        /** 
         * Uploads an append blob from a text string. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
         * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you. 
         * If you want to append data to an already existing blob, please look at AppendFromLocalFile.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param text - The blob text, as a string or in a Buffer.
         * @param callback - The callback function.
         */
        createAppendBlobFromText(container: string, blob: string, text: string | Buffer, callback: ErrorOrResult<BlobService.BlobResult>): void;
        /** 
         * Uploads an append blob from a text string. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
         * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you. 
         * If you want to append data to an already existing blob, please look at AppendFromLocalFile.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param text - The blob text, as a string or in a Buffer.
         * @param options - The request options.
         * @param callback - The callback function.
         */
        createAppendBlobFromText(container: string, blob: string, text: string | Buffer, options: BlobService.AppendFromTextOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;

        /** 
         * Creates a read-only snapshot of a blob.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the ID of the snapshot. response will contain information related to this operation.
         */
        createBlobSnapshot(container: string, blob: string, callback: ErrorOrResult<string>): void;
        /** 
         * Creates a read-only snapshot of a blob.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the ID of the snapshot. response will contain information related to this operation.
         */
        createBlobSnapshot(container: string, blob: string, options: BlobService.CreateSnapshotOptions, callback: ErrorOrResult<string>): void;

        /** 
         * Creates a new block blob. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param localFileName - The local path to the file to be uploaded.
         * @param callback - The callback function.
         */
        createBlockBlobFromLocalFile(container: string, blob: string, localFileName: string, callback: ErrorOrResult<BlobService.BlobResult>): Common.SpeedSummary;
        /** 
         * Creates a new block blob. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param localFileName - The local path to the file to be uploaded.
         * @param options - The request options.
         * @param callback - The callback function.
         */
        createBlockBlobFromLocalFile(container: string, blob: string, localFileName: string, options: BlobService.CreateFromFileOptions, callback: ErrorOrResult<BlobService.BlobResult>): Common.SpeedSummary;

        /** 
         * Creates a new block blob. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param stream - The read stream.
         * @param streamLength - The stream length.
         * @param callback - The callback function.
         */
        createBlockBlobFromStream(container: string, blob: string, stream: NodeJS.ReadableStream, streamLength: number, callback: ErrorOrResult<BlobService.BlobResult>): Common.SpeedSummary;
        /** 
         * Creates a new block blob. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param stream - The read stream.
         * @param streamLength - The stream length.
         * @param options - The request options.
         * @param callback - The callback function.
         */
        createBlockBlobFromStream(container: string, blob: string, stream: NodeJS.ReadableStream, streamLength: number, options: BlobService.CreateFromStreamOptions, callback: ErrorOrResult<BlobService.BlobResult>): Common.SpeedSummary;

        /** 
         * Creates a new block blob. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param text - The blob text, as a string or in a Buffer.
         * @param callback - The callback function.
         */
        createBlockBlobFromText(container: string, blob: string, text: string | Buffer, callback: ErrorOrResult<BlobService.BlobResult>): void;
        /** 
         * Creates a new block blob. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param text - The blob text, as a string or in a Buffer.
         * @param options - The request options.
         * @param callback - The callback function.
         */
        createBlockBlobFromText(container: string, blob: string, text: string | Buffer, options: BlobService.CreateFromTextOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;

        /** 
         * Creates a new block to be committed as part of a blob.
         * @param blockId - The block identifier.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param stream - The read stream.
         * @param streamLength - The stream length.
         * @param callback - The callback function.
         */
        createBlockFromStream(blockId: string, container: string, blob: string, stream: NodeJS.ReadableStream, streamLength: number, callback: ErrorOrResponse): void;
        /** 
         * Creates a new block to be committed as part of a blob.
         * @param blockId - The block identifier.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param stream - The read stream.
         * @param streamLength - The stream length.
         * @param options - The request options.
         * @param callback - The callback function.
         */
        createBlockFromStream(blockId: string, container: string, blob: string, stream: NodeJS.ReadableStream, streamLength: number, options: BlobService.CreateBlockOptions, callback: ErrorOrResponse): void;

        /** 
         * Creates a new block to be committed as part of a blob.
         * @param blockId - The block identifier.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param text - The blob text, as a string or in a Buffer.
         * @param callback - The callback function.
         */
        createBlockFromText(blockId: string, container: string, blob: string, text: string | Buffer, callback: ErrorOrResponse): void;
        /** 
         * Creates a new block to be committed as part of a blob.
         * @param blockId - The block identifier.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param text - The blob text, as a string or in a Buffer.
         * @param options - The request options.
         * @param callback - The callback function.
         */
        createBlockFromText(blockId: string, container: string, blob: string, text: string | Buffer, options: BlobService.CreateBlockOptions, callback: ErrorOrResponse): void;

        /** 
         * Creates a new container under the specified account. If a container with the same name already exists, the operation fails.
         * @param container - The container name.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the container information. response will contain information related to this operation.
         */
        createContainer(container: string, callback: ErrorOrResult<BlobService.ContainerResult>): void;
        /** 
         * Creates a new container under the specified account. If a container with the same name already exists, the operation fails.
         * @param container - The container name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the container information. response will contain information related to this operation.
         */
        createContainer(container: string, options: BlobService.CreateContainerOptions, callback: ErrorOrResult<BlobService.ContainerResult>): void;

        /** 
         * Creates a new container under the specified account if the container does not exists.
         * @param container - The container name.
         * @param callback - error will contain information if an error occurs; otherwise result will be true if the container was created, or false if the container already exists. response will contain information related to this operation.
         */
        createContainerIfNotExists(container: string, callback: ErrorOrResult<boolean>): void;
        /** 
         * Creates a new container under the specified account if the container does not exists.
         * @param container - The container name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will be true if the container was created, or false if the container already exists. response will contain information related to this operation.
         */
        createContainerIfNotExists(container: string, options: BlobService.CreateContainerOptions, callback: ErrorOrResult<boolean>): void;

        /** 
         * Creates an empty append blob. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param callback - error will contain information if an error occurs; otherwise response will contain information related to this operation.
         */
        createOrReplaceAppendBlob(container: string, blob: string, callback: ErrorOrResponse): void;
        /** 
         * Creates an empty append blob. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise response will contain information related to this operation.
         */
        createOrReplaceAppendBlob(container: string, blob: string, options: BlobService.BlobContentOptions, callback: ErrorOrResponse): void;

        /** 
         * Creates a page blob of the specified length. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param length - The length of the page blob in bytes.
         * @param callback - error will contain information if an error occurs; otherwise response will contain information related to this operation.
         */
        createPageBlob(container: string, blob: string, length: number, callback: ErrorOrResponse): void;
        /** 
         * Creates a page blob of the specified length. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param length - The length of the page blob in bytes.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise response will contain information related to this operation.
         */
        createPageBlob(container: string, blob: string, length: number, options: BlobService.PageBlobContentOptions, callback: ErrorOrResponse): void;

        /** 
         * Uploads a page blob from file. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param localFileName - The local path to the file to be uploaded.
         * @param callback - The callback function.
         */
        createPageBlobFromLocalFile(container: string, blob: string, localFileName: string, callback: ErrorOrResult<BlobService.BlobResult>): Common.SpeedSummary;
        /** 
         * Uploads a page blob from file. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param localFileName - The local path to the file to be uploaded.
         * @param options - The request options.
         * @param callback - The callback function.
         */
        createPageBlobFromLocalFile(container: string, blob: string, localFileName: string, options: BlobService.CreateFromFileOptions, callback: ErrorOrResult<BlobService.BlobResult>): Common.SpeedSummary;

        /** 
         * Uploads a page blob from a stream. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param stream - The read stream.
         * @param streamLength - The stream length.
         * @param callback - The callback function.
         */
        createPageBlobFromStream(container: string, blob: string, stream: NodeJS.ReadableStream, streamLength: number, callback: ErrorOrResult<BlobService.BlobResult>): Common.SpeedSummary;
        /** 
         * Uploads a page blob from a stream. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param stream - The read stream.
         * @param streamLength - The stream length.
         * @param options - The request options.
         * @param callback - The callback function.
         */
        createPageBlobFromStream(container: string, blob: string, stream: NodeJS.ReadableStream, streamLength: number, options: BlobService.CreateFromStreamOptions, callback: ErrorOrResult<BlobService.BlobResult>): Common.SpeedSummary;

        /** 
         * Updates a page blob from a stream.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param readStream - The read stream.
         * @param rangeStart - The range start.
         * @param rangeEnd - The range end.
         * @param callback - The callback function.
         */
        createPagesFromStream(container: string, blob: string, readStream: NodeJS.ReadableStream, rangeStart: number, rangeEnd: number, callback: ErrorOrResult<BlobService.BlobResult>): Common.SpeedSummary;
        /** 
         * Updates a page blob from a stream.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param readStream - The read stream.
         * @param rangeStart - The range start.
         * @param rangeEnd - The range end.
         * @param callback - The callback function.
         */
        createPagesFromStream(container: string, blob: string, readStream: NodeJS.ReadableStream, rangeStart: number, rangeEnd: number, options: BlobService.CreatePagesFromStreamOptions, callback: ErrorOrResult<BlobService.BlobResult>): Common.SpeedSummary;

        /** 
         * Provides a stream to read from a blob.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        createReadStream(container: string, blob: string, callback: ErrorOrResult<BlobService.BlobResult>): NodeJS.ReadableStream;
        /** 
         * Provides a stream to read from a blob.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        createReadStream(container: string, blob: string, options: BlobService.ReadStreamOptions, callback: ErrorOrResult<BlobService.BlobResult>): NodeJS.ReadableStream;

        /** 
         * Provides a stream to write to a block blob. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param callback - The callback function.
         */
        createWriteStreamToBlockBlob(container: string, blob: string, callback: ErrorOrResponse): NodeJS.WritableStream;
        /** 
         * Provides a stream to write to a block blob. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param options - The request options.
         * @param callback - The callback function.
         */
        createWriteStreamToBlockBlob(container: string, blob: string, options: BlobService.CreateFromStreamOptions, callback: ErrorOrResponse): NodeJS.WritableStream;

        /** 
         * Provides a stream to write to an existing append blob. Assumes that the blob exists.
         * If it does not, please create the blob using createAppendBlob before calling this method or use createWriteStreamToNewAppendBlob.
         * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
         * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param callback - The callback function.
         */
        createWriteStreamToExistingAppendBlob(container: string, blob: string, callback: ErrorOrResponse): NodeJS.WritableStream;
        /** 
         * Provides a stream to write to an existing append blob. Assumes that the blob exists.
         * If it does not, please create the blob using createAppendBlob before calling this method or use createWriteStreamToNewAppendBlob.
         * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
         * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param options - The request options.
         * @param callback - The callback function.
         */
        createWriteStreamToExistingAppendBlob(container: string, blob: string, options: BlobService.AppendFromStreamOptions, callback: ErrorOrResponse): NodeJS.WritableStream;

        /** 
         * Provides a stream to write to a page blob. Assumes that the blob exists. 
         * If it does not, please create the blob using createPageBlob before calling this method or use createWriteStreamNewPageBlob.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param callback - The callback function.
         */
        createWriteStreamToExistingPageBlob(container: string, blob: string, callback: ErrorOrResponse): NodeJS.WritableStream;
        /** 
         * Provides a stream to write to a page blob. Assumes that the blob exists. 
         * If it does not, please create the blob using createPageBlob before calling this method or use createWriteStreamNewPageBlob.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param options - The request options.
         * @param callback - The callback function.
         */
        createWriteStreamToExistingPageBlob(container: string, blob: string, options: BlobService.CreateFromStreamOptions, callback: ErrorOrResponse): NodeJS.WritableStream;

        /** 
         * Provides a stream to write to a new append blob. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
         * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param callback - The callback function.
         */
        createWriteStreamToNewAppendBlob(container: string, blob: string, callback: ErrorOrResponse): NodeJS.WritableStream;
        /** 
         * Provides a stream to write to a new append blob. If the blob already exists on the service, it will be overwritten.
         * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
         * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
         * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param options - The request options.
         * @param callback - The callback function.
         */
        createWriteStreamToNewAppendBlob(container: string, blob: string, options: BlobService.AppendFromStreamOptions, callback: ErrorOrResponse): NodeJS.WritableStream;

        /** 
         * Provides a stream to write to a page blob. Creates the blob before writing data.
         * If the blob already exists on the service, it will be overwritten.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param callback - The callback function.
         */
        createWriteStreamToNewPageBlob(container: string, blob: string, callback: ErrorOrResponse): NodeJS.WritableStream;
        /** 
         * Provides a stream to write to a page blob. Creates the blob before writing data.
         * If the blob already exists on the service, it will be overwritten.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param options - The request options.
         * @param callback - The callback function.
         */
        createWriteStreamToNewPageBlob(container: string, blob: string, options: BlobService.CreateFromStreamOptions, callback: ErrorOrResponse): NodeJS.WritableStream;

        /** 
         * Marks the specified blob or snapshot for deletion. The blob is later deleted during garbage collection.
         * If a blob has snapshots, you must delete them when deleting the blob.
         * Using the deleteSnapshots option, you can choose either to delete both the blob and its snapshots, or to delete only the snapshots but not the blob itself.
         * If the blob has snapshots, you must include the deleteSnapshots option or the blob service will return an error and nothing will be deleted.
         * If you are deleting a specific snapshot using the snapshotId option, the deleteSnapshots option must NOT be included.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param callback - error will contain information if an error occurs; otherwise response will contain information related to this operation.
         */
        deleteBlob(container: string, blob: string, callback: ErrorOrResponse): void;
        /** 
         * Marks the specified blob or snapshot for deletion. The blob is later deleted during garbage collection.
         * If a blob has snapshots, you must delete them when deleting the blob.
         * Using the deleteSnapshots option, you can choose either to delete both the blob and its snapshots, or to delete only the snapshots but not the blob itself.
         * If the blob has snapshots, you must include the deleteSnapshots option or the blob service will return an error and nothing will be deleted.
         * If you are deleting a specific snapshot using the snapshotId option, the deleteSnapshots option must NOT be included.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise response will contain information related to this operation.
         */
        deleteBlob(container: string, blob: string, options: BlobService.DeleteBlobOptions, callback: ErrorOrResponse): void;

        /** 
         * Marks the specified blob or snapshot for deletion if it exists. The blob is later deleted during garbage collection.
         * If a blob has snapshots, you must delete them when deleting the blob.
         * Using the deleteSnapshots option, you can choose either to delete both the blob and its snapshots, or to delete only the snapshots but not the blob itself.
         * If the blob has snapshots, you must include the deleteSnapshots option or the blob service will return an error and nothing will be deleted.
         * If you are deleting a specific snapshot using the snapshotId option, the deleteSnapshots option must NOT be included.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param callback - error will contain information if an error occurs; otherwise result will be true if the blob exists and was deleted, or false if the container did not exist. response will contain information related to this operation.
         */
        deleteBlobIfExists(container: string, blob: string, callback: ErrorOrResult<boolean>): void;
        /** 
         * Marks the specified blob or snapshot for deletion if it exists. The blob is later deleted during garbage collection.
         * If a blob has snapshots, you must delete them when deleting the blob.
         * Using the deleteSnapshots option, you can choose either to delete both the blob and its snapshots, or to delete only the snapshots but not the blob itself.
         * If the blob has snapshots, you must include the deleteSnapshots option or the blob service will return an error and nothing will be deleted.
         * If you are deleting a specific snapshot using the snapshotId option, the deleteSnapshots option must NOT be included.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will be true if the blob exists and was deleted, or false if the container did not exist. response will contain information related to this operation.
         */
        deleteBlobIfExists(container: string, blob: string, options: BlobService.DeleteBlobOptions, callback: ErrorOrResult<boolean>): void;

        /** 
         * Marks the specified container for deletion. 
         * The container and any blobs contained within it are later deleted during garbage collection.
         * @param container - The container name.
         * @param callback - error will contain information if an error occurs; otherwise response will contain information related to this operation.
         */
        deleteContainer(container: string, callback: ErrorOrResponse): void;
        /** 
         * Marks the specified container for deletion. 
         * The container and any blobs contained within it are later deleted during garbage collection.
         * @param container - The container name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise response will contain information related to this operation.
         */
        deleteContainer(container: string, options: BlobService.LeaseIdOptions, callback: ErrorOrResponse): void;

        /** 
         * Marks the specified container for deletion if it exists.
         * The container and any blobs contained within it are later deleted during garbage collection.
         * @param container - The container name.
         * @param callback - error will contain information if an error occurs; otherwise result will be true if the container exists and was deleted, or false if the container did not exist. response will contain information related to this operation.
         */
        deleteContainerIfExists(container: string, callback: ErrorOrResult<boolean>): void;
        /** 
         * Marks the specified container for deletion if it exists.
         * The container and any blobs contained within it are later deleted during garbage collection.
         * @param container - The container name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will be true if the container exists and was deleted, or false if the container did not exist. response will contain information related to this operation.
         */
        deleteContainerIfExists(container: string, options: BlobService.LeaseIdOptions, callback: ErrorOrResult<boolean>): void;

        /** 
         * Checks whether or not a blob exists on the service.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param callback - error will contain information if an error occurs; otherwise result will be true if the blob exists, or false if the blob does not exist. response will contain information related to this operation.
         */
        doesBlobExist(container: string, blob: string, callback: ErrorOrResult<boolean>): void;
        /** 
         * Checks whether or not a blob exists on the service.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will be true if the blob exists, or false if the blob does not exist. response will contain information related to this operation.
         */
        doesBlobExist(container: string, blob: string, options: Common.DefaultOptions, callback: ErrorOrResult<boolean>): void;

        /** 
         * Checks whether or not a container exists on the service.
         * @param container - The container name.
         * @param callback - error will contain information if an error occurs; otherwise result will be true if the blob exists, or false if the blob does not exist. response will contain information related to this operation.
         */
        doesContainerExist(container: string, callback: ErrorOrResult<boolean>): void;
        /** 
         * Checks whether or not a container exists on the service.
         * @param container - The container name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will be true if the container exists, or false if the blob does not exist. response will contain information related to this operation.
         */
        doesContainerExist(container: string, options: Common.DefaultOptions, callback: ErrorOrResult<boolean>): void;

        /** Generate a random block id prefix */
        generateBlockIdPrefix(): string;

        /**
         * Retrieves a shared access signature token for the specified blob.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param sharedAccessPolicy - The shared access policy.
         * @param headers - The optional header values to set for a blob returned wth this SAS.
         */
        generateSharedAccessSignature(container: string, blob: string, sharedAccessPolicy: Common.SignedIdentifier, headers?: BlobService.Headers): string;
        /**
         * Retrieves a shared access signature token for the specified container.
         * @param container - The container name.
         * @param sharedAccessPolicy - The shared access policy.
         * @param headers - The optional header values to set for a blob returned wth this SAS.
         */
        generateSharedAccessSignature(container: string, sharedAccessPolicy: Common.SignedIdentifier, headers?: BlobService.Headers): string;

        /** 
         * Returns all user-defined metadata for the specified blob or snapshot. It does not modify or return the content of the blob.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        getBlobMetadata(container: string, blob: string, callback: ErrorOrResult<BlobService.BlobResult>): void;
        /** 
         * Returns all user-defined metadata for the specified blob or snapshot. It does not modify or return the content of the blob.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        getBlobMetadata(container: string, blob: string, options: BlobService.SnapshotIdOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;

        /** 
         * Returns all user-defined metadata, standard HTTP properties, and system properties for the blob.
         * It does not return or modify the content of the blob.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        getBlobProperties(container: string, blob: string, callback: ErrorOrResult<BlobService.BlobResult>): void;
        /** 
         * Returns all user-defined metadata, standard HTTP properties, and system properties for the blob.
         * It does not return or modify the content of the blob.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        getBlobProperties(container: string, blob: string, options: BlobService.SnapshotIdOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;

        /** 
         * Downloads a blob into a file.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        getBlobToLocalFile(container: string, blob: string, localFilename: string, callback: ErrorOrResult<BlobService.BlobResult>): void;
        /** 
         * Downloads a blob into a file.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        getBlobToLocalFile(container: string, blob: string, localFilename: string, options: BlobService.GetBlobToFileOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;

        /** 
         * Downloads a blob into a stream.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        getBlobToStream(container: string, blob: string, stream: NodeJS.WritableStream, callback: ErrorOrResult<BlobService.BlobResult>): void;
        /** 
         * Downloads a blob into a stream.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        getBlobToStream(container: string, blob: string, stream: NodeJS.WritableStream, options: BlobService.GetBlobOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;

        /** 
         * Downloads a blob into a text string.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param callback - error will contain information if an error occurs; otherwise text will contain the blob contents, and blockBlob will contain the blob information. response will contain information related to this operation.
         */
        getBlobToText(container: string, blob: string, stream: NodeJS.WritableStream, callback: BlobService.BlobToText): void;
        /** 
         * Downloads a blob into a text string.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise text will contain the blob contents, and blockBlob will contain the blob information. response will contain information related to this operation.
         */
        getBlobToText(container: string, blob: string, stream: NodeJS.WritableStream, options: BlobService.GetBlobOptions, callback: BlobService.BlobToText): void;

        /** 
         * Get a block id according to prefix and block number.
         * @param prefix - The block id prefix.
         * @param number - The block id number.
         */
        getBlockId(prefix: string, number: number): string;

        /** 
         * Gets the container's ACL.
         * @param container - The container name.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the container information. response will contain information related to this operation.
         */
        getContainerAcl(container: string, callback: ErrorOrResult<BlobService.ContainerResult>): void;
        /** 
         * Gets the container's ACL.
         * @param container - The container name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the container information. response will contain information related to this operation.
         */
        getContainerAcl(container: string, options: BlobService.LeaseIdOptions, callback: ErrorOrResult<BlobService.ContainerResult>): void;

        /** 
         * Returns all user-defined metadata for the container.
         * @param container - The container name.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the container information. response will contain information related to this operation.
         */
        getContainerMetadata(container: string, callback: ErrorOrResult<BlobService.ContainerResult>): void;
        /** 
         * Returns all user-defined metadata for the container.
         * @param container - The container name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the container information. response will contain information related to this operation.
         */
        getContainerMetadata(container: string, options: BlobService.LeaseIdOptions, callback: ErrorOrResult<BlobService.ContainerResult>): void;

        /** 
         * Retrieves a container and its properties from a specified account.
         * @param container - The container name.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the container information. response will contain information related to this operation.
         */
        getContainerProperties(container: string, callback: ErrorOrResult<BlobService.ContainerResult>): void;
        /** 
         * Retrieves a container and its properties from a specified account.
         * @param container - The container name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the container information. response will contain information related to this operation.
         */
        getContainerProperties(container: string, options: BlobService.LeaseIdOptions, callback: ErrorOrResult<BlobService.ContainerResult>): void;

        /** 
         * Gets the properties of a storage account’s Blob service, including Azure Storage Analytics.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the properties. response will contain information related to this operation.
         */
        getServiceProperties(callback: ErrorOrResult<Common.ServicePropertiesResult>): void;
        /** 
         * Gets the properties of a storage account’s Blob service, including Azure Storage Analytics.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the properties. response will contain information related to this operation.
         */
        getServiceProperties(options: Common.DefaultOptions, callback: ErrorOrResult<Common.ServicePropertiesResult>): void;

        /** 
         * Gets the service stats for a storage account’s Blob service.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the properties. response will contain information related to this operation.
         */
        getServiceStats(callback: ErrorOrResult<Common.ServiceStatsResult>): void;
        /** 
         * Gets the service stats for a storage account’s Blob service.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the properties. response will contain information related to this operation.
         */
        getServiceStats(options: Common.DefaultOptions, callback: ErrorOrResult<Common.ServiceStatsResult>): void;

        /**
         * Retrieves a container URL.
         * @param container - The container name.
         */
        getUrl(container: string): string;
        /**
         * Retrieves a blob URL.
         * @param container - The container name.
         * @param blob - The blob name.
         */
        getUrl(container: string, blob: string): string;
        /**
         * Retrieves a blob URL using an optional sasToken and host.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param sasToken - The Shared Access Signature token.
         * @param primary - A boolean representing whether to use the primary or the secondary endpoint.
         */
        getUrl(container: string, blob: string, sasToken: Common.SignedIdentifier, primary?: boolean): string;

        /** 
         * Lists a segment containing a collection of blob directory items in the container.
         * @param container - The container name.
         * @param currentToken - A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
         * @param callback - error will contain information if an error occurs; otherwise result will contain entries and continuationToken. entries gives a list of directories and the continuationToken is used for the next listing operation. response will contain information related to this operation.
         */
        listBlobDirectoriesSegmented(container: string, currentToken: Common.ContinuationToken, callback: ErrorOrResult<BlobService.BlobListResult>): void;
        /** 
         * Lists a segment containing a collection of blob directory items in the container.
         * @param container - The container name.
         * @param currentToken - A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain entries and continuationToken. entries gives a list of directories and the continuationToken is used for the next listing operation. response will contain information related to this operation.
         */
        listBlobDirectoriesSegmented(container: string, currentToken: Common.ContinuationToken, options: BlobService.ListDirectoriesOptions, callback: ErrorOrResult<BlobService.BlobListResult>): void;

        /** 
         * Lists a segment containing a collection of blob directory items in the container.
         * @param container - The container name.
         * @param prefix - The prefix of the blob directory.
         * @param currentToken - A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
         * @param callback - error will contain information if an error occurs; otherwise result will contain entries and continuationToken. entries gives a list of directories and the continuationToken is used for the next listing operation. response will contain information related to this operation.
         */
        listBlobDirectoriesSegmentedWithPrefix(container: string, prefix: string, currentToken: Common.ContinuationToken, callback: ErrorOrResult<BlobService.BlobListResult>): void;
        /** 
         * Lists a segment containing a collection of blob directory items in the container.
         * @param container - The container name.
         * @param prefix - The prefix of the blob directory.
         * @param currentToken - A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain entries and continuationToken. entries gives a list of directories and the continuationToken is used for the next listing operation. response will contain information related to this operation.
         */
        listBlobDirectoriesSegmentedWithPrefix(container: string, prefix: string, currentToken: Common.ContinuationToken, options: BlobService.ListDirectoriesOptions, callback: ErrorOrResult<BlobService.BlobListResult>): void;

        /** 
         * Lists a segment containing a collection of blob items items in the container.
         * @param container - The container name.
         * @param currentToken - A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
         * @param callback - error will contain information if an error occurs; otherwise result will contain entries and continuationToken. entries gives a list of blobs and the continuationToken is used for the next listing operation. response will contain information related to this operation.
         */
        listBlobsSegmented(container: string, currentToken: Common.ContinuationToken, callback: ErrorOrResult<BlobService.BlobListResult>): void;
        /** 
         * Lists a segment containing a collection of blob items items in the container.
         * @param container - The container name.
         * @param currentToken - A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain entries and continuationToken. entries gives a list of blobs and the continuationToken is used for the next listing operation. response will contain information related to this operation.
         */
        listBlobsSegmented(container: string, currentToken: Common.ContinuationToken, options: BlobService.ListBlobsOptions, callback: ErrorOrResult<BlobService.BlobListResult>): void;

        /** 
         * Lists a segment containing a collection of blob items items in the container.
         * @param container - The container name.
         * @param prefix - The prefix of the blob name.
         * @param currentToken - A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
         * @param callback - error will contain information if an error occurs; otherwise result will contain entries and continuationToken. entries gives a list of blobs and the continuationToken is used for the next listing operation. response will contain information related to this operation.
         */
        listBlobsSegmentedWithPrefix(container: string, prefix: string, currentToken: Common.ContinuationToken, callback: ErrorOrResult<BlobService.BlobListResult>): void;
        /** 
         * Lists a segment containing a collection of blob items items in the container.
         * @param container - The container name.
         * @param prefix - The prefix of the blob directory.
         * @param currentToken - A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain entries and continuationToken. entries gives a list of blobs and the continuationToken is used for the next listing operation. response will contain information related to this operation.
         */
        listBlobsSegmentedWithPrefix(container: string, prefix: string, currentToken: Common.ContinuationToken, options: BlobService.ListBlobsOptions, callback: ErrorOrResult<BlobService.BlobListResult>): void;

        /** 
         * Downloads a blob into a file.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param blocklisttype - The type of block list to retrieve.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blocklist information. response will contain information related to this operation.
         */
        listBlocks(container: string, blob: string, blocklisttype: ENUM<BlobUtilities.BlockListFilter>, callback: ErrorOrResult<BlobService.BlockListResult>): void;
        /** 
         * Downloads a blob into a file.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param blocklisttype - The type of block list to retrieve.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blocklist information. response will contain information related to this operation.
         */
        listBlocks(container: string, blob: string, localFilename: ENUM<BlobUtilities.BlockListFilter>, options: BlobService.SnapshotIdOptions, callback: ErrorOrResult<BlobService.BlockListResult>): void;

        /** 
         * Lists a segment containing a collection of container items under the specified account.
         * @param currentToken - A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
         * @param callback - error will contain information if an error occurs; otherwise result will contain entries and continuationToken. entries gives a list of blobs and the continuationToken is used for the next listing operation. response will contain information related to this operation.
         */
        listContainersSegmented(currentToken: Common.ContinuationToken, callback: ErrorOrResult<BlobService.ContainerListResult>): void;
        /** 
         * Lists a segment containing a collection of container items under the specified account.
         * @param currentToken - A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain entries and continuationToken. entries gives a list of blobs and the continuationToken is used for the next listing operation. response will contain information related to this operation.
         */
        listContainersSegmented(currentToken: Common.ContinuationToken, options: BlobService.ListContainersOptions, callback: ErrorOrResult<BlobService.ContainerListResult>): void;

        /** 
         * Lists a segment containing a collection of container items whose names begin with the specified prefix under the specified account.
         * @param prefix - The prefix of the container name.
         * @param currentToken - A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
         * @param callback - error will contain information if an error occurs; otherwise result will contain entries and continuationToken. entries gives a list of blobs and the continuationToken is used for the next listing operation. response will contain information related to this operation.
         */
        listContainersSegmentedWithPrefix(prefix: string, currentToken: Common.ContinuationToken, callback: ErrorOrResult<BlobService.ContainerListResult>): void;
        /** 
         * Lists a segment containing a collection of container items whose names begin with the specified prefix under the specified account.
         * @param prefix - The prefix of the container name.
         * @param currentToken - A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain entries and continuationToken. entries gives a list of blobs and the continuationToken is used for the next listing operation. response will contain information related to this operation.
         */
        listContainersSegmentedWithPrefix(prefix: string, currentToken: Common.ContinuationToken, options: BlobService.ListContainersOptions, callback: ErrorOrResult<BlobService.ContainerListResult>): void;

        /** 
         * Lists page ranges. Lists all of the page ranges by default, or only the page ranges over a specific range of bytes if rangeStart and rangeEnd are specified.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the page range information. response will contain information related to this operation.
         */
        listPageRanges(container: string, blob: string, callback: ErrorOrResult<BlobService.PageRangesResult>): void;
        /** 
         * Lists page ranges. Lists all of the page ranges by default, or only the page ranges over a specific range of bytes if rangeStart and rangeEnd are specified.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the page range information. response will contain information related to this operation.
         */
        listPageRanges(container: string, blob: string, options: BlobService.ListPageRangesOptions, callback: ErrorOrResult<BlobService.PageRangesResult>): void;

        /** 
         * Releases the lease. If container and blob are specified, releases the blob lease.
         * Otherwise, if only container is specified and blob is null, releases the container lease.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param leaseId - The current lease identifier.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the lease information. response will contain information related to this operation.
         */
        releaseLease(container: string, blob: string, leaseId: string, callback: ErrorOrResult<BlobService.LeaseResult>): void;
        /** 
         * Releases the lease. If container and blob are specified, releases the blob lease.
         * Otherwise, if only container is specified and blob is null, releases the container lease.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param leaseId - The current lease identifier.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the lease information. response will contain information related to this operation.
         */
        releaseLease(container: string, blob: string, leaseId: string, options: Common.AccessConditionsOptions, callback: ErrorOrResult<BlobService.LeaseResult>): void;

        /** 
         * Renews an existing lease. If container and blob are specified, renews the blob lease.
         * Otherwise, if only container is specified and blob is null, renews the container lease.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param leaseId - The current lease identifier.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the lease information. response will contain information related to this operation.
         */
        renewLease(container: string, blob: string, leaseId: string, callback: ErrorOrResult<BlobService.LeaseResult>): void;
        /** 
         * Renews an existing lease. If container and blob are specified, renews the blob lease.
         * Otherwise, if only container is specified and blob is null, renews the container lease.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param leaseId - The current lease identifier.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the lease information. response will contain information related to this operation.
         */
        renewLease(container: string, blob: string, leaseId: string, options: Common.AccessConditionsOptions, callback: ErrorOrResult<BlobService.LeaseResult>): void;

        /** 
         * Resizes a page blob.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param size - The size of the page blob, in bytes.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        resizePageBlob(container: string, blob: string, size: string | number, callback: ErrorOrResult<BlobService.BlobResult>): void;
        /** 
         * Resizes a page blob.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param size - The size of the page blob, in bytes.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        resizePageBlob(container: string, blob: string, size: string | number, options: BlobService.LeaseAndAccessConditionsOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;

        /** 
         * Sets user-defined metadata for the specified blob or snapshot as one or more name-value pairs It does not modify or return the content of the blob.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param metadata - The metadata key/value pairs.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        setBlobMetadata(container: string, blob: string, metadata: Common.Metadata, callback: ErrorOrResult<BlobService.BlobResult>): void;
        /** 
         * Sets user-defined metadata for the specified blob or snapshot as one or more name-value pairs It does not modify or return the content of the blob.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param metadata - The metadata key/value pairs.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        setBlobMetadata(container: string, blob: string, metadata: Common.Metadata, options: BlobService.SnapshotIdOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;

        /** 
         * Sets user-defined properties for the specified blob or snapshot. It does not modify or return the content of the blob.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param properties - The blob properties to set.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        setBlobProperties(container: string, blob: string, properties: BlobService.Headers, callback: ErrorOrResult<BlobService.BlobResult>): void;
        /** 
         * Sets user-defined properties for the specified blob or snapshot. It does not modify or return the content of the blob.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param properties - The blob properties to set.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        setBlobProperties(container: string, blob: string, properties: BlobService.Headers, options: BlobService.LeaseAndAccessConditionsOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;

        /** 
         * Updates the container's ACL.
         * @param container - The container name.
         * @param signedIdentifiers - The signed identifiers. Signed identifiers must be in an array.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the container information. response will contain information related to this operation.
         */
        setContainerAcl(container: string, signedIdentifiers: Common.SignedIdentifier[], callback: ErrorOrResult<BlobService.ContainerResult>): void;
        /** 
         * Updates the container's ACL.
         * @param container - The container name.
         * @param signedIdentifiers - The signed identifiers. Signed identifiers must be in an array.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the container information. response will contain information related to this operation.
         */
        setContainerAcl(container: string, signedIdentifiers: Common.SignedIdentifier[], options: BlobService.LeaseAndAccessConditionsOptions, callback: ErrorOrResult<BlobService.ContainerResult>): void;

        /** 
         * Calling the Set Container Metadata operation overwrites all existing metadata that is associated with the container.
         * It's not possible to modify an individual name/value pair.
         * @param container - The container name.
         * @param metadata - The metadata key/value pairs.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the container information. response will contain information related to this operation.
         */
        setContainerMetadata(container: string, metadata: Common.Metadata, callback: ErrorOrResult<BlobService.ContainerResult>): void;
        /** 
         * Calling the Set Container Metadata operation overwrites all existing metadata that is associated with the container.
         * It's not possible to modify an individual name/value pair.
         * @param container - The container name.
         * @param metadata - The metadata key/value pairs.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the container information. response will contain information related to this operation.
         */
        setContainerMetadata(container: string, metadata: Common.Metadata, options: BlobService.LeaseAndAccessConditionsOptions, callback: ErrorOrResult<BlobService.ContainerResult>): void;

        /**
         * Sets the page blob's sequence number.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param sequenceNumberAction - A value indicating the operation to perform on the sequence number. The allowed values are defined in azure.BlobUtilities.SequenceNumberAction.
         * @param sequenceNumber - The sequence number. The value of the sequence number must be between 0 and 2^63 - 1. Set this parameter to null if this operation is an increment action.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        setPageBlobSequenceNumber(container: string, blob: string, sequenceNumberAction: ENUM<BlobUtilities.SequenceNumberAction>, sequenceNumber: string | number, callback: ErrorOrResult<BlobService.BlobResult>): void;
        /**
         * Sets the page blob's sequence number.
         * @param container - The container name.
         * @param blob - The blob name.
         * @param sequenceNumberAction - A value indicating the operation to perform on the sequence number. The allowed values are defined in azure.BlobUtilities.SequenceNumberAction.
         * @param sequenceNumber - The sequence number. The value of the sequence number must be between 0 and 2^63 - 1. Set this parameter to null if this operation is an increment action.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        setPageBlobSequenceNumber(container: string, blob: string, sequenceNumberAction: ENUM<BlobUtilities.SequenceNumberAction>, sequenceNumber: string | number, options: BlobService.LeaseAndAccessConditionsOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;

        /** 
         * Calling the Set Container Metadata operation overwrites all existing metadata that is associated with the container.
         * It's not possible to modify an individual name/value pair.
         * @param properties - The service properties.
         * @param callback - error will contain information if an error occurs; otherwise, response will contain information related to this operation.
         */
        setServiceProperties(properties: Common.ServiceProperties, callback: ErrorOrResponse): void;
        /** 
         * Calling the Set Container Metadata operation overwrites all existing metadata that is associated with the container.
         * It's not possible to modify an individual name/value pair.
         * @param properties - The service properties.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise, response will contain information related to this operation.
         */
        setServiceProperties(properties: Common.ServiceProperties, options: Common.DefaultOptions, callback: ErrorOrResponse): void;

        /** 
         * Starts to copy a blob to a destination within the storage account. The Copy Blob operation copies the entire committed blob.
         * @param sourceUri - The source blob URI.
         * @param targetContainer - The target container name.
         * @param targetBlob - The target blob name.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        startCopyBlob(sourceUri: string, targetContainer: string, targetBlob: string, callback: ErrorOrResult<BlobService.BlobResult>): void;
        /** 
         * Starts to copy a blob to a destination within the storage account. The Copy Blob operation copies the entire committed blob.
         * @param sourceUri - The source blob URI.
         * @param targetContainer - The target container name.
         * @param targetBlob - The target blob name.
         * @param options - The request options.
         * @param callback - error will contain information if an error occurs; otherwise result will contain the blob information. response will contain information related to this operation.
         */
        startCopyBlob(sourceUri: string, targetContainer: string, targetBlob: string, options: BlobService.StartCopyOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;
    }
    export namespace BlobService {

        export class BlobResult {
            blob: string;
            container: string;

            etag: string;
            lastModified: string;
            contentType: string;
            contentEncoding: string;
            contentLanguage: string;
            contentMD5: string;
            cacheControl: string;
            contentRange: string;
            contentTypeHeader: string;
            contentEncodingHeader: string;
            contentLanguageHeader: string;
            contentMD5Header: string;
            cacheControlHeader: string;
            contentLength: number;
            contentLengthHeader: number;
            contentDisposition: string;
            contentDispositionHeader: string;
            range: string;
            rangeHeader: string;
            getContentMd5: string;
            acceptRanges: string;
            blobType: string;
            leaseStatus: string;
            leaseId: string;
            leaseDuration: string;
            leaseState: string;
            sequenceNumber: string;
            copyStatus: string;
            copyCompletionTime: string;
            copyStatusDescription: string;
            copyId: string;
            copyProgress: number;
            requestId: string;

            metadata: Common.Metadata;

            constructor();
            constructor(container: string);
            constructor(container: string, blob: string);

            static parse(blobXml: any): BlobResult;
            static setHeadersFromBlob(webResource: Internal.WebResource, blob: BlobResult): void;

            getPropertiesFromHeaders(headers: any): void;
        }

        export class ContainerResult {
            name: string;
            publicAccessLevel: string;

            etag: string;
            lastModified: string;
            leaseStatus: string;
            leaseDuration: string;
            leaseState: string;
            requestId: string;

            metadata: Common.Metadata;
            signedIdentifiers: Common.SignedIdentifier[];

            constructor();
            constructor(name: string);
            constructor(name: string, publicAccessLevel: string);

            static parse(containerXml: any): ContainerResult;

            getPropertiesFromHeaders(headers: any): void;
        }

        export class LeaseResult {
            container: string;
            blob: string;
            id: string;
            time: string;
            etag: string;
            lastModified: string;

            constructor();
            constructor(container: string);
            constructor(container: string, blob: string);
            constructor(container: string, blob: string, id: string);
            constructor(container: string, blob: string, id: string, time: string);

            getPropertiesFromHeaders(header: any): void;
        }

        export interface BlockListResult {
            CommittedBlocks?: string[];
            UncommittedBlocks?: string[];
        }

        export interface BlobListResult {
            /** List of blob results */
            entries: BlobResult[];
            /** Contains informations for the next listing operation.*/
            continuationToken: Common.ContinuationToken;
        }

        export interface ContainerListResult {
            /** List of container results */
            entries: ContainerResult[];
            /** Contains informations for the next listing operation.*/
            continuationToken: Common.ContinuationToken;
        }

        export interface PageRangesResult extends Array<{ start: number; end: number; }> { }

        export interface Headers {
            /** The optional value of the Cache-Control response header to be returned when this SAS is used. */
            cacheControl?: string;
            /** The optional value of the Content-Type response header to be returned when this SAS is used. */
            contentType?: string;
            /** The optional value of the Content-Encoding response header to be returned when this SAS is used. */
            contentEncoding?: string;
            /** The optional value of the Content-Language response header to be returned when this SAS is used. */
            contentLanguage?: string;
            /** The optional value of the Content-Disposition response header to be returned when this SAS is used. */
            contentDisposition?: string;
        }

        export interface LeaseIdOptions extends Common.DefaultOptions {
            /** The target blob lease identifier. */
            leaseId?: string;
        }

        export interface LeaseAndAccessConditionsOptions extends Common.AccessConditionsOptions, LeaseIdOptions { }

        export interface SnapshotIdOptions extends LeaseAndAccessConditionsOptions {
            /** The snapshot identifier. */
            snapshotId?: string;
        }

        export interface BlobContentOptions extends LeaseAndAccessConditionsOptions {
            /** The metadata key/value pairs. */
            metadata?: Common.Metadata;
            /** The MIME content type of the blob. The default type is application/octet-stream. */
            contentType?: string;
            /** The content encodings that have been applied to the blob. */
            contentEncoding?: string;
            /** The natural languages used by this resource. */
            contentLanguage?: string;
            /** The blob’s MD5 hash. */
            contentMD5?: string;
            /** The Blob service stores this value but does not use or modify it. */
            cacheControl?: string;
            /** The blob's content disposition. */
            contentDisposition?: string;
        }

        /** Options for BlobService.acquireLease function. */
        export interface AcquireLeaseOptions extends Common.AccessConditionsOptions {
            /** The lease duration in seconds. A non-infinite lease can be between 15 and 60 seconds. Default is never to expire. */
            leaseDuration?: string;
            /** The proposed lease identifier. Must be a GUID. */
            proposedLeaseId?: string;
        }

        /** Options for BlobService.appendBlock functions. */
        export interface AppendBlockOptions extends LeaseAndAccessConditionsOptions {
            /** Specifies whether to absorb the conditional error on retry. */
            absorbConditionalErrorsOnRetry?: boolean;
            /** The max length in bytes allowed for the append blob to grow to. */
            maxBlobSize?: number;
            /** The number indicating the byte offset to check for. The append will succeed only if the end position of the blob is equal to this number. */
            appendPosition?: number;
            /** The blob’s MD5 hash. */
            contentMD5?: string;
        }

        /** Options for BlobService.AppendFromFile functions. */
        export interface AppendFromFileOptions extends BlobContentOptions {
            /** Specifies whether to absorb the conditional error on retry. */
            absorbConditionalErrorsOnRetry?: boolean;
            /** Specifies whether the blob's ContentMD5 header should be set on uploads. The default value is true for block blobs. */
            storeBlobContentMD5?: boolean;
        }

        /** Options for BlobService.AppendFromStream functions. */
        export interface AppendFromStreamOptions extends AppendFromFileOptions {
            /** The download tracker objects. */
            speedSummary?: Common.SpeedSummary;
            /** Calculate and send/validate content MD5 for transactions. */
            useTransactionalMD5?: boolean;
        }

        /** Options for BlobService.AppendFromText functions. */
        export interface AppendFromTextOptions extends AppendFromFileOptions {
            /** Calculate and send/validate content MD5 for transactions. */
            useTransactionalMD5?: boolean;
        }

        /** Options for BlobService.breakLease function. */
        export interface BreakLeaseOptions extends Common.AccessConditionsOptions {
            /** The lease break period, between 0 and 60 seconds. If unspecified, a fixed-duration lease breaks after the remaining lease period elapses, and an infinite lease breaks immediately. */
            leaseBreakPeriod?: number;
        }

        /** Options for BlobService.createBlobSnapshot function. */
        export interface CreateSnapshotOptions extends SnapshotIdOptions {
            /** The metadata key/value pairs. */
            metadata?: Common.Metadata;
        }

        /** Options for BlobService.createBlockBlobFromFile function. */
        export interface CreateFromFileOptions extends BlobContentOptions {
            /** Specifies whether to absorb the conditional error on retry. */
            blockIdPrefix?: string;
            /** Parallel operation thread count. */
            parallelOperationThreadCount?: number;
            /** Specifies whether the blob's ContentMD5 header should be set on uploads. The default value is true for block blobs. */
            storeBlobContentMD5?: boolean;
        }

        /** Options for BlobService.createBlockBlobFromStream function. */
        export interface CreateFromStreamOptions extends CreateFromFileOptions {
            /** The download tracker objects. */
            speedSummary?: Common.SpeedSummary;
            /** Calculate and send/validate content MD5 for transactions. */
            useTransactionalMD5?: boolean;
        }

        /** Options for BlobService.createBlockBlobFromText function. */
        export interface CreateFromTextOptions extends BlobContentOptions {
            /** Specifies whether the blob's ContentMD5 header should be set on uploads. The default value is true for block blobs. */
            storeBlobContentMD5?: boolean;
            /** Calculate and send/validate content MD5 for transactions. */
            useTransactionalMD5?: boolean;
        }

        /** Options for BlobService.createBlock functions. */
        export interface CreateBlockOptions extends LeaseAndAccessConditionsOptions {
            /** Calculate and send/validate content MD5 for transactions. */
            useTransactionalMD5?: boolean;
            /** The blob’s MD5 hash. */
            contentMD5?: string;
        }

        /** Options for BlobService.createContainer functions. */
        export interface CreateContainerOptions extends Common.DefaultOptions {
            /** The metadata key/value pairs. */
            metadata?: Common.Metadata;
            /** Specifies whether data in the container may be accessed publicly and the level of access. */
            publicAccessLevel?: string;
        }

        /** Options for BlobService.createPageBlob function. */
        export interface PageBlobContentOptions extends BlobContentOptions {
            /** The blob's sequence number. (x-ms-blob-sequence-number) */
            sequenceNumber?: string;
        }

        /** Options for BlobService.createPagesFromStream function. */
        export interface CreatePagesFromStreamOptions extends LeaseAndAccessConditionsOptions {
            /** An optional hash value used to ensure transactional integrity for the page. */
            contentMD5?: boolean;
            /** Calculate and send/validate content MD5 for transactions. */
            useTransactionalMD5?: boolean;
        }

        /** Options for BlobService.createReadStream function. */
        export interface ReadStreamOptions extends SnapshotIdOptions {
            /** Return only the bytes of the blob in the specified range. */
            rangeStart?: string;
            /** Return only the bytes of the blob in the specified range. */
            rangeEnd?: string;
        }

        /** Options for BlobService.deleteBlob functions. */
        export interface DeleteBlobOptions extends SnapshotIdOptions {
            /** The snapshot delete option. See azure.BlobUtilities.SnapshotDeleteOptions.*. */
            deleteSnapshots?: string;
        }

        /** Options for BlobService.getBlob functions. */
        export interface GetBlobOptions extends SnapshotIdOptions {
            /** Calculate and send/validate content MD5 for transactions. */
            useTransactionalMD5?: boolean;
            /** When set to true, MD5 validation will be disabled when downloading blobs. */
            disableContentMD5Validation?: boolean;
            /** Return only the bytes of the blob in the specified range. */
            rangeStart?: string;
            /** Return only the bytes of the blob in the specified range. */
            rangeEnd?: string;
        }

        /** Options for BlobService.getBlobToLocalFile function. */
        export interface GetBlobToFileOptions extends GetBlobOptions {
            /** Parallel operation thread count. */
            parallelOperationThreadCount?: number;
            /** The download tracker objects. */
            speedSummary?: Common.SpeedSummary;
        }

        /** Callback for BlobService.getBlobToText function. */
        export type BlobToText = (err: Error, text: string, blobResult: BlobResult, response: any) => void;

        /** Options for BlobService.listBlobDirectories functions. */
        export interface ListDirectoriesOptions extends Common.DefaultOptions {
            /** Specifies the maximum number of directories to return per call to Azure ServiceClient. This does NOT affect list size returned by this function. (maximum: 5000) */
            maxResults?: number;
        }

        /** Options for BlobService.listBlobs functions. */
        export interface ListBlobsOptions extends Common.DefaultOptions {
            /** Specifies the maximum number of blobs to return per call to Azure ServiceClient. This does NOT affect list size returned by this function. (maximum: 5000) */
            maxResults?: number;
            /** Delimiter, i.e. '/', for specifying folder hierarchy. */
            delimiter?: string;
            /** Specifies that the response should include one or more of the following subsets: '', 'metadata', 'snapshots', 'uncommittedblobs'). Multiple values can be added separated with a comma (,) */
            include?: string;
        }

        /** Options for BlobService.listContainers functions. */
        export interface ListContainersOptions extends Common.DefaultOptions {
            /** Specifies the maximum number of containers to return per call to Azure storage. */
            maxResults?: number;
            /** Include this parameter to specify that the container's metadata be returned as part of the response body. (allowed values: '', 'metadata') */
            include?: string;
        }

        /** Options for BlobService.listPageRanges function. */
        export interface ListPageRangesOptions extends SnapshotIdOptions {
            /** Return only the bytes of the blob in the specified range. */
            rangeStart?: string;
            /** Return only the bytes of the blob in the specified range. */
            rangeEnd?: string;
        }

        /** Options for BlobService.startCopyBlob function. */
        export interface StartCopyOptions extends SnapshotIdOptions {
            /** The metadata key/value pairs. */
            metadata?: Common.Metadata;
            /** The source blob lease identifier. */
            sourceLeaseId?: string;
            /** The access conditions. See http://msdn.microsoft.com/en-us/library/dd179371.aspx for more information. */
            sourceAccessConditions?: AccessCondition.AccessConditions;
        }
    }

    export class FileService extends StorageServiceClient { }
    export namespace FileService {
    }

    export class QueueService extends StorageServiceClient { }
    export namespace QueueService {
    }

    export class TableService extends StorageServiceClient { }
    export namespace TableService {
    }

    export class TableBatch {
    }

    export class TableQuery {
    }

    /** Creates a new BlobService object using the AZURE_STORAGE_CONNECTION_STRING or AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_ACCESS_KEY environment variables. */
    export function createBlobService(): BlobService;
    /** 
     * Creates a new BlobService object using the specified connection string.
     * @param connectionString - The storage account connection string.
     */
    export function createBlobService(connectionString: string): BlobService;
    /** 
     * Creates a new BlobService object using the specified storage account name and storage account key.
     * @param storageAccount - The storage account name.
     * @param storageAccessKey - The storage access key.
     * @param host - The host address. To define primary only, pass a string. Otherwise 'host.primaryHost' defines the primary host and 'host.secondaryHost' defines the secondary host.
     */
    export function createBlobService(storageAccount: string, storageAccessKey: string, host?: string | Common.HostConfiguration): BlobService;
    /**
     * Creates a new BlobService object using the host uri and anonymous access.
     * @param host - The host address. To define primary only, pass a string. Otherwise 'host.primaryHost' defines the primary host and 'host.secondaryHost' defines the secondary host.
     */
    export function createBlobServiceAnonymous(host?: string | Common.HostConfiguration): BlobService;
    /**
     * Creates a new BlobService object using the host Uri and the SAS credentials provided.
     * @param host - The host address. To define primary only, pass a string. Otherwise 'host.primaryHost' defines the primary host and 'host.secondaryHost' defines the secondary host.
     * @param sasToken - The Shared Access Signature token.
     */
    export function createBlobServiceWithSas(host: string | Common.HostConfiguration, sasToken: string): BlobService;
}

declare module "azure-storage" {
    const storage: typeof AzureStorage;
    export = storage;
}

interface NodeRequireFunction {
    (id: "azure-storage"): typeof AzureStorage;
}
