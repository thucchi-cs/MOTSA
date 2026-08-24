import { permanentRedirect } from "next/navigation";

export default function HistoryRedirect() {
  permanentRedirect("/about/history")
}
