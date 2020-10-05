interface MockAsyncIterator<T> extends AsyncIterator<T> {
    isMock: boolean;
}
export declare const createEmptyIterable: () => MockAsyncIterator<any>;
export {};
