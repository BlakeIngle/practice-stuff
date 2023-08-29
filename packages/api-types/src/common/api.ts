// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DefaultResponse<
  TDataType = Record<string, unknown>, // provide a type of what is getting returned
  UDataType extends TDataType = TDataType // optionally provide another type as an overwrite type that must comply with the TDataType
> = {
  message?: string
  data?: UDataType extends TDataType ? UDataType : TDataType // if we passed 2 types, use 2nd, else use 1st
  error?: { message: string; error: string }
}
