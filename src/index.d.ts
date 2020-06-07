export declare const call: <TFunction extends (() => void) | undefined | null>(
  someFn: TFunction,
  ...args: TFunction extends () => void ? Parameters<TFunction> : never
) => ReturnType<TFunction>
