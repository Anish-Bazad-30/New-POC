// components/MainContent.jsx
"use client";

import ChatBox from "./ChatBox";
import GenerateWithAI from "./GenerateWithAI";
import NewWorkspace from "./NewWorkspace";
import Choose from "./Choose";

export default function MainContent() {
  return (
    <main className="px-3 sm:px-4">
      <div className="mx-auto w-full max-w-[862px]">
        <ChatBox />

        {/* Row 2: right aligned */}
        <div className="mt-3 flex justify-end">
          <GenerateWithAI onClick={() => console.log("Generate")} />
        </div>

        {/* Row 3: right aligned container; two items wrap on small, row on sm+ */}
        <div className="mt-4 flex flex-col sm:flex-row sm:justify-end gap-3 sm:gap-4">
          <NewWorkspace onClick={() => console.log("New workspace")} />
          <Choose onClick={() => console.log("Choose stack")} />
        </div>
      </div>
    </main>
  );
}
