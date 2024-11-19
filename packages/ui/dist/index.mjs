import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cx = (...inputs) => {
    return twMerge(clsx(inputs));
};

export { cx };
