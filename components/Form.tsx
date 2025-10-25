'use client';

import { useState } from 'react';
import styles from './Form.module.css';
import { trackEvent } from '@/lib/analytics';

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'tel';
  required?: boolean;
  options?: { label: string; value: string }[];
}

interface FormProps {
  title: string;
  description: string;
  endpoint: string;
  successRedirect: string;
  cta: string;
  fields: FormField[];
  eventName: string;
}

export function Form({ title, description, endpoint, successRedirect, cta, fields, eventName }: FormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Unable to submit form');
      }

      trackEvent(eventName, payload);
      router.push(successRedirect);
    } catch (err) {
      setStatus('error');
      setError('We could not process your request. Please email team@orionapexcapital.com.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-describedby={`${fields[0]?.name}-help`}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <p id={`${fields[0]?.name}-help`}>{description}</p>
      </div>
      <div className={styles.grid}>
        {fields.map((field) => (
          <label key={field.name} className={styles.field}>
            <span>{field.label}</span>
            {field.type === 'textarea' ? (
              <textarea name={field.name} required={field.required} rows={4} aria-required={field.required} />
            ) : field.type === 'select' ? (
              <select name={field.name} required={field.required} aria-required={field.required}>
                <option value="">Select…</option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input type={field.type} name={field.name} required={field.required} aria-required={field.required} />
            )}
          </label>
        ))}
      </div>
      {error ? <p role="alert" className={styles.error}>{error}</p> : null}
      <button type="submit" disabled={status === 'submitting'} className={styles.submit}>
        {status === 'submitting' ? 'Sending…' : cta}
      </button>
    </form>
  );
}
