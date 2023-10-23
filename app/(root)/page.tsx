"use client";

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  return (
    <div className="p-4">
      {/* <UserButton afterSignOutUrl="/" /> */}
      <Modal isOpen onClose={() => {}} title="Test" description="Test Desc">
        Children
      </Modal>
    </div>
  );
}
