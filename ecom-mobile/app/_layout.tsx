import React from 'react'
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack, Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function _layout() {
    return <GluestackUIProvider mode="light">
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={'#000'} />
                    )
                }}
            />
        </Tabs>
    </GluestackUIProvider>;
}