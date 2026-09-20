"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { contact, contactSection } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const lang = useLanguage((s) => s.lang);
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const f = contactSection.fields;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Request failed");
      }
      setDone(true);
      setForm({ name: "", company: "", email: "", phone: "", interest: "", message: "" });
      toast({ title: f.success[lang] });
    } catch {
      toast({
        title: lang === "ar" ? "حدث خطأ، حاول مجدداً" : "Something went wrong, try again",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  const info = [
    {
      icon: Phone,
      label: contactSection.phoneLabel[lang],
      value: contact.phone,
      href: `tel:${contact.phoneHref}`,
    },
    {
      icon: Mail,
      label: contactSection.emailLabel[lang],
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: MapPin,
      label: contactSection.addressLabel[lang],
      value: contact.address[lang],
      href: "#",
    },
  ];

  const socials = [
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Twitter, label: "Twitter" },
    { icon: Facebook, label: "Facebook" },
    { icon: Instagram, label: "Instagram" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/60 to-navy-950" />
      <div className="tech-grid absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute start-1/4 top-0 h-72 w-72 rounded-full bg-spark-500/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={contactSection.eyebrow}
          title={contactSection.title}
          subtitle={contactSection.subtitle}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="flex h-full flex-col gap-4">
              {info.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-navy-900/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-spark-400/50 hover:bg-navy-900/70"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-spark-400/30 bg-spark-500/10 text-spark-400 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      {item.label}
                    </div>
                    <div className="mt-0.5 truncate text-sm font-bold text-white" dir="ltr">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}

              {/* Social */}
              <div className="mt-2 rounded-2xl border border-white/10 bg-navy-900/50 p-5 backdrop-blur-sm">
                <div className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  {contactSection.followTitle[lang]}
                </div>
                <div className="mt-3 flex gap-2.5">
                  {socials.map((s, i) => (
                    <a
                      key={i}
                      href="#"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-navy-950/50 text-slate-300 transition-all duration-300 hover:border-spark-400/50 hover:bg-spark-500/15 hover:text-spark-300"
                    >
                      <s.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={submit}
              className="relative overflow-hidden rounded-2xl border border-spark-400/20 bg-navy-900/60 p-6 backdrop-blur-md sm:p-8"
            >
              <div className="pointer-events-none absolute -end-10 -top-10 h-40 w-40 rounded-full bg-spark-500/10 blur-3xl" />
              <h3 className="relative text-lg font-bold text-white">{contactSection.formTitle[lang]}</h3>

              <div className="relative mt-6 grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-slate-300">
                    {f.name[lang]} <span className="text-spark-400">*</span>
                  </Label>
                  <Input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border-white/10 bg-navy-950/60 text-white placeholder:text-slate-500 focus:border-spark-400/60 focus-visible:border-spark-400/60"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="company" className="text-slate-300">
                    {f.company[lang]}
                  </Label>
                  <Input
                    id="company"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="border-white/10 bg-navy-950/60 text-white placeholder:text-slate-500 focus:border-spark-400/60 focus-visible:border-spark-400/60"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-slate-300">
                    {f.email[lang]} <span className="text-spark-400">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    dir="ltr"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="border-white/10 bg-navy-950/60 text-white placeholder:text-slate-500 focus:border-spark-400/60 focus-visible:border-spark-400/60"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-slate-300">
                    {f.phone[lang]}
                  </Label>
                  <Input
                    id="phone"
                    dir="ltr"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="border-white/10 bg-navy-950/60 text-white placeholder:text-slate-500 focus:border-spark-400/60 focus-visible:border-spark-400/60"
                  />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="interest" className="text-slate-300">
                    {f.interest[lang]} <span className="text-spark-400">*</span>
                  </Label>
                  <Select
                    value={form.interest}
                    onValueChange={(v) => setForm({ ...form, interest: v })}
                    required
                  >
                    <SelectTrigger
                      id="interest"
                      className="border-white/10 bg-navy-950/60 text-white focus:border-spark-400/60 focus-visible:border-spark-400/60"
                    >
                      <SelectValue placeholder={f.interest[lang]} />
                    </SelectTrigger>
                    <SelectContent className="border-white/10 bg-navy-900 text-white">
                      {f.interestOptions.map((o) => (
                        <SelectItem key={o.value} value={o.value} className="focus:bg-spark-500/15">
                          {o.label[lang]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="message" className="text-slate-300">
                    {f.message[lang]} <span className="text-spark-400">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="resize-none border-white/10 bg-navy-950/60 text-white placeholder:text-slate-500 focus:border-spark-400/60 focus-visible:border-spark-400/60"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={sending}
                className="relative mt-6 w-full bg-spark-500 text-navy-950 hover:bg-spark-400 disabled:opacity-60 sm:w-auto"
                size="lg"
              >
                {sending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {f.sending[lang]}
                  </>
                ) : done ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    {f.success[lang]}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {f.submit[lang]}
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative mt-20 border-t border-slate-200 bg-white text-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-center">
            {/* Brand */}
            <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-start">
              <div className="flex items-center gap-2.5">
                <img
                  src="/images/esc-expo-logo.png"
                  alt="ESC Expo 2026 Logo"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="max-w-xs text-xs leading-relaxed text-slate-600">
                {lang === "ar"
                  ? "معرض B2B حصري في قطاع الطاقة بمدينة الملك سلمان للطاقة (SPARK)."
                  : "An exclusive B2B energy exhibition at King Salman Energy Park (SPARK)."}
              </p>
            </div>

            {/* Organizer */}
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                {lang === "ar" ? "منظم بواسطة" : "Organized By"}
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 shadow-sm">
                <div className="flex items-center justify-center rounded-lg border border-slate-200 bg-white p-1">
                  <img
                    src="/images/green-projects-logo.png"
                    alt="GREEN PROJECTS — شركة مشاريع خضراء"
                    className="h-9 w-auto object-contain"
                  />
                </div>
                <div className="text-start leading-tight">
                  <div className="text-sm font-bold text-slate-900">
                    GREEN <span className="text-emerald-600">PROJECTS</span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {lang === "ar" ? "قرين بروجكتس" : "Project Owner"}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact mini */}
            <div className="flex flex-col items-center gap-2.5 text-center md:items-end md:text-end">
              <a href={`tel:${contact.phoneHref}`} className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-emerald-600 transition-colors" dir="ltr">
                <Phone className="h-3.5 w-3.5 text-emerald-600" />
                {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-emerald-600 transition-colors" dir="ltr">
                <Mail className="h-3.5 w-3.5 text-emerald-600" />
                {contact.email}
              </a>
              <span className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <MapPin className="h-3.5 w-3.5 text-emerald-600" />
                {contact.address[lang]}
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-slate-200 pt-6 text-center sm:flex-row">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} ESC Expo 2026 — GREEN PROJECTS. {contactSection.rights[lang]}.
            </p>
            <p className="text-xs font-medium text-slate-600">
              {lang === "ar" ? "مدينة الملك سلمان للطاقة — SPARK" : "King Salman Energy Park — SPARK"}
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
