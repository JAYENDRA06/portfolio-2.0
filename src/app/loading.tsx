import { Spinner } from "@/components/ui/spinner";

function Loading() {
  return <div className="h-[100dvh] flex items-center justify-center">
    <Spinner show size="large" className="text-primary" />
  </div>;
}

export default Loading;