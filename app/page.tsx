"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

{
    /* <h3 className="tracking-[3px] text-peachyellow font-black">ZipURL</h3>; */
}

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-antiflash">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="w-full max-w-xs">
                    <form className="bg-gunmetal rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <h3 className="text-peachyellow font-black text-3xl text-center">
                                ZipURL
                            </h3>
                            <label className="block text-peachyellow text-sm font-bold mb-2 mt-2">
                                Link:
                            </label>
                            <input
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="URL to shorten"
                            />
                        </div>
                    </form>
                </div>
            </motion.div>
        </main>
    );
}
