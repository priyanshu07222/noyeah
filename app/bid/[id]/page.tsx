import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function BidPage({ params }: { params: { id: string } }) {
  return (
    <>
      <SignedIn>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Place Your Bid</h1>
          {/* Your bid form will go here */}
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
} 