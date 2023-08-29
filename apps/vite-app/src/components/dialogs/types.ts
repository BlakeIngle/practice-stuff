import { ReactNode } from "react"

interface DialogProps {
  isOpen: boolean
  closeDialog: () => void
  children?: ReactNode
}

export interface DialogState
  extends Omit<DialogProps, "isOpen" | "closeDialog" | "children"> {}

interface AsyncDialogProps<TResolveType> extends Omit<DialogProps, "onClose"> {
  resolve: ((payload: TResolveType) => void) | null
  reject: (() => void) | null
  isResolving: boolean
}

export type { DialogProps, AsyncDialogProps }
