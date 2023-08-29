import { createContext, ReactNode, useContext } from "react"

// import ExampleDialog from '@/components/dialogs/ExampleDialog'

export interface IDialogsContext {
  // openExampleDialog: (gameId: number) => void
}
const DialogsContext = createContext({} as IDialogsContext)

function DialogsContextProvider({ children }: { children: ReactNode }) {
  // Example Dialog
  // const [isExampleDialogOpen, setIsExampleDialogOpen] = useState<boolean>(false)
  // function openExampleDialog() {
  //   setIsEndGameDialogOpen(true)
  // }
  // function closeExampleDialog() {
  //   setIsEndGameDialogOpen(false)
  // }

  return (
    <DialogsContext.Provider
      value={
        {
          // openExampleDialog,
        }
      }
    >
      {children}

      {/* {isExampleDialogOpen && (
        <ExampleDialog
          open={isExampleDialogOpen}
          onClose={closeExampleDialog}
        />
      )} */}
    </DialogsContext.Provider>
  )
}

function useDialogsContext() {
  const dialogContext = useContext(DialogsContext)
  if (dialogContext === undefined) {
    throw new Error("useDialogContext must be used within a DialogProvider")
  }
  return dialogContext
}

export { DialogsContextProvider, useDialogsContext }
