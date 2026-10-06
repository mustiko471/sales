export function normalizePhone(value: string): string {
  let number = value.replace(/[\s()+-]/g, '');
  if (number.startsWith('0')) number = `62${number.slice(1)}`;
  if (!/^628\d{7,11}$/.test(number)) {
    throw new Error(
      'Nomor WhatsApp harus berupa nomor seluler Indonesia yang valid.',
    );
  }
  return number;
}

export function whatsappLink(phone: string, message: string): string {
  return `https://wa.me/${normalizePhone(phone)}?text=${encodeURIComponent(message)}`;
}
