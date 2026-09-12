"use client";

import {
  FileSignature,
  Network,
  ShieldCheck,
  HardHat,
  Cog,
  GitBranch,
  BrainCircuit,
  Truck,
  ShieldAlert,
  Link2,
  Factory,
  TrendingUp,
  Rocket,
  MapPin,
  CalendarCheck,
  Handshake,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  FileSignature,
  Network,
  ShieldCheck,
  HardHat,
  Cog,
  GitBranch,
  BrainCircuit,
  Truck,
  ShieldAlert,
  Link2,
  Factory,
  TrendingUp,
  Rocket,
  MapPin,
  CalendarCheck,
  Handshake,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Network;
  return <Cmp className={className} />;
}
