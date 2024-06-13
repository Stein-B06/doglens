import * as React from "react";
import { poppins } from "@/app/ui/fonts";
import MuiButton from "@/components/MuiButton";
import Head from "next/head";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title> Buttons</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Button set</h1>

        <div className="mt-8 space-x-4">
          <MuiButton
            size="small"
            bgColor="linear-gradient(45deg, #3a6ea5 30%, #0081a7 90%)"
          >
            Small Button
          </MuiButton>
          <MuiButton
            size="medium"
            bgColor="linear-gradient(135deg, #6a11cb 25%, #2575fc 75%)"
          >
            Medium Button
          </MuiButton>
          <MuiButton
            size="large"
            bgColor="linear-gradient(45deg, #e36414 10%, #9a031e 90%)"
          >
            Large Button
          </MuiButton>
        </div>
      </main>
    </div>
  );
}
