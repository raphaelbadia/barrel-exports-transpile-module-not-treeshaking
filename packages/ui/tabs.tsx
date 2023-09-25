"use client";

import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "./cn";

const Tabs = forwardRef<
  ElementRef<typeof TabsPrimitive.Root>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ ...props }, ref) => <TabsPrimitive.Root ref={ref} {...props} />);
Tabs.displayName = TabsPrimitive.Root.displayName;

const TabsList = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    className={cn(
      "flex no-wrap h-fit items-center rounded-md bg-transparent text-slate-500 gap-1",
      className
    )}
    ref={ref}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    className={cn(
      "relative w-full h-[30px] inline-flex items-center justify-center whitespace-nowrap rounded-t-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white data-[state=active]:bg-white data-[state=active]:text-slate-950 overflow-hidden",
      "[&_>_.tabshadow]:data-[state=active]:hidden",
      "[&_>_.tabhead]:data-[state=inactive]:hidden",

      className
    )}
    ref={ref}
    {...props}
  >
    <div
      className={cn("tabhead absolute top-0 h-[2px] w-full", "bg-primary")}
    />
    {children}
    <span className="tabshadow absolute bottom-0 left-0 h-3/4 w-full bg-gradient-to-t from-body-600 to-transparent opacity-10" />
  </TabsPrimitive.Trigger>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = forwardRef<
  ElementRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    className={cn(
      "box-btn !rounded-t-none ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2",
      className
    )}
    ref={ref}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
