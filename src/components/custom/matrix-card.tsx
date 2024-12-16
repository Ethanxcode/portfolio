'use client';
import * as React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    title?: string | any;
    mode?: string | any;
}

const Card: React.FC<CardProps> = ({ children, mode, title, ...rest }) => {
    let titleElement = (
        <header className="flex items-end justify-between">
            <div
                className="min-w-[10%] w-full shadow-[inset_1px_0_0_var(--theme-text),inset_0_1px_0_var(--theme-text)] pt-[calc(8px*1.25)] pr-[2ch] pb-0 pl-[1ch] "
                aria-hidden="true"
            ></div>
            <h2 className="flex-shrink-0 px-1 text-base font-normal">
                {title}
            </h2>
            <div
                className="min-w-[10%] w-full shadow-[inset_-1px_0_0_var(--theme-text),inset_0_1px_0_var(--theme-text)] pt-[calc(8px*1.25)] pr-[2ch] pb-0 pl-[1ch] "
                aria-hidden="true"
            ></div>
        </header>
    );

    if (mode === 'left') {
        titleElement = (
            <header className="flex items-end justify-between">
                <div
                    className="flex-shrink-0 shadow-[inset_1px_0_0_var(--theme-text),inset_0_1px_0_var(--theme-text)] pt-[calc(8px*1.25)] px-[1ch] pb-0"
                    aria-hidden="true"
                ></div>
                <h2 className="flex-shrink-0 px-1 text-base font-normal">
                    {title}
                </h2>
                <div
                    className="min-w-[10%] w-full shadow-[inset_-1px_0_0_var(--theme-text),inset_0_1px_0_var(--theme-text)] pt-[calc(8px*1.25)] pr-[2ch] pb-0 pl-[1ch]"
                    aria-hidden="true"
                ></div>
            </header>
        );
    }

    if (mode === 'right') {
        titleElement = (
            <header className="flex items-end justify-between">
                <div
                    className="min-w-[10%] w-full shadow-[inset_1px_0_0_var(--theme-text),inset_0_1px_0_var(--theme-text)] pt-[calc(8px*1.25)] pr-[2ch] pb-0 pl-[1ch]"
                    aria-hidden="true"
                ></div>
                <h2 className="flex-shrink-0 px-[1ch] text-base font-normal">
                    {title}
                </h2>
                <div
                    className="flex-shrink-0 shadow-[inset_-1px_0_0_var(--theme-text),inset_0_1px_0_var(--theme-text)] pt-[calc(8px*1.25)] px-[1ch] pb-0"
                    aria-hidden="true"
                ></div>
            </header>
        );
    }

    return (
        <article
            className="relative block pt-0 px-[1ch] pb-[calc(8px*1.25)] "
            {...rest}
        >
            {titleElement}
            <section className="shadow-[inset_1px_0_0_0_var(--theme-text),inset_-1px_0_0_0_var(--theme-text),0_1px_0_0_var(--theme-text)] block pt-[calc(8px*1.25)] px-[2ch] pb-[calc(16px*1.25)]overflow-x-auto overflow-y-hidden scrollbar-none">
                {children}
            </section>
        </article>
    );
};

export default Card;
