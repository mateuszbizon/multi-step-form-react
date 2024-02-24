import { useState } from "react"
import { MONTHLY, YEARLY } from "../constants"

function useModeForm() {
    const [mode, setMode] = useState<string>(MONTHLY)

    function handleSetMode() {
        if (mode == MONTHLY) {
            setMode(YEARLY);
            return;
        }

        setMode(MONTHLY);
    }

  return {
    isMonthly: mode == MONTHLY ? true : false,
    handleSetMode,
  }
}

export default useModeForm