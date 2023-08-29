import { useState } from "react"

import { DialogProps, DialogState } from "@/components/dialogs"

/**
 * Where to use:
 *
 * The useDialogState hook as the name implies, controls the state of a dialog.
 * The hook is intended for use in an arbitrary component that needs to use
 * a dialog. For instance, a page that has a child button element that opens a
 * dialog, the page component will implement the useDialogState hook.
 *
 * How to use:
 *
 * All dialogs share a state the idea of 'being open' and must have
 * a function to open the dialog, and usually cause a side-effect
 * when closed.
 * Bespoke dialogs extend this commonality with bespoke properties / props.
 * For any dialog, think of the unique state needed that are not the `isOpen` state
 * or the `closeDialog` dispatch function.
 *
 * You must define an interface for your dialog state that extends `DialogState`
 * and an interface for your dialogs props that extends your dialog state interface
 * and extends the `DialogProps` interface from our template (not from mui.)
 *
 * Pass the default values for the dialog's state into the hook and
 * deconstruct the `openDialog` and function.
 * Also, desctucture the remaining "dialog state" values using the
 * spread syntax:
 *
 * ```ts
 *  const {
 *    openDialog: openMyDialog, // alias the name if you want
 *    ...myDialogState // this includes 'isOpen' and 'closeDialog'
 *  } = useDialogState<MyDialogProps>({
 *    // add other default values for `MyDialogProps` properties here
 *  })
 * ```
 *
 * Last:
 *
 * In the component's template, add an instance of your Dialog
 * and spread all of the dialog state values into it using the
 * spread operator again.
 *
 * ```ts
 *   <MyDialog {...myDialogState} />
 * ```
 *
 * Nice!
 *
 * @param initialState
 * @returns
 */
function useDialogState<TDialogState extends DialogState = DialogState>(
  initialState: TDialogState
) {
  const [dialogState, setDialogState] = useState<
    TDialogState & Pick<DialogProps, "isOpen">
  >({
    ...initialState,
    isOpen: false,
  })

  function openDialog(newDialogState: TDialogState) {
    setDialogState({ ...newDialogState, isOpen: true })
  }

  function closeDialog() {
    setDialogState((currentState) => ({ ...currentState, isOpen: false }))
  }

  return { openDialog, closeDialog, ...dialogState }
}

export default useDialogState
