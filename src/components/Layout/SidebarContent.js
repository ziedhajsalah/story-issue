import React from 'react';
import SidebarTree from './SidebarTree';

type SidebarContentProps = {
  isOpen: boolean
};

export default function SidebarContent({ isOpen }: SidebarContentProps) {
  if (isOpen) {
    return <SidebarTree />;
  }
  return <div>Sidebar</div>;
}
