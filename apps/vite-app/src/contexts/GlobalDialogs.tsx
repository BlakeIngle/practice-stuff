import { createContext, ReactNode, useContext } from "react"

// import ExampleDialog from '@/components/dialogs/ExampleDialog'

export interface IGlobalDialogsContext {
  // openExampleDialog: (gameId: number) => void
}
const GlobalDialogsContext = createContext({} as IGlobalDialogsContext)

function GlobalDialogsProvider({ children }: { children: ReactNode }) {
  // Example Dialog
  // const [isExampleDialogOpen, setIsExampleDialogOpen] = useState<boolean>(false)
  // function openExampleDialog() {
  //   setIsEndGameDialogOpen(true)
  // }
  // function closeExampleDialog() {
  //   setIsEndGameDialogOpen(false)
  // }

  return (
    <GlobalDialogsContext.Provider
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
    </GlobalDialogsContext.Provider>
  )
}

function useGlobalDialogsContext() {
  const globalDialogContext = useContext(GlobalDialogsContext)
  if (globalDialogContext === undefined) {
    throw new Error(
      "useGlobalDialogContext must be used within the GlobalDialogProvider"
    )
  }
  return globalDialogContext
}

export { GlobalDialogsProvider, useGlobalDialogsContext }
