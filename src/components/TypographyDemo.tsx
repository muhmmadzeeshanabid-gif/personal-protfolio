import React from 'react';

const TypographyDemo = () => {
    return (
        <div className="p-10 bg-white text-black space-y-12">
            {/* Display Text / H1 */}
            <section>
                <p className="text-zinc-500 text-sm mb-2">Display text | Font size: 48px | Line height: 56px | Tracking: -2%</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <h1 className="text-[length:var(--font-size-display)] leading-[var(--line-height-display)] tracking-[var(--tracking-tight)] font-normal">Heading Regular</h1>
                    <h1 className="text-[length:var(--font-size-display)] leading-[var(--line-height-display)] tracking-[var(--tracking-tight)] font-semibold">Heading SemiBold</h1>
                    <h1 className="text-[length:var(--font-size-display)] leading-[var(--line-height-display)] tracking-[var(--tracking-tight)] font-bold">Heading Bold</h1>
                    <h1 className="text-[length:var(--font-size-display)] leading-[var(--line-height-display)] tracking-[var(--tracking-tight)] font-extrabold">Heading ExtraBold</h1>
                </div>
            </section>

            {/* Heading H2 */}
            <section>
                <p className="text-zinc-500 text-sm mb-2">Heading H2 | Font size: 32px | Line height: 40px | Tracking: -2%</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <h2 className="text-[length:var(--font-size-h2)] leading-[var(--line-height-h2)] tracking-[var(--tracking-tight)] font-normal">Heading H2 Regular</h2>
                    <h2 className="text-[length:var(--font-size-h2)] leading-[var(--line-height-h2)] tracking-[var(--tracking-tight)] font-semibold">Heading H2 SemiBold</h2>
                    <h2 className="text-[length:var(--font-size-h2)] leading-[var(--line-height-h2)] tracking-[var(--tracking-tight)] font-bold">Heading H2 Bold</h2>
                    <h2 className="text-[length:var(--font-size-h2)] leading-[var(--line-height-h2)] tracking-[var(--tracking-tight)] font-extrabold">Heading H2 ExtraBold</h2>
                </div>
            </section>

            {/* Heading H3 */}
            <section>
                <p className="text-zinc-500 text-sm mb-2">Heading H3 | Font size: 28px | Line height: 32px | Tracking: -2%</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <h3 className="text-[length:var(--font-size-h3)] leading-[var(--line-height-h3)] tracking-[var(--tracking-tight)] font-normal">Heading H3 Regular</h3>
                    <h3 className="text-[length:var(--font-size-h3)] leading-[var(--line-height-h3)] tracking-[var(--tracking-tight)] font-semibold">Heading H3 SemiBold</h3>
                    <h3 className="text-[length:var(--font-size-h3)] leading-[var(--line-height-h3)] tracking-[var(--tracking-tight)] font-bold">Heading H3 Bold</h3>
                    <h3 className="text-[length:var(--font-size-h3)] leading-[var(--line-height-h3)] tracking-[var(--tracking-tight)] font-extrabold">Heading H3 ExtraBold</h3>
                </div>
            </section>

            {/* Paragraph P1 */}
            <section>
                <p className="text-zinc-500 text-sm mb-2">Paragraph P1 | Font size: 20px | Line height: 24px | Tracking: 2%</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <p className="text-[length:var(--font-size-p1)] leading-[var(--line-height-p1)] tracking-[var(--tracking-wide)] font-normal">Paragraph P1 Regular</p>
                    <p className="text-[length:var(--font-size-p1)] leading-[var(--line-height-p1)] tracking-[var(--tracking-wide)] font-semibold">Paragraph P1 SemiBold</p>
                    <p className="text-[length:var(--font-size-p1)] leading-[var(--line-height-p1)] tracking-[var(--tracking-wide)] font-bold">Paragraph P1 Bold</p>
                    <p className="text-[length:var(--font-size-p1)] leading-[var(--line-height-p1)] tracking-[var(--tracking-wide)] font-extrabold">Paragraph P1 ExtraBold</p>
                </div>
            </section>

            {/* Button Text */}
            <section>
                <p className="text-zinc-500 text-sm mb-2">Button Text | Font size: 20px | Line height: 24px | Tracking: 2%</p>
                <div className="flex gap-8 items-center">
                    <span className="text-[length:var(--font-size-btn)] leading-[var(--line-height-btn)] tracking-[var(--tracking-wide)] font-normal">Button Regular</span>
                    <span className="text-[length:var(--font-size-btn)] leading-[var(--line-height-btn)] tracking-[var(--tracking-wide)] font-semibold">Button SemiBold</span>
                    <button className="bg-black text-white px-6 py-2 rounded text-[length:var(--font-size-btn)] leading-[var(--line-height-btn)] tracking-[var(--tracking-wide)] font-bold">
                        Button Bold
                    </button>
                    <button className="bg-black text-white px-6 py-2 rounded text-[length:var(--font-size-btn)] leading-[var(--line-height-btn)] tracking-[var(--tracking-wide)] font-extrabold">
                        Button ExtraBold
                    </button>
                </div>
            </section>
        </div>
    );
};

export default TypographyDemo;
