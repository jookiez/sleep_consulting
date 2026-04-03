'use client';

import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  babyAge: string;
  message: string;
};

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  babyAge: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'rate-limited'>('idle');

  const formatPhone = (value: string): string => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length <= 3) return digits.length ? `(${digits}` : '';
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setForm((prev) => ({ ...prev, phone: formatPhone(value) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm(initialForm);
      } else if (res.status === 429) {
        setStatus('rate-limited');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full rounded-xl border border-stone-300 px-3 py-2 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-moon-400 focus:border-transparent';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
            Full Name <span className="text-moon-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
            Email <span className="text-moon-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="babyAge" className="block text-sm font-medium text-stone-700 mb-1">
            Baby&apos;s Age <span className="text-moon-400">*</span>
          </label>
          <input
            id="babyAge"
            name="babyAge"
            type="text"
            required
            value={form.babyAge}
            onChange={handleChange}
            placeholder="e.g. 6 months"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
          Tell me about your sleep challenges <span className="text-moon-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="What's your biggest sleep struggle right now?"
          className={inputClass}
        />
      </div>

      {status === 'success' && (
        <p className="text-green-600 text-sm font-medium">
          Message sent! I&apos;ll be in touch within 24–48 hours.
        </p>
      )}
      {status === 'rate-limited' && (
        <p className="text-red-500 text-sm font-medium">
          Too many submissions — please wait an hour before trying again.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-sm font-medium">
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full sm:w-auto px-8 py-3 bg-moon-400 text-stone-800 text-sm font-medium rounded-full hover:bg-moon-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
