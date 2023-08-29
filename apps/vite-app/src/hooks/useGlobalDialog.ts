import { useDeepCompareMemo } from "use-deep-compare"

import {
  IGlobalDialogsContext,
  useGlobalDialogsContext,
} from "@/contexts/GlobalDialogs"

/**
 * Most dialogs will not be global. Only create a
 * global dialog if it will be used in many different
 * use cases across multiple pages.
 *
 * The useGlobalDialog hook will return one function
 * for each global dialog that will open the dialog
 */

function useGlobalDialog(): IGlobalDialogsContext {
  const dialogContext = useGlobalDialogsContext()
  return useDeepCompareMemo(() => {
    return dialogContext
  }, [dialogContext])
}

export default useGlobalDialog
