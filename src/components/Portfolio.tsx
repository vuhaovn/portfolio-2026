'use client';

import { useState, useEffect } from 'react';
import { cvData, type Lang, type CVData, type WorkExperience } from '@/data/cv';
import Image from 'next/image';

// ─── Color constants ──────────────────────────────────────────────────────────

const EXP_HEADER_COLORS = [
  'bg-orange-500',
  'bg-gray-900',
  'bg-orange-500',
  'bg-gray-900',
  'bg-orange-500',
  'bg-gray-900',
];

const SKILL_CARD_COLORS = [
  'bg-orange-500',
  'bg-gray-900',
  'bg-orange-500',
  'bg-gray-900',
  'bg-orange-500',
  'bg-gray-900',
];

const EDU_BORDER_COLORS = [
  'border-l-4 border-orange-500',
  'border-l-4 border-gray-900 dark:border-gray-400',
  'border-l-4 border-orange-500',
  'border-l-4 border-gray-900 dark:border-gray-400',
];

// ─── Shared primitives ───────────────────────────────────────────────────────

function Divider() {
  return (
    <div className="flex h-2.5">
      <div className="flex-1 bg-orange-500" />
      <div className="flex-1 bg-gray-900" />
    </div>
  );
}

function SectionTitle({ title, bg }: { title: string; bg: string }) {
  return (
    <div className="mb-8">
      <h2 className={`inline-block ${bg} text-white text-2xl sm:text-3xl font-black px-5 py-2.5`}>
        {title}
      </h2>
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

function Header({
  cv,
  lang,
  onToggle,
  isDark,
  onToggleTheme,
}: {
  cv: CVData;
  lang: Lang;
  onToggle: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: '#summary', label: cv.ui.summary },
    { href: '#experience', label: cv.ui.experience },
    { href: '#skills', label: cv.ui.skills },
    { href: '#education', label: cv.ui.education },
    { href: '#contact', label: cv.ui.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-950 border-b-4 border-orange-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#">
          <Image src="/logo.png" alt="Logo" width={100} height={32} className="inline-block mr-2" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 text-sm font-bold border-b-2 border-transparent hover:border-orange-500 pb-0.5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Dark mode toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 text-gray-900 dark:text-gray-100 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900"
          >
            {isDark ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Language toggle */}
          <div className="flex overflow-hidden">
            <button
              onClick={onToggle}
              className={`px-3 py-1.5 text-sm font-black ${lang === 'en' ? 'bg-orange-500 text-white' : 'bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100'}`}
            >
              EN
            </button>
            <button
              onClick={onToggle}
              className={`px-3 py-1.5 text-sm font-black ${lang === 'jp' ? 'bg-orange-500 text-white' : 'bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100'}`}
            >
              JP
            </button>
          </div>

          {/* Download */}
          <a
            href={lang === 'en' ? '/cv-en.pdf' : '/cv-jp.pdf'}
            download
            className="hidden sm:inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-4 py-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {cv.ui.downloadCV}
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden p-1 text-gray-900 dark:text-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-t-2 border-orange-200 dark:border-orange-900 px-5 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-800 dark:text-gray-200 hover:text-orange-500 py-2 font-bold text-sm border-b border-gray-100 dark:border-gray-800"
            >
              {item.label}
            </a>
          ))}
          <a
            href={lang === 'en' ? '/cv-en.pdf' : '/cv-jp.pdf'}
            download
            className="mt-3 inline-flex items-center gap-2 bg-orange-500 text-white font-bold text-sm px-4 py-2 w-fit"
          >
            {cv.ui.downloadCV}
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero({ cv, lang }: { cv: CVData; lang: Lang }) {
  return (
    <section className="bg-white dark:bg-gray-950 pt-16 min-h-screen flex flex-col">

      <div className="flex-1 flex items-center px-4">
        <div className="max-w-6xl mx-auto sm:px-2 w-full py-16 grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">

          {/* Left: content */}
          <div>
          {/* Status label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-orange-500 text-white text-xs font-black px-3 py-1.5 uppercase tracking-widest">
              ● {lang === 'en' ? 'Open to work' : '求職中'}
            </span>
            <span className="bg-orange-500 text-white text-xs font-black px-3 py-1.5">
              {cv.personal.address}
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white mb-3 leading-none">
            {cv.hero.name}
          </h1>

          {/* Color strip below name */}
          <div className="flex h-3 max-w-sm mb-5">
            <div className="flex-1 bg-orange-500" />
          </div>

          <p className="text-2xl sm:text-3xl font-black text-orange-500 mb-3">
            {cv.hero.title}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-base mb-10 max-w-xl">{cv.hero.tagline}</p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-orange-500 text-white font-black text-base px-7 py-3.5 hover:bg-orange-600"
            >
              {cv.ui.contact}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={lang === 'en' ? '/cv-en.pdf' : '/cv-jp.pdf'}
              download
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-black text-base px-7 py-3.5 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {cv.ui.downloadCV}
            </a>
          </div>

          {/* Quick contact strip */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${cv.personal.email}`}
              className="flex items-center gap-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 font-bold text-sm px-4 py-2 border border-orange-300 dark:border-orange-700"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {cv.personal.email}
            </a>
            <a
              href={cv.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 font-bold text-sm px-4 py-2 border border-orange-300 dark:border-orange-700"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <span className="flex items-center gap-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 font-bold text-sm px-4 py-2 border border-orange-300 dark:border-orange-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {cv.personal.phone}
            </span>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About({ cv }: { cv: CVData }) {
  return (
    <>
      <section id="summary" className="bg-gray-50 dark:bg-gray-900 py-16 scroll-mt-16 px-4">
        <div className="max-w-6xl mx-auto sm:px-2">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Summary card */}
            <div className="">
              <div className="bg-orange-500 px-5 py-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-white font-black text-sm">{cv.ui.summary}</span>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{cv.summary}</p>
              </div>
            </div>

            {/* Career goal card */}
            <div className="">
              <div className="bg-gray-900 px-5 py-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-white font-black text-sm">{cv.ui.careerGoal}</span>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{cv.careerGoal}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────

function ExperienceCard({ job, ui, colorIdx }: { job: WorkExperience; ui: CVData['ui']; colorIdx: number }) {
  const headerColor = EXP_HEADER_COLORS[colorIdx % EXP_HEADER_COLORS.length];

  return (
    <div>
      {/* Colored header */}
      <div className={`${headerColor} px-5 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1`}>
        <span className="text-white font-black text-lg">{job.company}</span>
        <span className="text-white/80 font-mono text-md">{job.period}</span>
      </div>

      <div className="p-5 bg-white dark:bg-gray-800">
        {/* Position tag */}
        <span className={`inline-block ${headerColor} text-white text-xs font-bold px-3 py-1 mb-4`}>
          {job.position}
        </span>

        <ul className="space-y-2 mb-5">
          {job.responsibilities.map((r, i) => (
            <li key={i} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="text-orange-500 font-black flex-shrink-0">▶</span>
              {r}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 text-xs border-t-2 border-dashed border-gray-200 dark:border-gray-600 pt-4 mb-3">
          <span className="text-gray-700 dark:text-gray-300">
            <span className="font-black text-gray-900 dark:text-white">{ui.technologies}: </span>
            {job.technologies}
          </span>
          <span className="text-gray-700 dark:text-gray-300">
            <span className="font-black text-gray-900 dark:text-white">{ui.teamSize}: </span>
            {job.teamSize}
          </span>
        </div>

        {job.projects.some((p) => p.url) && (
          <div className="flex flex-wrap gap-2">
            {job.projects.map((p, i) =>
              p.url ? (
                <a
                  key={i}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 border border-orange-300 dark:border-orange-700 px-2.5 py-1 font-bold"
                >
                  {p.label}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : null
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ExperienceSection({ cv }: { cv: CVData }) {
  return (
    <>
      <section id="experience" className="bg-white dark:bg-gray-950 py-16 scroll-mt-16 px-4">
        <div className="max-w-6xl mx-auto sm:px-2">
          <SectionTitle title={cv.ui.experience} bg="bg-gray-900" />
          <div className="space-y-4">
            {cv.experience.map((job, i) => (
              <ExperienceCard key={i} job={job} ui={cv.ui} colorIdx={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function SkillsSection({ cv }: { cv: CVData }) {
  return (
    <>
      <section id="skills" className="bg-gray-50 dark:bg-gray-900 py-16 scroll-mt-16 px-4">
        <div className="max-w-6xl mx-auto sm:px-2">
          <SectionTitle title={cv.ui.skills} bg="bg-orange-500" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cv.skillGroups.map((group, gi) => {
              const cardColor = SKILL_CARD_COLORS[gi % SKILL_CARD_COLORS.length];
              return (
                <div key={group.label} className={cardColor}>
                  <div className="bg-black/20 px-4 py-2.5">
                    <p className="text-white font-black text-sm uppercase tracking-wider">{group.label}</p>
                  </div>
                  <div className="p-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="bg-white/20 border border-white/40 text-white text-sm font-bold px-2.5 py-1"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Education ────────────────────────────────────────────────────────────────

function EducationSection({ cv }: { cv: CVData }) {
  return (
    <>
      <section id="education" className="bg-white dark:bg-gray-950 py-16 scroll-mt-16 px-4">
        <div className="max-w-6xl mx-auto sm:px-2">
          <SectionTitle title={cv.ui.education} bg="bg-orange-500" />

          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {cv.education.map((edu, i) => (
              <div
                key={i}
                className={`bg-white dark:bg-gray-800 ${EDU_BORDER_COLORS[i % EDU_BORDER_COLORS.length]} flex gap-4 items-center p-4`}
              >
                <div>
                  <p className="font-black text-gray-900 dark:text-white text-sm">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Personal skills */}
          <div className="">
            <div className="bg-gray-900 px-5 py-3">
              <span className="text-white font-black">{cv.ui.personalSkills}</span>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800">
              <div className="grid sm:grid-cols-3 gap-6 mb-6">
                {[
                  { label: cv.ui.languages, value: cv.personalSkills.languages, bg: 'bg-orange-500' },
                  { label: cv.ui.strengths, value: cv.personalSkills.strengths, bg: 'bg-gray-900' },
                  { label: cv.ui.weaknesses, value: cv.personalSkills.weaknesses, bg: 'bg-orange-500' },
                ].map(({ label, value, bg }) => (
                  <div key={label}>
                    <span className={`inline-block ${bg} text-white text-xs font-black px-3 py-1 mb-2`}>
                      {label}
                    </span>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{value}</p>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-dashed border-gray-200 dark:border-gray-600 pt-5">
                <span className="inline-block bg-orange-500 text-white text-xs font-black px-3 py-1 mb-3">
                  {cv.ui.hobbies}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cv.hobbies.map((h) => (
                    <span
                      key={h}
                      className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 border border-orange-300 dark:border-orange-700 text-sm font-bold px-3 py-1.5"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function ContactSection({ cv, lang }: { cv: CVData; lang: Lang }) {
  const items = [
    {
      label: cv.ui.email,
      value: cv.personal.email,
      href: `mailto:${cv.personal.email}`,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: cv.ui.phone,
      value: cv.personal.phone,
      href: `tel:${cv.personal.phone.replace(/[^+\d]/g, '')}`,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: 'hao-tran-a28546117',
      href: cv.personal.linkedin,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: cv.ui.address,
      value: cv.personal.address,
      href: undefined as string | undefined,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section id="contact" className="bg-gray-900 dark:bg-black py-16 scroll-mt-16 px-4">
        <div className="max-w-6xl mx-auto sm:px-2">
          <div className="mb-8">
            <h2 className="inline-block bg-orange-500 text-white text-2xl sm:text-3xl font-black px-5 py-2.5">
              {cv.ui.contact}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {items.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 border-2 border-orange-500 hover:border-orange-400 hover:opacity-90"
                >
                  <span className="text-orange-500">{item.icon}</span>
                  <div>
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-0.5">{item.label}</p>
                    <p className="font-black text-sm text-gray-900 dark:text-white">{item.value}</p>
                  </div>
                </a>
              ) : (
                <div key={item.label} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 border-2 border-orange-500">
                  <span className="text-orange-500">{item.icon}</span>
                  <div>
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-0.5">{item.label}</p>
                    <p className="font-black text-sm text-gray-900 dark:text-white">{item.value}</p>
                  </div>
                </div>
              )
            )}
          </div>

          <a
            href={lang === 'en' ? '/cv-en.pdf' : '/cv-jp.pdf'}
            download
            className="inline-flex items-center gap-2.5 bg-orange-500 text-white font-black text-base px-8 py-3.5 hover:bg-orange-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {cv.ui.downloadCV}
          </a>
        </div>
      </section>
    </>
  );
}

// ─── Back to Top ──────────────────────────────────────────────────────────────

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white w-11 h-11 flex items-center justify-center shadow-lg transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>('en');
  const [isDark, setIsDark] = useState(false);
  const cv = cvData[lang];

  useEffect(() => {
    document.documentElement.lang = lang === 'jp' ? 'ja' : 'en';
    document.title = cv.meta.title;
  }, [lang, cv.meta.title]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header
        cv={cv}
        lang={lang}
        onToggle={() => setLang((l) => (l === 'en' ? 'jp' : 'en'))}
        isDark={isDark}
        onToggleTheme={() => setIsDark((d) => !d)}
      />
      <BackToTop />
      <main key={lang}>
        <Hero cv={cv} lang={lang} />
        <About cv={cv} />
        <ExperienceSection cv={cv} />
        <SkillsSection cv={cv} />
        <EducationSection cv={cv} />
        <ContactSection cv={cv} lang={lang} />
      </main>
      <footer className="bg-gray-900 py-5 text-center">
        <p className="text-sm font-bold text-gray-400">
          © {new Date().getFullYear()} &nbsp;
          <span className="text-orange-400">{lang === 'en' ? 'Tran Vu Hao' : 'トラン・ヴー・ハオ'}</span>
        </p>
      </footer>
    </div>
  );
}
