'use client';
import React, { ReactNode } from 'react';
import "../styles/App.css";;
import "../styles/Contact.css";;
import "../styles/MiniCalendar.css";;
import "../styles/index.css";;

import dynamic from 'next/dynamic';

const _NoSSR = ({ children }) => <React.Fragment>{children}</React.Fragment>;

const NoSSR = dynamic(() => Promise.resolve(_NoSSR), {
  ssr: false,
});

// Updated AppWrappers component
export default function AppWrappers({ children }: { children: ReactNode }) {
  return <NoSSR>{children}</NoSSR>;
}
