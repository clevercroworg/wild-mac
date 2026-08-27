'use client';

import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { CheckCircle2, AlertCircle, AlertTriangle, Info, CloudOff, Cloud, X } from 'lucide-react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(({ title, message, type = 'info', duration = 4500 }) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newToast = { id, title, message, type, duration };

    setToasts((prev) => [...prev.slice(-4), newToast]); // keep max 5 active toasts

    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Monitor network status for emergency fallbacks
  useEffect(() => {
    const handleOffline = () => {
      addToast({
        type: 'warning',
        title: 'Emergency Fallback Activated',
        message: 'Network offline. All changes are being preserved in browser local storage.',
        duration: 6000,
      });
    };

    const handleOnline = () => {
      addToast({
        type: 'success',
        title: 'Network Restored',
        message: 'Reconnected to MongoDB Atlas & Cloudinary Live Cloud.',
        duration: 4000,
      });
    };

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, [addToast]);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}

      {/* Floating Toast Notification Container */}
      <aside
        aria-label="Admin Notifications"
        className="admin-toast-container"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.65rem',
          maxWidth: '380px',
          width: 'calc(100vw - 3rem)',
          pointerEvents: 'none',
        }}
      >
        {toasts.map((toast) => {
          let bgColor = 'var(--bg-pure-white)';
          let borderColor = 'var(--border-medium)';
          let iconColor = 'var(--text-ink)';
          let IconComponent = Info;

          if (toast.type === 'success') {
            borderColor = '#22C55E';
            iconColor = '#16A34A';
            IconComponent = CheckCircle2;
          } else if (toast.type === 'error') {
            borderColor = 'var(--accent-red)';
            iconColor = 'var(--accent-red)';
            IconComponent = AlertCircle;
          } else if (toast.type === 'warning') {
            borderColor = '#F59E0B';
            iconColor = '#D97706';
            IconComponent = AlertTriangle;
          } else if (toast.type === 'fallback') {
            borderColor = '#0284C7';
            iconColor = '#0284C7';
            IconComponent = CloudOff;
          }

          return (
            <div
              key={toast.id}
              style={{
                pointerEvents: 'auto',
                backgroundColor: bgColor,
                borderLeft: `4px solid ${borderColor}`,
                borderTop: '1px solid var(--border-subtle)',
                borderRight: '1px solid var(--border-subtle)',
                borderBottom: '1px solid var(--border-subtle)',
                borderRadius: '4px',
                padding: '0.9rem 1.1rem',
                boxShadow: '0 12px 32px rgba(17, 24, 32, 0.14)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                animation: 'slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <IconComponent size={19} color={iconColor} style={{ flexShrink: 0, marginTop: '2px' }} />

              <div style={{ flex: 1 }}>
                {toast.title && (
                  <div style={{ fontSize: '0.85rem', fontWeight: 650, color: 'var(--text-ink)', lineHeight: 1.3, marginBottom: '0.2rem' }}>
                    {toast.title}
                  </div>
                )}
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                  {toast.message}
                </div>
              </div>

              <button
                type="button"
                onClick={() => removeToast(toast.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-light)',
                  padding: '2px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                title="Dismiss"
              >
                <X size={14} />
              </button>
            </div>
          );
        })}
      </aside>

      <style jsx global>{`
        @media (max-width: 600px) {
          .admin-toast-container {
            bottom: 0.75rem !important;
            right: 0.75rem !important;
            left: 0.75rem !important;
            width: auto !important;
            max-width: none !important;
          }
        }
      `}</style>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    return {
      addToast: () => {},
      removeToast: () => {},
    };
  }
  return context;
}
