import ShimmerButton from "@/components/magicui/shimmer-button";

export function ShimmerButtonDemo() {
  return (
    <div className="flex items-center justify-center">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Contact Me 📬
        </span>
      </ShimmerButton>
    </div>
  );
}
