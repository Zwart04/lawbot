import { Provider } from "react-redux";
import { store } from "@/lib/store";
import { AppProvider } from "@/lib/app-context";
import { Toaster } from "components/ui/toast";
import { useEffect, useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [Ready, setReady] = useState(false);

  useEffect(() => {
    store.dispatch({ type: "auth/restoreAuth" });
    setReady(true);
  }, []);

  if (!Ready) return null;

  return (
    <Provider store={store}>
      <AppProvider>
        {children}
        <Toaster />
      </AppProvider>
    </Provider>
  );
}
