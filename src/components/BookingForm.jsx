import { useState } from 'react';
import { toast } from 'react-toastify';
import { saveBooking } from '../services/BookingService';
import styles from './BookingForm.module.css';

export default function BookingForm({ train, wagon, selectedSeats, onSuccess }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Ім'я обов'язкове";
    if (!form.phone.trim()) newErrors.phone = "Телефон обов'язковий";
    else if (!/^\+?\d{10,13}$/.test(form.phone.replace(/\s/g, ''))) newErrors.phone = "Невірний формат телефону";
    if (!form.email.trim()) newErrors.email = "Email обов'язковий";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Невірний email";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    saveBooking(train.id, wagon.id, selectedSeats, form);
    toast.success(`Заброньовано місця: ${selectedSeats.join(', ')}`);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text" placeholder="Ім'я" value={form.name}
        onChange={(e) => setForm({...form, name: e.target.value})}
      />
      {errors.name && <span className={styles.error}>{errors.name}</span>}
      <input
        type="tel" placeholder="Телефон" value={form.phone}
        onChange={(e) => setForm({...form, phone: e.target.value})}
      />
      {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      <input
        type="email" placeholder="Email" value={form.email}
        onChange={(e) => setForm({...form, email: e.target.value})}
      />
      {errors.email && <span className={styles.error}>{errors.email}</span>}
      <button type="submit" disabled={selectedSeats.length === 0}>
        Забронювати ({selectedSeats.length} місць)
      </button>
    </form>
  );
}