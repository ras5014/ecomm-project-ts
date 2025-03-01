import React from 'react'
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack, Tabs } from 'expo-router';

export default function _layout() {
    return <GluestackUIProvider mode="light"><Tabs /></GluestackUIProvider>;
}