'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
    items,
    direction = 'left',
    speed = 'fast',
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: 'left' | 'right';
    speed?: 'fast' | 'normal' | 'slow';
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === 'left') {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'forwards',
                );
            } else {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'reverse',
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === 'fast') {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '20s',
                );
            } else if (speed === 'normal') {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '40s',
                );
            } else {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '80s',
                );
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
                className,
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    ' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
                    start && 'animate-scroll ',
                    pauseOnHover && 'hover:[animation-play-state:paused]',
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                        style={{
                            background:
                                'conic-gradient(at bottom right, #1d4ed8, #1e40af, #111827)',
                        }}
                        // 'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
                        key={item.name}
                    >
                        <div className="flex py-2 gap-1">
                            <div className="">
                                <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div className="circle">
                                <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div className="circle">
                                <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                        </div>
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            ></div>
                            <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                                {item.quote}
                            </span>
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                                <span className="flex flex-col gap-1">
                                    <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                                        {item.name}
                                    </span>
                                    <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                                        {item.title}
                                    </span>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
