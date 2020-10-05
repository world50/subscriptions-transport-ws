import { $$asyncIterator } from 'iterall';

type EmptyIterable = AsyncIterator<any> & { [$$asyncIterator]: any };

interface MockAsyncIterator<T> extends AsyncIterator<T> {
  isMock: boolean;
}

export const createEmptyIterable = (): MockAsyncIterator<any> => {
  return {
    isMock: true,
    next() {
      return Promise.resolve({ value: undefined, done: true });
    },
    return() {
      return Promise.resolve({ value: undefined, done: true });
    },
    throw(e: Error) {
      return Promise.reject(e);
    },
    [$$asyncIterator]() {
      return this;
    },
  } as any;
};
