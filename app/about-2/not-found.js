import { permanentRedirect } from "next/navigation";

export default function notFound() {
  permanentRedirect("/about")
}
