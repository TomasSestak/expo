import { IAPErrorCode, IAPItemType, IAPQueryResponse, IAPResponseCode, InAppPurchase, InAppPurchaseState, IAPItemDetails } from './InAppPurchases.types';
export { InAppPurchase, InAppPurchaseState, IAPResponseCode, IAPErrorCode, IAPItemType, IAPQueryResponse, IAPItemDetails, };
export declare function connectAsync(): Promise<void>;
export declare function getProductsAsync(itemList: string[]): Promise<IAPQueryResponse<IAPItemDetails>>;
export declare function getPurchaseHistoryAsync(options?: {
    useGooglePlayCache: boolean;
}): Promise<IAPQueryResponse<InAppPurchase>>;
export declare function purchaseItemAsync(itemId: string, oldItem?: string): Promise<void>;
export declare function setPurchaseListener(callback: (result: IAPQueryResponse<InAppPurchase>) => void): void;
export declare function finishTransactionAsync(purchase: InAppPurchase, consumeItem: boolean): Promise<void>;
export declare function getBillingResponseCodeAsync(): Promise<number>;
export declare function disconnectAsync(): Promise<void>;
