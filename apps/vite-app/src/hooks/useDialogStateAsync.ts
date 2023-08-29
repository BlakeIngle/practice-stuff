import { useState } from "react"

import { AsyncDialogProps } from "@/components/dialogs"

/**
 * Where to use:
 *
 * The useDialogStateAsync hook as the name implies, controls the state of a
 * dialog, but has an asynchronous behavior.
 * The hook is intended for use in an arbitrary component that needs to use
 * a dialog when the dialog has an asynchronous behavior (such as making a
 * PUT / POST / DELETE request.) For instance, a page that has a child
 * button element that opens a dialog and that dialog contains an async
 * implementation that your page must provide / control the state of, then
 * the page component will implement the useDialogStateAsync hook.
 *
 * You should only use `useDialogStateAsync` over `useDialogState` when you
 * are certain that you need it. If you are questioning it, then you most
 * likely need the base `useDialogState` hook.
 *
 * @param initialState
 * @returns
 */

function useDialogStateAsync<TResolveType, TDialogProps>(
  initialState: TDialogProps
) {
  const [dialogState, setDialogState] = useState<
    AsyncDialogProps<TResolveType> & TDialogProps
  >({
    ...initialState,
    isOpen: false,
    isResolving: false,
    resolve: null,
    reject: null,
  })

  function openDialog() {
    const promise = new Promise<TResolveType>((resolve, reject) => {
      setDialogState((currentState) => ({
        ...currentState,
        isOpen: true,
        isResolving: false,
        resolve,
        reject,
      }))
    })

    return promise.then<{
      setDialogState: typeof setDialogState
      closeDialog: () => void
      payload: TResolveType
    }>(
      // resolve function
      (payload: TResolveType) => {
        // update dialog state to loading
        setDialogState((currentState) => ({
          ...currentState,
          isResolving: true,
        }))

        // return a function to close the dialog after async action is done
        return {
          setDialogState,
          payload,
          closeDialog: () => {
            setDialogState((currentState) => ({
              ...currentState,
              isOpen: false,
              isResolving: false,
            }))
          },
        }
      },
      // reject function
      () => {
        setDialogState((currentState) => ({ ...currentState, isOpen: false }))
        throw new Error("Promise was rejected")
      }
    )
  }

  return { dialogState, openDialog }
}

export default useDialogStateAsync
