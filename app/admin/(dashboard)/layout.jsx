import React from 'react';
import { redirect } from 'next/navigation';
import { getAdminSession } from '@/lib/auth';
import AdminClientLayout from '../AdminClientLayout';

export const dynamic = 'force-dynamic';

export default async function ProtectedDashboardLayout({ children }) {
  const session = await getAdminSession();

  // Strict Server-Side Authentication Guard
  if (!session) {
    redirect('/admin/login');
  }

  return <AdminClientLayout adminUser={session}>{children}</AdminClientLayout>;
}
