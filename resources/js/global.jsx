import { createRoot } from 'react-dom/client';
import Toast from './Components/Toast';

export function appendToast(containerId, theme, text) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const toastWrapper = document.createElement('div');
    container.appendChild(toastWrapper);

    const root = createRoot(toastWrapper);
    root.render(<Toast theme={theme} text={text} />);

    setTimeout(() => {
        root.unmount();
        container.removeChild(toastWrapper);
    }, 5000);
}
