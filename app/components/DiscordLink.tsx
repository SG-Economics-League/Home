"use client";

import { ReactNode } from "react";
import { track } from "@vercel/analytics";
import { DISCORD_LINK } from "@/app/data/links";

interface DiscordLinkProps {
  className?: string;
  children: ReactNode;
}

export default function DiscordLink({ className, children }: DiscordLinkProps) {
  return (
    <a
      href={DISCORD_LINK}
      onClick={() => track("joinDiscord")}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
