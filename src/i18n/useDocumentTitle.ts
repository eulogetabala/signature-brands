import { useEffect } from "react";
import { useTranslation } from "./context";

export function useDocumentTitle(title: string) {
  const { locale } = useTranslation();

  useEffect(() => {
    document.title = title;
  }, [title, locale]);
}
