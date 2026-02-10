import { cn } from '@/lib/utils';

export function ChatNowButton({ className, label }: { className?: string; label?: string }) {
  return (
    <button
      className={cn(
        'px-6 py-3 rounded-lg text-lg border-2 border-white text-white bg-transparent font-bold',
        className,
      )}
      onClick={() => {
        if (typeof window !== 'undefined' && (window as any).LiveChatWidget) {
          (window as any).LiveChatWidget.call('maximize');
        }
      }}
    >
      {label || 'Live Chat'}
    </button>
  );
}
