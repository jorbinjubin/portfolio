"use client";

import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dGrey text-gold space-y-4">
      {/* Static and consistent text */}
      <h1 className="text-4xl font-bold">Hey! Territory not unlocked yet!</h1>
      <p className="mt-4 text-lg">
        Please pay $29.99 to unlock this area for 3 days or $59.99 for a week.
      </p>
      <Link href="/">
        <span className="mt-30 px-4 py-3 bg-gold text-dGrey rounded hover:bg-dGold hover:text-dGrey cursor-pointer">
          Take me back!
        </span>
      </Link>
    </div>
  );
}
