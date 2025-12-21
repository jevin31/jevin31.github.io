import { useEffect, useMemo, useState } from "react";

type TypingTextProps = {
  text: string;
  highlightWords?: string[];
  speed?: number; // ms per character
  pause?: number; // pause before erasing (ms)
  start?: boolean; // when true, begin typing
  className?: string;
  cursorClassName?: string;
};

export default function TypingText({
  text,
  highlightWords = [],
  speed = 40,
  pause = 1000,
  start = false,
  className,
  cursorClassName,
}: TypingTextProps) {
  const charArr = useMemo(() => {
    const arr: { char: string; highlight: boolean }[] = [];
    let idx = 0;
    while (idx < text.length) {
      let matched = false;
      for (const w of highlightWords) {
        if (text.substring(idx, idx + w.length) === w) {
          for (let i = 0; i < w.length; i++) arr.push({ char: w[i], highlight: true });
          idx += w.length;
          matched = true;
          break;
        }
      }
      if (!matched) {
        arr.push({ char: text[idx], highlight: false });
        idx += 1;
      }
    }
    return arr;
  }, [text, highlightWords]);

  const [typedIndex, setTypedIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (!start) {
      setTypedIndex(0);
      setForward(true);
      return;
    }

    let timer: ReturnType<typeof setTimeout> | undefined;

    if (forward) {
      if (typedIndex < charArr.length) {
        timer = setTimeout(() => setTypedIndex((i) => i + 1), speed);
      } else {
        timer = setTimeout(() => setForward(false), pause);
      }
    } else {
      if (typedIndex > 0) {
        timer = setTimeout(() => setTypedIndex((i) => i - 1), Math.max(10, Math.floor(speed / 2)));
      } else {
        setForward(true);
      }
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [typedIndex, forward, charArr.length, speed, pause, start]);

  return (
    <span className={className}>
      {charArr.slice(0, typedIndex).map((c, i) => (
        <span key={i} className={c.highlight ? "text-primary font-medium" : undefined}>
          {c.char}
        </span>
      ))}
      <span
        className={
          cursorClassName ??
          "inline-block h-5 border-r-2 border-foreground align-middle ml-1 animate-[blink_1s_steps(2,end)_infinite]"
        }
        aria-hidden
      />
    </span>
  );
}
